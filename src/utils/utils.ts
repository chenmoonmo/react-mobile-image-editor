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

export function rotatePoint(x: number, y: number, r: number) {
  const rRadians = r * (Math.PI / 180);
  const xOffset = x * Math.cos(rRadians) - y * Math.sin(rRadians);
  const yOffset = x * Math.sin(rRadians) + y * Math.cos(rRadians);
  return [xOffset, yOffset];
}
