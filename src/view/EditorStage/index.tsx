import { Layer, Stage, Line, Image, Text, Group, Shape, Rect, Transformer } from 'react-konva';

import React, { ComponentType, useRef } from 'react';
import Konva from 'konva';
import useEditor from 'utils/hooks/useEditor';
import useHistory from 'utils/hooks/useHistory';
import styled from '@emotion/styled';
import ClipRect from 'view/ClipRect';
import Toolbar from 'view/Toolbar';
import { getImageSize, getPosition } from 'utils/utils';

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
  const { width, height, activeTool, pencilConfig } = useEditor();
  const { image, texts, lines, group, setLines, setImage } = useHistory();

  const stage = useRef<Konva.Stage>(null);
  const layer = useRef<Konva.Layer>(null);

  const clipGroup = useRef<Konva.Group>(null);

  const scaleGroup = useRef<Konva.Group>(null);
  const currentImage = useRef<Konva.Image | null>(null);
  const currentLine = useRef<Konva.Line | null>(null);

  const clipRef = useRef<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  const handleDrawStart = () => {
    const pos = stage.current?.getPointerPosition()!;
    const currentBG = stage.current?.getIntersection(pos);
    if (currentBG && currentBG !== currentLine.current) {
      currentLine.current = new Konva.Line({
        ...pencilConfig,
        points: pos ? [pos.x, pos.y, pos.x, pos.y] : [],
      });
      layer.current?.add(currentLine.current);
    }
  };

  const handleDraw = () => {
    const lastLine = currentLine.current;
    if (lastLine === null) {
      return;
    }
    const pos = stage.current?.getPointerPosition()!;
    const currentBG = stage.current?.getIntersection(pos);
    if (currentBG && currentBG !== currentLine.current) {
      const newPoints = lastLine.points().concat([pos.x, pos.y]);
      lastLine.points(newPoints);
    }
  };

  const handleDrawEnd = () => {
    const lastLine = currentLine.current;
    setLines((preLines) => {
      return [
        ...preLines,
        {
          ...pencilConfig,
          points: lastLine?.points(),
        },
      ];
    });
    setTimeout(() => {
      currentLine.current?.destroy();
      currentLine.current = null;
    }, 50);
  };

  const handleCutStart = () => {
    // clipGroup.current?.scaleX(0.93);
    // clipGroup.current?.scaleY(0.93);
    // clipGroup.current?.x((width * 0.07) / 2);
    // clipGroup.current?.y((height * 0.07) / 2);
    // const scaleRatio = scaleGroup.current?.scaleX()! * 0.93;
    // scaleGroup.current?.scaleX(scaleRatio);
    // scaleGroup.current?.scaleY(scaleRatio);
    // console.log(scaleRatio, group.clip.width);
    // scaleGroup.current?.x(group.x! + (0.07 / 2) * group.clip.width);
    // scaleGroup.current?.y(group.y! + (0.07 / 2) * group.clip.height);
    // clipGroup.current?.clip({
    //   x: group.clip.x! + (group.clip.width! * 0.07) / 2,
    //   y: group.clip.y! + (group.clip.height! * 0.07) / 2,
    //   width: group.clip.width! * 0.93,
    //   height: group.clip.height! * 0.93,
    // });
  };

  const handleCut = () => {
    if (clipRef.current?.width) {
      const [imageWidth, imageHeight] = getImageSize(
        clipRef.current.width,
        clipRef.current.height,
        width,
        height
      );

      const scaleRatio =
        (imageWidth / clipRef.current.width + imageHeight / clipRef.current.height) / 2;

      const [selectionX, selectionY] = getPosition(imageWidth, imageHeight, width, height);

      setImage(
        {},
        {
          x: (group.x! - clipRef.current.x) * scaleRatio! + selectionX,
          y: (group.y! - clipRef.current.y) * scaleRatio! + selectionY,
          scaleX: (group.scaleX ?? 1) * scaleRatio,
          scaleY: (group.scaleY ?? 1) * scaleRatio,
          clip: {
            x: selectionX,
            y: selectionY,
            width: imageWidth,
            height: imageHeight,
          },
        }
      );
    } else {
      handleCutCacenl();
    }
  };

  const handleCutCacenl = () => {
    // scaleGroup.current?.scaleX(scaleGroup.current?.scaleX() / 0.93);
    // scaleGroup.current?.scaleY(scaleGroup.current?.scaleX() / 0.93);
    // scaleGroup.current?.x(group.x!);
    // scaleGroup.current?.y(group.y!);
    // clipGroup.current?.clip(group.clip);
    // clipGroup.current?.scaleX(0.93);
    // clipGroup.current?.scaleY(0.93);
    // clipGroup.current?.x((width * 0.07) / 2);
    // clipGroup.current?.y((height * 0.07) / 2);
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
          {/* clip group */}
          <Group id='clip' ref={clipGroup} clip={group.clip}>
            <Rect width={width} height={height} x={0} y={0} fill='red' />
            {/* scale group */}
            <Group
              id='scale'
              ref={scaleGroup}
              offsetX={0}
              offsetY={0}
              scaleX={group.scaleX}
              scaleY={group.scaleY}
              x={group.x}
              y={group.y}
            >
              <Rect image={image.image} width={image.width} fill='blue' />
              <Image
                ref={currentImage}
                image={image.image}
                width={image.width}
                height={image.height}
              />
              {texts.map((text, index) => (
                <Text
                  key={index}
                  draggable
                  {...text}
                  x={text.x! - group.x!}
                  y={text.y! - group.y!}
                />
              ))}
              {lines.map((line, index) => (
                <Line key={index} {...line} x={-group.x!} y={-group.y!} />
              ))}
            </Group>
          </Group>
          {activeTool === 'Cut' && <ClipRect ref={clipRef} />}
          {/* <Rect {...group.clip} stroke='blue' strokeWidth={2} /> */}
        </Layer>
      </Stage>
      <Toolbar onCutStart={handleCutStart} onCutDone={handleCut} onCutCancel={handleCutCacenl} />
    </StageContainer>
  );
};

export default EditorStage;
