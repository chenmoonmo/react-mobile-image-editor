import { Layer, Stage, Line, Image } from 'react-konva';

import EditorContext from 'utils/context/EditorContext';
import React, { ComponentType, useContext, useRef, useState } from 'react';
import Konva from 'konva';

import cloneDeep from 'lodash/cloneDeep';
import useImage from 'use-image';

type EditorProps = {
  image: string;
};

const EditorStage: ComponentType<EditorProps> = ({ image }) => {
  const { activeTool, pencilConfig } = useContext(EditorContext);
  const stage = useRef<Konva.Stage>(null);
  const [mainImage] = useImage(image);

  const [lines, setLines] = useState<Array<Konva.LineConfig & { isPaint: boolean }>>([]);

  const lineRefs = useRef<Konva.Line[]>([]);

  const handleDrawStart = () => {
    const pos = stage.current?.getPointerPosition();
    setLines((preLines) => {
      preLines = cloneDeep(preLines);
      return [
        ...preLines,
        {
          ...pencilConfig,
          globalCompositeOperation: 'source-over',
          isPaint: true,
          points: pos ? [pos.x, pos.y, pos.x, pos.y] : [],
        },
      ];
    });
  };

  const handleDraw = () => {
    if (!lines.at(-1)?.isPaint) {
      return;
    }
    const pos = stage.current?.getPointerPosition()!;
    const lastLine = lineRefs.current.at(-1)!;
    const newPoints = lastLine.points().concat([pos.x, pos.y]);
    lastLine.points(newPoints);
    setLines((preLines) => {
      preLines = cloneDeep(preLines);
      const currentLine = preLines.pop();
      if (currentLine) {
        return [
          ...preLines,
          {
            ...currentLine,
            points: newPoints,
          },
        ];
      }
      return preLines;
    });
  };

  const handleDrawEnd = () => {
    setLines((preLines) => {
      preLines = cloneDeep(preLines);
      const currentLine = preLines.pop();
      if (currentLine) {
        return [
          ...preLines,
          {
            ...currentLine,
            isPaint: false,
          },
        ];
      }
      return preLines;
    });
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
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleTouchEnd}
    >
      <Layer>
        {/* TODO: 计算图片尺寸 */}
        <Image image={mainImage} width={window.innerWidth} height={window.innerHeight} />
        {lines.map((item, index) => (
          <Line
            key={index}
            ref={(ref) => {
              lineRefs.current[index] = ref as Konva.Line;
            }}
            {...item}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default EditorStage;
