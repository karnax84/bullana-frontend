import { ContainerFluid, Div, Image } from "components/base";
import { AvatarContainer, AvatarContainer2 } from "components/elements/element.avatar";
import { HeaderLink, MobileDiv, TxT1 } from "components/elements/element.box";
import { NormalOutlineBtn, OutlineRadiusBtn } from "components/elements/element.button";
import { XChip, XPChip } from "components/elements/element.chip";
import { DividerLine } from "components/elements/element.shape";
import { Tab, TabItem } from "components/elements/element.tab";
import ProfilePoints from "./profile.mypoints";
import ProfileHistory from "./profile.history";
import ProfilePreferences from "./profile.preferences";
import { useAccount } from "common/hooks/hook.xapp";

const ProfilePage = () => {

  const { user, logout } = useAccount();

  return (
    <ContainerFluid
      flexDirection={"column"}
    >
      <MobileDiv width={"100%"}>
        <HeaderLink title="Profile" />
      </MobileDiv>
      <DividerLine />
      {
        user?.banner ?
          <Image
            width={"100%"}
            height={"260px"}
            src={user?.banner} />
          :
          <Div
            width={"100%"}
            bg={"#19262C"}
            height={"260px"} />
      }
      <Div mt={["-47px", "-47px", "-47px", "-55px"]} width={"100%"} flexDirection={"column"}>
        <MobileDiv width={"100%"} flexDirection={"column"} mb={"1em"}>
          <Div width={"100%"} alignItems={"flex-end"} justifyContent={"space-between"}>
            <Div alignItems={"flex-end"}>
              <AvatarContainer2 size="110px" src={user?.avatar} border={"true"}/>
              <Div flexDirection={"column"} ml={"1em"}>
                <TxT1 fontSize={"16px"}>{user?.displayName}</TxT1>
                <Div>
                  <XChip txt={user?.username} />
                  {/* <XPChip ml={"10px"} xp={user?.points} /> */}
                </Div>
              </Div>
            </Div>
            <Div width={'150px'}>
              <NormalOutlineBtn onClick={logout}>Unlinking Twitter</NormalOutlineBtn>
            </Div>
          </Div>

        </MobileDiv>
        <Tab type={true}>
          <TabItem label="My points">
            <ProfilePoints />
          </TabItem>
          <TabItem label="History">
            <ProfileHistory />
          </TabItem>
          {/* <TabItem label="Preferences">
            <ProfilePreferences />
          </TabItem> */}
        </Tab>
      </Div>
    </ContainerFluid>
  );
};

export default ProfilePage;
