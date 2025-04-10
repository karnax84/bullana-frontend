import { ILeaderboard } from "common/types/types.leaderboard";
import { IUserData } from "common/types/types.profile";
import { ContainerFluid, Div } from "components/base";
import { AvatarContainer2, AvatarStatusContainer } from "components/elements/element.avatar";
import { TxT1 } from "components/elements/element.box";
import { NameTXT } from "components/elements/element.card";
import { GradientIconWrapper, StatusChip, XChip, XPChip, XPIcon, XPTXT } from "components/elements/element.chip";
import { ProgressBar } from "components/elements/element.progressbar";
import { IconRaiseDown, IconRaiseUp } from "components/icons";
import { styled } from "styled-components";

const GradientBorderDiv = styled(Div) <{ no: number }>`
  position: relative;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
  background: ${({ no }) => {
        switch (no) {
            case 1:
                return `linear-gradient(270deg, #E0FF2C 0%, #1DF7FF 100%)`;
            case 2:
                return `linear-gradient(90deg, #FF46E1 0%, #E0FF2D 100%)`;
            case 3:
                return `linear-gradient(90deg, #49FF54 0%, #E0FF2D 100%)`;
            default:
                return `#0D1023`;
        }
    }};
  padding: 2px; /* This is your border thickness */
  height: 155px;
`;

// Inner content div with the same clip-path and a white background
const InnerContentDiv = styled(Div)`
  width: 100%;
  background-color: #0D1023;
  clip-path: inherit; /* Inherit the same polygon shape */
`;

const LeadTxT1 = styled(Div)`
    font-family: 'Sharpie', sans-serif;
    font-style: italic;
    font-weight: 540;
    line-height: 24px;
    text-align: center;
`;
LeadTxT1.defaultProps = {
    fontSize: ["24px", "24px", "28px", "28px"],
};


//top users
interface LeaderboardCardProps {
    leaderboard: IUserData,
    index: number
}

export const LeaderboardCard: React.FC<LeaderboardCardProps> = ({
    leaderboard,
    index,
    ...props
}) => {
    return (
        <GradientBorderDiv no={index} my={"0.5em"}>
            <InnerContentDiv alignItems={"center"} pr={["1em", "2em", "2em", "3em"]}>
                <Div flexDirection={"column"} alignItems={"center"} pl={"1em"}>
                    <LeadTxT1>#{index}</LeadTxT1>
                    {/* <Div
                    display={["flex", "flex", "none", "none"]}
                    alignItems={"center"}
                    justifyContent={"flex-end"}>
                    <LeadTxT1 mr={"2px"}>{Math.abs(leaderboard.raise)}</LeadTxT1>
                    {leaderboard.raise > 0 ?
                        <IconRaiseUp />
                        :
                        <IconRaiseDown />
                    }
                </Div> */}
                </Div>
                <Div pl={"1em"} width={"100%"} alignItems={"center"} flexDirection={"column"}>
                    <Div width={"100%"}>
                        <AvatarContainer2 src={leaderboard.avatar} size='80px' />
                        <Div pl={"15px"} flexDirection={"column"} justifyContent={"flex-start"}>
                            <TxT1 fontSize={"24px"} pl={"5px"}>{leaderboard.displayName}</TxT1>
                            <Div flexWrap={'wrap'} rowGap={'10px'} columnGap={'10px'}>
                                <XChip txt={leaderboard.username} />
                                {/* {user?.rank !== 'none' && <XStatusChip txt={user?.rank || 'Iron'} />} */}
                            </Div>
                        </Div>
                    </Div>
                    <Div width={"100%"} mt={["5px", "5px", "-15px", "-15px"]} ml={["0px", "0px", "-10px", "-10px"]} zIndex={'2'}>
                        <XPIcon />
                        {index === 1 && <ProgressBar valuePercentage={leaderboard.percentage || 0} fillColor="linear-gradient(270deg, #E0FF2C 0%, #1DF7FF 100%)" barColor='#191C2E' xp={leaderboard.xp} />}
                        {index === 2 && <ProgressBar valuePercentage={leaderboard.percentage || 0} fillColor="linear-gradient(90deg, #FF46E1 0%, #E0FF2D 100%)" barColor='#191C2E' xp={leaderboard.xp} />}
                        {index === 3 && <ProgressBar valuePercentage={leaderboard.percentage || 0} fillColor="linear-gradient(90deg, #49FF54 0%, #E0FF2D 100%)" barColor='#191C2E' xp={leaderboard.xp} />}
                        {index > 3 && <ProgressBar valuePercentage={leaderboard.percentage || 0} fillColor="#DFFF2C" barColor='#191C2E' xp={leaderboard.xp} />}
                    </Div>
                </Div>
                {/* <Div
                display={["none", "none", "flex", "flex"]}
                width={"60px"}
                alignItems={"center"}
                justifyContent={"flex-end"}>
                <LeadTxT1 mr={"5px"}>{Math.abs(leaderboard.raise)}</LeadTxT1>
                {leaderboard.raise > 0 ?
                    <IconRaiseUp />
                    :
                    <IconRaiseDown />
                }
            </Div> */}
            </InnerContentDiv>
        </GradientBorderDiv>
    );
};