import { ComponentType } from 'react';
type WordInputProviderProps = {
    defaultWord?: string;
    onDone?: (word: string) => unknown;
    onCancel?: () => unknown;
};
declare const WordInput: ComponentType<WordInputProviderProps>;
export default WordInput;
