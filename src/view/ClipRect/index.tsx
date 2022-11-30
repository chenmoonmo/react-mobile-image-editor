import Konva from 'konva';
import { Box } from 'konva/lib/shapes/Transformer';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Rect, Transformer } from 'react-konva';

const ClipRect = forwardRef<{
  x?: number;
  y?: number;
  width?: number;
  height?: number;
} | null>((_, ref) => {
  const reRef = useRef<Konva.Rect>(null);
  const trRef = useRef<Konva.Transformer>(null);
  const [clipSize, setSize] = useState<{
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  } | null>(null);

  const handelResize = (oldBox: Box, newBox: Box) => {
    const group = reRef.current?.getParent();
    const groupX = group?.x()!;
    const groupY = group?.y()!;
    const groupWidth = group?.width()!;
    const groupHeight = group?.height()!;

    if (newBox.x < groupX) {
      newBox.x = groupX;
    }
    if (newBox.y < groupY) {
      newBox.y = groupY;
    }

    if (Math.floor(newBox.width + newBox.x - groupX) > groupWidth) {
      return oldBox;
    }
    if (Math.floor(newBox.height + newBox.y - groupY) > groupHeight) {
      return oldBox;
    }
    setSize({
      x: trRef.current?.x()!,
      y: trRef.current?.y()!,
      width: trRef.current?.width()!,
      height: trRef.current?.height()!,
    });
    return newBox;
  };

  const hanldeDragMove = (e: Konva.KonvaEventObject<DragEvent>) => {
    const group = reRef.current?.getParent();
    const groupX = group?.x()!;
    const groupY = group?.y()!;
    const groupWidth = group?.width()!;
    const groupHeight = group?.height()!;
    if (e.target.x() < groupX) {
      e.target.x(0);
    }
    if (e.target.y() < groupY) {
      e.target.y(0);
    }

    if (e.target.x() + trRef.current?.width()! > groupWidth) {
      e.target.x(groupWidth - trRef.current?.width()!);
    }

    if (e.target.y() + trRef.current?.height()! > groupHeight) {
      e.target.y(groupHeight - trRef.current?.height()!);
    }
    setSize({
      x: trRef.current?.x()!,
      y: trRef.current?.y()!,
      width: trRef.current?.width()!,
      height: trRef.current?.height()!,
    });
  };

  useEffect(() => {
    const group = reRef.current?.getParent();
    const groupWidth = group?.width()!;
    const groupHeight = group?.height()!;
    reRef.current?.x(0);
    reRef.current?.y(0);
    reRef.current?.width(groupWidth);
    reRef.current?.height(groupHeight);
    trRef.current?.nodes([reRef.current!]);
    trRef.current?.getLayer()?.batchDraw();
  }, []);

  useImperativeHandle(
    ref,
    () => {
      if (!clipSize) {
        return {};
      }
      const group = reRef.current?.getParent();
      const groupWidth = group?.width()!;
      const groupHeight = group?.height()!;
      const { x = 0, y = 0, width = groupWidth, height = groupHeight } = clipSize;

      return {
        x: x < 0 ? 0 : x,
        y: y < 0 ? 0 : y,
        width: width < groupWidth && width > 0 ? width : groupWidth,
        height: height < groupHeight && height > 0 ? height : groupHeight,
      };
    },
    [clipSize]
  );

  return (
    <>
      <Transformer ref={trRef} rotateEnabled={false} boundBoxFunc={handelResize} />
      <Rect ref={reRef} draggable={true} onDragMove={hanldeDragMove} />
    </>
  );
});
export default ClipRect;
