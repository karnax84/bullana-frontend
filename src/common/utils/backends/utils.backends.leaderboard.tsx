import axiosAuth from "../utils.axios";
import { IResLeaderboard } from "common/types/types.leaderboard";


export const fetchWeeklyLeaderboard = async (page: number) => {
    try {
        const { data } = await axiosAuth.post<IResLeaderboard>(
            `leaderboard/weekly`,
            {
                page
            }
        );
        return data;
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            return null;
        }
        return null;
    }
};

export const fetchMonthLeaderboard = async (page: number) => {
    try {
        const { data } = await axiosAuth.post<IResLeaderboard>(
            `leaderboard/monthly`,
            {
                page
            }
        );
        return data;
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            return null;
        }
        return null;
    }
};

export const fetchAllLeaderboard = async (page: number) => {
    try {
        const { data } = await axiosAuth.post<IResLeaderboard>(
            `leaderboard/all`,
            {
                page
            }
        );
        return data;
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            return null;
        }
        return null;
    }
};
