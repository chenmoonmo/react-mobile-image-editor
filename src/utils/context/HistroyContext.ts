import Konva from 'konva';
import React from 'react';

export type HistoryContextType = {
  image: {
    width?: number;
    height?: number;
    position?: number;
  };
  texts: Konva.TextConfig[];
  lines: Konva.LineConfig[];
  blurs: Konva.ImageConfig[];
  setLines: (
    callback: (lines: HistoryContextType['lines']) => HistoryContextType['lines']
  ) => unknown;
  setTexts:  (
    callback: (texts: HistoryContextType['texts']) => HistoryContextType['texts']
  ) => unknown;
  redo: () => unknown;
  undo: () => unknown;
};

const EditorContext = React.createContext<HistoryContextType>({
  image: {},
  texts: [],
  lines: [],
  blurs: [],
  setLines: () => {},
  setTexts: () => {},
  redo: () => {},
  undo: () => {},
});

export default EditorContext;
