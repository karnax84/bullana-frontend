import { IUser, IUserData } from "common/types/types.profile";
import { Div, LinkBase, Image } from "components/base";
import { AllProps } from "components/base/interface.base";
import {  AvatarContainer2 } from "components/elements/element.avatar";
import { GradientDiv, NormalDiv, TxT1, TxT2 } from "components/elements/element.box";
import {  IconAirdrop, IconPoints, IconReward } from "components/icons";
import { useEffect, useRef, useState } from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { styled } from "styled-components";
import { XPChip } from "components/elements/element.chip";
import { NormalBtn } from "components/elements/element.button";
import { FaDiscord } from "react-icons/fa";
import { formatXP } from "common/utils";
import { useNavigate } from "react-router-dom";

interface INavLink {
    name: string;
    to: string;

}

export const NAV_LINKS: INavLink[] = [
    {
        name: "Home",
        to: 'home',
    },
    // {
    //     name: "Explore",
    //     to: 'explore',
    // },
    // {
    //     name: "Notifications",
    //     to: 'notifications',
    // },
    {
        name: "Quests",
        to: 'quests',
    },
    {
        name: "Rewards",
        to: 'rewards',
    },
    {
        name: "Leaderboard",
        to: 'leaderboard',
    },
    {
        name: "Profile",
        to: 'profile',
    },
];


const BackDiv = styled(Div) <{ size: string }>`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    min-width: ${(props) => props.size};
    max-width: ${(props) => props.size};
    min-height: ${(props) => props.size};
    max-height: ${(props) => props.size};
    font-family: 'Sharpie', sans-serif;
    font-size: 32px;
    font-style: italic;
    font-weight: 540;
`;
BackDiv.defaultProps = {
    backgroundColor: "bg_2",
    alignItems: 'center',
    justifyContent: "center"
};

const TimerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-family: Arial, sans-serif;
  font-size: 2rem;
  color: #333;
`;

const TimeBox = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  color: white;
`;

const SpanBox = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  color: white;
  margin-top: 7px;
`;


const Label = styled(Div)``;
Label.defaultProps = {
    fontSize: "9px",
    fontWeight: "400",
    textAlign: "center",
    color: "#98989D",
    justifyContent: "center",
    mt: "5px"
};

interface CountDownBoxProps extends AllProps {
    hours?: number;
    minutes?: number;
    seconds?: number;
}

export const CountDownBox: React.FC<CountDownBoxProps> = ({
    hours = 1, minutes = 0, seconds = 0,
    ...props
}) => {
    const [time, setTime] = useState({ hours, minutes, seconds });
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            updateTime();
        }, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [time]); // Make sure to update the effect when time changes.

    const updateTime = () => {
        const { hours, minutes, seconds } = time;

        if (hours === 0 && minutes === 0 && seconds === 0) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        } else if (seconds > 0) {
            setTime((prevTime) => ({ ...prevTime, seconds: prevTime.seconds - 1 }));
        } else if (minutes > 0) {
            setTime((prevTime) => ({
                ...prevTime,
                minutes: prevTime.minutes - 1,
                seconds: 59,
            }));
        } else if (hours > 0) {
            setTime((prevTime) => ({
                ...prevTime,
                hours: prevTime.hours - 1,
                minutes: 59,
                seconds: 59,
            }));
        }
    };
    return (
        <GradientDiv flexDirection={"column"} {...props}
            maxWidth={"400px"}>
            <Div width={"100%"} mb={"10px"} alignItems={"center"}>
                <BackDiv size={"80px"}>
                    <IconAirdrop size={"66px"} />
                </BackDiv>
                <Div flexDirection={"column"} ml={"10px"}>
                    <TxT1>Big Airdrop Reward</TxT1>
                    <TxT2>Discover the latest news from Bullana.</TxT2>
                </Div>
            </Div>
            <TimerContainer>
                <TimeBox>
                    <BackDiv size="72px">{time.hours < 10 ? `0${time.hours}` : time.hours}</BackDiv>
                    <Label fontSize={"12px"}>HOURS</Label>
                </TimeBox>
                <SpanBox>:</SpanBox>
                <TimeBox>
                    <BackDiv size="72px">{time.minutes < 10 ? `0${time.minutes}` : time.minutes}</BackDiv>
                    <Label fontSize={"12px"}>MINUTES</Label>
                </TimeBox>
                <SpanBox>:</SpanBox>
                <TimeBox>
                    <BackDiv size="72px">{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</BackDiv>
                    <Label fontSize={"12px"}>SECONDS</Label>
                </TimeBox>
            </TimerContainer>
        </GradientDiv>
    );
};

const CardBgDiv = styled(Div)``;
CardBgDiv.defaultProps = {
    backgroundColor: "bg_1",
    borderRadius: "14px",
    p: "10px",
};

const IconDiv = styled(Div)`
  background: #000317;
  padding: 10px;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const GuestTXT = styled(Div)`
font-family: 'Anybody ExtraCondensed', sans-serif;
font-size: 16px;
font-weight: 500;
letter-spacing: 0.02em;
text-align: left;
`;

const PointsCardBgDiv = styled(Div)`
clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
`;
PointsCardBgDiv.defaultProps = {
    backgroundColor: "#191C2E",
    p: "10px",
    mr: "-10px"
};

