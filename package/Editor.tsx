import { forwardRef, ReactNode, useRef } from "react";
import EditorProvider from "@/providers/EditorProvider";
import HistoryProvider from "@/providers/HistoryProvider";
import EditorStage from "@/components/EditorStage";

export type EditorRefType = {
  exportImage: () => string;
};

export type EditorPropsType = {
  image: string;
  width?: number;
  height?: number;
  toolbarBottom?: ReactNode;
};

// TODO: i18n
// TODO: 配置项完善

export const useExport = () => {
  const exoortRef = useRef<EditorRefType>({
    exportImage: () => "",
  });
  return exoortRef;
};

const Editor = forwardRef<EditorRefType, EditorPropsType>(
  (
    {
      image,
      width = window.innerWidth,
      height = window.innerHeight,
      toolbarBottom,
    },
    ref
  ) => {
    return (
      <EditorProvider width={width} height={height}>
        <HistoryProvider image={image}>
          <EditorStage ref={ref} toolbarBottom={toolbarBottom} />
        </HistoryProvider>
      </EditorProvider>
    );
  }
);

export default Editor;
