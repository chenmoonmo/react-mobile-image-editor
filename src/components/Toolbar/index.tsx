import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ComponentType, useContext, useState } from 'react';
import EditorContext from '../../utils/context/EditorContext';

const ToolNames = ['Pencil', 'Words', 'Cut', 'Blur', 'Recall'] as const;

export type ToolUnion = typeof ToolNames[number];

const ToolsMap: { icon: string; name: ToolUnion }[] = [
  { icon: '', name: 'Pencil' },
  { icon: '', name: 'Words' },
  { icon: '', name: 'Cut' },
  { icon: '', name: 'Blur' },
  { icon: '', name: 'Recall' },
];

const Toolbar: ComponentType = () => {
  const { activeTool, handleSelectTool } = useContext(EditorContext);

  const ToolbarContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
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
    ${(props) =>
      props.isActive &&
      css`
        color: #0096ff;
        background: #e6f5ff;
        box-shadow: 0px 0px 15px 0px rgba(0, 150, 255, 0.6);
        border-radius: 5px;
        border: 1px solid #0096ff;
      `}
    img {
      width: 20px;
      height: 20px;
      margin-bottom: 2px;
    }
  `);

  return (
    <ToolbarContainer>
      {ToolsMap.map((tool) => (
        <ToolbarItem
          key={tool.name}
          onClick={() => handleSelectTool(tool.name)}
          isActive={tool.name === activeTool}
        >
          <img src={tool.icon} alt='' />
          <span>{tool.name}</span>
        </ToolbarItem>
      ))}
    </ToolbarContainer>
  );
};

export default Toolbar;
