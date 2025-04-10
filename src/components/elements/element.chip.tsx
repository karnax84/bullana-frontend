import { Div, Image, LinkBase } from "components/base";
import styled from "styled-components";
import { AllProps } from "components/base/interface.base";
import { StatusContainer } from "./element.avatar";
import { formatXP } from "common/utils";
import { BsFillLightningChargeFill, BsTwitterX } from "react-icons/bs";
import { TxT2 } from "./element.box";
import { IconQuestBronze, IconQuestDiamond, IconQuestGold, IconQuestGrandmaster, IconQuestImmortal, IconQuestIron, IconQuestMaster, IconQuestPlatinum, IconQuestSilver, IconQuestChallenger, IconPoints } from "components/icons";

//XP chip
const ChipBgDiv = styled(Div)``;

ChipBgDiv.defaultProps = {
  display: 'inline-flex',
  position: "relative",
  backgroundColor: "#FFFFFF1A",
  minHeight: "25px",
  px: "8px"
};

const ChipTXT = styled(Div)`
font-family: 'Anybody', sans-serif;
font-size: 14px;
font-weight: 500;
line-height: 21px;
text-align: left;

`;

ChipTXT.defaultProps = {
  color: "bg_2"
};

export const XPTXT = styled(Div) <{ fSize?: string }>`
font-family: 'Sharpie', sans-serif;
font-size: ${(props) => props.fSize || "20px"};
font-style: italic;
font-weight: 700;
text-align: center;
`;
XPTXT.defaultProps = {
  color: '#0D1023'
};


export const GradientIconWrapper = styled.div<XPChipProps>`
  z-index: 2;
  width: ${(props) => props.size || '16px'};
  height: ${(props) => props.size || '16px'};
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(270deg, #FFDC2C 0%, #FFD60A 100%);
  mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 48"><path d="M15.588457268119896 2.9999999999999996Q20.784609690826528 0 25.98076211353316 2.9999999999999996L36.373066958946424 9Q41.569219381653056 12 41.569219381653056 18L41.569219381653056 30Q41.569219381653056 36 36.373066958946424 39L25.98076211353316 45Q20.784609690826528 48 15.588457268119896 45L5.196152422706632 39Q0 36 0 30L0 18Q0 12 5.196152422706632 9Z"></path></svg>');
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
  mask-position: center;
  /* For WebKit browsers */
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 48"><path d="M15.588457268119896 2.9999999999999996Q20.784609690826528 0 25.98076211353316 2.9999999999999996L36.373066958946424 9Q41.569219381653056 12 41.569219381653056 18L41.569219381653056 30Q41.569219381653056 36 36.373066958946424 39L25.98076211353316 45Q20.784609690826528 48 15.588457268119896 45L5.196152422706632 39Q0 36 0 30L0 18Q0 12 5.196152422706632 9Z"></path></svg>');
  -webkit-mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
`;

interface XPIconProps extends AllProps {
  size?: string;
  fSize?: string;
}

export const XPIcon: React.FC<XPIconProps> = ({
  size,
  fSize,
  ...props
}) => {
  return (
    <Div
      {...props}
      alignItems={"center"}
      justifyContent={"center"}
      zIndex={2}
      width={size || "32px"}
      height={size || "32px"}
      position={'relative'}>
      <Image
        position={'absolute'}
        src={require(`assets/image/xpbg.png`)} height={size || "32px"} minWidth={size || "32px"} />
      <XPTXT
        zIndex={3}
        fSize={fSize || "20px"}>Xp</XPTXT>
    </Div>
  );
};

interface XPChipProps extends AllProps {
  xp?: number;
  size?: string;
}
const ChipTXT1 = styled(Div)`
font-size: 12px;
font-weight: 600;
text-align: left;
`;
const ChipTXT2 = styled(Div)`
font-family: 'Sharpie', sans-serif;
font-size: 15px;
font-style: italic;
font-weight: 540;
text-align: left;
`;
const XPChipBgDiv = styled(Div)``;

