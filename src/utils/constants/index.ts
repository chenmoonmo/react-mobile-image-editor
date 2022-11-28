const ToolNames = ['Pencil', 'Words', 'Cut', 'Blur', 'Recall'] as const;

export type ToolUnio = typeof ToolNames[number];
