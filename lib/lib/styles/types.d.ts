import Konva from 'konva';
declare const ToolNames: readonly ["Pencil", "Words", "Cut", "Blur", "Recall"];
export type ToolUnion = typeof ToolNames[number];
export type PencilConfig = Pick<Konva.LineConfig, 'strokeWidth' | 'lineCap' | 'lineJoin'> & {
    stroke: string;
};
export type TextConfig = Pick<Konva.TextConfig, 'fill' | 'fontSize'> & {
    width: number;
};
export type Point = {
    x: number;
    y: number;
};
export {};
