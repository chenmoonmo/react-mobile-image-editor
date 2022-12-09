import { Layer, Stage, Line, Image, Text, Group, Rect } from 'react-konva';

import React, { ComponentType, useEffect, useRef } from 'react';
import Konva from 'konva';
import useEditor from 'utils/hooks/useEditor';
import useHistory from 'utils/hooks/useHistory';
import styled from '@emotion/styled';
import Toolbar from 'view/Toolbar';
import { getImageSize, getPosition,getCenterOfPoint } from 'utils/utils';
import ClipStage from 'view/ClipStage';
import { Box } from 'konva/lib/shapes/Transformer';

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
  const { width, height, activeTool, pencilConfig, handleSelectTool } = useEditor();
  const { image, texts, lines, group, setLines, setImage } = useHistory();

  const stage = useRef<Konva.Stage>(null);
  const layer = useRef<Konva.Layer>(null);

  const clipGroup = useRef<Konva.Group>(null);

  const scaleGroup = useRef<Konva.Group>(null);
  const currentImage = useRef<Konva.Image | null>(null);
  const currentLine = useRef<Konva.Line | null>(null);

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
    console.log(lastLine?.getRelativePointerPosition());

    setLines((preLines) => {
      return [
        ...preLines,
        {
          ...pencilConfig,
          scaleX: 1 / group.scaleX!,
          scaleY: 1 / group.scaleY!,
          x: -group.x! / group.scaleX!,
          y: -group.y! / group.scaleY!,
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

  const handleCut = (clipSize: Box) => {
    console.log(clipSize);
    handleSelectTool(null);
    const [imageWidth, imageHeight] = getImageSize(clipSize.width, clipSize.height, width, height);
    const scaleRatio = (imageWidth / clipSize.width + imageHeight / clipSize.height) / 2;
    const [selectionX, selectionY] = getPosition(imageWidth, imageHeight, width, height);
    console.log(scaleGroup.current)
    setImage(
      {},
      {
        x: -clipSize.x * scaleRatio! + selectionX,
        y: -clipSize.y * scaleRatio! + selectionY,
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

  const handleRota = () => {
    // const attrs = {
    //   x: currentImage.current?.x(),
    //   y: currentImage.current?.y(),
    //   width: currentImage.current?.width(),
    //   height: currentImage.current?.height(),
    //   rotation: currentImage.current?.rotation(),
    // };
    // const rotatedAttrs = rotateAroundCenter(attrs, 90);
    // currentImage.current?.setAttrs(rotatedAttrs);

    // console.log(scaleGroup.current?.width());
    // console.log(scaleGroup.current?.height());
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
              <Image
                ref={currentImage}
                image={image.image}
                width={image.width}
                height={image.height}
              />
              {texts.map((text, index) => (
                <Text key={index} draggable {...text} />
              ))}
              {lines.map((line, index) => (
                <Line key={index} {...line} />
              ))}
            </Group>
          </Group>
          {/* {activeTool === 'Cut' && <ClipRect ref={clipRef} />} */}
        </Layer>
      </Stage>
      {activeTool === 'Cut' && <ClipStage onCutDone={handleCut} />}
      <Toolbar />
    </StageContainer>
  );
};

export default EditorStage;
