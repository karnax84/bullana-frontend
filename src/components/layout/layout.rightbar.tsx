import { Div } from 'components/base';
import { AvatarContainer1, AvatarContainer2 } from 'components/elements/element.avatar';
import { NormalDiv, TxT1 } from 'components/elements/element.box';
import { XChip, XPIcon, XStatusChip } from 'components/elements/element.chip';
import { ProgressBar } from 'components/elements/element.progressbar';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { JoinDiscordCard, PointsCard, RewardsCard, TopUsersDiv } from './com.layout';
import { IUser, IUserData } from 'common/types/types.profile';
import { useAccount } from 'common/hooks/hook.xapp';
import { IResLeaderboard } from 'common/types/types.leaderboard';
import { fetchTopUsers } from 'common/utils/backends/utils.backends.user';
import SpinWheel from 'components/elements/element.wheel';

const RightSideDiv = styled(Div)`
  border-left: 1px solid #333333;
`;
RightSideDiv.defaultProps = {
  flexDirection: "column",
  minHeight: "calc(100vh - 75px)",
  minWidth: "340px",
  maxWidth: "340px",
  p: "2em",
  pr: "0px",
  display: ["none", "none", "none", "flex"]
};

const RightSideBar: React.FC<{}> = () => {
  const [users, setUsers] = useState<IUserData[]>([]);
  const loadData = async () => {
    const userdata: IResLeaderboard | null = await fetchTopUsers();
    if (userdata) { 
      setUsers(userdata.data);
    } else {
      setUsers([]);
    }
  }
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { user } = useAccount();
  return (
    <RightSideDiv>
      <Div>
        <AvatarContainer2 src={user?.avatar} size='80px'/>
        <Div pl={"15px"} flexDirection={"column"} justifyContent={"flex-start"}>
          <TxT1 fontSize={"24px"} pl={"5px"}>{user?.displayName}</TxT1>
          <Div flexWrap={'wrap'} rowGap={'10px'} columnGap={'10px'}>
            <XChip txt={user?.username} />
            {/* {user?.rank !== 'none' && <XStatusChip txt={user?.rank || 'Iron'} />} */}
          </Div>
        </Div>
      </Div>
      <Div width={"calc(100% + 10px)"} mt={"-15px"} ml={"-10px"} zIndex={'2'}>
        <XPIcon />
        <ProgressBar valuePercentage={user?.percentage || 0} fillColor={'#DFFF2C'} barColor='#191C2E' xp={user?.xp} />
      </Div>
      <Div
        width={"100%"}
        mt={"20px"}
        justifyContent={'space-between'}
      >
        <PointsCard points={user?.points} width={'100%'} />
        <RewardsCard width={'100%'} />
      </Div>
      <NormalDiv my={"2em"} p={"1em"} height={"320px"} alignItems={"center"}>
        <SpinWheel />
      </NormalDiv>
      <TopUsersDiv users={users} />
      <JoinDiscordCard mt={"2em"} p={"1em"} />
    </RightSideDiv>
  );
};

export default RightSideBar;
