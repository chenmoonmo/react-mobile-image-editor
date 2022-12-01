export const getImageSize = (
  imageWidth: number,
  imageHeight: number,
  width: number,
  height: number
) => {
  console.log(imageWidth, imageHeight, width, height);
  console.log(imageWidth / imageHeight, width / height);

  const imageRatio = imageWidth / imageHeight;
  const containerRatio = width / height;

  // 竖图
  if (imageRatio <= 1) {
    console.log(1);
    return imageRatio < containerRatio
      ? [imageRatio * height, height]
      : [width, (imageHeight / imageWidth) * width];
  } else {
    // 横图
    console.log(2);
    return imageRatio < containerRatio
      ? [(imageWidth / imageHeight) * height, height]
      : [width,(imageHeight / imageWidth) * width];
  }
};
