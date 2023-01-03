import { PencilConfig, TextConfig, ToolUnion } from "@/styles/types";
import { ComponentType, ReactNode } from "react";
type EditorProviderProps = {
    children: ReactNode;
    editorColors?: string[];
    blurConfig?: PencilConfig;
    width: number;
    height: number;
};
export type EditorContextType = {
    width: number;
    height: number;
    activeTool: null | ToolUnion;
    editorColors?: string[];
    pencilConfig: PencilConfig;
    blurConfig: PencilConfig;
    textConfig: TextConfig;
    handleSelectTool: (tool: ToolUnion | null) => void;
    changeColor: (color: string) => void;
};
export declare const useEditor: () => EditorContextType;
declare const EditorProvider: ComponentType<EditorProviderProps>;
export default EditorProvider;
