import React from 'react';
import { ToolUnion, PencilConfig } from '../constants';

export type EditorContextType = {
  activeTool: null | ToolUnion;
  handleSelectTool: (tool: ToolUnion) => void;

  pencilConfig: PencilConfig;
  setPencilConfig: (config: PencilConfig) => void;

  editorColors?: string[];
}

const EditorContext = React.createContext<EditorContextType>({
  pencilConfig: {
    stroke: '#df4b26',
    strokeWidth: 5,
    lineCap: 'round',
    lineJoin: 'round',
  },
  editorColors: [
    '#FF2A1A',
    '#000000',
    '#999999',
    '#FF9416',
    '#F7673D',
    '#F9CA5A',
    '#19A049',
    '#24A8D0',
  ],
  activeTool: null,
  setPencilConfig: () => {},
  handleSelectTool: () => {},
});

export default EditorContext;
