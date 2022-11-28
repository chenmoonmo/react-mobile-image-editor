import React from 'react';
import { ToolUnio } from '../constants';

export interface IEditorContext {
  activeTool: null | ToolUnio;
  handleSelectTool: (tool: ToolUnio) => void;
}

const EditorContext = React.createContext<IEditorContext>({
  activeTool: null,
  handleSelectTool: () => {},
});

export default EditorContext;
