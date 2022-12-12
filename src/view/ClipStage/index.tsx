import styled from '@emotion/styled';
import Konva from 'konva';
import { ComponentType, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Group, Rect, Stage, Layer, Image, Text, Line, Transformer } from 'react-konva';
import useEditor from 'utils/hooks/useEditor';
import useHistory from 'utils/hooks/useHistory';
import { ReactComponent as IconRotate } from 'assets/icons/icon-rotate.svg';
import {
  getCenter,
  getDistance,
  getImageSize,
  getRotateDistance,
  Point,
  rotatePoint,
} from 'utils/utils';
import { useAnchor } from 'utils/hooks/useAnchor';
import image2 from '../../image.png';
import useImage from 'use-image';
import Blurs from 'view/Blurs';

type ClipStageProps = {
  onCutDone: (size: any, rotation: number) => unknown;
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

  const [fillimage] = useImage(image2);

  const drawAnchors = useAnchor();

  const scaleGroup = useRef<Konva.Group>(null);
  const currentImage = useRef<Konva.Image | null>(null);

  const stageRef = useRef<Konva.Stage>(null);

  const reRef = useRef<Konva.Rect>(null);
  const trRef = useRef<Konva.Transformer>(null);

  const lastCenter = useRef<Point | null>(null);
  const lastDist = useRef(0);

  const [clipInfo, setClipInfo] = useState(clipRect);
  const [rotation, setRotaion] = useState(group.rotation);

  const basicScaleRatio = useMemo(() => {
    const rotationStage = ((rotation / 90) % 4) + 1;
    let containerSize = [width, height] as const;
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

  const handleTransformEnd = () => {
    const node = reRef.current!;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();
    const currentRectBox = {
      width: node.width()! * scaleX,
      height: node.height()! * scaleY,
      x: +node.position().x?.toFixed(5)!,
      y: +node.position().y?.toFixed(5)!,
    };
    node.scaleX(1);
    node.scaleY(1);

    if (currentRectBox.x < 0) {
      currentRectBox.width += currentRectBox.x;
      currentRectBox.x = 0;
      node.x(0);
    }

    if (currentRectBox.y < 0) {
      currentRectBox.height += currentRectBox.y;
      currentRectBox.y = 0;
      node.y(0);
    }

    if (currentRectBox.x + currentRectBox.width > group.width) {
      currentRectBox.width = group.width - currentRectBox.x;
    }

    if (currentRectBox.y + currentRectBox.height > group.height) {
      currentRectBox.height = group.height - currentRectBox.y;
    }

    currentRectBox.height =
      currentRectBox.height < 0 ? -currentRectBox.height : currentRectBox.height;
    currentRectBox.width = currentRectBox.width < 0 ? -currentRectBox.width : currentRectBox.width;

    setClipInfo(currentRectBox);
  };

  const handleCutDown = () => {
    onCutDone(clipInfo, rotation);
  };

  const hanldeCutCancel = () => {
    handleSelectTool(null);
  };

  const hanldeRotate = () => {
    setRotaion((preRotation) => preRotation + 90);
  };

  // TODO: 缩放和图片裁剪位置关系
  const handleTouchMove = (e: Konva.KonvaEventObject<TouchEvent>) => {
    e.evt.preventDefault();
    const touchTarget = scaleGroup.current!;
    const touch1 = e.evt.touches[0];
    const touch2 = e.evt.touches[1];

    if (touch1 && touch2) {
      if (stageRef.current?.isDragging()) {
        stageRef.current?.stopDrag();
      }

      const p1 = {
        x: touch1.clientX,
        y: touch1.clientY,
      };

      const p2 = {
        x: touch2.clientX,
        y: touch2.clientY,
      };

      const newCenter = getCenter(p1, p2);

      if (!lastCenter.current) {
        lastCenter.current = newCenter;
        return;
      }

      const dist = getDistance(p1, p2);

      if (!lastDist.current) {
        lastDist.current = dist;
      }

      const pointTo = {
        x: (newCenter.x - touchTarget.x()!) / touchTarget.scaleX()!,
        y: (newCenter.y - touchTarget.y()!) / touchTarget.scaleX()!,
      };

      const scale = touchTarget.scaleX()! * (dist / lastDist.current);

      touchTarget.scaleX(scale);
      touchTarget.scaleY(scale);

      let dx = newCenter.x - lastCenter.current.x;
      let dy = newCenter.y - lastCenter.current.y;

      [dx, dy] = getRotateDistance(dx, dy, rotation);

      const newPos = {
        x: newCenter.x - pointTo.x * scale + dx,
        y: newCenter.y - pointTo.y * scale + dy,
      };

      touchTarget.position(newPos);

      lastDist.current = dist;
      lastCenter.current = newCenter;
      return;
    }

    if (touch1) {
      if (trRef.current?.isTransforming()) return;

      const p1 = {
        x: touch1.clientX,
        y: touch1.clientY,
      };

      if (!lastCenter.current) {
        return (lastCenter.current = p1);
      }

      let dx = p1.x - lastCenter.current.x;
      let dy = p1.y - lastCenter.current.y;

      [dx, dy] = getRotateDistance(dx, dy, rotation);

      touchTarget.move({
        x: dx,
        y: dy,
      });
      lastCenter.current = p1;
    }
  };

  const handleTouchEnd = () => {
    lastDist.current = 0;
    lastCenter.current = null;
    const node = reRef.current!;
    const touchTarget = scaleGroup.current!;
    const scaleX = touchTarget.scaleX()!;
    const scaleY = touchTarget.scaleY()!;
    // if (scaleX * basicScaleRatio < 1 || scaleY * basicScaleRatio < 1) {
    //   return touchTarget.to({
    //     scaleX: 1,
    //     scaleY: 1,
    //     x: 0,
    //     y: 0,
    //     duration: 0.1,
    //   });
    // }

    const currentRectBox = {
      width: node.width()! / scaleX,
      height: node.height()! / scaleY,
      x: (node.position().x! - touchTarget.x()!) / scaleX,
      y: (node.position().y! - touchTarget.y()!) / scaleY,
    };

    touchTarget.scaleX(1);
    touchTarget.scaleY(1);
    touchTarget.position({
      x: 0,
      y: 0,
    });

    if (currentRectBox.x < 0) {
      currentRectBox.width += currentRectBox.x;
      currentRectBox.x = 0;
      node.x(0);
    }

    if (currentRectBox.y < 0) {
      currentRectBox.height += currentRectBox.y;
      currentRectBox.y = 0;
      node.y(0);
    }
    // TODO: 限制裁剪合理化
    if (currentRectBox.x + currentRectBox.width > group.width) {
      currentRectBox.width = group.width - currentRectBox.x;
    }

    if (currentRectBox.y + currentRectBox.height > group.height) {
      currentRectBox.height = group.height - currentRectBox.y;
    }

    currentRectBox.height =
      currentRectBox.height < 0 ? -currentRectBox.height : currentRectBox.height;
    currentRectBox.width = currentRectBox.width < 0 ? -currentRectBox.width : currentRectBox.width;

    setClipInfo(currentRectBox);
  };

  useLayoutEffect(() => {
    trRef.current?.nodes([reRef.current!]);
    drawAnchors(trRef.current!);
  }, []);

  return (
    <ClipContainer>
      <Stage
        ref={stageRef}
        width={width}
        height={height}
        scale={{
          x: 0.96,
          y: 0.96,
        }}
        x={width * 0.02}
        y={height * 0.02}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Layer>
          {/* TODO: 允许平移图片 和 双指缩放 */}
          <Group
            x={groupX}
            y={groupY}
            width={group.width}
            height={group.height}
            scaleX={basicScaleRatio}
            scaleY={basicScaleRatio}
            rotation={rotation}
          >
            <Group ref={scaleGroup}>
              <Image ref={currentImage} image={image} width={group.width} height={group.height} />
              <Blurs key="clipBlur" />
              {texts.map((text, index) => (
                <Text key={index} draggable {...text} />
              ))}
              {lines.map((line, index) => (
                <Line key={index} {...line} />
              ))}
            </Group>
            {/* TODO： 三等分线 */}
            <Rect
              ref={reRef}
              x={clipInfo.x}
              y={clipInfo.y}
              width={clipInfo.width}
              height={clipInfo.height}
              // fillPatternImage={fillimage}
              // fillPriority='pattern'
              fill='green'
              opacity={0.3}
              onTransformEnd={handleTransformEnd}
            />
          </Group>
          <Transformer ref={trRef} rotateEnabled={false} anchorSize={24} />
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
