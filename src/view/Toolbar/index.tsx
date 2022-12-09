import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ComponentType, ReactNode, useMemo } from 'react';

import { ReactComponent as IconPencil } from 'assets/icons/icon-pencil.svg';
import { ReactComponent as IconWords } from 'assets/icons/icon-words.svg';
import { ReactComponent as IconCut } from 'assets/icons/icon-cut.svg';
import { ReactComponent as IconBlur } from 'assets/icons/icon-blur.svg';
import { ReactComponent as IconRecall } from 'assets/icons/icon-recall.svg';
import useEditor from 'utils/hooks/useEditor';
import useHistory from 'utils/hooks/useHistory';
import useWordInput from 'utils/hooks/useWordInput';
import { ToolUnion } from 'utils/constants';

type ToolBarProps = {
  onAddText: (word: string) => unknown;
};

const ToolsMap: { icon: ReactNode; name: ToolUnion }[] = [
  { icon: <IconPencil />, name: 'Pencil' },
  { icon: <IconWords />, name: 'Words' },
  { icon: <IconCut />, name: 'Cut' },
  { icon: <IconBlur />, name: 'Blur' },
  { icon: <IconRecall />, name: 'Recall' },
];

const ToolContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 60px;
  background: linear-gradient(180deg, rgba(71, 71, 71, 0) 0%, #222222 100%);
`;

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 0;
`;

const ToolbarItem = React.memo(styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  line-height: 20px;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  svg {
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
    fill: #fff;
  }
  ${(props) =>
    props.isActive &&
    css`
      color: #0096ff;
      background: #e6f5ff;
      box-shadow: 0px 0px 15px 0px rgba(0, 150, 255, 0.6);
      border-radius: 5px;
      border: 1px solid #0096ff;
      svg {
        fill: #0096ff;
      }
    `}
`);

const ColorItem = styled.div<{ color: string; currentColor: string }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  ${(props) =>
    css`
      background: ${props.color};
      box-shadow: ${props.color === props.currentColor ? '0px 0px 4px 0px #0096ff' : 'none'};
      border: ${props.color === props.currentColor ? '1px solid #0096FF;' : '1px solid #FFFFFF'};
    `}
`;

const ColorSelector = styled.div`
  position: absolute;
  bottom: 130px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 30px;
`;

const Toolbar: ComponentType<ToolBarProps> = ({ onAddText }) => {
  const { activeTool, pencilConfig, editorColors, handleSelectTool, changeColor } = useEditor();

  const { undo } = useHistory();

  const { startInput } = useWordInput();

  const isColorSelectorShow = useMemo(() => {
    return ['Pencil'].includes(activeTool!);
  }, [activeTool]);

  const handleToolSelect = (tool: ToolUnion) => {
    switch (tool) {
      case 'Recall':
        undo();
        break;
      case 'Words':
        handleSelectTool('Words');
        startInput('', onAddText);
        break;
      case 'Cut':
        // onCutStart?.();
        handleSelectTool(tool);
        break;
      default:
        handleSelectTool(tool);
    }
  };

  return (
    <ToolContainer>
      {isColorSelectorShow && (
        <ColorSelector>
          {editorColors?.map((color) => (
            <ColorItem
              key={color}
              color={color}
              currentColor={pencilConfig.stroke}
              onClick={() => changeColor(color)}
            />
          ))}
        </ColorSelector>
      )}

      {activeTool !== 'Cut' && (
        <ToolbarContainer>
          {ToolsMap.map((tool) => (
            <ToolbarItem
              key={tool.name}
              onClick={() => handleToolSelect(tool.name)}
              isActive={tool.name === activeTool}
            >
              {tool.icon}
              <span>{tool.name}</span>
            </ToolbarItem>
          ))}
        </ToolbarContainer>
      )}
    </ToolContainer>
  );
};

export default Toolbar;
