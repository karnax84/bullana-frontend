import { Div } from "components/base";
import { MobileDiv, Title1 } from "components/elements/element.box";
import { EmblaOptionsType } from 'embla-carousel';
import EmblaSlider from "components/elements/element.slider";
import { styled } from "styled-components";
import { MyStatusCard } from "components/elements/element.card";
import { useAccount } from "common/hooks/hook.xapp";


const CardBgDiv = styled(Div)`
 `;

CardBgDiv.defaultProps = {
  backgroundColor: "bg_1",
  borderRadius: "14px",
  p: "1em",
  flexDirection: "column",
  width: "300px",
  maxWidth: "300px"
};

const CardIconDiv = styled(Div)`
    background-color: #303B41;
    border-radius: 8px;
    width: 80px;
    height: 80px;
    min-width: 80px;
    align-items: center;
    justify-content: center;
`;
const StatusCardBgDiv = styled(Div)``;

StatusCardBgDiv.defaultProps = {
  backgroundColor: "bg_1",
  borderRadius: "14px",
  width: "100%",
  p: "1em",
};

interface GrandCardProps {
}

const ActionCard: React.FC<GrandCardProps> = ({
  ...props
}) => {
  return (
    <CardBgDiv
      {...props}>
      <Div>
        <CardIconDiv>
        </CardIconDiv>
      </Div>
      <Div width={"100%"} height={"50px"}></Div>
    </CardBgDiv>
  );
};


const OPTIONS: EmblaOptionsType = { dragFree: true }

const ProfilePoints = () => {

  const { user } = useAccount();

  return (
    <MobileDiv
      flexDirection={"column"} width={"100%"} py={"0em"}>
      {/* <Title1 my={"1em"}>Suggested actions to earn more</Title1> */}
      {/* <Div width={"100%"}>
        <EmblaSlider options={OPTIONS} >
          {
            Array.from({ length: 5 }).map((_, index) => (
              <ActionCard key={index} />
            ))
          }
        </EmblaSlider>
      </Div> */}
      <Title1 my={"1em"}>Dashboard</Title1>
      <Div
        width={"100%"}
        display={"grid"}
        my={"1em"}
        gridTemplateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
        ]}
        columnGap={"1em"}
        rowGap={"1em"}
      >
        <MyStatusCard title="My rank" user={user}/>
        {/* <StatusCardBgDiv /> */}
      </Div>
      {/* <StatusCardBgDiv height={"350px"} mb={"1em"} /> */}
    </MobileDiv>
  );
};

export default ProfilePoints;
