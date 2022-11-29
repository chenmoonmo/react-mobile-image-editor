import Konva from 'konva';

const ToolNames = ['Pencil', 'Words', 'Cut', 'Blur', 'Recall'] as const;

export type ToolUnion = typeof ToolNames[number];

export type PencilConfig = Pick<Konva.LineConfig, 'strokeWidth' | 'lineCap' | 'lineJoin'> & {
  stroke: string;
};

export type TextConfig = Pick<Konva.TextConfig, 'fill' | 'fontSize'>;
