import Konva from "konva";
import { ComponentType, ReactNode } from "react";
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
    blurs: {
        x: number;
        y: number;
    }[][];
    setLines: (callback: (lines: HistoryContextType["lines"]) => HistoryContextType["lines"]) => unknown;
    setTexts: (callback: (texts: HistoryContextType["texts"]) => HistoryContextType["texts"]) => unknown;
    setBlurs: (callback: (texts: HistoryContextType["blurs"]) => HistoryContextType["blurs"]) => unknown;
    setImage: (clipRectInfo: Partial<HistoryContextType["clipRect"]>, rotation: number) => unknown;
    setGroup: (groupConfig: HistoryContextType["group"]) => unknown;
    redo: () => unknown;
    undo: () => unknown;
};
type HistoryProviderProps = {
    children: ReactNode;
    image: string;
};
export declare const useHistory: () => HistoryContextType;
declare const HistoryProvider: ComponentType<HistoryProviderProps>;
export default HistoryProvider;
