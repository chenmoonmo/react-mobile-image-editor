import { Layer, Stage, Line, Image, Text } from 'react-konva';

import React, { ComponentType, useEffect, useMemo, useRef } from 'react';
import Konva from 'konva';

import useImage from 'use-image';
import useEditor from 'utils/hooks/useEditor';
import useHistory from 'utils/hooks/useHistory';

type EditorProps = {
  image: string;
};

const getImageSize = (imageWidth: number, imageHeight: number, width: number, height: number) => {
  if (imageWidth < imageHeight && width < height) {
    return [width, (imageWidth / imageHeight) * height];
  }

  if (imageWidth < imageHeight && width > height) {
    return [(height / width) * imageWidth, height];
  }

  if (imageWidth > imageHeight && width > height) {
    return [(imageWidth / imageHeight) * height, height];
  }

  if (imageWidth > imageHeight && width < height) {
    return [width, (imageHeight / imageWidth) * width];
  }

  return [0, 0];
};

const EditorStage: ComponentType<EditorProps> = ({ image: imageUrl }) => {
  const { width, height, activeTool, pencilConfig } = useEditor();
  const { image, texts, lines, setLines, setImage } = useHistory();

  const stage = useRef<Konva.Stage>(null);
  const layer = useRef<Konva.Layer>(null);

  const currentLine = useRef<Konva.Line | null>(null);
  const lineRefs = useRef<Konva.Line[]>([]);

  const [mainImage] = useImage(imageUrl);

  const handleDrawStart = () => {
    const pos = stage.current?.getPointerPosition();
    currentLine.current = new Konva.Line({
      ...pencilConfig,
      points: pos ? [pos.x, pos.y, pos.x, pos.y] : [],
    });
    layer.current?.add(currentLine.current);
  };

  const handleDraw = () => {
    const lastLine = currentLine.current;
    if (lastLine === null) {
      return;
    }
    const pos = stage.current?.getPointerPosition()!;
    const newPoints = lastLine.points().concat([pos.x, pos.y]);
    lastLine.points(newPoints);
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
    }
  };

  useEffect(() => {
    if (mainImage) {
      const [imageWidth, imageHeight] = getImageSize(
        mainImage.width,
        mainImage.height,
        width,
        height
      );
      const x = (width - imageWidth) / 2;
      const y = (height - imageHeight) / 2;
      setImage(() => {
        return {
          image: mainImage,
          width: imageWidth,
          height: imageHeight,
          x,
          y,
        };
      });
    }
  }, [mainImage]);

  return (
    <Stage
      ref={stage}
      width={width}
      height={height}
      style={{
        width: '100%',
        height: '100%',
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleTouchEnd}
    >
      <Layer ref={layer}>
        {/* TODO: 计算图片尺寸 */}
        {image.image && <Image draggable={activeTool === null} {...image} />}

        {texts.map((text, index) => (
          <Text key={index} draggable {...text} />
        ))}
        {lines.map((line, index) => (
          <Line
            key={index}
            ref={(ref) => {
              lineRefs.current[index] = ref as Konva.Line;
            }}
            {...line}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default EditorStage;
