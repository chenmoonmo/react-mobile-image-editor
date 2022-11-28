// 配置文件

import Toolbar from '../../components/Toolbar';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Layer, Stage } from 'react-konva';

import EditorContext from '../../utils/context/EditorContext';
import { ToolUnio } from '../../utils/constants';
import { useState } from 'react';
import Konva from 'konva';

const EditorStage = () => {
  const [activeTool, setActiveTool] = useState<null | ToolUnio>(null);

  const EditorContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: #e8e8e8;
  `;

  const handleSelectTool = (currentTool: ToolUnio) => {
    setActiveTool((preTool) => {
      return preTool === currentTool ? null : currentTool;
    });
  };

  const handleDraw = () => {};

  const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {};

  const handleTouchStart = (e: Konva.KonvaEventObject<TouchEvent>) => {
    console.log(e);
  };

  return (
    <EditorContext.Provider
      value={{
        activeTool,
        handleSelectTool,
      }}
    >
      <EditorContainer>
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <Layer></Layer>
        </Stage>
        <Toolbar />
      </EditorContainer>
    </EditorContext.Provider>
  );
};

export default EditorStage;
