import Konva from 'konva';

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

export const getPosition = (
  imageWidth: number,
  imageHeight: number,
  width: number,
  height: number
) => {
  return [(width - imageWidth) / 2, (height - imageHeight) / 2] as const;
};

export function degToRad(angle: number) {
  return (angle / 180) * Math.PI;
}

export function getCenter(shape: Konva.ShapeConfig) {
  const angleRad = degToRad(shape.rotation || 0);
  return {
    x:
      shape.x! +
      (shape.width! / 2) * Math.cos(angleRad) +
      (shape.height! / 2) * Math.sin(-angleRad),
    y:
      shape.y! + (shape.height! / 2) * Math.cos(angleRad) + (shape.width! / 2) * Math.sin(angleRad),
  };
}

export function rotateAroundPoint(
  shape: Konva.ShapeConfig,
  deltaDeg: number,
  point: ReturnType<typeof getCenter>
) {
  const angleRad = degToRad(deltaDeg);
  const x = Math.round(
    point.x + (shape.x! - point.x) * Math.cos(angleRad) - (shape.y! - point.y) * Math.sin(angleRad)
  );
  const y = Math.round(
    point.y + (shape.x! - point.x) * Math.sin(angleRad) + (shape.y! - point.y) * Math.cos(angleRad)
  );
  return {
    ...shape,
    rotation: Math.round(shape.rotation! + deltaDeg),
    x,
    y,
  };
}

// export function rotateAroundCenter(shape: Konva.ShapeConfig, deltaDeg: number) {
//   const center = getCenter(shape);
//   console.log(shape,center)
//   return rotateAroundPoint(shape, deltaDeg, center);
// }


export function getCenterOfPoint(shape: Konva.ShapeConfig, relativePoint: { x: number, y: number }) {
  const angleRad = degToRad(shape.rotation || 0);

  // 先计算相对坐标相对于矩形左上角的绝对坐标
  const absolutePoint = {
    x: shape.x! + relativePoint.x,
    y: shape.y! + relativePoint.y,
  };

  // 然后根据这个绝对坐标计算旋转中心坐标
  return {
    x: absolutePoint.x + (shape.width! / 2) * Math.cos(angleRad) + (shape.height! / 2) * Math.sin(-angleRad),
    y: absolutePoint.y + (shape.height! / 2) * Math.cos(angleRad) + (shape.width! / 2) * Math.sin(angleRad),
  };
}