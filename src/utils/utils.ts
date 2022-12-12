import Konva from 'konva';

export type Point = {
  x: number;
  y: number;
};

export const getImageSize = (
  imageWidth: number,
  imageHeight: number,
  width: number,
  height: number
) => {
  const imageRatio = imageWidth / imageHeight;
  const containerRatio = width / height;
  return imageRatio < containerRatio
    ? [imageRatio * height, height]
    : ([width, (1 / imageRatio) * width] as const);
};

export function rotatePoint(x: number, y: number, r: number) {
  const rRadians = r * (Math.PI / 180);
  const xOffset = x * Math.cos(rRadians) - y * Math.sin(rRadians);
  const yOffset = x * Math.sin(rRadians) + y * Math.cos(rRadians);
  return [xOffset, yOffset];
}

export function getDistance(p1: Point, p2: Point) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

export function getCenter(p1: Point, p2: Point) {
  return {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2,
  };
}

export function getRotateDistance(dx: number, dy: number, r: number) {
  const rotationStage = ((r / 90) % 4) + 1;
  switch (rotationStage) {
    case 1:
      return [dx, dy];
    case 2:
      return [dy, -dx];
    case 3:
      return [-dx, -dy];
    case 4:
      return [-dy, dx];
    default:
      return [dx, dy];
  }
}
