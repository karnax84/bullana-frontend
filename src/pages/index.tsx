import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "components/layout";
import LandingPage from "./landing";
import QuestsPage from "./quests";
import RewardPage from "./rewards";
import LeaderBoardPage from "./leaderboard";
import ProfilePage from "./profile";

const MainPage = () => {

  return (
      <Layout>
        <Routes>
          <Route path={"home"} element={<LandingPage />} />
          <Route path={"quests"} element={<QuestsPage />} />
          <Route path={"rewards"} element={<RewardPage />} />
          <Route path={"leaderboard"} element={<LeaderBoardPage />} />
          <Route path={"profile"} element={<ProfilePage />} />
          <Route path={"*"} element={<Navigate to={"/login"} />} />
        </Routes>
      </Layout>
  );
};

export default MainPage;
