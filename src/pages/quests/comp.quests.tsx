import { IconButton, Input, useToast } from "@chakra-ui/react";
import { IDailyQuest, IGrandQuest } from "common/types/types.quests";
import { Div, LinkBase } from "components/base";
import { styled } from "styled-components";
import { RxCopy } from "react-icons/rx";
import { SlArrowRight } from "react-icons/sl";
import { AllProps } from "components/base/interface.base";

export const QuestTXT1 = styled(Div)`
font-family: Fragment Mono;
font-size: 10px;
font-weight: 400;
letter-spacing: 1px;
`;
QuestTXT1.defaultProps = {
    color: "bg_3",
};


export const QuestTXT2 = styled(Div)`
font-family: 'Anybody', sans-serif;
font-size: 16px;
font-weight: 400;
text-align: left;
`;
QuestTXT2.defaultProps = {
};



export const QuestTXT3 = styled(Div)`
font-family: 'Anybody', sans-serif;
font-size: 14px;
font-weight: 400;
text-align: left;
`;
QuestTXT3.defaultProps = {
    color: "bg_3",
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
    hoverColor?: string;
    gradient?: boolean;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    children?: React.ReactNode;
}

const CreateBtn: React.FC<NormalBtnProps> = ({
    height,
    bgColor,
    hoverColor,
    onClick,
    children,
    gradient,
    ...props
}) => {
    return (
        <NormalBtnDiv
            onClick={onClick}
            backgroundColor={bgColor}
            hoverColor={hoverColor}  // Pass hoverColor prop
            {...props}
        >
            <NormalButtonParallelDiv gradient={gradient} />
            <Div width={"100%"} height={height || "40px"} alignItems={"center"} justifyContent={"center"} zIndex={2}>
                {children}
            </Div>
        </NormalBtnDiv>
    );
};

export const GrandDiv = styled(Div)`

overflow-x: auto; /* Allows horizontal scrolling */
  overflow-y: hidden; /* Hides vertical overflow */
  scroll-behavior: smooth;
  width: 100%;
  position: relative;
  display: flex; /* Align children horizontally */
  flex-wrap: nowrap; /* Prevents wrapping of child elements */
`;

const CardBgDiv = styled(Div)`
 `;

CardBgDiv.defaultProps = {
    backgroundColor: "#191C2E",
    p: "1em",
    flexDirection: "column",
    minHeight: "158px",
    height: "100%"
    // width: "300px",
    // maxWidth: "300px"
};

const CardIconDiv = styled(Div)`
    background-color: #000317;
    width: 72px;
    height: 72px;
    min-width: 72px;
    // padding: 25px;
    align-items: center;
    justify-content: center;
`;

const UnderReviewChip = styled(Div)`
    align-items: center;
    justify-content: center;
    min-height: 25px;
    font-family: 'Anybody', sans-serif;
    font-size: 11px;
    font-weight: 400;
    background: #000317;
    color: #1DF7FF;
    padding: 0 10px;
`;
const DeclinedChip = styled(Div)`
    align-items: center;
    justify-content: center;
    min-height: 25px;
    font-family: 'Anybody', sans-serif;
    font-size: 11px;
    font-weight: 400;
    background: #26111A;
    color: #FF6227;
    padding: 0 10px;
`;
const AcceptedChip = styled(Div)`
    align-items: center;
    justify-content: center;
    min-height: 25px;
    font-family: 'Anybody', sans-serif;
    font-size: 11px;
    font-weight: 400;
    background: #0B2821;
    color: #49FF54;
    padding: 0 10px;
`;

