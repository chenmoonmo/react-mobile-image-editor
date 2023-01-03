/// <reference types="react" />
export type EditorRefType = {
    exportImage: () => string;
};
export type EditorPropsType = {
    image: string;
    width?: number;
    height?: number;
};
declare const Editor: import("react").ForwardRefExoticComponent<EditorPropsType & import("react").RefAttributes<EditorRefType>>;
export default Editor;
