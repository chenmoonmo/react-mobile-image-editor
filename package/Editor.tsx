import { forwardRef } from "react";
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
};
// TODO: i18n
// TODO: 配置项完善

const Editor = forwardRef<EditorRefType, EditorPropsType>(
  ({ image, width = window.innerWidth, height = window.innerHeight }, ref) => {
    return (
      <EditorProvider width={width} height={height}>
        <HistoryProvider image={image}>
          <EditorStage ref={ref} />
        </HistoryProvider>
      </EditorProvider>
    );
  }
);

export default Editor;
