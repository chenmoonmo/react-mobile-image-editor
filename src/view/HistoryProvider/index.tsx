import { ComponentType, ReactNode, useLayoutEffect, useRef, useState } from 'react';
import HistroyContext, { HistoryContextType } from 'utils/context/HistroyContext';
import { History } from 'stateshot';
import useImage from 'use-image';
import useEditor from 'utils/hooks/useEditor';
import { getImageSize } from 'utils/utils';

type HistoryProviderProps = {
  children: ReactNode;
  image: string;
};

type HistoryState = Pick<
  HistoryContextType,
  'blurs' | 'image' | 'lines' | 'texts' | 'group' | 'clipRect'
>;

type UpdateCallback<T> = (param: T) => T;

type UpdateFunction<T> = (callback: UpdateCallback<T>) => unknown;

const HistoryProvider: ComponentType<HistoryProviderProps> = ({ children, image: imageUrl }) => {
  const { width, height } = useEditor();

  const [state, setState] = useState<HistoryState>({
    image: null,
    group: {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      rotation: 0,
    },
    clipRect: {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    },
    lines: [],
    texts: [],
    blurs: [],
  });

  const stateRef = useRef(state);
  stateRef.current = state;

  const [mainImage, imageStatus] = useImage(imageUrl);

  const handleDataChange = (state: HistoryState) => {
    console.log('historyChange', state);
    setState(state);
    stateRef.current = state;
  };

  const history = useRef<History>();

  const handleLineChange: UpdateFunction<HistoryContextType['lines']> = (callback) => {
    history.current?.push({
      ...stateRef.current,
      lines: callback(stateRef.current.lines),
    });
  };

  const handleTextChange: UpdateFunction<HistoryContextType['texts']> = (callback) => {
    history.current?.push({
      ...stateRef.current,
      texts: callback(stateRef.current.texts),
    });
  };

  const handleImagechange = (
    image: Partial<HistoryContextType['image']>,
    groupConfig: Partial<HistoryContextType['group']>
  ) => {
    history.current?.push({
      ...stateRef.current,
      image,
      group: Object.assign({}, stateRef.current.group, groupConfig),
    });
  };

  const handleGroupChange = (groupConfig: HistoryContextType['group']) => {
    history.current?.push({
      ...stateRef.current,
      group: Object.assign({}, stateRef.current.group, groupConfig),
    });
  };

  const handleRedo = () => {
    history.current?.redo().get();
  };

  const handleUndo = () => {
    history.current?.undo().get();
  };

  useLayoutEffect(() => {
    if (imageStatus === 'loaded' && mainImage) {
      const [imageWidth, imageHeight] = getImageSize(
        mainImage.width,
        mainImage.height,
        width,
        height
      );

      history.current = new History({
        initialState: {
          ...stateRef.current,
          image: mainImage,
          group: {
            width: imageWidth,
            height: imageHeight,
            x: 0,
            y: 0,
            rotation: 0,
          },
        },
        useChunks: false,
        delay: 0,
        onChange: handleDataChange,
      });

      setState((preVal) => {
        return {
          ...preVal,
          image: mainImage,
          group: {
            width: imageWidth,
            height: imageHeight,
            x: 0,
            y: 0,
            rotation: 0,
          },
          clipRect: {
            width: imageWidth,
            height: imageHeight,
            x: 0,
            y: 0,
          },
        };
      });

      console.log(history.current);
    }
  }, [imageStatus]);

  return (
    <HistroyContext.Provider
      value={{
        ...state,
        setGroup: handleGroupChange,
        setLines: handleLineChange,
        setTexts: handleTextChange,
        setImage: handleImagechange,
        redo: handleRedo,
        undo: handleUndo,
      }}
    >
      {children}
    </HistroyContext.Provider>
  );
};

export default HistoryProvider;
