type EditorPropsType = {
  image: string;
  width?: number;
  height?: number;
};

declare function Editor(props: EditorPropsType): JSX.Element | null;

export { Editor as default };
