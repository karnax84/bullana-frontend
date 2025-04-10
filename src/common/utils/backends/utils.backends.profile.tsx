import { IResHistory } from "common/types/types.profile";
import axiosAuth from "../utils.axios";

export const fetchTodayHistory = async (page: number) => {
    try {
        const { data } = await axiosAuth.post<IResHistory>(
            `history/today`, { page }
        );
        return data;
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            return null;
        }
        return null;
    }
};

export const fetchWeekHistory = async (page: number) => {
    try {
        const { data } = await axiosAuth.post<IResHistory>(
            `history/week`, { page }
        );
        return data;
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            return null;
        }
        return null;
    }
};

export const fetchMonthHistory = async (page: number) => {
    try {
        const { data } = await axiosAuth.post<IResHistory>(
            `history/month`, { page }
        );
        return data;
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            return null;
        }
        return null;
    }
};

export const fetchAllHistory = async (page: number) => {
    try {
        const { data } = await axiosAuth.post<IResHistory>(
            `history/all`, { page }
        );
        return data;
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            return null;
        }
        return null;
    }
};
