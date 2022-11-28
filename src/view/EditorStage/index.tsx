// 配置文件

import Toolbar from '../../components/Toolbar';
import { Layer, Stage, Line } from 'react-konva';

import EditorContext from '../../utils/context/EditorContext';
import { ToolUnion } from '../../utils/constants';
import React, { useLayoutEffect, useRef, useState } from 'react';
import Konva from 'konva';

import cloneDeep from 'lodash/cloneDeep';
import uniqueId from 'lodash/uniqueId';
import { css } from '@emotion/react';

const LineConfig: Konva.LineConfig = {
  stroke: '#df4b26',
  strokeWidth: 5,
  globalCompositeOperation: 'source-over',
  // round cap for smoother lines
  lineCap: 'round',
  lineJoin: 'round',
};

const EditorStage = () => {
  const [activeTool, setActiveTool] = useState<null | ToolUnion>(null);
  const stage = useRef<Konva.Stage>(null);

  const [lines, setLines] = useState<
    Array<Pick<Konva.LineConfig, 'points'> & { isPaint: boolean; id: string }>
  >([]);

  const lineRefs = useRef<Konva.Line[]>([]);

  const handleSelectTool = (currentTool: ToolUnion) => {
    setActiveTool((preTool) => {
      return preTool === currentTool ? null : currentTool;
    });
  };

  const handleDrawStart = () => {
    const pos = stage.current?.getPointerPosition();
    setLines((preLines) => {
      preLines = cloneDeep(preLines);

      return [
        ...preLines,
        {
          id: uniqueId(),
          isPaint: true,
          points: pos ? [pos.x, pos.y, pos.x, pos.y] : [],
        },
      ];
    });
  };

  const handleDraw = () => {
    const pos = stage.current?.getPointerPosition()!;
    // console.log(pos);
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
    handleDrawStart();
  };

  const handleTouchStart = (e: Konva.KonvaEventObject<TouchEvent>) => {
    handleDrawStart();
  };

  const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    e.evt.preventDefault();
    if (!lines.at(-1)?.isPaint) {
      return;
    }
    handleDraw();
  };
  const handleTouchMove = (e: Konva.KonvaEventObject<TouchEvent>) => {
    console.log(e);
    e.evt.preventDefault();
    if (!lines.at(-1)?.isPaint) {
      return;
    }
    handleDraw();
  };

  const handleMouseUp = (e: Konva.KonvaEventObject<MouseEvent>) => {
    handleDrawEnd();
  };
  const handleTouchEnd = (e: Konva.KonvaEventObject<TouchEvent>) => {
    handleDrawEnd();
  };

  return (
    <EditorContext.Provider
      value={{
        activeTool,
        handleSelectTool,
      }}
    >
      {/* <EditorContainer> */}
      <Stage
        className={
          css`
            position: relative;
            width: 100%;
            height: 100%;
            background: #e8e8e8;
          ` as unknown as string
        }
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
          {lines.map((item, index) => (
            <Line
              key={index}
              ref={(ref) => {
                lineRefs.current[index] = ref as Konva.Line;
              }}
              {...LineConfig}
              points={item.points}
            />
          ))}
        </Layer>
      </Stage>
      <Toolbar />
      {/* </EditorContainer> */}
    </EditorContext.Provider>
  );
};

export default EditorStage;
