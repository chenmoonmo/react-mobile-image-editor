import styled from '@emotion/styled';
import Konva from 'konva';
import { Box } from 'konva/lib/shapes/Transformer';
import { ComponentType, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Group, Rect, Stage, Layer, Image, Text, Line, Transformer } from 'react-konva';
import useEditor from 'utils/hooks/useEditor';
import useHistory from 'utils/hooks/useHistory';
import { ReactComponent as IconRotate } from 'assets/icons/icon-rotate.svg';
import { getImageSize } from 'utils/utils';
import { usePrevious } from 'utils/hooks/usePrevious';

type ClipStageProps = {
  onCutDone: (size: Box) => void;
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

  const stage = useRef<Konva.Stage>(null);
  const layer = useRef<Konva.Layer>(null);

  const scaleGroup = useRef<Konva.Group>(null);
  const currentImage = useRef<Konva.Image | null>(null);

  const reRef = useRef<Konva.Rect>(null);
  const trRef = useRef<Konva.Transformer>(null);

  const [groupInfo, setGroupInfo] = useState(group);

  const [clipInfo, setClipInfo] = useState(clipRect);

  const basicScaleRatio = useMemo(() => {
    const [clipContainWidth, clipContainHeight] = getImageSize(
      clipInfo.width,
      clipInfo.height,
      width,
      height
    );
    return clipContainWidth / clipInfo.width;
  }, [clipInfo]);

  const [dx, dy] = useMemo(() => {
    const centerX = width / 2;
    const centerY = height / 2;

    const clipCenterX = groupInfo.x + (clipInfo.x + clipInfo.width / 2) * basicScaleRatio;

    const clipCenterY = groupInfo.y + (clipInfo.y + clipInfo.height / 2) * basicScaleRatio;

    const dx = isNaN(clipCenterX - centerX) ? 0 : clipCenterX - centerX;
    const dy = isNaN(clipCenterY - centerY) ? 0 : clipCenterY - centerY;

    return [dx, dy];
  }, [groupInfo, clipInfo, basicScaleRatio]);

  const groupX = groupInfo.x - dx;
  const groupY = groupInfo.y - dy;

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

  const hanldeRotate = () => {};

  useLayoutEffect(() => {
    trRef.current?.nodes([reRef.current!]);
  }, []);

  return (
    <ClipContainer>
      <Stage ref={stage} width={width} height={height}>
        <Layer ref={layer}>
          <Group
            ref={scaleGroup}
            x={groupX}
            y={groupY}
            width={groupInfo.width}
            height={groupInfo.height}
            scaleX={basicScaleRatio}
            scaleY={basicScaleRatio}
          >
            <Image
              ref={currentImage}
              image={image}
              width={groupInfo.width}
              height={groupInfo.height}
            />
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
          <Transformer ref={trRef} rotateEnabled={false} boundBoxFunc={handelResize} />
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
