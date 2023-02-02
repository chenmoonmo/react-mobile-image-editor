import { ComponentType, forwardRef, ReactNode } from "react";
import EditorProvider from "@/providers/EditorProvider";
import HistoryProvider from "@/providers/HistoryProvider";
import EditorStage from "@/components/EditorStage";

export type EditorPropsType = {
  image: string;
  width?: number;
  height?: number;
  toolbarBottom?: ReactNode;
  // onDone?: () =>
};

// TODO: i18n
// TODO: 配置项完善

const Editor: ComponentType<EditorPropsType> = ({
  image,
  width = window.innerWidth,
  height = window.innerHeight,
}) => {
  return (
    <EditorProvider width={width} height={height}>
      <HistoryProvider image={image}>
        <EditorStage />
      </HistoryProvider>
    </EditorProvider>
  );
};

export default Editor;
