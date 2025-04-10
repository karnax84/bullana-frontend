import { IResUserData } from "common/types/types.profile";
import axiosAuth from "../utils.axios";
import { IResLeaderboard } from "common/types/types.leaderboard";

export const fetchUserLoginStatus = async () => {
    try {
        const { data } = await axiosAuth.get<IResUserData>(
            `authcheck`
          );
          return data;
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
            return null;
        }
        return null;
      }
  };

  
export const fetchTopUsers = async () => {
  try {
      const { data } = await axiosAuth.get<IResLeaderboard>(
          `home/topUsers`
        );
        return data;
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
          return null;
      }
      return null;
    }
};

  export const fetchLogout = async () => {
    try {
        await axiosAuth.get(
            `auth/logout`
          );
      } catch (error: any) {
        console.log(error);
      }
  };