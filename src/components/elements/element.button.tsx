import { Button, Div, Label, LinkBase } from "components/base";
import styled, { keyframes } from "styled-components";
import { BsTwitterX } from "react-icons/bs";
import Ripples from 'react-ripples';
import { AllProps } from "components/base/interface.base";
import { hexToRgba } from "../../common/utils/index";
import { useState } from "react";

interface IBtnBase {
  disabled?: boolean;
}
const BtnBase = styled(LinkBase) <IBtnBase>`
  transition: 300ms;
  opacity: ${(p) => (p.disabled ? "0.5" : "1")};
  pointer-events: ${(p) => (p.disabled ? "none" : "unset")};
  &:hover {
    box-shadow: 0 0 0.5em 0 currentColor inset;
  }
`;
BtnBase.defaultProps = {
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "#536471",
  px: "1.4em",
  py: "0.7em",
  whiteSpace: "nowrap",
  lineHeight: "1em",
  fontWeight: "500",
  columnGap: "0.5em",
  justifyContent: "center",
  alignItems: "center",
};


export const OutlineBtn = styled(BtnBase)``;
OutlineBtn.defaultProps = {
  px: ["0.8em", "0.8em", "0.8em", "1.4em"],
  py: ["0.4em", "0.4em", "0.4em", "0.7em"],
};

interface OutlineRadiusBtnProps extends AllProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
}
export const OutlineRadiusBtn: React.FC<OutlineRadiusBtnProps> = ({
  onClick,
  children,
  ...props
}) => {
  return (
    <Ripples>
      <OutlineBtn borderRadius={"24px"} onClick={onClick} {...props}>{children}</OutlineBtn>
    </Ripples>
  );
};
export const WarnBtn = styled(BtnBase)``;
WarnBtn.defaultProps = {
  borderWidth: ["1px", "2px"],
  bg: "color_danger",
  borderColor: "color_danger",
  color: "bg_1",
};

export const NormalBtnSm = styled(BtnBase)``;
NormalBtnSm.defaultProps = {
  bg: "color_1",
  color: "color_black",
  borderWidth: "1px",
  px: "1.2em",
  py: "0.6em",
  fontSize: "0.9em",
  fontWeight: "normal",
};

export const OutlineBtnSm = styled(BtnBase)``;
OutlineBtnSm.defaultProps = {
  bg: "bg_1",
  borderColor: "currentColor",
  color: "color_1",
  borderWidth: "1px",
  px: "1.2em",
  py: "0.6em",
  fontSize: "0.9em",
  fontWeight: "normal",
};

const ParallelDiv = styled.div`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #DFFF2C;  /* Set the background color */
  transform: skew(-15deg);     /* Skew the background */
  z-index: 1;  
`;
const XBtnDiv = styled(LinkBase)`
&:hover ${ParallelDiv} {
   box-shadow: 0px 8px 15px rgba(223, 255, 44, 0.6)
  }
`;
XBtnDiv.defaultProps = {
  position: "relative",
  display: "inline-flex",
  width: "100%",
  maxWidth: "340px",
  minWidth: "250px",
  justifyContent: 'center'
};

const CircleDiv = styled(Div)``;
CircleDiv.defaultProps = {
  bg: "black",
  width: "27px",
  height: "27px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%"
};

const Title1 = styled(Div)`
 font-family: 'Anybody ExtraCondensed', sans-serif;
 text-transform: uppercase;
`;
Title1.defaultProps = {
  fontSize: "24px",
  fontWeight: "500",
  textAlign: "center",
  color: "#000317"
};


interface LoginXBtnProps extends AllProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
}

export const LoginXBtn: React.FC<LoginXBtnProps> = ({
  onClick,
  children,
  ...props
}) => {
  return (
    <XBtnDiv
      onClick={onClick}
      {...props}>
      <ParallelDiv />
      <Div py={"8px"} alignItems={"center"} position={'relative'} zIndex={2}>
        <BsTwitterX color="#000317" size={"19px"} />
        <Title1 ml={"5px"}>login in with x (twitter)</Title1>
      </Div>
    </XBtnDiv>
  );
};


