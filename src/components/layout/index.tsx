import React from 'react';
import LayoutHeader from './layout.header';
import { Container, ContainerFluid, Div } from 'components/base';
import LeftSideBar from './layout.leftbar';
import RightSideBar from './layout.rightbar';
import { styled } from 'styled-components';
import LayoutFooter from './layout.footer';

const ConntentDiv = styled(Container)``;
ConntentDiv.defaultProps = {
  px: ["0em", "0em", "0em", "4.5em"],
};

const MainDiv = styled(Div)``;
MainDiv.defaultProps = {
  width: ["100%", "100%", "100%", "calc(100% - 680px)"],
  flexDirection: "column"
};


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <ContainerFluid>
      <LayoutHeader />
      <ConntentDiv mt={"75px"}>
        <LeftSideBar />
        <MainDiv>
          {children}
          <LayoutFooter/>
        </MainDiv>
        <RightSideBar />
      </ConntentDiv>
      {/* <LayoutFooter /> */}
    </ContainerFluid>
  );
};

export default Layout;
