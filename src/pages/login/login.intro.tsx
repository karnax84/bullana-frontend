import { ContainerFluid, Div, Image } from "components/base";
import { GuestCard, MyStatusCard } from "components/elements/element.card";
import { styled } from "styled-components";

const IntroTXT = styled(Div)``;
IntroTXT.defaultProps = {
  fontSize: ["30px", "36px", "42px", "42px"],
  fontWeight: "600",
  textAlign: "left",
  color: "#FFFFFF80"
};


const CardBgDiv = styled(Div)`
box-shadow: 16px -16px 10.2px 0px #00000033;
`;

CardBgDiv.defaultProps = {
  backgroundColor: "bg_1",
  borderRadius: "14px",
  width: "163px",
  p: "1em",
};

const SuggenstCardBgDiv = styled(Div)`
box-shadow: 16px -16px 10.2px 0px #00000033;
`;

SuggenstCardBgDiv.defaultProps = {
  backgroundColor: "bg_1",
  borderRadius: "14px",
  width: "180px",
  p: "1em",
};

const IntroTXT1 = styled(Div)``;
IntroTXT1.defaultProps = {
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "22.4px",
  textAlign: "left",
  color: "#F659F7",
  display: "inline"
};

const IntroTXT2 = styled(Div)``;
IntroTXT2.defaultProps = {
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "22.4px",
  textAlign: "left",
  color: "white",
  display: "inline"
};

const IntroTXT3 = styled(Div)``;
IntroTXT3.defaultProps = {
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "22.4px",
  textAlign: "left",
  color: "#01E4FE",
  display: "inline"
};


const LoginIntro = () => {

  return (
    <ContainerFluid
      flexDirection={"column"}
      height={"100%"}
      p={["0.5em", "1em", "2em", "2em"]}
    >
      <IntroTXT width={"100%"}>Track your <br /> progress</IntroTXT>
      <ContainerFluid
        m={"1em"}
        position={"relative"}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"center"}>
        <MyStatusCard
          mt={"-10%"}
          width={"60%"}/>
        <GuestCard
          position={"absolute"}
          top={"10%"}
          right={"8%"}
        />
        <CardBgDiv position={"absolute"}
          bottom={"13%"}
          left={"5%"}>
          <IntroTXT1>Personalized dashboard <IntroTXT2>to see your points.</IntroTXT2></IntroTXT1>
        </CardBgDiv>
        <SuggenstCardBgDiv position={"absolute"}
          bottom={"5%"}
          right={"0%"}>
          <IntroTXT2>Suggested actions <IntroTXT3>earn more.</IntroTXT3></IntroTXT2>
        </SuggenstCardBgDiv>
      </ContainerFluid>
    </ContainerFluid>
  );
};
export default LoginIntro;
