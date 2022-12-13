import { ComponentType } from 'react';
import EditorProvider from 'view/EditorProvider';
import EditorStage from 'view/EditorStage';
import HistoryProvider from 'view/HistoryProvider';

type EditorProps = {
  image: string;
  width?: number;
  height?: number;
};
// TODO: i18n
// TODO: 配置项完善

const Editor: ComponentType<EditorProps> = ({
  image,
  width = window.innerWidth,
  height = window.innerHeight,
}) => {
  return (
    <EditorProvider width={width} height={height}>
      <HistoryProvider image={image}>
        <EditorStage />
      </HistoryProvider>
    </EditorProvider>
  );
};

export default Editor;
