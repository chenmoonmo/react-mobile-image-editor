import styled from '@emotion/styled';
import Konva from 'konva';
import { Box } from 'konva/lib/shapes/Transformer';
import { ComponentType, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Group, Rect, Stage, Layer, Image, Text, Line, Transformer } from 'react-konva';
import useEditor from 'utils/hooks/useEditor';
import useHistory from 'utils/hooks/useHistory';
import { ReactComponent as IconRotate } from 'assets/icons/icon-rotate.svg';
import { getImageSize, rotatePoint } from 'utils/utils';
import { useAnchor } from 'utils/hooks/useAnchor';

type ClipStageProps = {
  onCutDone: (size: any) => void;
};

const ClipContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #ccc;
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
  const { image, texts, lines, group, clipRect } = useHistory();
  let { width, height, handleSelectTool } = useEditor();

  const drawAnchors = useAnchor();

  const scaleGroup = useRef<Konva.Group>(null);
  const currentImage = useRef<Konva.Image | null>(null);

  const reRef = useRef<Konva.Rect>(null);
  const trRef = useRef<Konva.Transformer>(null);

  const [clipInfo, setClipInfo] = useState(clipRect);
  const [rotation, setRotaion] = useState(group.rotation);

  const basicScaleRatio = useMemo(() => {
    const rotationStage = ((rotation / 90) % 4) + 1;
    let containerSize = [width, height] as const;
    console.log(rotationStage);
    if (rotationStage % 2 === 0) {
      containerSize = [height, width];
    }
    const [clipContainWidth] = getImageSize(clipInfo.width, clipInfo.height, ...containerSize);
    return clipContainWidth / clipInfo.width;
  }, [clipInfo, rotation]);

  const [dx, dy] = useMemo(() => {
    const centerX = width / 2;
    const centerY = height / 2;

    const clipCenterX = group.x + (clipInfo.x + clipInfo.width / 2) * basicScaleRatio;

    const clipCenterY = group.y + (clipInfo.y + clipInfo.height / 2) * basicScaleRatio;

    const [rdx, rdy] = rotatePoint(clipCenterX, clipCenterY, rotation);

    const dx = isNaN(clipCenterX - centerX) ? 0 : rdx - centerX;
    const dy = isNaN(clipCenterY - centerY) ? 0 : rdy - centerY;

    return [dx, dy];
  }, [group, clipInfo, rotation, basicScaleRatio]);

  const groupX = group.x - dx;
  const groupY = group.y - dy;

  // TODO: 限制 裁剪区域在图片内
  const handelResize = (oldBox: Box, newBox: Box) => {
    return newBox;
  };

  const handleTransformEnd = () => {
    const node = reRef.current!;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();
    const currentRectBox = {
      width: reRef.current?.width()! * scaleX,
      height: reRef.current?.height()! * scaleY,
      x: reRef.current?.position().x!,
      y: reRef.current?.position().y!,
    };
    node.scaleX(1);
    node.scaleY(1);
    setClipInfo(currentRectBox);
  };

  const handleCutDown = () => {
    onCutDone(clipInfo);
  };

  const hanldeCutCancel = () => {
    handleSelectTool(null);
  };

  const hanldeRotate = () => {
    setRotaion((preRotation) => preRotation + 90);
  };

  useLayoutEffect(() => {
    trRef.current?.nodes([reRef.current!]);
    // TODO: 修改绘制函数
    drawAnchors(trRef.current!);
  }, []);

  return (
    <ClipContainer>
      <Stage width={width} height={height}>
        <Layer>
          {/* TODO: 允许平移图片 和 双指缩放 */}
          <Group
            ref={scaleGroup}
            x={groupX}
            y={groupY}
            width={group.width}
            height={group.height}
            scaleX={basicScaleRatio}
            scaleY={basicScaleRatio}
            rotation={rotation}
          >
            <Image ref={currentImage} image={image} width={group.width} height={group.height} />
            {texts.map((text, index) => (
              <Text key={index} draggable {...text} />
            ))}
            {lines.map((line, index) => (
              <Line key={index} {...line} />
            ))}
            <Rect
              ref={reRef}
              x={clipInfo.x}
              y={clipInfo.y}
              width={clipInfo.width}
              height={clipInfo.height}
              fill='green'
              opacity={0.3}
              onTransformEnd={handleTransformEnd}
            />
          </Group>
          <Transformer
            ref={trRef}
            rotateEnabled={false}
            anchorSize={24}
            boundBoxFunc={handelResize}
          />
        </Layer>
      </Stage>
      <InputActions>
        <div onClick={hanldeCutCancel}>Cancel</div>
        <IconRotate width={24} height={24} onClick={hanldeRotate} />
        <div onClick={handleCutDown}>Done</div>
      </InputActions>
    </ClipContainer>
  );
};
export default ClipStage;
