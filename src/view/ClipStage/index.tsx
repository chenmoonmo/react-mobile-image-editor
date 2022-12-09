import styled from '@emotion/styled';
import Konva from 'konva';
import { Box } from 'konva/lib/shapes/Transformer';
import { ComponentType, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Group, Rect, Stage, Layer, Image, Text, Line, Transformer } from 'react-konva';
import useEditor from 'utils/hooks/useEditor';
import useHistory from 'utils/hooks/useHistory';
import { ReactComponent as IconRotate } from 'assets/icons/icon-rotate.svg';
import { getCenterOfPoint, getImageSize, getPosition, rotateAroundPoint } from 'utils/utils';

const calculateScale = (
  rotation: number,
  containerWidth: number,
  containerHeight: number,
  imageWidth: number,
  imageHeight: number
) => {
  // 旋转后的图片宽高
  const rotatedWidth = rotation % 180 === 0 ? imageWidth : imageHeight;
  const rotatedHeight = rotation % 180 === 0 ? imageHeight : imageWidth;

  const [scaledWidth, scaledHeight] = getImageSize(
    rotatedWidth,
    rotatedHeight,
    containerWidth,
    containerHeight
  );

  // 计算缩放比例
  const scaleX = scaledWidth / rotatedWidth;
  const scaleY = scaledHeight / rotatedHeight;

  return Math.min(scaleX, scaleY);
};

function getOffset(shape: Konva.ShapeConfig, angle: number) {
  // 角度对 90 取模
  // angle = angle % 90;
  console.log(angle, (angle / 90) % 4);

  const rotationRound = (angle / 90) % 4;

  // 根据角度计算位移值
  let dx = 0;
  let dy = 0;

  if (rotationRound === 0) {
    // 没有旋转，不需要位移
  } else if (rotationRound === 3) {
    // 旋转 270 度，位移量为 w
    dy = shape.height!;
  } else if (rotationRound === 2) {
    // 旋转 180 度，位移量为 w,h
    dx = shape.width!;
    dy = shape.height!;
  } else if (rotationRound === 1) {
    // 旋转 90 度，位移量为 h
    dx = shape.width!;
  }

  // 返回位移量
  return [dx, dy];
}

type ClipStageProps = {
  onCutDone: (size: Box) => void;
};

const ClipContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
`;

const ClipStageContainer = styled.div`
  transform: scale(0.93);
`;

const InputActions = styled.div`
  position: fixed;
  bottom: 20px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  div {
    position: relative;
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 200%;
      height: 200%;
      content: '';
      transform: translate(-50%, -50%);
    }
  }
