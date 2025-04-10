import { IBackendApiCallBaseResponse } from "./types.backend";
import { IUser, IUserData } from "./types.profile";

export interface ILeaderboard {
    no: number;
    user: IUser;
    progress?: number;
    raise: number;
}

export interface IResLeaderboard extends IBackendApiCallBaseResponse {
    data: IUserData[]
}

export interface ISliceLeaderboard {
    week: IUserData[];
    month: IUserData[];
    allTime: IUserData[];
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
