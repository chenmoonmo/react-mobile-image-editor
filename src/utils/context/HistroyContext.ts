import Konva from 'konva';
import React from 'react';

type ShapeType = {
  width: number;
  height: number;
  x: number;
  y: number;
};

export type HistoryContextType = {
  image: any;
  group: ShapeType & {
    rotation: number;
  };
  clipRect: ShapeType;

  texts: Konva.TextConfig[];
  lines: Konva.LineConfig[];
  blurs: {x:number,y:number}[][];

  setLines: (
    callback: (lines: HistoryContextType['lines']) => HistoryContextType['lines']
  ) => unknown;
  setTexts: (
    callback: (texts: HistoryContextType['texts']) => HistoryContextType['texts']
  ) => unknown;
  setBlurs:  (
    callback: (texts: HistoryContextType['blurs']) => HistoryContextType['blurs']
  ) => unknown;
  setImage: (clipRectInfo: Partial<HistoryContextType['clipRect']>, rotation: number) => unknown;
  setGroup: (groupConfig: HistoryContextType['group']) => unknown;
  redo: () => unknown;
  undo: () => unknown;
};

const EditorContext = React.createContext<HistoryContextType>({
  image: null,
  group: {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    rotation: 0,
  },
  clipRect: {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  },
  texts: [],
  lines: [],
  blurs: [],
  setLines: () => {},
  setTexts: () => {},
  setImage: () => {},
  setGroup: () => {},
  setBlurs: () => {},
  redo: () => {},
  undo: () => {},
});

export default EditorContext;
