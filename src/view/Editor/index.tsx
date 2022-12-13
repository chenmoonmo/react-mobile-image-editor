import { ComponentType } from 'react';
import EditorProvider from 'view/EditorProvider';
import EditorStage from 'view/EditorStage';
import HistoryProvider from 'view/HistoryProvider';
import { Global, css } from '@emotion/react';

export type EditorPropsType = {
  image: string;
  width: number;
  height: number;
};
// TODO: i18n
// TODO: 配置项完善

const Editor: ComponentType<EditorPropsType> = ({ image, width, height }) => {
  return (
    <EditorProvider width={width} height={height}>
      <HistoryProvider image={image}>
        <Global
          styles={css`
            * {
              box-sizing: border-box;
            }
          `}
        />
        <EditorStage />
      </HistoryProvider>
    </EditorProvider>
  );
};

export default Editor;
