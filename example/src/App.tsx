import React, { useRef } from 'react';
import Editor from '../../src';

const App = () => {
  const editorRef = useRef(null as any);
  return <Editor ref={editorRef} image='example/assets/chibubao.png' width={400} height={600} />;
};

export default App;
