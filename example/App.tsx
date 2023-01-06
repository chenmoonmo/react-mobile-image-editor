/// <reference types="vite/client" />
import Editor, { useExport } from "@/Editor";

import image from "./assets/chibubao.png";
import "./index.css";

const App = () => {
  const editorRef = useExport();

  const handleDownload = () => {
    console.log(editorRef.current.exportImage());
  };

  return (
    <Editor
      ref={editorRef}
      image={image}
      toolbarBottom={<button onClick={handleDownload}>Download</button>}
    />
  );
};

export default App;
