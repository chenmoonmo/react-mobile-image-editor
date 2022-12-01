import { ComponentType, ReactNode, useEffect, useRef, useState } from 'react';
import HistroyContext, { HistoryContextType } from 'utils/context/HistroyContext';
import { History } from 'stateshot';
import useImage from 'use-image';
import useEditor from 'utils/hooks/useEditor';
import { getImageSize } from 'utils/utils';

type HistoryProviderProps = {
  children: ReactNode;
  image: string;
};

const HistoryProvider: ComponentType<HistoryProviderProps> = ({ children, image: imageUrl }) => {
  const { width, height } = useEditor();

  const [state, setState] = useState<
    Pick<HistoryContextType, 'blurs' | 'image' | 'lines' | 'texts' | 'group'>
  >({
    image: {
      image: '',
    },
    lines: [],
    texts: [],
    blurs: [],
    group: [],
  });

  const stateRef = useRef(state);
  stateRef.current = state;

  const [mainImage, imageStatus] = useImage(imageUrl);

  const handleDataChange = (
    state: Pick<HistoryContextType, 'blurs' | 'image' | 'lines' | 'texts' | 'group'>
  ) => {
    console.log('historyChange', state);
    setState(state);
    stateRef.current = state;
  };

  const history = useRef<History>();

  const handleLineChange = (
    callback: (lines: HistoryContextType['lines']) => HistoryContextType['lines']
  ) => {
    history.current?.push({
      ...stateRef.current,
      lines: callback(stateRef.current.lines),
    });
  };

  const handleTextChange = (
    callback: (texts: HistoryContextType['texts']) => HistoryContextType['texts']
  ) => {
    history.current?.push({
      ...stateRef.current,
      texts: callback(stateRef.current.texts),
    });
  };

  const handleImagechange = (
    imageConfig: Partial<HistoryContextType['image']>,
    groupConfig: HistoryContextType['group'] = {}
  ) => {
    history.current?.push({
      ...stateRef.current,
      image: Object.assign({}, stateRef.current.image, { ...imageConfig }),
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

  useEffect(() => {
    if (imageStatus === 'loaded' && mainImage) {
      const [imageWidth, imageHeight] = getImageSize(
        mainImage.width,
        mainImage.height,
        width,
        height
      );

      const initalImage = {
        image: mainImage,
        width: imageWidth,
        height: imageHeight,
      };

      const initalGroup = {
        width: imageWidth,
        height: imageHeight,
        x: (width - imageWidth) / 2,
        y: (height - imageHeight) / 2,
      };

      history.current = new History({
        initialState: {
          ...stateRef.current,
          image: initalImage,
          group: initalGroup,
        },
        useChunks: false,
        delay: 0,
        onChange: handleDataChange,
      });

      setState((preVal) => {
        return {
          ...preVal,
          image: initalImage,
          group: initalGroup,
        };
      });

      console.log(history.current);
      console.log(initalImage);
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
