import { Div, Image } from "components/base";
import styled from "styled-components";
import { AllProps } from "components/base/interface.base";
import { AvatarStatusContainer } from "./element.avatar";
import { GradientIconWrapper, StatusChip, XPChip, XPTXT } from "./element.chip";
import { ProgressBar } from "./element.progressbar";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IUserData } from "common/types/types.profile";

//My Status card
const StatusCardBgDiv = styled(Div)``;

StatusCardBgDiv.defaultProps = {
  backgroundColor: "bg_1",
  borderRadius: "14px",
  width: "100%",
  p: "1em",
};

const StatusTXT = styled(Div)``;
StatusTXT.defaultProps = {
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "24px",
  textAlign: "left"
};

export const NameTXT = styled(Div)``;
NameTXT.defaultProps = {
  fontSize: "16px",
  fontWeight: "600",
  textAlign: "left"
};


interface MyStatusCardProps extends AllProps {
  title?: string;
  user?: IUserData;
  onClick?: (arg: any) => any;
}

export const MyStatusCard: React.FC<MyStatusCardProps> = ({
  title,
  user,
  onClick,
  ...props
}) => {
  return (
    <StatusCardBgDiv
      alignItems={"flex-start"}
      position={"relative"}
      flexDirection={"column"}
      {...props}>
      <StatusTXT>
        {title || "My status"}
      </StatusTXT>
      <Div py={"1em"}>
        <AvatarStatusContainer src={user?.avatar} rank={user?.rank} />
        <Div pl={"1em"} flexDirection={"column"} justifyContent={"center"}>
          <NameTXT>{user?.displayName}</NameTXT>
          <Div flexWrap={"wrap"}>
            <XPChip xp={user?.points} />
            {user?.rank !== 'none' && <StatusChip ml={"5px"} txt={user?.rank} />}
          </Div>
        </Div>
      </Div>
      <Div width={"100%"}>
        <GradientIconWrapper size={"32px"}>
          <XPTXT fontSize={"14px"}>Xp</XPTXT>
        </GradientIconWrapper>
        <ProgressBar valuePercentage={user?.percentage || 0} xp={user?.xp}/>
      </Div>
    </StatusCardBgDiv>
  );
};


//guest card

const CardBgDiv = styled(Div)`
box-shadow: -10px 13px 10.2px 0px #00000033;
`;

CardBgDiv.defaultProps = {
  backgroundColor: "bg_1",
  borderRadius: "14px",
  width: "120px",
  p: "10px",
};

const IconDiv = styled(Div)`
  background: #FFFFFF1A;
  padding: 10px;
  border-radius: 8px;
`;
const GuestTXT = styled(Div)``;
GuestTXT.defaultProps = {
  fontSize: "11px",
  fontWeight: "500",
  textAlign: "left",
  color: "bg_6",
};

interface GuestCardProps extends AllProps {
  guests?: number;
}
export const GuestCard: React.FC<GuestCardProps> = ({
  guests,
  ...props
}) => {
  return (
    <CardBgDiv
      {...props}>
      <IconDiv>
        <BsFillLightningChargeFill color="#FFD60A" />
      </IconDiv>
      <Div flexDirection={"column"} pl={"1em"}>
        <GuestTXT>Points</GuestTXT>
        <NameTXT fontSize={14}>{guests || 0}</NameTXT>
      </Div>
    </CardBgDiv>
  );
};
