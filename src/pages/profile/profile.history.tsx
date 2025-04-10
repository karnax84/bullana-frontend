import { IHistory } from "common/types/types.profile";
import { Div } from "components/base";
import { Loading, MobileDiv } from "components/elements/element.box";
import { ProfilePostChip } from "components/elements/element.chip";
import { IconQuestComment, IconQuestFollowing, IconQuestJoin, IconQuestLike, IconQuestRetweet, IconQuestSharing, IconQuestTwitter, IconQuestYoutube, IconRecycle } from "components/icons";
import { CategoryChipDiv } from "pages/rewards/comp.rewards";
import { CiLogin } from "react-icons/ci";
import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "store/store.hook";
import { useEffect, useState } from "react";
import { initToday, initWeek, initMonth, initAllTime, appendToday, appendWeek, appendMonth, appendAllTime, setTodayPage, setTodayLoading, setTodayHasmore, setWeekPage, setWeekLoading, setWeekHasmore, setMonthPage, setMonthLoading, setMonthHasmore, setAllPage, setAllLoading, setAllHasmore } from "store/store.slice.history";
import { fetchAllHistory, fetchMonthHistory, fetchTodayHistory, fetchWeekHistory } from "common/utils/backends/utils.backends.profile";
import { useAccount } from "common/hooks/hook.xapp";
import { debounce, formatDate, formatNumber } from "common/utils";

const HistoryCardBgDiv = styled(Div)`
border: 1px solid #191C2E;
`;

HistoryCardBgDiv.defaultProps = {
  backgroundColor: "bg_1",
  justifyContent: "space-between",
  position: "relative",
  alignItems: "center",
  width: "100%",
  my: "0.5em",
  p: "0.5em"
};

const CardIconDiv = styled(Div)`
    background-color: #000317;
    width:50px;
    height: 50px;
    min-width: 50px;
    align-items: center;
    justify-content: center;
`;

const CardTXT1 = styled(Div)``;
CardTXT1.defaultProps = {
  fontSize: "14px",
  fontWeight: "400",
  textAlign: "left",
  color: "#52636C"
};

const CardTXT2 = styled(CardTXT1)``;
CardTXT2.defaultProps = {
  color: "bg_6"
};


interface HistoryCardProps {
  history: IHistory,
  selected: 'today' | 'week' | 'month' | 'all';
}
const iconMap: { [key: string]: React.ReactNode } = {
  like: <IconQuestLike size="32px" />,
  retweet: <IconQuestRetweet size="32px" />,
  comment: <IconQuestComment size="32px" />,
  sharing: <IconQuestSharing size="32px" />,
  following: <IconQuestFollowing size="32px" />,
  discord: <IconQuestJoin size="32px" />,
  telegram: <IconQuestJoin size="32px" />,
  referrlogin: <CiLogin color="#EEEEEE" size="32px" />,
  youtube: <IconQuestYoutube size="32px" />,
  twitter: <IconQuestTwitter size="32px" />,
  // Add other type mappings here
};

const HistoryCard: React.FC<HistoryCardProps> = ({
  history,
  selected,
  ...props
}) => {
  const Icon = iconMap[history.type];
  let title = "";
  if (history.type === "referrlogin") {
    title = "You joined with referral link on Bullana.bet";
  } else if (history.type === 'like') {
    if (history.referral) {
      title = `Reffereal joined @${history.referralUser.username} liked an official tweet from the Bullana.bet account`;
    } else {
      title = `You liked an official tweet from the Bullana.bet account`
    }
  } else if (history.type === 'comment') {
    if (history.referral) {
      title = `Reffereal joined @${history.referralUser.username} commented an official tweet from the Bullana.bet account`;
    } else {
      title = `You commented an official tweet from the Bullana.bet account`
    }
  } else if (history.type === 'retweet') {
    if (history.referral) {
      title = `Reffereal joined @${history.referralUser.username} retweeted an official tweet from the Bullana.bet account`;
    } else {
      title = `You retweeted an official tweet from the Bullana.bet account`
    }
  } else if (history.type === 'sharing') {
    if (history.referral) {
      title = `Reffereal joined @${history.referralUser.username} shared Bullana content on personal feed`;
    } else {
      title = `You shared Bullana content on personal feed`
    }
  } else if (history.type === 'following') {
    if (history.referral) {
      title = `Reffereal joined @${history.referralUser.username} followed the Bullana.bet account`;
    } else {
      title = `You followed the Bullana.bet account`
    }
  } else if (history.type === 'discord') {
    if (history.referral) {
      title = `Reffereal joined @${history.referralUser.username} joined Bullana's Discord group`;
    } else {
      title = `You joined Bullana's Discord group`
    }
  } else if (history.type === 'telegram') {
    if (history.referral) {
      title = `Reffereal joined @${history.referralUser.username} joined Bullana's Telegram group`;
    } else {
      title = `You joined Bullana's Telegram group`
    }
  }
  else if (history.type === 'youtube') {
    if (history.referral) {
      title = `Reffereal joined @${history.referralUser.username} Youtube link accepted on Bullana.bet`;
    } else {
      title = `Youtube link accepted on Bullana.bet`
    }
  }
  else if (history.type === 'twitter') {
    if (history.referral) {
      title = `Reffereal joined @${history.referralUser.username} Twitter thread link accepted on Bullana.bet`;
    } else {
      title = `Twitter thread link accepted on Bullana.bet`
    }
  }

  return (
    <HistoryCardBgDiv
      {...props}>
      <CardIconDiv>
        {
          Icon
        }
      </CardIconDiv>
      <Div width={"100%"} pl={"10px"} display={["block", "block", "flex", "flex"]}>
        <CardTXT1>{formatDate(history.createdAt, selected)}</CardTXT1>
        <CardTXT2 pl={["0px", "0px", "10px", "10px"]}>{title}</CardTXT2>
      </Div>
      <ProfilePostChip txt={`WIN ${formatNumber(history.points)} PTS`} />
    </HistoryCardBgDiv>
  );
};

