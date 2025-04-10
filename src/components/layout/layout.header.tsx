import styled from "styled-components";
import {
  Div,
  ContainerFluid,
  LinkBase,
  ContainerMin,
} from "components/base";
import { useNavigate, useLocation } from "react-router-dom";
import { DrawerLink, NavLink } from "components/elements/element.box";
import { NAV_LINKS } from "./com.layout";
import { IconMenu } from "components/icons";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react'
import {  PostHeaderChip } from "components/elements/element.chip";
import { AvatarContainer2 } from "components/elements/element.avatar";
import { useAccount } from "common/hooks/hook.xapp";
import { formatNumber } from "common/utils";

const HeaderOutWrapper = styled(ContainerFluid)``;
HeaderOutWrapper.defaultProps = {
  flexDirection: "column",
  position: 'fixed',
  zIndex: 100,
  justifyContent: "center",
  height: "75px",
  backgroundColor: "bg_2",
  borderBottom: "1px solid #333333"
};

const HeaderInWrapper = styled(ContainerMin)``;
HeaderInWrapper.defaultProps = {
  py: "1em",
  height: "100%",
  alignItems: "center",
  justifyContent: ["space-between", "space-between", "space-between", "center"],
  alignContent: "center",
  display: "flex",
};

const LogoWrapper = styled(LinkBase)``;
LogoWrapper.defaultProps = {
  gridArea: "1 / 1 / 2 / 2",
};

const MenuWrapper = styled(Div)``;
MenuWrapper.defaultProps = {
  flex: "1",
  gridArea: [
    "2 / 1 / 3 / 3",
    "2 / 1 / 3 / 3",
    "2 / 1 / 3 / 3",
    "1 / 2 / 2 / 3",
  ],
  flexDirection: ["column", "column", "column", "row"],
  columnGap: "1.5em",
  alignItems: "center",
  rowGap: "1em",
  overflowY: ["hidden", "hidden", "hidden", "visible"],
  transition: "300ms",
};

const MenuController = styled(LinkBase)``;
MenuController.defaultProps = {
  gridArea: "1 / 2 / 2 / 3",
  display: ["flex", "flex", "flex", "none"],
  fontSize: "1.5em",
  color: "white"
};

const MenuIcon = styled(LinkBase)``;
MenuIcon.defaultProps = {
  mr: "1em",
  fontSize: "1.5em",
  color: "color_1"
};


const LayoutHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAccount();
  

  return (
    <>
      <HeaderOutWrapper>
        <HeaderInWrapper>
          <MenuController onClick={onOpen}>
            <IconMenu size="26px" color={isOpen ? "#DFFF2C" : "#666874"}/>
          </MenuController>
          <Div
            alignItems={"center"}
            height={"100%"}
            display={["none", "none", "none", "flex"]}
          >
            {NAV_LINKS.map((val, index) =>
              <NavLink
                key={index}
                onClick={() => navigate(val.to)}
                active={location.pathname.slice(1) === val.to}>
                {val.name}
              </NavLink>)}
          </Div>
          <Div
            display={["flex", "flex", "flex", "none"]}
            alignItems={"center"}>
            <PostHeaderChip txt={formatNumber(user?.points!) + " PTS"} mr={"10px"} />
            <AvatarContainer2 size="42px" src={user?.avatar}/>
          </Div>
        </HeaderInWrapper>
      </HeaderOutWrapper >
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay zIndex={50}/>
        <DrawerContent style={{ marginTop: "75px" }}>
          <DrawerBody>
            <Div
              width={"100%"}
              flexDirection={"column"}
            >
              {NAV_LINKS.map((val, index) =>
                <DrawerLink
                  mx={"10px"}
                  key={index}
                  onClick={() => {
                    onClose();
                    navigate(val.to);
                  }}
                  active={location.pathname.slice(1) === val.to}>
                  {val.name}
                </DrawerLink>)}
            </Div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LayoutHeader;
