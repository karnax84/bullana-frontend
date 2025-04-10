import { IBackendApiCallBaseResponse } from "./types.backend";
import { IUserData } from "./types.profile";

export interface IFeedData {
    _id: string;
    type: "like" | "retweet" | "comment";
    related_tweet_id: string;
    points: number;
    relatedTweet: ITweetData;
    user: IUserData;
    createdAt: string;
};

interface ITweetData {
    text: string;
    created_at: string;
    media_url?: string;
    preview_image_url? : string;
    public_metrics: {
        like_count: number;
        retweet_count: number;
        reply_count: number;
        quote_count: number;
        bookmark_count: number;
        impression_count: number;
    }
}


export interface IResFeed extends IBackendApiCallBaseResponse {
    data: IFeedData[]
}


export interface ISliceHome {
    feeds: IFeedData[];
    feedPage: number;
    feedLoading: boolean;
    feedHasmore: boolean;
    myfeeds: IFeedData[];
    myfeedPage: number;
    myfeedLoading: boolean;
    myfeedHasmore: boolean;
}
