import { ComponentType } from 'react';
import EditorProvider from 'view/EditorProvider';
import EditorStage from 'view/EditorStage';
import HistoryProvider from 'view/HistoryProvider';
import Toolbar from 'view/Toolbar';

type EditorProps = {
  image: string;
};

const Editor: ComponentType<EditorProps> = ({ image }) => {
  return (
    <EditorProvider>
      <HistoryProvider>
        <EditorStage image={image} />
        <Toolbar />
      </HistoryProvider>
    </EditorProvider>
  );
};

export default Editor;
