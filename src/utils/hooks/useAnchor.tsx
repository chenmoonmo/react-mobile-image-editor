import Konva from 'konva';
import { useEffect, useLayoutEffect, useRef } from 'react';

const AnchorPositons = [
  'top-left',
  'top-center',
  'top-right',
  'middle-left',
  'middle-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
] as const;

type AnchorPositon = typeof AnchorPositons[number];

export const useAnchor = () => {
  const anchorsRef = useRef(
    {} as Record<AnchorPositon, ReturnType<typeof anchorShapeCanvasFactory>>
  );

  const drawAnchors = (transformer: Konva.Transformer) => {
    for (let positon of AnchorPositons) {
      const rect = transformer.findOne(`.${positon}`) as Konva.Rect;
      rect?.fillPriority('pattern');
      rect?.fillPatternRepeat('no-repeat');
      rect?.fillPatternImage(anchorsRef.current[positon]);
      rect?.strokeEnabled(false);
    }
    transformer?.getLayer()!.batchDraw();
  };

  useLayoutEffect(() => {
    for (let positon of AnchorPositons) {
      anchorsRef.current[positon] = anchorShapeCanvasFactory(positon);
    }
  }, []);

  return drawAnchors;
};

const anchorShapeCanvasFactory = (position: AnchorPositon, color: string = '#0096FF') => {
  const canvas = document.createElement('canvas');
  canvas.width = 24;
  canvas.height = 24;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = color;
  ctx.lineCap = 'round';
  ctx.beginPath();
  switch (position) {
    case 'top-left':
      ctx.lineTo(10, 10);
      ctx.lineTo(24, 10);
      ctx.lineTo(24, 12);
      ctx.lineTo(12, 12);
      ctx.lineTo(12, 24);
      ctx.lineTo(10, 24);
      break;
    case 'top-center':
      ctx.lineTo(0, 14);
      ctx.lineTo(24, 14);
      ctx.lineTo(24, 12);
      ctx.lineTo(0, 12);
      break;
    case 'top-right':
      ctx.lineTo(0, 10);
      ctx.lineTo(14, 10);
      ctx.lineTo(14, 24);
      ctx.lineTo(12, 24);
      ctx.lineTo(12, 12);
      ctx.lineTo(0, 12);
      break;
    case 'bottom-center':
      ctx.lineTo(0, 10);
      ctx.lineTo(24, 10);
      ctx.lineTo(24, 12);
      ctx.lineTo(0, 12);
      break;
    case 'middle-left':
      ctx.lineTo(12, 0);
      ctx.lineTo(12, 24);
      ctx.lineTo(14, 24);
      ctx.lineTo(14, 0);
      break;
    case 'middle-right':
      ctx.lineTo(12, 0);
      ctx.lineTo(12, 24);
      ctx.lineTo(10, 24);
      ctx.lineTo(10, 0);
      break;
    case 'bottom-left':
      ctx.lineTo(12, 0);
      ctx.lineTo(12, 12);
      ctx.lineTo(24, 12);
      ctx.lineTo(24, 14);
      ctx.lineTo(10, 14);
      ctx.lineTo(10, 0);
      break;
    case 'bottom-right':
      ctx.lineTo(12, 12);
      ctx.lineTo(12, 0);
      ctx.lineTo(14, 0);
      ctx.lineTo(14, 14);
      ctx.lineTo(0, 14);
      ctx.lineTo(0, 12);
      break;
  }

  ctx.closePath();
  ctx.fill();
  return canvas;
};
