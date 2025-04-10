import { Div, Image } from 'components/base';
import React from 'react';
import { styled } from 'styled-components';
import { CountDownBox, PartnerShipCard } from './com.layout';
// import LayoutFooter from './layout.footer';

const LeftSideDiv = styled(Div)`
 border-right: 1px solid #333333;
 `;
LeftSideDiv.defaultProps = {
  flexDirection: "column",
  minHeight: "calc(100vh - 75px)",
  minWidth: "340px",
  maxWidth: "340px",
  p: "2em",
  pl: "0px",
  display: ["none", "none", "none", "flex"]
};

const LeftSideBar: React.FC<{}> = () => {

  return (
    <LeftSideDiv>
      <CountDownBox />
      <PartnerShipCard mt={"2em"} p={"1em"}/>
    </LeftSideDiv>
  );
};

export default LeftSideBar;
