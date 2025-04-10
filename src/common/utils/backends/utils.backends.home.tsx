import axiosAuth from "../utils.axios";
import { IResFeed } from "common/types/types.home";

export const fetchFeed = async (page: number) => {
    try {
        const { data } = await axiosAuth.post<IResFeed>(
            `home/feed`,
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

export const fetchMyFeed = async (page: number) => {
    try {
        const { data } = await axiosAuth.post<IResFeed>(
            `home/myfeed`,
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