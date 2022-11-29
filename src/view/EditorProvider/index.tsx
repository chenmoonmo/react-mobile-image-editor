import React, { ComponentType, ReactNode, useState } from 'react';
import { PencilConfig, ToolUnion } from 'utils/constants';
import EditorContext from 'utils/context/EditorContext';

type EditorProviderProps = {
  children: ReactNode;
  editorColors?: string[];
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
}) => {
  const [pencilConfig, setPencilConfig] = useState<PencilConfig>({
    stroke: editorColors[0],
    strokeWidth: 5,
    lineCap: 'round',
    lineJoin: 'round',
  });

  const [activeTool, setActiveTool] = useState<null | ToolUnion>(null);

  const handleSelectTool = (currentTool: ToolUnion) => {
    setActiveTool((preTool) => {
      return preTool === currentTool ? null : currentTool;
    });
  };

  const handleSetPencilConfig = (config: PencilConfig) => {
    setPencilConfig((preConfig) => ({ ...Object.assign(preConfig, config) }));
  };

  return (
    <EditorContext.Provider
      value={{
        pencilConfig,
        editorColors,
        activeTool,
        setPencilConfig: handleSetPencilConfig,
        handleSelectTool,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
