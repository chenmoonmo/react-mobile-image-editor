import { ComponentType } from 'react';
import EditorProvider from 'view/EditorProvider';
import EditorStage from 'view/EditorStage';
import Toolbar from 'view/Toolbar';

type EditorProps = {
  image: string;
};

const Editor: ComponentType<EditorProps> = ({ image }) => {
  return (
    <EditorProvider>
      <EditorStage image={image} />
      <Toolbar />
    </EditorProvider>
  );
};

export default Editor;
