import { Button, Checkbox, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Div } from "components/base";
import { MobileDiv, Title1 } from "components/elements/element.box";
import { OutlineRadiusBtn } from "components/elements/element.button";
import { SearchBox } from "components/elements/element.form";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { styled } from "styled-components";


const TxT1 = styled(Div)``;
TxT1.defaultProps = {
  fontSize: "14px",
  fontWeight: "500",
};


const TxT2 = styled(Div)``;
TxT2.defaultProps = {
  fontSize: "12px",
  fontWeight: "400",
  color: "#98989D"
};

const CustomCheckBox = styled(Checkbox)``;
CustomCheckBox.defaultProps = {
  borderColor: "#98989D",
  borderRadius: 5
};

const ProfilePreferences = () => {

  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <MobileDiv
      flexDirection={"column"} width={"100%"} py={"2em"}>
      <SearchBox
        flex={1}
        placeHolder={"Search preferences"}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log("search")
          }
        }}
      />
      <Title1 my={"1em"}>Notification Settings</Title1>
      <TxT1>Email Notifications</TxT1>
      <Div my={"5px"}>
        <CustomCheckBox ><TxT2>Get notified every time you earn points</TxT2></CustomCheckBox>
      </Div>
      <Div my={"5px"}>
        <CustomCheckBox ><TxT2>Be the first to know when new rewards are available</TxT2></CustomCheckBox>
      </Div>
      <Div my={"5px"}>
        <CustomCheckBox ><TxT2>Get reminders about special events or challenges</TxT2></CustomCheckBox>
      </Div>
      <TxT1 mt={"1em"}>Notifications on the Platform</TxT1>
      <Div my={"5px"}>
        <CustomCheckBox ><TxT2>Display real-time notifications about your interactions</TxT2></CustomCheckBox>
      </Div>
      <Div my={"5px"}>
        <CustomCheckBox ><TxT2>Get an alert when you redeem a reward</TxT2></CustomCheckBox>
      </Div>
      <Title1 my={"0.5em"}>Account Connection</Title1>
      <Div>
        <OutlineRadiusBtn>Unlinking Twitter</OutlineRadiusBtn>
      </Div>
      <Title1 mt={"2em"}>Privacy Preferences</Title1>
      <TxT1 my={"1em"}>Profile Visibility</TxT1>
      <Div>
        <Menu>
          <MenuButton as={Button} variant="outline" rightIcon={<SlArrowDown color="#536471"/>}  iconSpacing="30px">
            Public
          </MenuButton>
          <MenuList>
            <MenuItem>Public</MenuItem>
            <MenuItem>Private</MenuItem>
          </MenuList>
        </Menu>
      </Div>
    </MobileDiv>
  );
};

export default ProfilePreferences;
