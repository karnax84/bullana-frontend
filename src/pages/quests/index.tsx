import { ContainerFluid, Div, LinkBase } from "components/base";
import { HeaderLink, MobileDiv, Title1 } from "components/elements/element.box";
import { DividerLine } from "components/elements/element.shape";
import { IconQuestCheck, IconQuestComment, IconQuestFollowing, IconQuestJoin, IconQuestLike, IconQuestRetweet, IconQuestSharing, IconQuestTwitter, IconQuestYoutube, IconSchedule } from "components/icons";
import { DailyCard, GrandCard, GrandReferralCard, QuestTXT1 } from "./comp.quests";
import { IDailyQuest, IGrandQuest } from "common/types/types.quests";
import { EmblaOptionsType } from 'embla-carousel';
import EmblaSlider from "components/elements/element.slider";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchCommentConfirm, fetchCreateReferral, fetchCreateTwitter, fetchCreateYoutube, fetchDiscordConfirm, fetchFollowingConfirm, fetchLikeConfirm, fetchQuestStatus, fetchRetweetConfirm, fetchSharingConfirm, fetchTelegramConfirm } from "common/utils/backends/utils.backends.quests";
import { IBackendApiCallBaseResponse } from "common/types/types.backend";
import { useAccount } from "common/hooks/hook.xapp";
import { useAppDispatch, useAppSelector } from "store/store.hook";
import { initquests } from "store/store.slice.quests";

const grands: IGrandQuest[] = [
    {
        title: "Create Youtube Video",
        desc: "Earn 5,000,000 points",
        icon: <IconQuestYoutube size="3.5em" />
    },
    {
        title: "Twitter Thread",
        desc: "Earn 5,000,000 points",
        icon: <IconQuestTwitter size="3.5em" />
    },
    {
        title: "Create Referral Link",
        icon: <IconQuestCheck color="#DFFF2C" />
    },
];


const OPTIONS: EmblaOptionsType = { dragFree: true }

