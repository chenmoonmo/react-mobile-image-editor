# react-mobile-image-editor

## Installation

```bash
# npm
> npm install react-mobile-image-editor

# yarn
> yarn add react-mobile-image-editor
```

## Examples

```javascript
import Editor, { useExport } from "react-mobile-image-editor";

import image from "./assets/chibubao.png";

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
```
