import { ComponentType } from 'react';
import EditorProvider from 'view/EditorProvider';
import EditorStage from 'view/EditorStage';
import HistoryProvider from 'view/HistoryProvider';
import WordInputProvider from 'view/WordInputProvider';

import Toolbar from 'view/Toolbar';

type EditorProps = {
  image: string;
  width: number;
  height: number;
};

const Editor: ComponentType<EditorProps> = ({ image, width, height }) => {
  return (
    <EditorProvider width={width} height={height}>
      <HistoryProvider>
        <WordInputProvider>
          <EditorStage image={image} />
          <Toolbar />
        </WordInputProvider>
      </HistoryProvider>
    </EditorProvider>
  );
};

export default Editor;
