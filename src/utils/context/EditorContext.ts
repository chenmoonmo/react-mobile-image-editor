import React from 'react';
import { ToolUnion } from '../constants';

export interface IEditorContext {
  activeTool: null | ToolUnion;
  handleSelectTool: (tool: ToolUnion) => void;
}

const EditorContext = React.createContext<IEditorContext>({
  activeTool: null,
  handleSelectTool: () => {},
});

export default EditorContext;
