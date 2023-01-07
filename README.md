# react-mobile-image-editor

## Installation

```bash
# npm
> npm install react-mobile-image-editor

# yarn
> yarn add react-mobile-image-editor
```

## [LiveDemo](https://codesandbox.io/p/github/chenmoonmo/react-mobile-image-editor/draft/wizardly-clarke?create=true&file=%2Fexample%2FApp.tsx&selection=%5B%7B%22endColumn%22%3A3%2C%22endLineNumber%22%3A22%2C%22startColumn%22%3A3%2C%22startLineNumber%22%3A22%7D%5D&workspace=%257B%2522activeFileId%2522%253A%2522clclqeda0000a7rif70y44t1q%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%252C%2522%252Fexample%252FApp.tsx%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clclqeh8900133b6lgbagwa7r%2522%253A%257B%2522key%2522%253A%2522clclqeh8900133b6lgbagwa7r%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522clclqes0g00eh3b6lux953jn8%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clclqeh8900133b6lgbagwa7r%2522%252C%2522spacesOrder%2522%253A%255B%2522clclqeh8900133b6lgbagwa7r%2522%255D%257D)
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
