import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ComponentType, ReactNode, useRef, useState } from 'react';
import ReactDOM, { flushSync } from 'react-dom';
import WordInputContext from 'utils/context/WordInputContext';
import useEditor from 'utils/hooks/useEditor';
import useVisualViewport from 'utils/hooks/useVisualViewport';

type WordInputProviderProps = {
  children?: ReactNode;
};

const ColorItemStyle = (props: { color: string; currentColor?: string }) => css`
  background: ${props.color};
  box-shadow: ${props.color === props.currentColor ? '0px 0px 4px 0px rgba(0,150,255,1)' : 'none'};
  border: ${props.color === props.currentColor ? '1px solid #0096FF;' : '1px solid #FFFFFF'};
`;

const ColorItem = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  color: #fff;
  background: #fff;
  ${ColorItemStyle}
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 30px;
    height: 30px;
    transform: translate(-50%, -50%);
    content: '';
  }
`;

const ColorSelectorStyle = (props: { viewprotHeight: number }) => css`
  transform: translateY(calc(${props.viewprotHeight - 20}px - 100%));
`;

const ColorSelector = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 30px;
  transition: transform 0.2s ease;
  ${ColorSelectorStyle}
`;

const WordInputModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 100px 15px;
  background: rgba(0, 0, 0, 0.5);
`;

const InputArea = styled.textarea`
  width: 100%;
  height: 105px;
  padding: 0 12px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(0, 150, 255, 0.4);
  border-radius: 8px;
  border: 1px solid #38a1f6;
  resize: none;
  font-size: 30px;
  font-weight: 500;
  color: #222222;
  line-height: 42px;
`;

const InputActions = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  div {
    position: relative;
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 200%;
      height: 200%;
      content: '';
      transform: translate(-50%, -50%);
    }
  }
`;

const WordInputProvider: ComponentType<WordInputProviderProps> = ({ children }) => {
  const textareaEl = useRef<HTMLTextAreaElement>(null);
  const successCallback = useRef<(word: string) => void>();
  const viewprot = useVisualViewport(() => {
    textareaEl.current?.focus();
  });

  const { editorColors, textConfig, changeColor } = useEditor();

  const [isInputShow, setIsInputShow] = useState(false);

  const handleShow = (defaultWord: string = '', onSuccess?: (word: string) => void) => {
    flushSync(() => {
      setIsInputShow(true);
    });
    textareaEl.current?.focus();
    textareaEl.current!.value = defaultWord;
    successCallback.current = onSuccess;
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsInputShow(false);
  };

  const hanldeDone = (e: React.MouseEvent) => {
    e.stopPropagation();
    successCallback.current?.(textareaEl.current!.value);
    setIsInputShow(false);
  };

  const handleChangeColor = (e: React.MouseEvent, color: string) => {
    e.preventDefault();
    e.stopPropagation();
    changeColor(color);
    textareaEl.current?.focus();
  };

  return (
    <WordInputContext.Provider
      value={{
        isShow: isInputShow,
        startInput: handleShow,
      }}
    >
      {children}
      {isInputShow &&
        ReactDOM.createPortal(
          <WordInputModal onClick={(e) => e.stopPropagation()}>
            <InputActions>
              <div onClick={handleCancel}>Cancel</div>
              <div onClick={hanldeDone}>Done</div>
            </InputActions>
            <InputArea
              ref={textareaEl}
              autoComplete='off'
              wrap='hard'
              style={{ color: textConfig.fill }}
            />
            <ColorSelector viewprotHeight={viewprot.height}>
              {editorColors?.map((color) => (
                <ColorItem
                  key={color}
                  color={color}
                  currentColor={textConfig.fill}
                  onClick={(e) => handleChangeColor(e, color)}
                />
              ))}
            </ColorSelector>
          </WordInputModal>,
          document.body
        )}
    </WordInputContext.Provider>
  );
};

export default WordInputProvider;
