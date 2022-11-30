import React, { ComponentType, ReactNode, useState } from 'react';
import { PencilConfig, ToolUnion } from 'utils/constants';
import EditorContext from 'utils/context/EditorContext';

type EditorProviderProps = {
  children: ReactNode;
  editorColors?: string[];
  width: number;
  height: number;
};

const EditorProvider: ComponentType<EditorProviderProps> = ({
  children,
  editorColors = [
    '#FF2A1A',
    '#000000',
    '#999999',
    '#FF9416',
    '#F7673D',
    '#F9CA5A',
    '#19A049',
    '#24A8D0',
  ],
  width = 0,
  height = 0,
}) => {
  const [pencilConfig, setPencilConfig] = useState<PencilConfig>({
    stroke: editorColors[0],
    strokeWidth: 5,
    lineCap: 'round',
    lineJoin: 'round',
  });

  const [textConfig, setTextConfig] = useState({
    fontSize: 30,
    fill: editorColors[0],
    wrap: 'word',
    width: width * 0.9
  });

  const [activeTool, setActiveTool] = useState<null | ToolUnion>(null);

  const handleSelectTool = (currentTool: ToolUnion | null) => {
    setActiveTool((preTool) => {
      return preTool === currentTool ? null : currentTool;
    });
  };

  const handleColorChanged = (color: string) => {
    setPencilConfig((preConfig) => ({
      ...Object.assign(preConfig, {
        stroke: color,
      }),
    }));
    setTextConfig((preConfig) => ({
      ...Object.assign(preConfig, {
        fill: color,
      }),
    }));
  };

  return (
    <EditorContext.Provider
      value={{
        width,
        height,
        pencilConfig,
        textConfig,
        editorColors,
        activeTool,
        changeColor: handleColorChanged,
        handleSelectTool,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
