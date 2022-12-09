import { ComponentType } from 'react';
import EditorProvider from 'view/EditorProvider';
import EditorStage from 'view/EditorStage';
import HistoryProvider from 'view/HistoryProvider';
import WordInputProvider from 'view/WordInputProvider';

type EditorProps = {
  image: string;
  width: number;
  height: number;
};
// TODO: i18n
// TODO: 配置项完善
// TODO: 马赛克

const Editor: ComponentType<EditorProps> = ({ image, width, height }) => {
  return (
    <EditorProvider width={width} height={height}>
      <HistoryProvider image={image}>
        <WordInputProvider>
          <EditorStage image={image} />
        </WordInputProvider>
      </HistoryProvider>
    </EditorProvider>
  );
};

export default Editor;
