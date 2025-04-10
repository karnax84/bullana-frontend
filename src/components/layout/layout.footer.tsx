import { ContainerMin, Div } from 'components/base';
import { DividerLine } from 'components/elements/element.shape';
import React from 'react';
import { JoinDiscordCard, PartnerShipCard } from './com.layout';


const LayoutFooter: React.FC<{}> = () => {

  return (
    <Div
      flexDirection={"column"}
      width={"100%"}
      display={["flex", "flex", "flex", "none"]}
      alignItems={"center"}
    >
      <DividerLine />
      <Div
        width={"100%"}
        display={"grid"}
        gridTemplateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
        ]}
        columnGap={"0.5em"}
        rowGap={"0.5em"}
      >
        <ContainerMin>
          <PartnerShipCard my={"1em"} p={"1em"} />
        </ContainerMin>
        <DividerLine   display={["flex", "flex", "none", "none"]}/>
        <ContainerMin>
          <JoinDiscordCard my={"1em"} p={"1em"} />
        </ContainerMin>
      </Div>

    </Div>
  );
};

export default LayoutFooter;
