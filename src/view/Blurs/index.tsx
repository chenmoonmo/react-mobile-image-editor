import { ComponentType, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Group, Rect } from 'react-konva';
import useEditor from 'utils/hooks/useEditor';
import useHistory from 'utils/hooks/useHistory';
import { generateImageData } from 'utils/utils';

type BlursPropsType = {
  currentBlur?: { x: number; y: number }[];
};

const tileHeight = 10;
const tileWidth = 10;

const Tile: ComponentType<{ tile: any }> = ({ tile }) => {
  if (tile.isFilled) {
    <></>;
  }

  if (!tile.color) {
    const dataLen = tile.data.length;
    let r = 0,
      g = 0,
      b = 0,
      a = 0;
    for (let i = 0; i < dataLen; i += 4) {
      r += tile.data[i];
      g += tile.data[i + 1];
      b += tile.data[i + 2];
      a += tile.data[i + 3];
    }

    // Set tile color.
    const pixelLen = dataLen / 4;
    tile.color = {
      r: Math.round(r / pixelLen),
      g: Math.round(g / pixelLen),
      b: Math.round(b / pixelLen),
      a: Math.round(a / pixelLen),
    };
  }

  const color = tile.color;
  const x = tile.column * tileWidth;
  const y = tile.row * tileHeight;
  const w = tile.pixelWidth;
  const h = tile.pixelHeight;

  return (
    <Rect
      globalCompositeOperation='source-over'
      x={x}
      y={y}
      width={w}
      height={h}
      fill={`rgba(${color.r}, ${color.g}, ${color.b}, ${color.a / 255})`}
    />
  );
};

const Blurs: ComponentType<BlursPropsType> = ({ currentBlur = [] }) => {
  const { width, height } = useEditor();
  const { image, group, blurs } = useHistory();

  const tiles = useRef([] as any[]);
  const tileRowSize = Math.ceil(height / tileHeight);
  const tileColumnSize = Math.ceil(width / tileWidth);
  const [isInt, setIsInt] = useState(false);

  const getTilesByPoint = (x: number, y: number, strokeWidth: number) => {
    const ts: any = [];
    let startRow = Math.max(0, Math.floor(y / tileHeight) - Math.floor(strokeWidth / 2));
    const startColumn = Math.max(0, Math.floor(x / tileWidth) - Math.floor(strokeWidth / 2));
    const endRow = Math.min(tileRowSize, startRow + strokeWidth);
    const endColumn = Math.min(tileColumnSize, startColumn + strokeWidth);

    while (startRow < endRow) {
      let column = startColumn;
      while (column < endColumn) {
        ts.push(tiles.current[startRow * tileColumnSize + column]);
        column += 1;
      }
      startRow += 1;
    }

    return ts;
  };

  const currentTiles = useMemo(() => {
    const posTotiles: any[] = [];
    if (!isInt) return posTotiles;
    currentBlur.forEach((pos) => {
      posTotiles.push(...getTilesByPoint(pos.x, pos.y, 5));
    });
    return posTotiles;
  }, [currentBlur, isInt]);

  const bluredTiles = useMemo(() => {
    const posTotiles: any[] = [];
    if (!isInt) return posTotiles;
    blurs.forEach((currentBlur) => {
      currentBlur.forEach((pos: any) => {
        posTotiles.push(...getTilesByPoint(pos.x, pos.y, 5));
      });
    });
    return posTotiles;
  }, [blurs, isInt]);

  useEffect(() => {
    const imageData = generateImageData(image, group.width, group.height);
    for (let i = 0; i < tileRowSize; i++) {
      for (let j = 0; j < tileColumnSize; j++) {
        const tile = {
          row: i,
          column: j,
          pixelWidth: tileWidth,
          pixelHeight: tileHeight,
          data: [],
        };

        let data: any = [];
        // 转换为像素图形下，起始像素位置
        const pixelPosition = (width * tileHeight * tile.row + tile.column * tileWidth) * 4;
        // 转换为像素图形下，包含多少行
        const pixelRowAmount = tile.pixelHeight;
        // 计算，转换为像素图形使，一个贴片所包含的所有像素数据。先遍历贴片范围内的每一列，每一列中再单独统计行的像素数量
        for (let i = 0; i < pixelRowAmount; i++) {
          // 当前列的起始像素位置
          const position = pixelPosition + width * 4 * i;
          // 贴片范围内一行的像素数据，等于贴片宽度 * 4
          data = [...data, ...imageData.data.slice(position, position + tile.pixelWidth * 4)];
        }
        tile.data = data;
        tiles.current.push(tile);
      }
    }
    setIsInt(true);
  }, [image]);

  return (
    <>
      {currentTiles.length > 0 && (
        <Group>
          {currentTiles.map(
            (tile: any, index) =>
              tile && <Tile key={`${index}-${tile.row}-${tile.column}`} tile={tile} />
          )}
        </Group>
      )}
      {bluredTiles.length > 0 && (
        <Group>
          {bluredTiles.map(
            (tile: any, index) =>
              tile && <Tile key={`${index}-${tile.row}-${tile.column}`} tile={tile} />
          )}
        </Group>
      )}
    </>
  );
};

export default Blurs;