interface GrandCardProps {
    grand: IGrandQuest;
    active: number;
    pending: number;
    declined: number;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const GrandCard: React.FC<GrandCardProps> = ({
    grand,
    active,
    pending,
    declined,
    onClick,
    ...props
}) => {
    return (
        <CardBgDiv
            justifyContent={'space-between'}
            {...props}>
            <Div>
                <CardIconDiv>
                    {grand.icon}
                </CardIconDiv>
                <Div
                    flexDirection={"column"}
                    width={"100%"}
                    pl={"1em"}>
                    <QuestTXT2>{grand.title}</QuestTXT2>
                    <QuestTXT3 mt={"5px"}>{grand.desc}</QuestTXT3>
                    <Div flexWrap={'wrap'} rowGap={'5px'} columnGap={'5px'} mb={"5px"}>
                        {pending > 0 && <UnderReviewChip>{`Under review (${pending})`}</UnderReviewChip>}
                        {active > 0 && <AcceptedChip>{`Active (${active})`}</AcceptedChip>}
                        {declined > 0 && <DeclinedChip>{`Declined(${declined})`}</DeclinedChip>}
                    </Div>
                </Div>
            </Div>
            <Div width={"100%"} px="5px">
                <CreateBtn height="40px" gradient={true} onClick={onClick}>CREATE</CreateBtn>
            </Div>
        </CardBgDiv>
    );
};

interface GrandReferralCardProps {
    grand: IGrandQuest;
    activated: boolean;
    link: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const GrandReferralCard: React.FC<GrandReferralCardProps> = ({
    grand,
    activated,
    link,
    onClick,
    ...props
}) => {
    const toast = useToast();
    const copyClipboard = async () => {
        try {
            await navigator.clipboard.writeText(link);
            toast({ description: 'copied to clipboard', duration: 1000, })
        } catch (err) {
        }

    }
    return (
        <CardBgDiv
            justifyContent={'space-between'}
            {...props}>
            <Div>
                <CardIconDiv>
                    {grand.icon}
                </CardIconDiv>
                <Div
                    flexDirection={"column"}
                    width={"100%"}
                    pl={"1em"}>
                    <QuestTXT2>{grand.title}</QuestTXT2>
                </Div>
            </Div>
            {activated ?
                <Div >
                    <Input
                        value={link}
                        mr={2}
                        isReadOnly={true}
                    />
                    <IconButton aria-label='Search database' backgroundColor={'#DFFF2C'} color={'black'} icon={<RxCopy />} onClick={() => copyClipboard()} />
                </Div>
                :
                <Div width={"100%"} px="5px">
                    <CreateBtn height="40px" gradient={true} onClick={onClick}>CREATE</CreateBtn>
                </Div>
            }
        </CardBgDiv>
    );
};


const CardBgDiv1 = styled(Div)`
 `;

CardBgDiv1.defaultProps = {
    backgroundColor: "#191C2E",
    p: "1em",
    flexDirection: "column",
};

const CardIconDiv1 = styled(Div)`
    background-color: #000317;
    width: 62x;
    height: 62px;
    min-width: 62px;
    align-items: center;
    justify-content: center;
`;


interface DailyCardProps {
    daily: IDailyQuest,
    btnTxt?: string,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const DailyCard: React.FC<DailyCardProps> = ({
    daily,
    btnTxt,
    onClick,
    ...props
}) => {
    return (
        <CardBgDiv1
            justifyContent={'space-between'}
            {...props}>
            <Div>
                <CardIconDiv1>
                    {daily.icon}
                </CardIconDiv1>
                <Div
                    pl={"1em"}
                    width={"100%"}
                    justifyContent={"space-between"}>
                    <Div flexDirection={"column"}>
                        <QuestTXT2>{daily.title}</QuestTXT2>
                        <QuestTXT3>{daily.desc}</QuestTXT3>
                    </Div>
                    <LinkBase href={daily.link} color={"bg_3"} target="_blank"><SlArrowRight size={"15px"} /></LinkBase>
                </Div>
            </Div>
            <Div width={"100%"} mt={"1.5em"} px="5px">
                    <CreateBtn height="40px" onClick={onClick}>{btnTxt || 'Confirm'}</CreateBtn>
                </Div>
        </CardBgDiv1>
    );
};
