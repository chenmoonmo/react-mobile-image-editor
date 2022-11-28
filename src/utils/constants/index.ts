const ToolNames = ['Pencil', 'Words', 'Cut', 'Blur', 'Recall'] as const;

export type ToolUnion = typeof ToolNames[number];