const NormalButtonParallelDiv = styled.div`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #DFFF2C;  /* Set the background color */
  transform: skew(-20deg);     /* Skew the background */
  z-index: 1;  
`;

interface NormalBtnDivProps {
  backgroundColor?: string;
  hoverColor?: string;
}

const NormalBtnDiv = styled(LinkBase) <NormalBtnDivProps>`
  display: inline-flex;
  width: 100%;
  font-family: 'Anybody ExtraCondensed', sans-serif;
  font-size: 20px;
  font-weight: 500;
  text-align: center;


  &:hover ${NormalButtonParallelDiv} {
    box-shadow: 0px 8px 15px rgba(223, 255, 44, 0.6)
  }
`;

NormalBtnDiv.defaultProps = {
  display: 'inline-flex',
  width: '100%',
  position: "relative",
  color: "#000E15"
};

const ResponsiveRipples = styled(Ripples)`
  width: 100%;
  display: block;
`;

interface NormalBtnProps extends AllProps {
  height?: string;
  bgColor?: string;
  hoverColor?: string;  // Add hoverColor prop
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
}

export const NormalBtn: React.FC<NormalBtnProps> = ({
  height,
  bgColor,
  hoverColor,
  onClick,
  children,
  ...props
}) => {
  return (
    <NormalBtnDiv
      onClick={onClick}
      backgroundColor={bgColor}
      hoverColor={hoverColor}  // Pass hoverColor prop
      {...props}
    >
      <NormalButtonParallelDiv />
      <Div width={"100%"} height={height || "40px"} alignItems={"center"} justifyContent={"center"} zIndex={2}>
        {children}
      </Div>
    </NormalBtnDiv>
  );
};

const NormalBtnDiv1 = styled(LinkBase)`
position: relative;
  display: inline-flex;
  overflow: hidden;
  border-radius: 30px;
  width: 100%;
  padding: 2px; // Creates the space for the border
  
  // Gradient border
  background: linear-gradient(90deg, #ED7EFE 0%, #02E5FE 100%);

  // Inner content style
  & > * {
    background-color: #5865F2; // Replace with the desired background
    border-radius: inherit; // Ensure inner content has the same border-radius
    width: 100%;
  }

  &:hover {
    background: linear-gradient(90deg, #a1a7f7 0%, #02E5FE 100%);
  }
`;
NormalBtnDiv1.defaultProps = {
  bg: "color_4",
  display: "inline-flex",
  overflow: "hidden",
  borderRadius: "30px",
  width: "100%"
};


interface GradientBtnnProps extends AllProps {
  height?: string;
  bgColor?: string;
  hoverColor?: string;  // Add hoverColor prop
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
}
export const GradientBtn: React.FC<GradientBtnnProps> = ({
  height,
  onClick,
  children,
  ...props
}) => {

  const [rippleActive, setRippleActive] = useState(false);
  const handleMouseDown = () => {
    setRippleActive(true);
  };

  const handleMouseUp = () => {
    setRippleActive(false);
  };
  return (
    <NormalBtnDiv1
      {...props}>
      <ResponsiveRipples>
        <Div width={"100%"} height={height || "40px"} alignItems={"center"} justifyContent={"center"} onClick={onClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="ripple-button">
          {children}
        </Div>
      </ResponsiveRipples>
    </NormalBtnDiv1>
  );
};

const NormalOutlineBtnParallelDiv = styled.div`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Set the background color */
  transform: skew(-20deg);     /* Skew the background */
  z-index: 1;  
  border-style: solid;
  border-width: 1px;
  border-color: #536471;
`;

interface NormalOutlineBtnProps extends AllProps {
  height?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
}

export const NormalOutlineBtn: React.FC<NormalOutlineBtnProps> = ({
  height,
  onClick,
  children,
  ...props
}) => {
  return (
    <NormalBtnDiv
      color={'white'}
      onClick={onClick}
      {...props}
    >
      <NormalOutlineBtnParallelDiv />
      <Div width={"100%"} height={height || "40px"} alignItems={"center"} justifyContent={"center"} zIndex={2}>
        {children}
      </Div>
    </NormalBtnDiv>
  );
};