XPChipBgDiv.defaultProps = {
  display: 'inline-flex',
  position: "relative",
  px: "8px"
};
export const XPChip: React.FC<XPChipProps> = ({
  xp,
  size,
  fontSize,
  ...props
}) => {
  return (
    <XPChipBgDiv
      {...props}
      alignItems={"center"}
      height={'32px'}>
      <XChipParallelDiv />
      <Div zIndex={2} alignItems={"center"}>
        <XPIcon fSize="12px" size="20px" />
        <ChipTXT2 ml={"5px"}>{formatXP(xp || 0)}</ChipTXT2>
      </Div>
    </XPChipBgDiv>
  );
};
export const XPProfileChip: React.FC<XPChipProps> = ({
  xp,
  size,
  fontSize,
  ...props
}) => {
  return (
    <ChipBgDiv
      {...props} alignItems={"center"}>
      <GradientIconWrapper size={"32px"}>
        <XPTXT fontSize={"14px"}>Xp</XPTXT>
      </GradientIconWrapper>
      <ChipTXT ml={"5px"}>{formatXP(xp || 0)}</ChipTXT>
    </ChipBgDiv>
  );
};

interface StatusChipProps extends AllProps {
  txt?: string;
}

export const StatusChip: React.FC<StatusChipProps> = ({
  txt,
  ...props
}) => {
  return (
    <ChipBgDiv
      alignItems={'center'}
      {...props}>
      <StatusContainer position={"relative"} size="17px" iconSize="14px" />
      <ChipTXT1 ml={"5px"}>{txt || 'Streak'}</ChipTXT1>
    </ChipBgDiv>
  );
};


const CircleDiv = styled(Div)``;
CircleDiv.defaultProps = {
  bg: "black",
  width: "20px",
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%"
};


interface StatusChipProps extends AllProps {
  txt?: string;
}
const XChipParallelDiv = styled.div`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333545;  /* Set the background color */
  transform: skew(-15deg);     /* Skew the background */
  z-index: 1;  
`;
const ChipBgDiv1 = styled(Div)`
font-family: 'Anybody', sans-serif;
font-size: 14px;
font-weight: 400;
text-align: left;
`;

ChipBgDiv1.defaultProps = {
  display: 'inline-flex',
  position: "relative",
  maxHeight: "25px",
  px: "8px"
};
export const XChip: React.FC<StatusChipProps> = ({
  txt,
  ...props
}) => {
  return (
    <ChipBgDiv1
      px={"15px"}
      py={"3px"}
      alignItems={"center"}
      {...props}>
      <XChipParallelDiv />
      <Div
        zIndex={2}
        alignItems={"center"}>
        <BsTwitterX size={"15px"} />
        <LinkBase href={`https://x.com/${txt}`} target="_blank" ml={"3px"}>@{txt || 'username'}</LinkBase>
      </Div>
    </ChipBgDiv1>
  );
};
const iconMap: { [key: string]: (size: string) => React.ReactNode } = {
  Iron: (size) => <IconQuestIron size={size} />,
  Bronze: (size) => <IconQuestBronze size={size} />,
  Silver: (size) => <IconQuestSilver size={size} />,
  Gold: (size) => <IconQuestGold size={size} />,
  Platinum: (size) => <IconQuestPlatinum size={size} />,
  Diamond: (size) => <IconQuestDiamond size={size} />,
  Master: (size) => <IconQuestMaster size={size} />,
  Grandmaster: (size) => <IconQuestGrandmaster size={size} />,
  Immortal: (size) => <IconQuestImmortal size={size} />,
  Challenger: (size) => <IconQuestChallenger size={size} />,
  // Add other type mappings here
};

interface XStatusChipProps extends AllProps {
  txt: string;
}

export const XStatusChip: React.FC<XStatusChipProps> = ({
  txt,
  ...props
}) => {
  return (
    <ChipBgDiv1
      px={"10px"}
      py={"3px"}
      alignItems={'center'}
      {...props}>
      <XChipParallelDiv />
      <Div zIndex={2} alignItems={'center'}>
        {iconMap[txt]("1em")}
        <TxT2 ml={"5px"}>{txt}</TxT2>
      </Div>
    </ChipBgDiv1>
  );
};


