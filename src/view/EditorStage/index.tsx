import { Layer, Stage, Line, Image, Text, Group, Transformer } from 'react-konva';

import React, { ComponentType, useEffect, useMemo, useRef, useState } from 'react';
import Konva from 'konva';
import useEditor from 'utils/hooks/useEditor';
import useHistory from 'utils/hooks/useHistory';
import styled from '@emotion/styled';
import Toolbar from 'view/Toolbar';
import { getDistance, getImageSize, rotatePoint } from 'utils/utils';
import ClipStage from 'view/ClipStage';
import Blurs from 'view/Blurs';
import WordInput from 'view/WordInput';
import IconDelete from '../../assets/icons/icon-delete.svg';
import { css } from '@emotion/react';
import { Html } from 'react-konva-utils';

type EditorProps = {};

type DeleteAreaStatus = 'none' | 'show' | 'active';

const StageContainer = styled.div`
  position: relative;
  background: #000;
`;

const DeleteArea = styled.div<{ deleteAreaStatus: DeleteAreaStatus }>`
  ${(props) => css`
    --optaicy: ${props.deleteAreaStatus === 'active' ? 0.9 : 1};
    --fill-color: ${props.deleteAreaStatus === 'active' ? '#ff6650' : '#0096ff'};
    --is-show: ${props.deleteAreaStatus === 'none' ? 'none' : 'flex'};
  `}
  display: var(--is-show);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 80px;
  padding: 14px 0 15px;
  background: #e2f0fe;
  box-shadow: 0px 0px 15px 0px rgba(0, 150, 255, 0.6);
  border-radius: 10px;
  border: 1px solid var(--fill-color);
  font-size: 14px;
  font-weight: 500;
  color: var(--fill-color);
  line-height: 20px;
  opacity: var(--optaicy);
  transition: all 0.1s ease;
  box-sizing: border-box;
  svg {
    width: 24px;
    height: 24px;
    fill: var(--fill-color);
    transition: inherit;
  }
`;

