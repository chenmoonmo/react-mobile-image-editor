import { ComponentType, ReactNode, useEffect, useRef, useState } from 'react';
import HistroyContext, { HistoryContextType } from 'utils/context/HistroyContext';
import { History } from 'stateshot';
import useImage from 'use-image';
import useEditor from 'utils/hooks/useEditor';

type HistoryProviderProps = {
  children: ReactNode;
  image: string;
};

const getImageSize = (imageWidth: number, imageHeight: number, width: number, height: number) => {
  if (imageWidth < imageHeight && width <= height) {
    return [width, (imageWidth / imageHeight) * height];
  }

  if (imageWidth < imageHeight && width > height) {
    return [(imageWidth / imageHeight) * height, height];
  }

  if (imageWidth > imageHeight && width > height) {
    return [(imageWidth / imageHeight) * height, height];
  }

  if (imageWidth > imageHeight && width <= height) {
    return [width, (imageHeight / imageWidth) * width];
  }

  return [0, 0];
};

const HistoryProvider: ComponentType<HistoryProviderProps> = ({ children, image: imageUrl }) => {
  const { width, height } = useEditor();
  const [image, setImage] = useState<HistoryContextType['image']>({
    image: '',
  });
  const [lines, setLines] = useState<HistoryContextType['lines']>([]);
  const [texts, setTexts] = useState<HistoryContextType['texts']>([]);
  const [blurs, setBlurs] = useState<HistoryContextType['blurs']>([]);

  const [mainImage, imageStatus] = useImage(imageUrl);

  const handleDataChange = (
    state: Pick<HistoryContextType, 'blurs' | 'image' | 'lines' | 'texts'>
  ) => {
    console.log('historyChange', state);
    setLines(state.lines);
    setTexts(state.texts);
    setImage(state.image);
  };

  const history = useRef<History>();

  const handleLineChange = (
    callback: (lines: HistoryContextType['lines']) => HistoryContextType['lines']
  ) => {
    history.current?.push({
      lines: callback(lines),
      image,
      texts,
      blurs,
    });
  };

  const handleTextChange = (
    callback: (texts: HistoryContextType['texts']) => HistoryContextType['texts']
  ) => {
    history.current?.push({
      lines,
      image,
      texts: callback(texts),
      blurs,
    });
  };

  const handleImagechange = (
    callback: (texts: HistoryContextType['image']) => HistoryContextType['image']
  ) => {
    history.current?.push({
      lines,
      image: callback(image),
      texts,
      blurs,
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
      console.log(imageWidth, imageHeight)
      const x = (width - imageWidth) / 2;
      const y = (height - imageHeight) / 2;
      history.current = new History({
        initialState: {
          image: {
            image: mainImage,
            width: imageWidth,
            height: imageHeight,
            x,
            y,
          },
          lines,
          texts,
          blurs,
        },
        useChunks: false,
        onChange: handleDataChange,
      });
      console.log(history.current);
      setImage({
        image: mainImage,
        width: imageWidth,
        height: imageHeight,
        x,
        y,
      });
    }
  }, [imageStatus]);

  return (
    <HistroyContext.Provider
      value={{
        image,
        lines,
        texts,
        blurs,
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
