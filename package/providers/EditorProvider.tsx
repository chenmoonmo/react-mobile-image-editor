import { PencilConfig, TextConfig, ToolUnion } from "@/styles/types";
import React, { ComponentType, ReactNode, useContext, useState } from "react";

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

const EditorContext = React.createContext<EditorContextType>({
  width: 0,
  height: 0,
  pencilConfig: {
    stroke: "#df4b26",
    strokeWidth: 5,
    lineCap: "round",
    lineJoin: "round",
  },
  blurConfig: {
    stroke: "#fff",
    strokeWidth: 40,
    lineCap: "round",
    lineJoin: "round",
  },
  textConfig: {
    fill: "#df4b26",
    fontSize: 30,
    width: 300,
  },
  editorColors: [
    "#FF2A1A",
    "#000000",
    "#999999",
    "#FF9416",
    "#F7673D",
    "#F9CA5A",
    "#19A049",
    "#24A8D0",
  ],
  activeTool: null,
  changeColor: () => {},
  handleSelectTool: () => {},
});

export const useEditor = () => {
  const context = useContext<EditorContextType>(EditorContext);

  return context;
};

const EditorProvider: ComponentType<EditorProviderProps> = ({
  width = 0,
  height = 0,
  editorColors = [
    "#FF2A1A",
    "#000000",
    "#999999",
    "#FF9416",
    "#F7673D",
    "#F9CA5A",
    "#19A049",
    "#24A8D0",
  ],
  blurConfig = {
    stroke: "#eaeaeaeb",
    strokeWidth: 30,
    lineCap: "round",
    lineJoin: "round",
  },
  children,
}) => {
  const [pencilConfig, setPencilConfig] = useState<PencilConfig>({
    stroke: editorColors[0],
    strokeWidth: 5,
    lineCap: "round",
    lineJoin: "round",
  });

  const [textConfig, setTextConfig] = useState({
    fontSize: 30,
    fill: editorColors[0],
    wrap: "word",
    width: width * 0.9,
  });

  const [activeTool, setActiveTool] = useState<null | ToolUnion>(null);

  const handleSelectTool = (currentTool: ToolUnion | null) => {
    setActiveTool((preTool) => {
      return preTool === currentTool ? null : currentTool;
    });
  };

  const handleColorChanged = (color: string) => {
    setPencilConfig((preConfig) => ({
      ...Object.assign(preConfig, {
        stroke: color,
      }),
    }));
    setTextConfig((preConfig) => ({
      ...Object.assign(preConfig, {
        fill: color,
      }),
    }));
  };

  return (
    <EditorContext.Provider
      value={{
        width,
        height,
        pencilConfig,
        blurConfig,
        textConfig,
        editorColors,
        activeTool,
        changeColor: handleColorChanged,
        handleSelectTool,
      }}>
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
