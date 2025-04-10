import { IBackendApiCallBaseResponse } from "./types.backend";

export interface IUserData {
    username?: string;
    twitterId?: string;
    displayName?: string;
    avatar?: string;
    banner?: string;
    points?: number;
    rank?: "none" | "Iron" | "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond" | "Master" | "Grandmaster" | "Immortal" | "Challenger";
    percentage?: number;
    xp?: number;
};

export interface IResUserData {
    authenticated: boolean;
    message: string;
    user: IUserData;
    cookies: any;
}

export interface IUser {
    name?: string;
    twitterId?: string;
    xp?: number;
    profileImageUrl?: string;
};

export interface IPost {
    user?: IUser;
    title?: string;
    img?: string;
    comments?: number;
    like?: number;
    bookmark?: boolean;
};

export interface IHistory {
    _id: string;
    type: "referrlogin" | "like" | "retweet" | "comment" | "sharing" | "following" | "discord" | "telegram" | "youtube" | "twitter";
    referral: boolean;
    referralUser: IUserData;
    referralCode: string;
    related_tweet_id?: string;
    points: number;
    createdAt: string;
};

export interface ISliceHistory {
    today: IHistory[];
    week: IHistory[];
    month: IHistory[];
    allTime: IHistory[];
    todayPage: number,
    todayLoading: boolean,
    todayHasmore: boolean,
    weekPage: number,
    weekLoading: boolean,
    weekHasmore: boolean,
    monthPage: number,
    monthLoading: boolean,
    monthHasmore: boolean,
    allPage: number,
    allLoading: boolean,
    allHasmore: boolean,
}

export interface IResHistory extends IBackendApiCallBaseResponse{
    data: IHistory[]
};

  