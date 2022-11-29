import { ComponentType, ReactNode, useEffect, useRef, useState } from 'react';
import HistroyContext, { HistoryContextType } from 'utils/context/HistroyContext';
import { History } from 'stateshot';

type HistoryProviderProps = {
  children: ReactNode;
};

const HistoryProvider: ComponentType<HistoryProviderProps> = ({ children }) => {
  const [image, setImage] = useState<HistoryContextType['image']>({
    image: '',
  });
  const [lines, setLines] = useState<HistoryContextType['lines']>([]);
  const [texts, setTexts] = useState<HistoryContextType['texts']>([]);
  const [blurs, setBlurs] = useState<HistoryContextType['blurs']>([]);

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
    history.current = new History({
      initialState: {
        image,
        lines,
        texts,
        blurs,
      },
      delay: 50,
      onChange: handleDataChange,
    });
  }, []);

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
