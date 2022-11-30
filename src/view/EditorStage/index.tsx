import { Layer, Stage, Line, Image, Text, Group, Shape, Rect, Transformer } from 'react-konva';

import React, { ComponentType, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Konva from 'konva';
import useEditor from 'utils/hooks/useEditor';
import useHistory from 'utils/hooks/useHistory';
import styled from '@emotion/styled';
import ClipRect from 'view/ClipRect';
import Toolbar from 'view/Toolbar';
import { flushSync } from 'react-dom';

type EditorProps = {
  image: string;
};

type Point = {
  x: number;
  y: number;
};

const StageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
  }
  &::after {
    top: unset;
    bottom: 0;
    height: 180px;
    background: linear-gradient(180deg, rgba(71, 71, 71, 0) 0%, #222222 100%);
  }
`;

const getImageSize = (imageWidth: number, imageHeight: number, width: number, height: number) => {
  console.log(imageWidth, imageHeight, width, height);
  height = height - 80;
  if (imageWidth < imageHeight && width <= height) {
    console.log(1);
    if (imageWidth / imageHeight < 1) {
      return [(imageWidth / imageHeight) * height, height];
    }
    return [width, (imageWidth / imageHeight) * height];
  }

  if (imageWidth < imageHeight && width > height) {
    console.log(2);
    if (imageWidth / imageHeight < 1) {
      return [width, (imageWidth / imageHeight) * height];
    }

    return [(imageWidth / imageHeight) * height, height];
  }

  if (imageWidth > imageHeight && width > height) {
    console.log(3);

    return [(imageWidth / imageHeight) * height, height];
  }

  if (imageWidth > imageHeight && width <= height) {
    console.log(4);

    return [width, (imageHeight / imageWidth) * width];
  }

  return [0, 0];
};

const EditorStage: ComponentType<EditorProps> = () => {
  const { width, height, activeTool, pencilConfig } = useEditor();
  const { image, texts, lines, group, setLines, setImage, setGroup } = useHistory();

  const stage = useRef<Konva.Stage>(null);
  const layer = useRef<Konva.Layer>(null);
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
    const imgWidht = scaleGroup.current?.width()! * 0.93;
    const imgHeight = scaleGroup.current?.height()! * 0.93;
    const imgX = (width - imgWidht) / 2;
    const imgY = (height - 80 - imgHeight) / 2;
    currentImage.current?.width(imgWidht);
    currentImage.current?.height(imgHeight);
    scaleGroup.current?.width(imgWidht);
    scaleGroup.current?.height(imgHeight);
    scaleGroup.current?.x(imgX);
    scaleGroup.current?.y(imgY);
  };

  const handleCut = () => {
    if (clipRef.current?.width) {
      const [imageWidth, imageHeight] = getImageSize(
        clipRef.current.width,
        clipRef.current.height,
        width,
        height
      );

      console.log(imageWidth, imageHeight);

      const clipInfo = {
        x: clipRef.current.x,
        y: clipRef.current.y,
        width: clipRef.current.width,
        height: clipRef.current.height,
      };

      setTimeout(() => {
        scaleGroup.current?.toImage({
          ...clipInfo,
          callback: (image) => {
            setImage(
              {
                image,
                width: imageWidth,
                height: imageHeight,
              },
              {
                width: imageWidth,
                height: imageHeight,
                x: (width - imageWidth) / 2,
                y: (height - imageHeight) / 2,
              }
            );
            handleCutCacenl();
          },
        });
      });
    } else {
      handleCutCacenl();
    }
  };

  const handleCutCacenl = () => {
    const imgX = (width - image.width!) / 2;
    const imgY = (height - 80 - image.height!) / 2;
    currentImage.current?.width(image.width!);
    currentImage.current?.height(image.height!);
    scaleGroup.current?.width(image.width!);
    scaleGroup.current?.height(image.height!);
    scaleGroup.current?.x(imgX);
    scaleGroup.current?.y(imgY);
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
        // if (lastScale.current.lastCenter) {
        //   setGroup({
        //     x: scaleGroup.current?.x(),
        //     y: scaleGroup.current?.y(),
        //     scaleX: scaleGroup.current?.scaleX(),
        //     scaleY: scaleGroup.current?.scaleY(),
        //   });
        //   console.log({
        //     x: scaleGroup.current?.x(),
        //     y: scaleGroup.current?.y(),
        //     scaleX: scaleGroup.current?.scaleX(),
        //     scaleY: scaleGroup.current?.scaleY(),
        //   });
        // }
        // lastScale.current = {
        //   lastCenter: null,
        //   lastDist: 0,
        // };
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
          <Group>
            {/* scale group */}
            <Group
              ref={scaleGroup}
              width={group.width}
              height={group.height}
              x={group.x}
              y={group.y}
            >
              <Image
                ref={currentImage}
                image={image.image}
                width={image.width}
                height={image.height}
              />
              {activeTool === 'Cut' && <ClipRect ref={clipRef} />}
            </Group>
            {texts.map((text, index) => (
              <Text key={index} draggable {...text} />
            ))}
            {lines.map((line, index) => (
              <Line key={index} {...line} />
            ))}
          </Group>
        </Layer>
      </Stage>
      <Toolbar onCutStart={handleCutStart} onCutDone={handleCut} onCutCancel={handleCutCacenl} />
    </StageContainer>
  );
};

export default EditorStage;