const CardTxT1 = styled(Div)`
font-family: 'Sharpie', sans-serif;
font-size: 24px;
font-style: italic;
font-weight: 540;
text-align: left;
color: #DFFF2C;
`;
interface PointsCardProps extends AllProps {
    points?: number;
}
export const PointsCard: React.FC<PointsCardProps> = ({
    points,
    ...props
}) => {
    return (
        <PointsCardBgDiv
            alignItems={'center'}
            {...props}>
            <IconDiv>
                <IconPoints size={"28px"} color="#DFFF2C" secondColor="#000317"/>
            </IconDiv>
            <Div flexDirection={"column"} pl={"8px"}>
                <GuestTXT>POINTS</GuestTXT>
                <CardTxT1>{formatXP(points || 0)}</CardTxT1>
            </Div>
        </PointsCardBgDiv>
    );
};

const RewardsCardBgDiv = styled(Div)`
clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
`;
RewardsCardBgDiv.defaultProps = {
    backgroundColor: "#191C2E",
    p: "10px",
    ml: "-10px"
};



export const RewardsCard: React.FC<PointsCardProps> = ({
    points,
    ...props
}) => {
    return (
        <RewardsCardBgDiv
            justifyContent={'flex-end'}
            alignItems={'center'}
            {...props}>
            <Div flexDirection={"column"} pr={"8px"} alignItems={'flex-end'}>
                <GuestTXT>REWRADS</GuestTXT>
                <CardTxT1 mr={"4px"}>{points || 0}</CardTxT1>
            </Div>
            <IconDiv>
                <IconReward size={"25px"} />
            </IconDiv>
        </RewardsCardBgDiv>
    );
};

//top users
interface TopUsersDivProps {
    users: IUser[]
}

export const TopUsersDiv: React.FC<TopUsersDivProps> = ({
    users,
    ...props
}) => {
    const navigate = useNavigate();
    return (
        <GradientDiv flexDirection={"column"}>
            <Div justifyContent={"space-between"} width={"100%"} mb={"10px"}>
                <TxT1>Top Users</TxT1>
                <LinkBase onClick={()=>{navigate("/leaderboard" )}} alignItems={"center"} fontFamily={'Fragment Mono'} fontSize={'10px'} color={'#DFFF2C'} fontWeight={'400'}>VIEW ALL</LinkBase>
            </Div>
            {users.map((val, index) =>
                <TopUsersCard key={index} user={val} />)}
        </GradientDiv>
    );
};

const UsernameTxT = styled(Div)`
font-family: 'Anybody', sans-serif;
font-size: 13px;
font-weight: 400;
text-align: left;
color: #666874;
`;

const UsernameTxT1 = styled(Div)`
font-family: 'Anybody', sans-serif;
font-size: 13px;
font-weight: 600;
text-align: left;
`;

interface TopUsersCardProps {
    user: IUserData
}

const TopUsersCard: React.FC<TopUsersCardProps> = ({
    user,
    ...props
}) => {
    return (
        <Div
            width={"100%"}
            py={"5px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            {...props}>
            <Div alignItems={"center"}>
                <AvatarContainer2
                    size={"42px"}
                    src={user.avatar}
                />
                <Div ml={"10px"} flexDirection={"column"}>
                    <UsernameTxT1>{user.displayName}</UsernameTxT1>
                    <LinkBase href={`https://x.com/${user.username}`} target="_blank"><UsernameTxT>@{user.username}</UsernameTxT></LinkBase>
                </Div>
            </Div>
            <XPChip
                height={"25px"}
                p={"5px"}
                xp={user.points}
                alignItems={"center"}
            />
        </Div>
    );
};


export const PartnerShipCard: React.FC<AllProps> = ({ ...props }) => {

    return (
        <NormalDiv {...props}>
            <Image
                width={"80%"}
                my={"1em"}
                mt={"3em"}
                src={require(`assets/image/partnership.png`)} />
            <TxT1>Space for Partnership</TxT1>
            <TxT2 mt={"10px"} px={"2em"} textAlign={"center"}>Discover the latest news from Bullana.</TxT2>
            <NormalBtn mt={"1em"}>
                DISCOVER MORE
            </NormalBtn>
        </NormalDiv>
    );
};

export const JoinDiscordCard: React.FC<AllProps> = ({ ...props }) => {

    return (
        <NormalDiv {...props}>
            <Image
                width={"80%"}
                my={"1em"}
                src={require(`assets/image/group.png`)} />
            <TxT1>Join our community</TxT1>
            <TxT2 mt={"10px"} px={"2em"} textAlign={"center"}>Discover the latest news from Bullana.</TxT2>
            <NormalBtn mt={"1em"} onClick={() => window.open('https://discord.gg/A9dvSWFu', '_blank', 'noopener,noreferrer')}>
                <FaDiscord size={"20px"} />
                <TxT1 fontSize={"20px"} ml={"10px"} fontWeight={"500"}>Join Discord Channel</TxT1>
            </NormalBtn>
        </NormalDiv>
    );
};


interface CountDownBoxProps extends AllProps {
    hours?: number;
    minutes?: number;
    seconds?: number;
}
