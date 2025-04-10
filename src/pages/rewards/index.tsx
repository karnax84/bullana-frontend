import { ICard, ICategory } from "common/types/types.rewards";
import { ContainerFluid, Div } from "components/base";
import { HeaderLink, MobileDiv, Title1 } from "components/elements/element.box";
import { DividerLine } from "components/elements/element.shape";
import { TabItem, Tab } from "components/elements/element.tab";
import { CategoryChipDiv, CommonCard, ExclusiveCard, PointsCard } from "./comp.rewards";
import { EmblaOptionsType } from 'embla-carousel';
import EmblaSlider from "components/elements/element.slider";
import { CountDownBox } from "components/layout/com.layout";

const categories: ICategory[] = [
    {
        title: "SubCategory",
        selected: true
    },
    {
        title: "SubCategory",
        selected: false
    },
    {
        title: "SubCategory",
        selected: false
    },
];

const cards1: ICard[] = [
    {
        title: "Gold Pass for high-level tournaments",
        plus: 3000
    },
    {
        title: "Gold Pass for high-level tournaments",
        plus: 6000
    },
    {
        title: "Gold Pass for high-level tournaments",
        plus: 6000
    },
    {
        title: "Gold Pass for high-level tournaments",
        plus: 6000
    },
];

const OPTIONS: EmblaOptionsType = { dragFree: true }

const RewardPage = () => {

    return (
        <ContainerFluid
            flexDirection={"column"}
        >
            <MobileDiv width={"100%"} py={"0.5em"}>
                <HeaderLink title="Rewards" />
            </MobileDiv>
            <DividerLine />
            <MobileDiv width={"100%"} flexDirection={"column"}>
                <Div width={"100%"}
                    justifyContent={"center"}>
                    <CountDownBox
                        display={["flex", "flex", "flex", "none"]} mb={"1em"} />
                </Div>
            </MobileDiv>
            <Tab type={true}>
                <TabItem label="AVATARS">
                    <MobileDiv flexDirection={"column"} width={"100%"}>
                        <Title1 my={"1em"}>Exclusive Rewards</Title1>
                        <Div width={"100%"}>
                            <EmblaSlider options={OPTIONS} >
                                {
                                    cards1.map((val, index) => <ExclusiveCard key={index} card={val} />)
                                }
                            </EmblaSlider>
                        </Div>
                        <Title1 mt={"2em"}>Common rewards</Title1>
                        <Div
                            width={"100%"}
                            display={"grid"}
                            p={"1em"}
                            gridTemplateColumns={[
                                "repeat(1, 1fr)",
                                "repeat(1, 1fr)",
                                "repeat(2, 1fr)",
                                "repeat(2, 1fr)",
                            ]}
                            columnGap={"1em"}
                            rowGap={"1em"}
                        >
                            {
                                cards1.map((val, index) => <ExclusiveCard key={index} card={val} />)
                            }
                        </Div>
                    </MobileDiv>
                </TabItem>
                <TabItem label="FRAMES">
                </TabItem>
                <TabItem label="BACKGROUND">
                </TabItem>
                <TabItem label="THEME">
                </TabItem>
            </Tab>

        </ContainerFluid>
    );
};

export default RewardPage;
