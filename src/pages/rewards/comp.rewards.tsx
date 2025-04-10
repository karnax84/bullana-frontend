import { ICard } from "common/types/types.rewards";
import { formatNumber } from "common/utils";
import { Div, LinkBase } from "components/base";
import { AllProps } from "components/base/interface.base";
import { TxT3 } from "components/elements/element.box";
import { NormalBtn } from "components/elements/element.button";
import { PostChip, RewardPostChip } from "components/elements/element.chip";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { styled } from "styled-components";


interface CatregoryProps {
    selected: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    children?: React.ReactNode;
}

const ParallelDiv = styled.div <{ selected: boolean }>`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ selected }) => (selected ? '#303B41' : 'none')};  
  border: 1px solid #303B41;
  transform: skew(-5deg);     /* Skew the background */
  z-index: 1;  
`;

const CategoryChipDivBase = styled(Div) <{ selected: boolean }>`
 position: relative;
  display: inline-flex;
  font-family: 'Anybody ExtraCondensed', sans-serif;
font-size: 14px;
font-weight: 500;
text-align: center;
  color: ${(props) => props.selected ? "#F3F3F3" : "#888888"};
    margin-right: 1em;
    padding: 2px 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const CategoryChipDiv: React.FC<CatregoryProps> = ({
    selected,
    onClick,
    children,
    ...props
}) => {
    return (
        <CategoryChipDivBase
            mx={"5px"}
            onClick={onClick}
            selected={selected}
            {...props}>
            <ParallelDiv selected={selected} />
            <Div position={'relative'} zIndex={2}>
                {children}
            </Div>

        </CategoryChipDivBase>
    );
};

const CardBgDiv = styled(Div)``;
CardBgDiv.defaultProps = {
    backgroundColor: "#191C2E",
    alignItems: "center",
    p: "5px",
    pl: "8px"
};

const IconDiv = styled(Div)`
  background: #000317;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const TxT1 = styled(Div)`
font-family: 'Anybody ExtraCondensed', sans-serif;
`;
TxT1.defaultProps = {
    fontSize: "14px",
    fontWeight: "500",
    textAlign: "left",
    color: "bg_6",
};

const TxT2 = styled(Div)`
font-family: 'Sharpie', sans-serif;
font-size: 18px;
font-style: italic;
font-weight: 540;
text-align: left;
`;
TxT2.defaultProps = {
};

const CardBgDiv1 = styled(Div)`
 `;

CardBgDiv1.defaultProps = {
    backgroundColor: "#000317",
    height: "150px"
};

const CardBgDiv2 = styled(Div)`
  background-color: #191C2E; 
`;
CardBgDiv2.defaultProps = {
    width: "100%",
    minHeight: "330px",
    flexDirection: "column",
    position: 'relative',
    justifyContent: 'center'
};
const CardParallelDiv = styled.div`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #191C2E;  /* Set the background color */
  transform: skew(-3deg);     /* Skew the background */
  z-index: 1;  
`;

const BtnTxT = styled(Div)``;
BtnTxT.defaultProps = {
    fontSize: "14px",
    fontWeight: "600",
    textAlign: "left"
};

const NormalButtonParallelDiv = styled.div<{ gradient?: boolean }>`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.gradient ? "linear-gradient(270deg, #E0FF2C 0%, #1DF7FF 100%)" : "#DFFF2C"};  
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


  &:hover > :first-child {
    box-shadow: 0px 8px 15px rgba(223, 255, 44, 0.6)
  }
`;
NormalBtnDiv.defaultProps = {
    display: 'inline-flex',
    width: '100%',
    position: "relative",
    color: "#000E15"
};

interface NormalBtnProps extends AllProps {
    height?: string;
    bgColor?: string;
    gradient?: boolean;
    hoverColor?: string;  // Add hoverColor prop
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    children?: React.ReactNode;
}

const RewardBtn: React.FC<NormalBtnProps> = ({
    height,
    gradient,
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
            <NormalButtonParallelDiv gradient={gradient || false} />
            <Div width={"100%"} height={height || "40px"} alignItems={"center"} justifyContent={"center"} zIndex={2}>
                {children}
            </Div>
        </NormalBtnDiv>
    );
};


interface PointsCardProps {
    points?: number;
}
export const PointsCard: React.FC<PointsCardProps> = ({
    points,
    ...props
}) => {
    return (
        <CardBgDiv
            {...props}>
            <IconDiv>
                <BsFillLightningChargeFill color="#FFD60A" size={"20px"} />
            </IconDiv>
            <Div flexDirection={"column"} px={"8px"}>
                <TxT1>Your Points</TxT1>
                <TxT2>{points || 102}</TxT2>
            </Div>
        </CardBgDiv>
    );
};

interface ExclusiveCardProps {
    card: ICard
}

export const ExclusiveCard: React.FC<ExclusiveCardProps> = ({
    card,
    ...props
}) => {
    return (
        <CardBgDiv2
            {...props}>
            <Div zIndex={2} flexDirection={'column'} width={"100%"} p={"1em"}>
                <CardBgDiv1 />
                <Div mt={"1em"} mb={"2.5em"} justifyContent={"space-between"} alignItems={"flex-start"}>
                    <TxT3 mr={"2em"}>{card.title}</TxT3>
                    <RewardPostChip txt={formatNumber(card.plus || 0)} />
                </Div>
                <RewardBtn gradient={true}>Claim Reward</RewardBtn>
            </Div>
        </CardBgDiv2>
    );
};


export const CommonCard: React.FC<ExclusiveCardProps> = ({
    card,
    ...props
}) => {
    return (
        <CardBgDiv2
            {...props}>
            <CardBgDiv1 />
            <Div mt={"1em"} mb={"2.5em"} flexWrap={"wrap"} justifyContent={"space-between"} alignItems={"flex-start"}>
                <TxT3>{card.title}</TxT3>
                <PostChip txt={formatNumber(card.plus || 0) + "Pts"} />
            </Div>
            <NormalBtn bgColor="#FFD60A"><TxT2 color={"#000E15"}>Claim Reward</TxT2></NormalBtn>
        </CardBgDiv2>
    );
};
