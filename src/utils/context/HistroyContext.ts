import Konva from 'konva';
import React from 'react';

export type HistoryContextType = {
  image: {
    image: any;
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    scale?: number;
  };
  texts: Konva.TextConfig[];
  lines: Konva.LineConfig[];
  blurs: Konva.ImageConfig[];
  group: Konva.GroupConfig;
  setLines: (
    callback: (lines: HistoryContextType['lines']) => HistoryContextType['lines']
  ) => unknown;
  setTexts: (
    callback: (texts: HistoryContextType['texts']) => HistoryContextType['texts']
  ) => unknown;
  setImage: (
    imageConfig: Partial<HistoryContextType['image']>,
    groupConfig?: HistoryContextType['group']
  ) => unknown;
  setGroup: (groupConfig: HistoryContextType['group']) => unknown;
  redo: () => unknown;
  undo: () => unknown;
};

const EditorContext = React.createContext<HistoryContextType>({
  image: {
    image: '',
  },
  texts: [],
  lines: [],
  blurs: [],
  group: {},
  setLines: () => {},
  setTexts: () => {},
  setImage: () => {},
  setGroup: () => {},
  redo: () => {},
  undo: () => {},
});

export default EditorContext;
