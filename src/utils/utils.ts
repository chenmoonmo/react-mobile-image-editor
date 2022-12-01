export const getImageSize = (
  imageWidth: number,
  imageHeight: number,
  width: number,
  height: number
) => {
  console.log('getImageSize',{imageWidth,imageHeight,width,height})

  const imageRatio = imageWidth / imageHeight;
  const containerRatio = width / height;

  console.log('getImageSize',{imageRatio,containerRatio})


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