const ChipParallelDiv = styled.div`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #DFFF2C;  /* Set the background color */
  transform: skew(-20deg);     /* Skew the background */
  z-index: 1;  
`;
const ChipBgDiv2 = styled(Div)``;

ChipBgDiv2.defaultProps = {
  display: 'inline-flex',
  position: "relative",
  minHeight: '25px',
  px: "8px"
};

export const PostChip: React.FC<StatusChipProps> = ({
  txt,
  ...props
}) => {
  return (
    <ChipBgDiv2
      alignItems={"center"}
      px={"10px"}
      right={["5px", "5px", "0px", "0px"]}
      top={["-5px", "-5px", "0px", "0px"]}
      position="absolute"
      {...props}>
      <ChipParallelDiv />
      <Div zIndex={2} alignItems={"center"}>
        <IconPoints color="#000317" secondColor="#DFFF2C" size={"15px"} />
        <ChipTXT width={"max-content"} ml={"5px"}>{txt}</ChipTXT>
      </Div>
    </ChipBgDiv2>
  );
};

export const ProfilePostChip: React.FC<StatusChipProps> = ({
  txt,
  ...props
}) => {
  return (
    <ChipBgDiv2
      alignItems={"center"}
      px={"7px"}
      right={["10px", "10px", "10px", "10px"]}
      top={["10px", "10px", "0px", "0px"]}
      position={["absolute", "absolute", "relative", "relative"]}
      {...props}>
      <ChipParallelDiv />
      <Div zIndex={2} alignItems={"center"}>
        <IconPoints color="#000317" secondColor="#DFFF2C" size={"15px"} />
        <ChipTXT width={"max-content"} ml={"0.5em"}>{txt}</ChipTXT>
      </Div>
    </ChipBgDiv2>
  );
};

const HeaderChipBgDiv = styled(Div)``;

HeaderChipBgDiv.defaultProps = {
  display: 'inline-flex',
  position: "relative",
  px: "8px"
};
const HeaderChipParallelDiv = styled.div`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #191C2E;  /* Set the background color */
  transform: skew(-20deg);     /* Skew the background */
  z-index: 1;  
`;

const HeaderChipTXT = styled(Div)`
font-family: 'Anybody', sans-serif;
font-size: 14px;
font-weight: 500;
line-height: 21px;
text-align: left;
`;


export const PostHeaderChip: React.FC<StatusChipProps> = ({
  txt,
  ...props
}) => {
  return (
    <HeaderChipBgDiv
      alignItems={"center"}
      px={"10px"}
      height={"25px"}
      {...props}>
      <HeaderChipParallelDiv />
      <Div zIndex={2} alignItems={"center"}>
        <IconPoints color="#DFFF2C" secondColor="#191C2E" size={"15px"} />
        <HeaderChipTXT width={"max-content"} ml={"5px"}>{txt}</HeaderChipTXT>
      </Div>
    </HeaderChipBgDiv>
  );
};

//XP chip
const RewardPostChipDiv = styled(Div)``;

RewardPostChipDiv.defaultProps = {
  backgroundColor: "#FFFFFF33",
  px: "8px"
};

const RewardChipTXT = styled(Div)`
// font-family: 'Anybody ExtraCondensed', sans-serif;
font-family: Inter;
font-size: 12px;
font-weight: 600;
text-align: left;
`;
const RewardChipTXT1 = styled(Div)`
font-family: 'Sharpie', sans-serif;
font-size: 12px;
font-style: italic;
font-weight: 540;
text-align: left;

`;


export const RewardPostChip: React.FC<StatusChipProps> = ({
  txt,
  ...props
}) => {
  return (
    <RewardPostChipDiv
      alignItems={"center"}
      p={"5px"}
      right={["5px", "5px", "0px", "0px"]}
      top={["5px", "5px", "0px", "0px"]}
      {...props}>
      <BsFillLightningChargeFill color="#FFD60A" size={"12px"} />
      <RewardChipTXT width={"max-content"} mx={"5px"}><RewardChipTXT1>{txt}</RewardChipTXT1> &nbsp;&nbsp;Pts</RewardChipTXT>
    </RewardPostChipDiv>
  );
};