import React from 'react';

export type WordInputContextType = {
  isShow: boolean;
  startInput: (defaultWords?: string, onSuccess?: (word: string) => void) => void;
};

const WordInputContext = React.createContext<WordInputContextType>({
  isShow: false,
  startInput: () => {},
});

export default WordInputContext;