const EditorStage: ComponentType<EditorProps> = () => {
  const { width, height, activeTool, pencilConfig, textConfig, handleSelectTool } = useEditor();
  const { image, texts, lines, group, clipRect, setLines, setTexts, setImage, setBlurs } =
    useHistory();

  const [currentBlurPos, setBlurPos] = useState<{ x: number; y: number }[]>([]);

  const [deleteAreaStatus, setDeleteAreaStatus] = useState<DeleteAreaStatus>('none');

  const stage = useRef<Konva.Stage>(null);
  const layer = useRef<Konva.Layer>(null);

  const scaleGroup = useRef<Konva.Group>(null);
  const clipGroup = useRef<Konva.Group>(null);
  const currentImage = useRef<Konva.Image | null>(null);
  const currentLine = useRef<Konva.Line | null>(null);

  const trRef = useRef<Konva.Transformer>(null);

  const lastDist = useRef(0);
  const lastTextScale = useRef(1);

  const deleteAreaRef = useRef<Konva.Group | null>(null);

  const basicScaleRatio = useMemo(() => {
    const rotationStage = ((group.rotation / 90) % 4) + 1;
    let containerSize = [width, height * 0.8] as const;
    if (rotationStage % 2 === 0) {
      containerSize = [height * 0.8, width];
    }
    const [clipContainWidth] = getImageSize(clipRect.width, clipRect.height, ...containerSize);
    return clipContainWidth / clipRect.width;
  }, [clipRect, group.rotation]);

  const [dx, dy] = useMemo(() => {
    const centerX = width / 2;
    const centerY = (height * 0.8) / 2;

    const clipCenterX = group.x + (clipRect.x + clipRect.width / 2) * basicScaleRatio;

    const clipCenterY = group.y + (clipRect.y + clipRect.height / 2) * basicScaleRatio;

    const [rdx, rdy] = rotatePoint(clipCenterX, clipCenterY, group.rotation);

    const dx = isNaN(clipCenterX - centerX) ? 0 : rdx - centerX;
    const dy = isNaN(clipCenterY - centerY) ? 0 : rdy - centerY;

    return [dx, dy];
  }, [group, clipRect, group.rotation, basicScaleRatio]);

  const groupX = group.x - dx;
  const groupY = group.y - dy;

  const handleDrawStart = () => {
    const drawTarget = scaleGroup.current!;
    const pos = drawTarget.getRelativePointerPosition()!;
    if (activeTool === 'Pencil') {
      currentLine.current = new Konva.Line({
        ...pencilConfig,
        strokeWidth: pencilConfig.strokeWidth! / basicScaleRatio,
        points: pos ? [pos.x, pos.y, pos.x, pos.y] : [],
      });
      drawTarget.add(currentLine.current);
    } else if (activeTool === 'Blur') {
      setBlurPos((preBlurPos) => [...preBlurPos, pos]);
    }
  };

  const handleDraw = () => {
    const lastLine = currentLine.current;
    const pos = scaleGroup.current?.getRelativePointerPosition()!;
    if (activeTool === 'Pencil' && lastLine) {
      const newPoints = lastLine.points().concat([pos.x, pos.y]);
      lastLine.points(newPoints);
    }
    if (activeTool === 'Blur' && currentBlurPos.length) {
      setBlurPos((preBlurPos) => [...preBlurPos, pos]);
    }
  };

  const handleDrawEnd = () => {
    const lastLine = currentLine.current;
    if (activeTool === 'Pencil' && lastLine) {
      setLines((preLines) => {
        return [
          ...preLines,
          {
            ...pencilConfig,
            strokeWidth: pencilConfig.strokeWidth! / basicScaleRatio,
            points: lastLine.points(),
          },
        ];
      });
      setTimeout(() => {
        lastLine.destroy();
        currentLine.current = null;
      }, 50);
    }

    if (activeTool === 'Blur') {
      setBlurs((preBlurs) => [...preBlurs, currentBlurPos]);
      setBlurPos([]);
    }
  };

  const handleTextAdd = (text: string) => {
    if (text) {
      const fontSize = textConfig.fontSize! / basicScaleRatio;
      const maxWidth = textConfig!.width / basicScaleRatio;
      const textWidth = Math.min(maxWidth, text.length * fontSize);
      setTexts((preTexts) => [
        ...preTexts,
        {
          ...textConfig,
          fontSize,
          text,
          align: 'center',
          width: textWidth,
          x: group.width / 2,
          y: group.height / 2,
          offsetX: textWidth / 2,
          offsetY: fontSize / 2,
          rotation: -group.rotation,
        },
      ]);
      handleSelectTool(null);
    }
  };

  const handleTextDragMove = (e: Konva.KonvaEventObject<DragEvent>) => {
    const currentText = e.target;
    const position = currentText.absolutePosition()!;
    const textHeight = currentText.height();
    const deleteAreaTop = deleteAreaRef.current?.y()!;
    if (position.y >= deleteAreaTop - textHeight) {
      setDeleteAreaStatus('active');
    } else {
      setDeleteAreaStatus('show');
    }
  };

  const handleTextDragEnd = (e: Konva.KonvaEventObject<DragEvent>) => {
    const currentText = e.target;
    const index = currentText.attrs.id.slice(-1);
    switch (deleteAreaStatus) {
      case 'show':
      case 'none':
        const position = currentText.position()!;
        setTexts((preTexts) => {
          preTexts[index].x = position.x;
          preTexts[index].y = position.y;
          return preTexts;
        });
        break;
      case 'active':
        setTexts((preTexts) => {
          preTexts.splice(index, 1);
          return [...preTexts];
        });
        break;
    }
    setDeleteAreaStatus('none');
    currentText?.moveTo(clipGroup.current);
    if (deleteAreaStatus === 'active') {
      trRef.current?.nodes([]);
    }
  };

  // TODO: ts
  const handleCut = (clipInfo: any, rotation: number) => {
    setImage(clipInfo, rotation);
    handleSelectTool(null);
  };

  const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if ((['Blur', 'Pencil'] as any).includes(activeTool)) {
      handleDrawStart();
    } else if (e.target.className === 'Text') {
      e.target.moveTo(scaleGroup.current!);
      trRef.current?.nodes([e.target]);
    } else if (e.target === currentImage.current) {
      trRef.current?.nodes()[0]?.moveTo(clipGroup.current);
      trRef.current?.nodes([]);
    }
  };

  const handleTouchStart = (e: Konva.KonvaEventObject<TouchEvent>) => {
    if ((['Blur', 'Pencil'] as any).includes(activeTool)) {
      handleDrawStart();
    } else if (e.target.className === 'Text') {
      e.target.moveTo(scaleGroup.current!);
      trRef.current?.nodes([e.target]);
    }
  };

  const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    e.evt.preventDefault();
    if ((['Blur', 'Pencil'] as any).includes(activeTool)) {
      handleDraw();
    }
  };

  const handleTouchMove = (e: Konva.KonvaEventObject<TouchEvent>) => {
    e.evt.preventDefault();
    if ((['Blur', 'Pencil'] as any).includes(activeTool)) {
      handleDraw();
    } else if (e.evt.touches.length > 1) {
      const touchTarget = trRef.current!.nodes()[0] as Konva.Text;
      touchTarget.draggable(false);
      const touch1 = e.evt.touches[0];
      const touch2 = e.evt.touches[1];
      if (stage.current?.isDragging()) {
        stage.current?.stopDrag();
      }

      const p1 = {
        x: touch1.clientX,
        y: touch1.clientY,
      };

      const p2 = {
        x: touch2.clientX,
        y: touch2.clientY,
      };

      const dist = getDistance(p1, p2);

      if (!lastDist.current) {
        lastDist.current = dist;
        lastTextScale.current = touchTarget.scaleX();
      }

      let rotaio = (dist / lastDist.current - 1) * 0.8 + 1;
      const scale = lastTextScale.current * rotaio;
      touchTarget.scaleX(scale);
      touchTarget.scaleY(scale);
    }
  };

  const handleMouseUp = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if ((['Blur', 'Pencil'] as any).includes(activeTool)) {
      handleDrawEnd();
    }
  };

  const handleTouchEnd = (e: Konva.KonvaEventObject<TouchEvent>) => {
    if ((['Blur', 'Pencil'] as any).includes(activeTool)) {
      handleDrawEnd();
    }

    const touchTarget = trRef.current!.nodes()[0] as Konva.Text;
    if (touchTarget && touchTarget.scaleX() > lastTextScale.current) {
      const index = touchTarget.attrs.id.slice(-1);
      setTexts((preTexts) => {
        preTexts[index].scaleX = touchTarget.scaleX();
        preTexts[index].scaleY = touchTarget.scaleY();
        return [...preTexts];
      });
    }
    touchTarget?.draggable(true);
    lastDist.current = 0;
    lastTextScale.current = 1;
  };

  useEffect(() => {
    deleteAreaRef.current = stage.current?.findOne('#delete-area') as Konva.Group;
  }, []);

  return (
    <StageContainer
      style={{
        width,
        height,
      }}
    >
      <Stage
        ref={stage}
        width={width}
        height={height}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleTouchEnd}
      >
        <Layer ref={layer}>
          {/* scale group */}
          <Group
            ref={scaleGroup}
            x={groupX}
            y={groupY}
            width={group.width}
            height={group.height}
            scale={{
              x: basicScaleRatio,
              y: basicScaleRatio,
            }}
            rotation={group.rotation}
          >
            <Group
              ref={clipGroup}
              clipX={clipRect.x}
              clipY={clipRect.y}
              clipHeight={clipRect.height}
              clipWidth={clipRect.width}
            >
              <Image ref={currentImage} image={image} width={group.width} height={group.height} />
              <Blurs currentBlur={currentBlurPos} />
              {texts.map((text, index) => (
                <Text
                  {...text}
                  key={index}
                  id={`text-${index}`}
                  x={text.x}
                  y={text.y}
                  draggable={true}
                  onDragMove={handleTextDragMove}
                  onDragEnd={handleTextDragEnd}
                />
              ))}
              {lines.map((line, index) => (
                <Line key={index} {...line} />
              ))}
            </Group>
          </Group>
          <Html
            groupProps={{
              id: 'delete-area',
              y: height - 120,
              x: width / 2 - 75,
              width: 150,
              height: 80,
            }}
          >
            <DeleteArea deleteAreaStatus={deleteAreaStatus}>
              <IconDelete></IconDelete>
              <div>Drag here to delete</div>
            </DeleteArea>
          </Html>
          <Transformer
            ref={trRef}
            rotateEnabled={false}
            resizeEnabled={false}
            anchorStroke='rgba(0,0,0,0)'
            anchorFill='rgba(0,0,0,0)'
            borderStroke='#ccc'
          />
        </Layer>
      </Stage>
      {activeTool === 'Cut' && <ClipStage onCutDone={handleCut} />}
      {activeTool === 'Words' && (
        <WordInput onDone={handleTextAdd} onCancel={() => handleSelectTool(null)} />
      )}
      {deleteAreaStatus === 'none' && <Toolbar />}
    </StageContainer>
  );
};

export default EditorStage;
