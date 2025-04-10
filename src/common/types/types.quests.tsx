import { IBackendApiCallBaseResponse } from "./types.backend";

export interface IDailyQuest {
    title?: string;
    desc?: string;
    progress?: number;
    link?: string;
    icon?: React.ReactNode;
}

export interface IGrandQuest extends IDailyQuest {
    icon?: React.ReactNode;
}

export interface IQuest {
    yactive: number;
    ypending: number;
    ydeclined: number;
    tactive: number;
    tpending: number;
    tdeclined: number;
    referralCreated?: boolean;
    referralLink?: string;
  }