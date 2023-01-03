import { getImageSize } from "@/styles/utils";
import Konva from "konva";
import React, { useContext } from "react";
import {
  ComponentType,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { History } from "stateshot";
import useImage from "use-image";
import { useEditor } from "./EditorProvider";

type ShapeType = {
  width: number;
  height: number;
  x: number;
  y: number;
};

export type HistoryContextType = {
  image: any;
  group: ShapeType & {
    rotation: number;
  };
  clipRect: ShapeType;

  texts: Konva.TextConfig[];
  lines: Konva.LineConfig[];
  blurs: { x: number; y: number }[][];

  setLines: (
    callback: (
      lines: HistoryContextType["lines"]
    ) => HistoryContextType["lines"]
  ) => unknown;
  setTexts: (
    callback: (
      texts: HistoryContextType["texts"]
    ) => HistoryContextType["texts"]
  ) => unknown;
  setBlurs: (
    callback: (
      texts: HistoryContextType["blurs"]
    ) => HistoryContextType["blurs"]
  ) => unknown;
  setImage: (
    clipRectInfo: Partial<HistoryContextType["clipRect"]>,
    rotation: number
  ) => unknown;
  setGroup: (groupConfig: HistoryContextType["group"]) => unknown;
  redo: () => unknown;
  undo: () => unknown;
};

type HistoryProviderProps = {
  children: ReactNode;
  image: string;
};

type HistoryState = Pick<
  HistoryContextType,
  "blurs" | "lines" | "texts" | "group" | "clipRect"
>;

type UpdateCallback<T> = (param: T) => T;

type UpdateFunction<T> = (callback: UpdateCallback<T>) => unknown;

const HistroyContext = React.createContext<HistoryContextType>({
  image: null,
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
  texts: [],
  lines: [],
  blurs: [],
  setLines: () => {},
  setTexts: () => {},
  setImage: () => {},
  setGroup: () => {},
  setBlurs: () => {},
  redo: () => {},
  undo: () => {},
});

export const useHistory = () => {
  const context = useContext<HistoryContextType>(HistroyContext);

  return context;
};

const HistoryProvider: ComponentType<HistoryProviderProps> = ({
  children,
  image: imageUrl,
}) => {
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
    // console.log('historyChange', state);
    setState(state);
    stateRef.current = state;
  };

  const history = useRef<History>();

  const handleLineChange: UpdateFunction<HistoryContextType["lines"]> = (
    callback
  ) => {
    history.current?.pushSync({
      ...stateRef.current,
      lines: callback(stateRef.current.lines),
    });
  };

  const handleBlurChange: UpdateFunction<HistoryContextType["blurs"]> = (
    callback
  ) => {
    history.current?.pushSync({
      ...stateRef.current,
      blurs: callback(stateRef.current.blurs),
    });
  };

  const handleTextChange: UpdateFunction<HistoryContextType["texts"]> = (
    callback
  ) => {
    history.current?.pushSync({
      ...stateRef.current,
      texts: callback(stateRef.current.texts),
    });
  };

  const handleImagechange = (
    clipRect: Partial<HistoryContextType["clipRect"]>,
    rotation: number
  ) => {
    history.current?.pushSync({
      ...stateRef.current,
      clipRect: Object.assign({}, stateRef.current.clipRect, clipRect),
      group: Object.assign({}, stateRef.current.group, { rotation }),
    });
  };

  const handleGroupChange = (groupConfig: HistoryContextType["group"]) => {
    history.current?.pushSync({
      ...stateRef.current,
      group: Object.assign({}, stateRef.current.group, groupConfig),
    });
  };

  const handleRedo = () => {
    if (history.current?.hasRedo) {
      history.current?.redo().get();
    }
  };

  const handleUndo = () => {
    if (history.current?.hasUndo) {
      history.current?.undo().get();
    }
  };

  useLayoutEffect(() => {
    if (imageStatus === "loaded" && mainImage) {
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
      // console.log(history.current);
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
      }}>
      {isInt && children}
    </HistroyContext.Provider>
  );
};

export default HistoryProvider;
