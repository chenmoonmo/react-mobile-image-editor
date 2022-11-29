import Konva from 'konva';

const ToolNames = ['Pencil', 'Words', 'Cut', 'Blur', 'Recall'] as const;

export type ToolUnion = typeof ToolNames[number];

export type PencilConfig = Pick<
  Konva.LineConfig,
  'stroke' | 'strokeWidth' | 'lineCap' | 'lineJoin'
>;
