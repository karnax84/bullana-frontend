import { Button, ContainerFluid, ContainerFluidMin, Div, Image } from "components/base";
import { styled } from "styled-components";
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from "../../components/elements/element.carousel";
import LoginIntro from "./login.intro";
import { LoginXBtn } from "components/elements/element.button";
import { BACKEND_API_URL } from "common/config";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LoginIntroImage } from "./login.imageintro";
import { useEffect } from "react";
import { useAccount } from "common/hooks/hook.xapp";
import { IBackendApiCallBaseResponse } from "common/types/types.backend";
import { fetchCheckReferralCode } from "common/utils/backends/utils.backends.quests";
import bgImage from 'assets/image/bg.png';
import { IconBullana } from "components/icons";

const IntroDiv = styled(Div)``;
IntroDiv.defaultProps = {
  width: "100%",
  backgroundColor: "bg_1",
  p: "1em",
};

const CarouselDiv = styled(Div)``;
CarouselDiv.defaultProps = {
  backgroundColor: "bg_2",
};

const IntroTXT = styled(Div)`
  font-family: 'Anybody ExtraCondensed', sans-serif;
 `;
IntroTXT.defaultProps = {
  fontSize: "86px",
  fontWeight: "500",
  lineHeight: "86px",
  textAlign: "center"
};

const IntroTXT1 = styled(Div)`
text-transform: uppercase;
font-family: 'Fragment Mono', monospace;
`;
IntroTXT1.defaultProps = {
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "17px",
  textAlign: "center",
  color: "#98989DB2",
};

const IntroTXT2 = styled(Div)`
 font-family: 'Anybody', sans-serif;
 `;
IntroTXT2.defaultProps = {
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "25px",
  textAlign: "center",
  color: "#CCCDD1",

};

const TotalDiv = styled(ContainerFluid)`
    background-image: url(${bgImage});
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
  `;

const BottomTxT = styled(Div)`
 font-family: Fragment Mono;
font-size: 18px;
font-weight: 400;
text-align: left;
`;

const OPTIONS: EmblaOptionsType = {}

const LoginPage = () => {

  const navigate = useNavigate();
  const { showToast } = useAccount();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const referral = searchParams.get('referral');

  useEffect(() => {
    if (referral) {
      if (referral === "failed") {
        showToast("error", 'Invalid Action');
      }
    }
  }, [referral]);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
      navigate('/home');
    }
  }, [token])


  const handleLogin = async () => {
    if (referral) {
      const response: IBackendApiCallBaseResponse | null = await fetchCheckReferralCode(referral);
      if (response?.status === "success") {
        window.open(`${BACKEND_API_URL}auth/twitter?referralcode=${referral}`, "_self");
      } else {
        showToast("error", response?.message);
      }
    } else {
      window.open(`${BACKEND_API_URL}auth/twitter`, "_self");
    }
  }
  return (
    <TotalDiv
      flexDirection={"column"}
      minHeight={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}

    >
      <ContainerFluidMin p={["0em", "0em", "0.5em", "0.5em"]}>
        <IntroDiv flexDirection={[
          "column",
          "column",
          "row",
          "row",
        ]}>
          <CarouselDiv
            width={["100%", "100%", "60%", "60%"]}>
            <EmblaCarousel options={OPTIONS}>
              <LoginIntroImage> Engage and<br /> Earn Points</LoginIntroImage>
              <LoginIntroImage> Track your <br /> progress</LoginIntroImage>
              <LoginIntroImage> Compete and <br /> Climb the Leaderboard</LoginIntroImage>
              <LoginIntroImage> Redeem Rewards</LoginIntroImage>
            </EmblaCarousel>
          </CarouselDiv>
          <Div
            width={["100%", "100%", "40%", "40%"]}
            flexDirection={"column"}
            alignItems={"center"}
            p={"2em"}
            justifyContent={"flex-around"}>
            <Div
              width={"100%"}
              height={"100%"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              py={"2em"}>
              <Image
                height={["100px", "100px", "150px", "150px"]}
                alignSelf={"center"}
                src={require(`assets/image/login/welcome.png`)} />
              <IntroTXT2 p={"1em"} >Connect your X (Twitter) account to the Bullana.bet Launchpad and start your journey.</IntroTXT2>
              <LoginXBtn my={"2em"} onClick={() => handleLogin()} />
            </Div>
            <IntroTXT1 px={"1em"}>By using this platform you are accepting the Terms and Conditions and Privacy Policy.</IntroTXT1>
          </Div>
        </IntroDiv>
      </ContainerFluidMin>
      <Div
        position={'absolute'}
        bottom={'2em'}
        width={'100%'}
        overflow={'hidden'}
        alignItems={'center'}
        px={'2em'}
        display={['none', 'none', 'flex', 'flex']}>
        <IconBullana />
        <Div
          ml={'10em'}
          whiteSpace={'nowrap'}
          overflow={'hidden'} >
          {[...Array(20)].map((_, index) => (
            <BottomTxT key={index} mr={"3em"}>
              BULLANA.BET
            </BottomTxT>
          ))}
        </Div>
      </Div>
    </TotalDiv>
  );
};

export default LoginPage;