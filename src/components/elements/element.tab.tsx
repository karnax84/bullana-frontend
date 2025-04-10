import { Div } from 'components/base';
import React, { useState, useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import { DividerLine } from './element.shape';

// Styled Components
const TabContainer = styled.div<{ type: boolean }>`
  display: flex;
  padding-left: ${(props) => props.type ? "1em" : "0px"};
  justify-content: ${(props) => props.type ? "flex-start" : "center"};
  overflow-x: auto;
  width: 100%;
`;

const TabItem = styled(Div) <{ selected?: boolean }>`
  color: ${(props) => props.selected ? "white" : "#888888"};
  background-color: ${(props) => props.selected ? "#191C2E" : "transparent"};
  padding-bottom: 0px;
  cursor: pointer;
  transition: color 0.3s, border-bottom 0.3s;
  min-width: 120px;
  font-family: 'Anybody ExtraCondensed', sans-seif;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 500;
  text-align: center;

`;

TabItem.defaultProps = {
  flexDirection: "column",
  alignItems: "center"
};



const TabBottomLine = styled(Div)``;
TabBottomLine.defaultProps = {
  background: "#DFFF2C",
  maxHeight: "2px",
  minHeight: "2px",
  width: "100%",
};

// TypeScript Interfaces
interface TabProps {
  children: ReactNode;
  type?: boolean;
  bottomDisable?: boolean;
  onTabSelected?: (index: number) => void;
}

interface TabItemProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  children?: ReactNode; // Include children here
}

// Tab Component
const Tab: React.FC<TabProps> = ({ children, onTabSelected, type, bottomDisable }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const bottomFlag = bottomDisable || false;
  useEffect(() => {
    if (onTabSelected) {
      onTabSelected(selectedTabIndex);
    }
  }, [selectedTabIndex, onTabSelected]);

  return (
    <>
      <TabContainer type={type || false}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type === TabItemComponent) {
            return React.cloneElement(child, {
              onClick: () => setSelectedTabIndex(index),
              selected: selectedTabIndex === index,
            } as TabItemProps);
          }
          return null;
        })}
      </TabContainer>
      {!bottomFlag && <DividerLine />}
      {React.Children.map(children, (child, index) =>
        selectedTabIndex === index && React.isValidElement(child) ? child.props.children : null
      )}
    </>
  );
};

// TabItem Component
const TabItemComponent: React.FC<TabItemProps> = ({ label, selected, onClick, children }) => (
  <TabItem selected={selected} onClick={onClick}>
    <Div px={"30px"} py={"5px"}>{label}</Div>
    {selected && <TabBottomLine />}
  </TabItem>
);

export { Tab, TabItemComponent as TabItem };
