import { ContainerFluid, Div, Image } from "components/base";
import { styled } from "styled-components";

const IntroTXT = styled(Div)``;
IntroTXT.defaultProps = {
  fontSize: ["30px", "36px", "42px", "42px"],
  fontWeight: "600",
  textAlign: "left",
  color: "#FFFFFF80"
};
interface MyStatusCardProps {
  children: React.ReactNode;
  imgurl?: string;
}

export const LoginIntroImage: React.FC<MyStatusCardProps> = ({
  imgurl,
  children,
  ...props
}) => {
  return (
    <ContainerFluid
      flexDirection={"column"}
      height={"100%"}
      p={["0.5em", "1em", "2em", "2em"]}
      {...props}
    >
      <ContainerFluid
        position={"relative"}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"center"}>
        <Image
          height={"100%"}
          src={imgurl || require(`assets/image/login/intro_1.png`)} />
      </ContainerFluid>
    </ContainerFluid>
  );
};