`;

const ClipStage: ComponentType<ClipStageProps> = ({ onCutDone }) => {
  const { image, texts, lines, group } = useHistory();
  let { width, height, handleSelectTool } = useEditor();
  const stage = useRef<Konva.Stage>(null);
  const layer = useRef<Konva.Layer>(null);

  const clipGroup = useRef<Konva.Group>(null);

  const scaleGroup = useRef<Konva.Group>(null);
  const currentImage = useRef<Konva.Image | null>(null);

  const reRef = useRef<Konva.Rect>(null);
  const trRef = useRef<Konva.Transformer>(null);

  const startConfig = useRef<any>({});

  const handelResize = (oldBox: Box, newBox: Box) => {
    // const { x, y, width, height } = group.clip;

    // const { x: currentX, y: currentY, width: currentWidth, height: currentHeight } = newBox;

    // if (currentX < x) {
    //   newBox.x = x;
    // }
    // if (currentY < y) {
    //   newBox.y = y;
    // }

    // if (currentWidth > width) {
    //   newBox.width = width;
    // }

    // if (currentHeight > height) {
    //   newBox.height = height;
    // }

    // if (currentWidth < 1) {
    //   return oldBox;
    // }

    // if (currentWidth < 1) {
    //   return oldBox;
    // }

    return newBox;
  };

  const hanldeDragMove = (e: Konva.KonvaEventObject<DragEvent>) => {
    const { x, y, width, height } = group.clip;

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
  };

  const handleCutDown = () => {
    console.log(
      currentImage.current?.toDataURL({
        width: trRef.current?.width()!,
        height: trRef.current?.height()!,
        x: trRef.current?.x()!,
        y: trRef.current?.y()!,
      })
    );

    console.log(
      scaleGroup.current?.position(),
      scaleGroup.current?.scaleX(),
      scaleGroup.current?.rotation()
    );

    onCutDone({
      x: trRef.current?.x()! - group.x!,
      y: trRef.current?.y()! - group.y!,
      width: trRef.current?.width()!,
      height: trRef.current?.height()!,
      rotation: trRef.current?.rotation()!,
    });
  };

  const hanldeCutCancel = () => {
    handleSelectTool(null);
  };

  const hanldeRotate = () => {
    const rotate = scaleGroup.current?.rotation()!;

    const scale = calculateScale(rotate + 90, width, height, group.clip.width, group.clip.height);
    console.log(scale);

    scaleGroup.current?.rotation(rotate + 90);
    scaleGroup.current?.scaleX(group.scaleX! * scale);
    scaleGroup.current?.scaleY(group.scaleY! * scale);

    const scaleReact = scaleGroup.current?.getClientRect()!;
    console.log(scaleReact);
    const position = getPosition(scaleReact?.width, scaleReact?.height, width, height);
    console.log('position', position);
    const [dx, dy] = getOffset(scaleReact, rotate + 90);
    console.log({
      dx,
      dy,
    });

    scaleGroup.current?.setAbsolutePosition({
      x: position[0] + dx,
      y: position[1] + dy,
    });

    reRef.current?.setAbsolutePosition({
      x: position[0],
      y: position[1],
    });
    reRef.current?.setSize({
      width: scaleReact.width,
      height: scaleReact.height,
    });
  };

  useLayoutEffect(() => {
    reRef.current?.x(group.clip.x);
    reRef.current?.y(group.clip.y);
    reRef.current?.width(group.clip.width);
    reRef.current?.height(group.clip.height);
    trRef.current?.nodes([reRef.current!]);
    trRef.current?.getLayer()?.batchDraw();

    // const scaleGroupRect = scaleGroup.current?.getClientRect()!;
    // const calipRect = trRef.current?.getClientRect()!;
    // console.log(scaleGroupRect,calipRect)
  }, []);

  return (
    <ClipContainer>
      <ClipStageContainer>
        <Stage ref={stage} width={width} height={height}>
          <Layer ref={layer}>
            <Group
              id='clip'
              ref={clipGroup}
              // clip={group.clip}
            >
              {/* <Rect width={width} height={height} x={0} y={0} fill='red' /> */}
              <Group
                id='scale'
                ref={scaleGroup}
                offsetX={0}
                offsetY={0}
                scaleX={group.scaleX!}
                scaleY={group.scaleY!}
                x={group.x!}
                y={group.y!}
              >
                <Image
                  ref={currentImage}
                  image={image.image}
                  width={image.width}
                  height={image.height}
                />
                {texts.map((text, index) => (
                  <Text key={index} draggable {...text} />
                ))}
                {lines.map((line, index) => (
                  <Line key={index} {...line} />
                ))}
              </Group>
            </Group>
            <Transformer ref={trRef} rotateEnabled={false} boundBoxFunc={handelResize} />
            <Rect ref={reRef} draggable={true} onDragMove={hanldeDragMove} />
          </Layer>
        </Stage>
      </ClipStageContainer>
      <InputActions>
        <div onClick={hanldeCutCancel}>Cancel</div>
        <IconRotate width={24} height={24} onClick={hanldeRotate} />
        <div onClick={handleCutDown}>Done</div>
      </InputActions>
    </ClipContainer>
  );
};
export default ClipStage;
