import { ContainerFluid, Div, Image } from "components/base";
import { Tab, TabItem } from "components/elements/element.tab";
import { PostCard } from "./comp.landing";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/store.hook";
import { useAccount } from "common/hooks/hook.xapp";
import { appendFeed, appendMyFeed, initFeed, initMyFeed, setFeedHasmore, setFeedLoading, setFeedPage, setMyFeedHasmore, setMyFeedLoading, setMyFeedPage } from "store/store.slice.home";
import { fetchFeed, fetchMyFeed } from "common/utils/backends/utils.backends.home";
import { debounce } from "common/utils";
import { Loading } from "components/elements/element.box";

const LandingPage = () => {
  const { feeds, feedPage, feedLoading, feedHasmore, myfeeds, myfeedPage, myfeedLoading, myfeedHasmore } = useAppSelector((store) => store.home);
  const dispatch = useAppDispatch();
  const { showToast } = useAccount();
  const [selectedTab, setSelectedTab] = useState(0);

  const loadFeedData = async (pageNumber = 1) => {
    if (!feedHasmore || feedLoading) return;
    dispatch(setFeedLoading(true));
    const data = await fetchFeed(pageNumber);
    if (data?.status === 'success') {
      if (pageNumber === 1) {
        dispatch(initFeed(data.data));
      } else {
        dispatch(appendFeed(data.data));
      }
      if (data.data.length === 0) {
        dispatch(setFeedHasmore(false));
      }
    } else {
      showToast('error');
    }
    dispatch(setFeedLoading(false));
  };

  // Load my activity data (For My Activity tab)
  const loadMyFeedData = async (pageNumber = 1) => {
    if (!myfeedHasmore || myfeedLoading) return;
    dispatch(setMyFeedLoading(true));
    const data = await fetchMyFeed(pageNumber);
    if (data?.status === 'success') {
      if (pageNumber === 1) {
        dispatch(initMyFeed(data.data));
      } else {
        dispatch(appendMyFeed(data.data));
      }
      if (data.data.length === 0) {
        dispatch(setMyFeedHasmore(false));
      }
    } else {
      showToast('error');
    }
    dispatch(setMyFeedLoading(false));
  };

  const selectedTabChange = (index: number) => {
    setSelectedTab(index);
  };

  // Handle infinite scroll for both tabs
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50) {
      if (selectedTab === 0 && !feedLoading) {
        dispatch(setFeedPage(feedPage + 1)); // Load next page for Feed
      } else if (selectedTab === 1 && !myfeedLoading) {
        dispatch(setMyFeedPage(myfeedPage + 1)); // Load next page for My Activity
      }
    }
  };

  useEffect(() => {
    // Load data based on the selected tab
    if (selectedTab === 0 && feeds.length === 0) {
      loadFeedData(); // Load initial Feed data
    } else if (selectedTab === 1 && myfeeds.length === 0) {
      loadMyFeedData(); // Load initial My Feed data
    }

    const debouncedScroll = debounce(handleScroll, 300);
    window.addEventListener('scroll', debouncedScroll);

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [selectedTab]);

  useEffect(() => {
    // Load more data when the page number changes
    if (selectedTab === 0 && feedPage > 1) {
      loadFeedData(feedPage);
    } else if (selectedTab === 1 && myfeedPage > 1) {
      loadMyFeedData(myfeedPage);
    }
  }, [feedPage, myfeedPage]);

  return (
    <ContainerFluid
      flexDirection={"column"}
    >
      <Div height={"1em"} />
      <Tab onTabSelected={selectedTabChange}>
        <TabItem label="Feed">
          <Div flexDirection={"column"} width={"100%"}>
            {
              feeds.map((val, index) => <PostCard post={val} key={index} />)
            }
            {feedLoading && <Loading />}
          </Div>
        </TabItem>
        <TabItem label="My Activity">
          <Div flexDirection={"column"} width={"100%"}>
            {myfeeds.map((val, index) => <PostCard post={val} key={index} />)}
            {myfeedLoading && <Loading />}
          </Div>
        </TabItem>
      </Tab>
    </ContainerFluid>
  );
};

export default LandingPage;
