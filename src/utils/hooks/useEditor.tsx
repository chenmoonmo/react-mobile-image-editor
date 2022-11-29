import { useContext } from 'react';
import EditorContext, { EditorContextType } from '../context/EditorContext';

const useEditor = () => {
  const context = useContext<EditorContextType>(EditorContext);

  return context;
};

export default useEditor;
