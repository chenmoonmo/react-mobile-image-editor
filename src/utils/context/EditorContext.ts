import React from 'react';
import { ToolUnion, PencilConfig, TextConfig } from '../constants';

export type EditorContextType = {
  width: number;
  height: number;

  activeTool: null | ToolUnion;

  editorColors?: string[];
  pencilConfig: PencilConfig;
  blurConfig: PencilConfig;
  textConfig: TextConfig;

  handleSelectTool: (tool: ToolUnion | null) => void;
  changeColor: (color: string) => void;
};

const EditorContext = React.createContext<EditorContextType>({
  width: 0,
  height: 0,
  pencilConfig: {
    stroke: '#df4b26',
    strokeWidth: 5,
    lineCap: 'round',
    lineJoin: 'round',
  },
  blurConfig: {
    stroke: '#fff',
    strokeWidth: 40,
    lineCap: 'round',
    lineJoin: 'round',
  },
  textConfig: {
    fill: '#df4b26',
    fontSize: 30,
    width: 300,
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
  changeColor: () => {},
  handleSelectTool: () => {},
});

export default EditorContext;
