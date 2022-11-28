import { useContext } from 'react';
import EditorContext, { IEditorContext } from '../context/EditorContext';

const useEditor = () => {
  const context = useContext<IEditorContext>(EditorContext);

  return context;
};

export default useEditor;
