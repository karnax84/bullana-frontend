import { ContainerFluid, Div, Image } from "components/base";
import { Tab, TabItem } from "components/elements/element.tab";
import { LeaderboardCard } from "./comp.leaderboard";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/store.hook";
import { useAccount } from "common/hooks/hook.xapp";
import { appendAll, appendMonth, appendWeek, initAllTime, initMonth, initWeek, setAllHasmore, setAllLoading, setAllPage, setMonthHasmore, setMonthLoading, setMonthPage, setWeekHasmore, setWeekLoading, setWeekPage } from "store/store.slice.leaderboad";
import { fetchAllLeaderboard, fetchMonthLeaderboard, fetchWeeklyLeaderboard } from "common/utils/backends/utils.backends.leaderboard";
import { debounce } from "common/utils";
import { Loading, MobileDiv } from "components/elements/element.box";

const LeaderBoardPage = () => {
  const { week, month, allTime, weekPage, weekLoading, weekHasmore, monthPage, monthLoading, monthHasmore, allPage, allLoading, allHasmore } = useAppSelector(store => store.leaderboards);
  const dispatch = useAppDispatch();
  const { showToast } = useAccount();
  const [selectedTab, setSelectedTab] = useState(0);

  const loadWeekData = async (pageNumber = 1) => {
    if (!weekHasmore || weekLoading) return;
    dispatch(setWeekLoading(true));
    const data = await fetchWeeklyLeaderboard(pageNumber);
    if (data?.status === 'success') {
      if (pageNumber === 1) {
        dispatch(initWeek(data.data));
      } else {
        dispatch(appendWeek(data.data));
      }
      if (data.data.length === 0) {
        dispatch(setWeekHasmore(false));
      }
    } else {
      showToast('error');
    }
    dispatch(setWeekLoading(false));
  };

  const loadMonthData = async (pageNumber = 1) => {
    if (!monthHasmore || monthLoading) return;
    dispatch(setMonthLoading(true));
    const data = await fetchMonthLeaderboard(pageNumber);
    if (data?.status === 'success') {
      if (pageNumber === 1) {
        dispatch(initMonth(data.data));
      } else {
        dispatch(appendMonth(data.data));
      }
      if (data.data.length === 0) {
        dispatch(setMonthHasmore(false));
      }
    } else {
      showToast('error');
    }
    dispatch(setMonthLoading(false));
  };

  const loadAllData = async (pageNumber = 1) => {
    if (!allHasmore || allLoading) return;
    dispatch(setAllLoading(true));
    const data = await fetchAllLeaderboard(pageNumber);
    if (data?.status === 'success') {
      if (pageNumber === 1) {
        dispatch(initAllTime(data.data));
      } else {
        dispatch(appendAll(data.data));
      }
      if (data.data.length === 0) {
        dispatch(setAllHasmore(false));
      }
    } else {
      showToast('error');
    }
    dispatch(setAllLoading(false));
  };

  const selectedTabChange = (index: number) => {
    setSelectedTab(index);
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50) {
      if (selectedTab === 0 && !weekLoading) {
        dispatch(setWeekPage(weekPage + 1)); // Load next page for Weekly leaderboard
      } else if (selectedTab === 1 && !monthLoading) {
        dispatch(setMonthPage(monthPage + 1)); // Load next page for Monthly leaderboard
      } else if (selectedTab === 2 && !allLoading) {
        dispatch(setAllPage(allPage + 1)); // Load next page for All Time leaderboard
      }
    }
  };

  useEffect(() => {
    if (selectedTab === 0 && week.length === 0) {
      loadWeekData(); // Initial load for Weekly
    } else if (selectedTab === 1 && month.length === 0) {
      loadMonthData(); // Initial load for Monthly
    } else if (selectedTab === 2 && allTime.length === 0) {
      loadAllData(); // Initial load for All Time
    }

    const debouncedScroll = debounce(handleScroll, 300);
    window.addEventListener('scroll', debouncedScroll);

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [selectedTab]);

  useEffect(() => {
    if (selectedTab === 0 && weekPage > 1) {
      loadWeekData(weekPage); // Load more for Weekly
    } else if (selectedTab === 1 && monthPage > 1) {
      loadMonthData(monthPage); // Load more for Monthly
    } else if (selectedTab === 2 && allPage > 1) {
      loadAllData(allPage); // Load more for All Time
    }
  }, [weekPage, monthPage, allPage]);

  return (
    <ContainerFluid flexDirection={"column"}>
      <Div height={"1em"} />
      <Tab onTabSelected={selectedTabChange}>
        <TabItem label="Weekly">
          <MobileDiv flexDirection={"column"} width={"100%"} >
            {week.map((val, index) => <LeaderboardCard leaderboard={val} key={index} index={index + 1} />)}
            {weekLoading && <Loading />}
          </MobileDiv>
        </TabItem>
        <TabItem label="Monthly">
          <MobileDiv flexDirection={"column"} width={"100%"}>
            {month.map((val, index) => <LeaderboardCard leaderboard={val} key={index} index={index + 1} />)}
            {monthLoading && <Loading />}
          </MobileDiv>
        </TabItem>
        <TabItem label="All Time">
          <MobileDiv flexDirection={"column"} width={"100%"}>
            {allTime.map((val, index) => <LeaderboardCard leaderboard={val} key={index} index={index + 1} />)}
            {allLoading && <Loading />}
          </MobileDiv>
        </TabItem>
      </Tab>
    </ContainerFluid>
  );
};

export default LeaderBoardPage;