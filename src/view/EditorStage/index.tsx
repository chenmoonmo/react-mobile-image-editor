import { Layer, Stage, Line, Image, Text, Group, Transformer } from 'react-konva';

import React, { ComponentType, useEffect, useMemo, useRef, useState } from 'react';
import Konva from 'konva';
import useEditor from 'utils/hooks/useEditor';
import useHistory from 'utils/hooks/useHistory';
import styled from '@emotion/styled';
import Toolbar from 'view/Toolbar';
import { getImageSize, rotatePoint } from 'utils/utils';
import ClipStage from 'view/ClipStage';
import Blurs from 'view/Blurs';
import WordInput from 'view/WordInput';

type EditorProps = {};

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
  const { image, texts, lines, group, clipRect, setLines, setTexts, setImage, setBlurs } =
    useHistory();

  const [currentBlurPos, setBlurPos] = useState<{ x: number; y: number }[]>([]);

  const stage = useRef<Konva.Stage>(null);
  const layer = useRef<Konva.Layer>(null);

  const scaleGroup = useRef<Konva.Group>(null);
  const currentImage = useRef<Konva.Image | null>(null);
  const currentLine = useRef<Konva.Line | null>(null);

  const trRef = useRef<Konva.Transformer>(null);

  const basicScaleRatio = useMemo(() => {
    const rotationStage = ((group.rotation / 90) % 4) + 1;
    let containerSize = [width, height * 0.8] as const;
    if (rotationStage % 2 === 0) {
      containerSize = [height * 0.8, width];
    }
    const [clipContainWidth] = getImageSize(clipRect.width, clipRect.height, ...containerSize);
    return clipContainWidth / clipRect.width;
  }, [clipRect, group.rotation]);

  const [dx, dy] = useMemo(() => {
    const centerX = width / 2;
    const centerY = (height * 0.8) / 2;

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
    if (activeTool === 'Pencil') {
      currentLine.current = new Konva.Line({
        ...pencilConfig,
        strokeWidth: pencilConfig.strokeWidth! / basicScaleRatio,
        points: pos ? [pos.x, pos.y, pos.x, pos.y] : [],
      });
      drawTarget.add(currentLine.current);
    } else if (activeTool === 'Blur') {
      setBlurPos((preBlurPos) => [...preBlurPos, pos]);
    }
  };

  const handleDraw = () => {
    const lastLine = currentLine.current;
    const pos = scaleGroup.current?.getRelativePointerPosition()!;
    if (activeTool === 'Pencil' && lastLine) {
      const newPoints = lastLine.points().concat([pos.x, pos.y]);
      lastLine.points(newPoints);
    }
    if (activeTool === 'Blur') {
      setBlurPos((preBlurPos) => [...preBlurPos, pos]);
    }
  };

  const handleDrawEnd = () => {
    const lastLine = currentLine.current;
    if (activeTool === 'Pencil' && lastLine) {
      setLines((preLines) => {
        return [
          ...preLines,
          {
            ...pencilConfig,
            strokeWidth: pencilConfig.strokeWidth! / basicScaleRatio,
            points: lastLine.points(),
          },
        ];
      });
      setTimeout(() => {
        lastLine.destroy();
        currentLine.current = null;
      }, 50);
    }

    if (activeTool === 'Blur') {
      setBlurs((preBlurs) => [...preBlurs, currentBlurPos]);
      setBlurPos([]);
    }
  };

  const handleTextAdd = (text: string) => {
    if (text) {
      const fontSize = textConfig.fontSize! / basicScaleRatio;
      const maxWidth = textConfig!.width / basicScaleRatio;
      const textWidth = text.length * fontSize > maxWidth ? maxWidth : text.length * fontSize;
      setTexts((preTexts) => [
        ...preTexts,
        {
          ...textConfig,
          fontSize,
          text,
          align: 'center',
          width: textWidth,
          x: clipRect.x + clipRect.width / 2 - textWidth / 2,
          y: clipRect.y + clipRect.height / 2,
        },
      ]);
      handleSelectTool(null);
    }
  };

  const handleTextDragMove = (e: Konva.KonvaEventObject<DragEvent>) => {
    const currentText = e.target;
    const position = currentText.position()!;
    const textHeight = currentText.height();
    if (position.y + textHeight > group.height) {
      console.log(position);
    }
  };

  const handleTextDragEnd = (e: Konva.KonvaEventObject<DragEvent>) => {
    const currentText = e.target;
    const index = currentText.attrs.id.slice(-1);
    const position = currentText.position()!;
    setTexts((preTexts) => {
      preTexts[index].x = position.x;
      preTexts[index].y = position.y;
      return preTexts;
    });
  };

  // TODO: ts
  const handleCut = (clipInfo: any, rotation: number) => {
    setImage(clipInfo, rotation);
    setTimeout(() => {
      handleSelectTool(null);
    }, 50);
  };

  const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (activeTool === 'Pencil' || activeTool === 'Blur') {
      handleDrawStart();
    }
  };

  const handleTouchStart = (e: Konva.KonvaEventObject<TouchEvent>) => {
    if (activeTool === 'Pencil' || activeTool === 'Blur') {
      handleDrawStart();
    } else if (e.target.className === 'Text') {
      e.target.moveTo(layer.current!);
      trRef.current?.nodes([e.target]);
    } else {
      trRef.current?.nodes([]);
    }
  };

  const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    e.evt.preventDefault();
    if (activeTool === 'Pencil' || activeTool === 'Blur') {
      handleDraw();
    }
  };

  const handleTouchMove = (e: Konva.KonvaEventObject<TouchEvent>) => {
    e.evt.preventDefault();
    if (activeTool === 'Pencil' || activeTool === 'Blur') {
      handleDraw();
    }
  };

  const handleMouseUp = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (activeTool === 'Pencil' || activeTool === 'Blur') {
      handleDrawEnd();
    }
  };
  const handleTouchEnd = (e: Konva.KonvaEventObject<TouchEvent>) => {
    if (activeTool === 'Pencil' || activeTool === 'Blur') {
      handleDrawEnd();
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
          {/* <Rect width={group.width} height={group.height} fill='red'></Rect> */}
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
            <Blurs currentBlur={currentBlurPos} />
            {texts.map((text, index) => (
              <Text
                key={index}
                id={`text-${index}`}
                {...text}
                x={text.x}
                y={text.y}
                draggable={true}
                onDragMove={handleTextDragMove}
                onDragEnd={handleTextDragEnd}
              />
            ))}
            {lines.map((line, index) => (
              <Line key={index} {...line} />
            ))}
          </Group>
          <Transformer
            ref={trRef}
            rotateEnabled={false}
            anchorStroke='rgba(0,0,0,0)'
            anchorFill='rgba(0,0,0,0)'
            borderStroke='#ccc'
            keepRatio={true}
          />
        </Layer>
      </Stage>
      {activeTool === 'Cut' && <ClipStage onCutDone={handleCut} />}
      {activeTool === 'Words' && (
        <WordInput onDone={handleTextAdd} onCancel={() => handleSelectTool(null)} />
      )}
      <Toolbar />
    </StageContainer>
  );
};

export default EditorStage;
