import styled from '@emotion/styled';
import Konva from 'konva';
import { Box } from 'konva/lib/shapes/Transformer';
import { ComponentType, useEffect, useRef, useState } from 'react';
import { Group, Rect, Stage, Layer, Image, Text, Line, Transformer } from 'react-konva';
import useEditor from 'utils/hooks/useEditor';
import useHistory from 'utils/hooks/useHistory';
import { ReactComponent as IconRotate } from 'assets/icons/icon-rotate.svg';
import { getImageSize, getPosition, rotateAroundCenter, rotateAroundPoint } from 'utils/utils';

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
  position: absolute;
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
  let { width, height } = useEditor();
  const stage = useRef<Konva.Stage>(null);
  const layer = useRef<Konva.Layer>(null);

  const clipGroup = useRef<Konva.Group>(null);

  const scaleGroup = useRef<Konva.Group>(null);
  const currentImage = useRef<Konva.Image | null>(null);

  const reRef = useRef<Konva.Rect>(null);
  const trRef = useRef<Konva.Transformer>(null);

  const handelResize = (oldBox: Box, newBox: Box) => {
    const { x, y, width, height } = group.clip;

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
    onCutDone({
      x: trRef.current?.x()!,
      y: trRef.current?.y()!,
      width: trRef.current?.width()!,
      height: trRef.current?.height()!,
      rotation: trRef.current?.rotation()!,
    });
  };

  const hanldeRotate = () => {
    const attrs = {
      x: currentImage.current?.x(),
      y: currentImage.current?.y(),
      width: currentImage.current?.width(),
      height: currentImage.current?.height(),
      rotation: currentImage.current?.rotation(),
    };
    console.log(reRef.current?.x(), reRef.current?.y());

    const rotatedAttrs = rotateAroundPoint(attrs, 90, {
      x: group.x! - reRef.current?.x()! + reRef.current?.width()! / 2,
      y: group.y! - reRef.current?.y()! + reRef.current?.height()! / 2,
    });

    console.log(rotatedAttrs)

    currentImage.current?.setAttrs({
      ...rotatedAttrs,
    });

    // reRef.current?.setAttrs(rotatedAttrs)
  };

  useEffect(() => {
    reRef.current?.x(group.clip.x);
    reRef.current?.y(group.clip.y);
    reRef.current?.width(group.clip.width);
    reRef.current?.height(group.clip.height);

    trRef.current?.nodes([reRef.current!]);
    trRef.current?.getLayer()?.batchDraw();
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
              <Rect width={width} height={height} x={0} y={0} fill='red' />
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
                <Rect image={image.image} width={image.width} fill='blue' />
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
        {/* <div onClick={handleCutCancel}>Cancel</div>
        <IconRotate width={24} height={24} onClick={onRotate} />
        <div onClick={handleCutDown}>Done</div> */}
        <div>Cancel</div>
        <IconRotate width={24} height={24} onClick={hanldeRotate} />
        <div onClick={handleCutDown}>Done</div>
      </InputActions>
    </ClipContainer>
  );
};
export default ClipStage;
