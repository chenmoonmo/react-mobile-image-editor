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

type HistoryState = Pick<HistoryContextType, 'blurs' | 'lines' | 'texts' | 'group' | 'clipRect'>;

type UpdateCallback<T> = (param: T) => T;

type UpdateFunction<T> = (callback: UpdateCallback<T>) => unknown;

const HistoryProvider: ComponentType<HistoryProviderProps> = ({ children, image: imageUrl }) => {
  const { width, height } = useEditor();

  const [state, setState] = useState<HistoryState>({
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

  const [isInt, setIsInt] = useState(false);

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
    history.current?.pushSync({
      ...stateRef.current,
      lines: callback(stateRef.current.lines),
    });
  };

  
  const handleBlurChange: UpdateFunction<HistoryContextType['blurs']> = (callback) => {
    history.current?.pushSync({
      ...stateRef.current,
      blurs: callback(stateRef.current.blurs),
    });
  };

  

  const handleTextChange: UpdateFunction<HistoryContextType['texts']> = (callback) => {
    history.current?.pushSync({
      ...stateRef.current,
      texts: callback(stateRef.current.texts),
    });
  };

  const handleImagechange = (
    clipRect: Partial<HistoryContextType['clipRect']>,
    rotation: number
  ) => {
    history.current?.pushSync({
      ...stateRef.current,
      clipRect: Object.assign({}, stateRef.current.clipRect, clipRect),
      group: Object.assign({}, stateRef.current.group, { rotation }),
    });
  };

  const handleGroupChange = (groupConfig: HistoryContextType['group']) => {
    history.current?.pushSync({
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
          clipRect: {
            width: imageWidth,
            height: imageHeight,
            x: 0,
            y: 0,
          },
        },
        delay: 0,
        onChange: handleDataChange,
      });

      setState((preVal) => {
        return {
          ...preVal,
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

      setIsInt(true);

      console.log(history.current);
    }
  }, [imageStatus]);

  return (
    <HistroyContext.Provider
      value={{
        ...state,
        image: mainImage,
        setGroup: handleGroupChange,
        setLines: handleLineChange,
        setBlurs: handleBlurChange,
        setTexts: handleTextChange,
        setImage: handleImagechange,
        redo: handleRedo,
        undo: handleUndo,
      }}
    >
      {isInt && children}
    </HistroyContext.Provider>
  );
};

export default HistoryProvider;
