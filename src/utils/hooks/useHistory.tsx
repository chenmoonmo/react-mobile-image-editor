import { useContext } from 'react';
import HistroyContext, { HistoryContextType } from 'utils/context/HistroyContext';

const useHistory = () => {
  const context = useContext<HistoryContextType>(HistroyContext);

  return context;
};

export default useHistory;