const QuestsPage = () => {
    const dispatch = useAppDispatch();
    const { user } = useAccount();
    const { quests } = useAppSelector((store) => store);

    const dailys: IDailyQuest[] = [
        {
            title: "Liking a Bullana tweet",
            desc: "Earn 5,000 Points",
            link: "https://x.com/bullanabet",
            icon: <IconQuestLike size="2em" />
        },
        {
            title: "Retweeting a Bullana post",
            desc: "Earn 7,500 Points",
            link: "https://x.com/bullanabet",
            icon: <IconQuestRetweet size="2em" />
        },
        {
            title: "Commenting on a Bullana tweet",
            desc: "Earn 10,000 Points",
            link: "https://x.com/bullanabet",
            icon: <IconQuestComment size="2em" />
        },
        {
            title: "Sharing Bullana content on personal feed",
            desc: "Earn 15,000 Points",
            link: `https://x.com/${user?.username}`,
            icon: <IconQuestSharing size="2em" />
        },
        {
            title: "Following Bullana's account",
            desc: "Earn 20,000 Points",
            link: "https://x.com/bullanabet",
            icon: <IconQuestFollowing size="2em" />
        },
        {
            title: "Joining Bullana's Discord group",
            desc: "Earn 12,500 Points",
            link: "https://discord.gg/A9dvSWFu",
            icon: <IconQuestJoin size="2em" />
        },
        {
            title: "Joining Bullana's Telegram group",
            desc: "Earn 12,500 Points",
            link: "https://x.com/bullanabet",
            icon: <IconQuestJoin size="2em" />
        },
    ];

    const { isOpen: isYoutubeOpen, onOpen: onYoutubeOpen, onClose: onYoutbeClose } = useDisclosure();
    const { isOpen: isTwitterOpen, onOpen: onTwitterOpen, onClose: onTwitterClose } = useDisclosure();
    const { showToast, showToastResponse } = useAccount();

    const [formData, setFormData] = useState({
        youtubeTitle: "",
        youtubeDescription: "",
        youtubeLink: "",
        twitterTitle: "",
        twitterDescription: "",
        twitterLink: ""
    });
    const loadData = async () => {
        const data = await fetchQuestStatus();
        if (data?.status === "success") {
            dispatch(initquests(data.data));
        }
    }
    useEffect(() => {
        loadData();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value, // Use the `id` attribute to update the corresponding state field
        });
    };

    const onYoutubeQuestCreate = async () => {
        const response: IBackendApiCallBaseResponse | null = await fetchCreateYoutube(formData.youtubeLink, formData.youtubeTitle, formData.youtubeDescription);
        if (response?.status === "success") {
            showToast("success", response?.message);
            setFormData({
                ...formData,
                youtubeTitle: "",
                youtubeDescription: "",
                youtubeLink: ""
            });
            onYoutbeClose();
            loadData();
        } else {
            showToast("error", response?.message);
        }
    }
    const onTwitterQuestCreate = async () => {
        const response: IBackendApiCallBaseResponse | null = await fetchCreateTwitter(formData.twitterLink, formData.twitterTitle, formData.twitterDescription);
        if (response?.status === "success") {
            showToast("success", response?.message);
            setFormData({
                ...formData,
                twitterLink: "",
                twitterTitle: "",
                twitterDescription: ""
            });
            onTwitterClose();
            loadData();
        } else {
            showToast("error", response?.message);
        }
    }
    const onCreateReferral = async () => {
        const response: IBackendApiCallBaseResponse | null = await fetchCreateReferral();
        if (response?.status === "success") {
            showToast("success", response?.message);
            loadData();
        } else {
            showToast("error", response?.message);
        }
    }
    const onConfirmLike = async () => {
        const response: IBackendApiCallBaseResponse | null = await fetchLikeConfirm();
        if (response) {
            showToastResponse(response);
        } else {
            showToast("error");
        }
    }
    const onConfirmRetweet = async () => {
        const response: IBackendApiCallBaseResponse | null = await fetchRetweetConfirm();
        if (response) {
            showToastResponse(response);
        } else {
            showToast("error");
        }
    }

    const onConfirmComment = async () => {
        const response: IBackendApiCallBaseResponse | null = await fetchCommentConfirm();
        if (response) {
            showToastResponse(response);
        } else {
            showToast("error");
        }
    }

    const onConfirmSharing = async () => {
        const response: IBackendApiCallBaseResponse | null = await fetchSharingConfirm();
        if (response) {
            showToastResponse(response);
        } else {
            showToast("error");
        }
    }

    const onConfirmFollowing = async () => {
        const response: IBackendApiCallBaseResponse | null = await fetchFollowingConfirm();
        if (response) {
            showToastResponse(response);
        } else {
            showToast("error");
        }
    }

    const onConfirmDiscord = async () => {
        const response: IBackendApiCallBaseResponse | null = await fetchDiscordConfirm();
        if (response) {
            showToastResponse(response);
            window.open('https://discord.gg/A9dvSWFu', '_blank', 'noopener,noreferrer');
        } else {
            showToast("error");
        }
    }

    const onConfirmTelegram = async () => {
        const response: IBackendApiCallBaseResponse | null = await fetchTelegramConfirm();
        if (response) {
            showToastResponse(response);
            window.open('https://t.me/bullanabetglobal', '_blank', 'noopener,noreferrer');
        } else {
            showToast("error");
        }
    }

    return (
        <ContainerFluid
            flexDirection={"column"}
        >
            <MobileDiv
                width={"100%"}
            >
                <HeaderLink title="Quests" />
            </MobileDiv>
            <DividerLine />
            <MobileDiv flexDirection={"column"} width={"100%"}>
                <Div
                    width={"100%"}
                    justifyContent={'space-between'}
                    alignItems={'center'}>
                    <Title1>Grand quests</Title1>
                    <LinkBase><QuestTXT1>{`VIEW ALL (${quests.yactive + quests.ypending + quests.ydeclined + quests.tactive + quests.tpending + quests.tdeclined})`}</QuestTXT1></LinkBase>
                </Div>
                <Div mt={"1em"} display={"block"}>
                    <EmblaSlider options={OPTIONS} >
                        <GrandCard grand={grands[0]} onClick={onYoutubeOpen} active={quests.yactive} pending={quests.ypending} declined={quests.ydeclined} />
                        <GrandCard grand={grands[1]} onClick={onTwitterOpen} active={quests.tactive} pending={quests.tpending} declined={quests.tdeclined} />
                        <GrandReferralCard grand={grands[2]} onClick={onCreateReferral} activated={quests.referralCreated!} link={quests.referralLink!} />
                    </EmblaSlider>
                </Div>

            </MobileDiv>
            <DividerLine mt={"1em"} />
            <MobileDiv flexDirection={"column"} width={"100%"}>
                <Div
                    width={"100%"}>
                    <Title1>COMMON QUESTS</Title1>
                </Div>
                <Div
                    width={"100%"}
                    display={"grid"}
                    mt={"1em"}
                    gridTemplateColumns={[
                        "repeat(1, 1fr)",
                        "repeat(1, 1fr)",
                        "repeat(2, 1fr)",
                        "repeat(2, 1fr)",
                    ]}
                    columnGap={"1.5em"}
                    rowGap={"1.5em"}
                >
                    <DailyCard daily={dailys[0]} onClick={onConfirmLike} />
                    <DailyCard daily={dailys[1]} onClick={onConfirmRetweet} />
                    <DailyCard daily={dailys[2]} onClick={onConfirmComment} />
                    <DailyCard daily={dailys[3]} onClick={onConfirmSharing} />
                    <DailyCard daily={dailys[4]} onClick={onConfirmFollowing} />
                    <DailyCard daily={dailys[5]} onClick={onConfirmDiscord} btnTxt="Join" />
                    <DailyCard daily={dailys[6]} onClick={onConfirmTelegram} btnTxt="Join" />
                </Div>
            </MobileDiv>
            <Modal
                isCentered
                onClose={onYoutbeClose}
                isOpen={isYoutubeOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Youtube Quest</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input
                                value={formData.youtubeTitle}
                                id="youtubeTitle"
                                onChange={handleChange}
                                placeholder="Please input title"
                            />

                            <FormLabel>Description</FormLabel>
                            <Input
                                value={formData.youtubeDescription}
                                id="youtubeDescription"
                                onChange={handleChange}
                                placeholder="Please input Description"
                            />

                            <FormLabel>YouTube Link</FormLabel>
                            <Input
                                value={formData.youtubeLink}
                                id="youtubeLink"
                                onChange={handleChange}
                                placeholder="https://youtube.com"
                                required
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onYoutbeClose}>
                            Close
                        </Button>
                        <Button variant='ghost' onClick={() => onYoutubeQuestCreate()}>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Modal
                isCentered
                onClose={onTwitterClose}
                isOpen={isTwitterOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Twitter Thread</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input
                                value={formData.twitterTitle}
                                id="twitterTitle"
                                onChange={handleChange}
                                placeholder="Please input title"
                            />

                            <FormLabel>Description</FormLabel>
                            <Input
                                value={formData.twitterDescription}
                                id="twitterDescription"
                                onChange={handleChange}
                                placeholder="Please input Description"
                            />

                            <FormLabel>Twitter Thread Link</FormLabel>
                            <Input
                                value={formData.twitterLink}
                                id="twitterLink"
                                onChange={handleChange}
                                placeholder="https://twitter.com"
                                required
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onTwitterClose}>
                            Close
                        </Button>
                        <Button variant='ghost' onClick={() => onTwitterQuestCreate()}>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </ContainerFluid>
    );
};

export default QuestsPage;
