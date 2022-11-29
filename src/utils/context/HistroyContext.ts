import Konva from 'konva';
import React from 'react';

export type HistoryContextType = {
  image: {
    image: any;
    width?: number;
    height?: number;
    x?: number;
    y?:number;
  };
  texts: Konva.TextConfig[];
  lines: Konva.LineConfig[];
  blurs: Konva.ImageConfig[];
  setLines: (
    callback: (lines: HistoryContextType['lines']) => HistoryContextType['lines']
  ) => unknown;
  setTexts: (
    callback: (texts: HistoryContextType['texts']) => HistoryContextType['texts']
  ) => unknown;
  setImage: (
    callback: (texts: HistoryContextType['image']) => HistoryContextType['image']
  ) => unknown;
  redo: () => unknown;
  undo: () => unknown;
};

const EditorContext = React.createContext<HistoryContextType>({
  image: {
    image: ''
  },
  texts: [],
  lines: [],
  blurs: [],
  setLines: () => {},
  setTexts: () => {},
  setImage: () => {},
  redo: () => {},
  undo: () => {},
});

export default EditorContext;
