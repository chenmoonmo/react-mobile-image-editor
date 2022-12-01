import Konva from 'konva';
import { Box } from 'konva/lib/shapes/Transformer';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Rect, Transformer } from 'react-konva';

const ClipRect = forwardRef<{
  x?: number;
  y?: number;
  width?: number;
  height?: number;
} | null>((_, ref) => {
  const reRef = useRef<Konva.Rect>(null);
  const trRef = useRef<Konva.Transformer>(null);
  const clipArea = useRef<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>();

  const [clipSize, setSize] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  const handelResize = (oldBox: Box, newBox: Box) => {
    const { x, y, width, height } = clipArea.current!;

    const { x: currentX, y: currentY, width: currentWidth, height: currentHeight } = newBox;

    if (currentX < x) {
      newBox.x = x;
    }
    if (currentY < y) {
      newBox.y = y;
    }

    if (currentWidth > width) {
      newBox.width = width;
    }

    if (currentHeight > height) {
      newBox.height = height;
    }

    if (currentWidth < 1) {
      return oldBox;
    }

    if (currentWidth < 1) {
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
    const { x, y, width, height } = clipArea.current!;

    const currentX = trRef.current?.x()!;
    const currentY = trRef.current?.y()!;
    const currentWidth = trRef.current?.width()!;
    const currentHeight = trRef.current?.height()!;

    if (currentX - x < 0) {
      e.target.x(x);
    }

    if (currentWidth + currentX > width + x) {
      e.target.x(x + width - currentWidth);
    }

    if (currentY - y < 0) {
      e.target.y(y);
    }

    if (currentY + currentHeight > y + height) {
      e.target.y(y + height - currentHeight);
    }

    setSize({
      x: trRef.current?.x()!,
      y: trRef.current?.y()!,
      width: trRef.current?.width()!,
      height: trRef.current?.height()!,
    });
  };

  useLayoutEffect(() => {
    const parent = reRef.current?.getParent().findOne('#clip')! as Konva.Group;
    const clip = parent?.clip()!;
    clipArea.current = clip;
    reRef.current?.x(clip.x);
    reRef.current?.y(clip.y);
    reRef.current?.width(clip.width);
    reRef.current?.height(clip.height);
    trRef.current?.nodes([reRef.current!]);
    trRef.current?.getLayer()?.batchDraw();
  }, []);

  useImperativeHandle(
    ref,
    () => {
      if (clipSize) {
        const { x: areaX, y: areaY, width: areaWidth, height: areaHeight } = clipArea.current!;
        const { x, y, width, height } = clipSize;
        return {
          x: x < 0 ? 0 : (x - areaX) / 0.93,
          y: y < 0 ? 0 : (y - areaY) / 0.93,
          width: width < areaWidth && width > 0 ? width / 0.93 : areaWidth / 0.93,
          height: height < areaHeight && height > 0 ? height / 0.93 : areaHeight / 0.93,
        };
      }
      return {};
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
