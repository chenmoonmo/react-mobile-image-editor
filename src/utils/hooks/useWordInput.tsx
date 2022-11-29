import { useContext } from 'react';
import WordInputContext, { WordInputContextType } from 'utils/context/WordInputContext';

const useWordInput = () => {
  const context = useContext<WordInputContextType>(WordInputContext);

  return context;
};

export default useWordInput;
