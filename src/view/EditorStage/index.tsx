import { Layer, Stage, Line, Image, Text } from 'react-konva';

import React, { ComponentType, useRef } from 'react';
import Konva from 'konva';
import useEditor from 'utils/hooks/useEditor';
import useHistory from 'utils/hooks/useHistory';

type EditorProps = {
  image: string;
};

const EditorStage: ComponentType<EditorProps> = () => {
  const { width, height, activeTool, pencilConfig } = useEditor();
  const { image, texts, lines, setLines, setImage } = useHistory();

  const stage = useRef<Konva.Stage>(null);
  const layer = useRef<Konva.Layer>(null);
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

  return (
    <Stage
      ref={stage}
      width={width}
      height={height}
      style={{
        width: '100%',
        height: '100%',
        background: '#000',
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
        <Image ref={currentImage} {...image} />
        {texts.map((text, index) => (
          <Text key={index} draggable {...text} />
        ))}
        {lines.map((line, index) => (
          <Line key={index} {...line} />
        ))}
      </Layer>
    </Stage>
  );
};

export default EditorStage;
