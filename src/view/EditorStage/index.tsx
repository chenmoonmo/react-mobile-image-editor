import { Layer, Stage, Line, Image, Text, Group, Rect } from 'react-konva';

import React, { ComponentType, useMemo, useRef } from 'react';
import Konva from 'konva';
import useEditor from 'utils/hooks/useEditor';
import useHistory from 'utils/hooks/useHistory';
import styled from '@emotion/styled';
import Toolbar from 'view/Toolbar';
import { getImageSize, getPosition, rotatePoint } from 'utils/utils';
import ClipStage from 'view/ClipStage';
import { Box } from 'konva/lib/shapes/Transformer';
import { flushSync } from 'react-dom';

type EditorProps = {
  image: string;
};

const StageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 180px;
    content: '';
    background: linear-gradient(180deg, rgba(34, 34, 34, 0.94) 0%, rgba(71, 71, 71, 0) 100%);
    z-index: -1;
    mix-blend-mode: darken;
  }
  &::after {
    top: unset;
    bottom: 0;
    height: 180px;
    background: linear-gradient(180deg, rgba(71, 71, 71, 0) 0%, #222222 100%);
  }
`;

const EditorStage: ComponentType<EditorProps> = () => {
  const { width, height, activeTool, pencilConfig, textConfig, handleSelectTool } = useEditor();
  const { image, texts, lines, group, clipRect, setLines, setTexts, setImage } = useHistory();

  const stage = useRef<Konva.Stage>(null);
  const layer = useRef<Konva.Layer>(null);

  const scaleGroup = useRef<Konva.Group>(null);
  const currentImage = useRef<Konva.Image | null>(null);
  const currentLine = useRef<Konva.Line | null>(null);

  const basicScaleRatio = useMemo(() => {
    const rotationStage = ((group.rotation / 90) % 4) + 1;
    let containerSize = [width, height] as const;
    if (rotationStage % 2 === 0) {
      containerSize = [height, width];
    }
    const [clipContainWidth] = getImageSize(clipRect.width, clipRect.height, ...containerSize);
    return clipContainWidth / clipRect.width;
  }, [clipRect, group.rotation]);

  const [dx, dy] = useMemo(() => {
    const centerX = width / 2;
    const centerY = height / 2;

    const clipCenterX = group.x + (clipRect.x + clipRect.width / 2) * basicScaleRatio;

    const clipCenterY = group.y + (clipRect.y + clipRect.height / 2) * basicScaleRatio;

    const [rdx, rdy] = rotatePoint(clipCenterX, clipCenterY, group.rotation);

    const dx = isNaN(clipCenterX - centerX) ? 0 : rdx - centerX;
    const dy = isNaN(clipCenterY - centerY) ? 0 : rdy - centerY;

    return [dx, dy];
  }, [group, clipRect, group.rotation, basicScaleRatio]);

  const groupX = group.x - dx;
  const groupY = group.y - dy;

  const handleDrawStart = () => {
    const drawTarget = scaleGroup.current!;
    const pos = drawTarget.getRelativePointerPosition()!;
    currentLine.current = new Konva.Line({
      ...pencilConfig,
      points: pos ? [pos.x, pos.y, pos.x, pos.y] : [],
    });
    drawTarget.add(currentLine.current);
  };

  const handleDraw = () => {
    const lastLine = currentLine.current;
    if (lastLine === null) {
      return;
    }
    const pos = scaleGroup.current?.getRelativePointerPosition()!;
    const newPoints = lastLine.points().concat([pos.x, pos.y]);
    lastLine.points(newPoints);
  };

  const handleDrawEnd = () => {
    setLines((preLines) => {
      return [
        ...preLines,
        {
          ...pencilConfig,
          points: currentLine.current?.points(),
        },
      ];
    });
    setTimeout(() => {
      currentLine.current?.destroy();
      currentLine.current = null;
    }, 50);
  };

  const handleTextAdd = (words: string) => {
    const textWidth = words.length * 15 > textConfig!.width ? textConfig.width : words.length * 15;
    setTexts((preTexts) => [
      ...preTexts,
      {
        ...textConfig,
        text: words,
        scaleX: 1 / basicScaleRatio,
        scaleY: 1 / basicScaleRatio,
        x: (clipRect.width - textWidth) / 2 / basicScaleRatio,
        y: clipRect.height / basicScaleRatio / 2,
      },
    ]);
  };
  // TODO: ts
  const handleCut = (clipInfo: any, rotation: number) => {
    setImage(clipInfo, rotation);
    setTimeout(() => {
      handleSelectTool(null);
    }, 50);
  };

  const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    switch (activeTool) {
      case 'Pencil':
        handleDrawStart();
        break;
    }
  };

  const handleTouchStart = (e: Konva.KonvaEventObject<TouchEvent>) => {
    switch (activeTool) {
      case 'Pencil':
        handleDrawStart();
        break;
    }
  };

  const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    e.evt.preventDefault();
    switch (activeTool) {
      case 'Pencil':
        handleDraw();
        break;
    }
  };

  const handleTouchMove = (e: Konva.KonvaEventObject<TouchEvent>) => {
    e.evt.preventDefault();
    switch (activeTool) {
      case 'Pencil':
        handleDraw();
        break;
      case 'Cut':
        // handleScale(e);
        break;
    }
  };

  const handleMouseUp = (e: Konva.KonvaEventObject<MouseEvent>) => {
    switch (activeTool) {
      case 'Pencil':
        handleDrawEnd();
        break;
    }
  };
  const handleTouchEnd = (e: Konva.KonvaEventObject<TouchEvent>) => {
    switch (activeTool) {
      case 'Pencil':
        handleDrawEnd();
        break;
      case 'Cut':
        break;
    }
  };

  return (
    <StageContainer>
      <Stage
        ref={stage}
        width={width}
        height={height}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleTouchEnd}
      >
        <Layer ref={layer}>
          {/* <Rect width={width} height={height} x={0} y={0} fill='red' /> */}
          {/* scale group */}
          <Group
            id='scale'
            ref={scaleGroup}
            x={groupX}
            y={groupY}
            width={group.width}
            height={group.height}
            scale={{
              x: basicScaleRatio,
              y: basicScaleRatio,
            }}
            rotation={group.rotation}
            clipX={clipRect.x}
            clipY={clipRect.y}
            clipHeight={clipRect.height}
            clipWidth={clipRect.width}
          >
            <Image ref={currentImage} image={image} width={group.width} height={group.height} />
            {texts.map((text, index) => (
              <Text key={index} draggable {...text} />
            ))}
            {lines.map((line, index) => (
              <Line key={index} {...line} />
            ))}
          </Group>
        </Layer>
      </Stage>
      {activeTool === 'Cut' && <ClipStage onCutDone={handleCut} />}
      <Toolbar onAddText={handleTextAdd} />
    </StageContainer>
  );
};

export default EditorStage;