const categories = [
  { title: "Today", value: "today" },
  { title: "This week", value: "week" },
  { title: "This month", value: "month" },
  { title: "All time", value: "all" },
];

const ProfileHistory = () => {
  const { today, week, month, allTime, todayPage, weekPage, monthPage, allPage, todayLoading, weekLoading, monthLoading, allLoading, todayHasmore, weekHasmore, monthHasmore, allHasmore } = useAppSelector((store) => store.histories);
  const dispatch = useAppDispatch();
  const { showToast } = useAccount();

  // State to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState<"today" | "week" | "month" | "all">("today");

  // Determine the histories to display based on the selected category
  // Determine the histories to display based on the selected category
  const histories =
    selectedCategory === "today" ? today :
    selectedCategory === "week" ? week :
    selectedCategory === "month" ? month :
    allTime;

  // Handle category selection
  const handleCategoryClick = (value: any) => {
    if (value !== selectedCategory) {
      setSelectedCategory(value);
    }
  };

  // Data loading functions
  const loadTodayData = async () => {
    if (todayLoading || !todayHasmore) return; // Prevent loading if already loading or no more data
    dispatch(setTodayLoading(true));
    const data = await fetchTodayHistory(todayPage);
    if (data?.status === "success") {
      if (todayPage === 1) {
        dispatch(initToday(data.data)); // Replace data on first page
      } else {
        dispatch(appendToday(data.data)); // Append data on subsequent pages
      }
      if (data.data.length === 0) {
        dispatch(setTodayHasmore(false)); // No more data available
      }
    } else {
      showToast("error");
    }
    dispatch(setTodayLoading(false));
  };

  const loadWeekData = async () => {
    if (weekLoading || !weekHasmore) return;
    dispatch(setWeekLoading(true));
    const data = await fetchWeekHistory(weekPage);
    if (data?.status === "success") {
      if (weekPage === 1) {
        dispatch(initWeek(data.data));
      } else {
        dispatch(appendWeek(data.data));
      }
      if (data.data.length === 0) {
        dispatch(setWeekHasmore(false));
      }
    } else {
      showToast("error");
    }
    dispatch(setWeekLoading(false));
  };

  const loadMonthData = async () => {
    if (monthLoading || !monthHasmore) return;
    dispatch(setMonthLoading(true));
    const data = await fetchMonthHistory(monthPage);
    if (data?.status === "success") {
      if (monthPage === 1) {
        dispatch(initMonth(data.data));
      } else {
        dispatch(appendMonth(data.data));
      }
      if (data.data.length === 0) {
        dispatch(setMonthHasmore(false));
      }
    } else {
      showToast("error");
    }
    dispatch(setMonthLoading(false));
  };

  const loadAllData = async () => {
    if (allLoading || !allHasmore) return;
    dispatch(setAllLoading(true));
    const data = await fetchAllHistory(allPage);
    if (data?.status === "success") {
      if (allPage === 1) {
        dispatch(initAllTime(data.data));
      } else {
        dispatch(appendAllTime(data.data));
      }
      if (data.data.length === 0) {
        dispatch(setAllHasmore(false));
      }
    } else {
      showToast("error");
    }
    dispatch(setAllLoading(false));
  };

  // Handle scroll event for infinite scrolling
  const handleScroll = () => {
    const nearBottom = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50;
    
    if (nearBottom) {
      switch (selectedCategory) {
        case "today":
          if (!todayLoading && todayHasmore) {
            dispatch(setTodayPage(todayPage + 1));
          }
          break;
        case "week":
          if (!weekLoading && weekHasmore) {
            dispatch(setWeekPage(weekPage + 1)); 
          }
          break;
        case "month":
          if (!monthLoading && monthHasmore) {
            dispatch(setMonthPage(monthPage + 1)); 
          }
          break;
        case "all":
          if (!allLoading && allHasmore) {
            dispatch(setAllPage(allPage + 1)); // Increment page number for All Time
          }
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    // Load initial data based on the selected category
    if (selectedCategory === "today") {
      loadTodayData(); // Load initial Today data
    } else if (selectedCategory === "week") {
      loadWeekData(); // Load initial Week data
    } else if (selectedCategory === "month") {
      loadMonthData(); // Load initial Month data
    } else if (selectedCategory === "all") {
      loadAllData(); // Load initial All Time data
    }

    // Attach scroll event listener
    const debouncedScroll = debounce(handleScroll, 300);
    window.addEventListener('scroll', debouncedScroll);

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [selectedCategory, todayPage, weekPage, monthPage, allPage]); // Include all dependencies to ensure proper updates


  return (
    <MobileDiv flexDirection={"column"} width={"100%"} py={"0em"} pt={"2em"}>
      <Div flexWrap={"wrap"}>
        {categories.map((category, index) => (
          <CategoryChipDiv
            selected={category.value === selectedCategory}
            key={index}
            onClick={() => handleCategoryClick(category.value)}
          >
            {category.title}
          </CategoryChipDiv>
        ))}
      </Div>
      <Div flexDirection={"column"} mt={"0.5em"}>
        {histories.map((history, index) => (
          <HistoryCard history={history} key={index} selected={selectedCategory} />
        ))}
        {(todayLoading || weekLoading || monthLoading || allLoading) && <Loading />}
      </Div>
    </MobileDiv>
  );
};

export default ProfileHistory;
