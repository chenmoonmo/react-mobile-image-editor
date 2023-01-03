import React, { useRef } from "react";
import Editor from "@/Editor";

import image from "./assets/chibubao.png";

const App = () => {
  const editorRef = useRef(null as any);

  const handleDownload = () => {
    console.log(editorRef.current.exportImage());
  };

  return (
    <div>
      <Editor ref={editorRef} image={image} width={400} height={600} />
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default App;
