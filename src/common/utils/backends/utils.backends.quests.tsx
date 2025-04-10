import { IQuest } from "common/types/types.quests";
import axiosAuth from "../utils.axios";
import { IBackendApiCallBaseResponse } from "common/types/types.backend";

export const fetchCheckReferralCode = async (code: string) => {
  try {
    const { data } = await axiosAuth.post<IBackendApiCallBaseResponse>(
      `quests/validate-referral`,
      {
        code
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

export const fetchCreateYoutube = async (link: string, title: string, description: string) => {
  try {
    const { data } = await axiosAuth.post<IBackendApiCallBaseResponse>(
      `quests/create-youtube`,
      {
        link, title, description
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

export const fetchCreateTwitter = async (link: string, title: string, description: string) => {
  try {
    const { data } = await axiosAuth.post<IBackendApiCallBaseResponse>(
      `quests/create-twitterthread`,
      {
        link, title, description
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

export const fetchCreateReferral = async () => {
  try {
    const { data } = await axiosAuth.post<IBackendApiCallBaseResponse>(
      `quests/create-referral`,
    );
    return data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      return null;
    }
    return null;
  }
};

interface IQuestStatus extends IBackendApiCallBaseResponse {
  data: IQuest
}

export const fetchQuestStatus = async () => {
  try {
    const { data } = await axiosAuth.get<IQuestStatus>(
      `quests/status`,
    );
    return data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      return null;
    }
    return null;
  }
};

export const fetchLikeConfirm = async () => {
  try {
    const { data } = await axiosAuth.get<IBackendApiCallBaseResponse>(
      `quests/confirm-like`,
    );
    return data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      return null;
    }
    return null;
  }
};

export const fetchRetweetConfirm = async () => {
  try {
    const { data } = await axiosAuth.get<IBackendApiCallBaseResponse>(
      `quests/confirm-retweet`,
    );
    return data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      return null;
    }
    return null;
  }
};

export const fetchCommentConfirm = async () => {
  try {
    const { data } = await axiosAuth.get<IBackendApiCallBaseResponse>(
      `quests/confirm-comment`,
    );
    return data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      return null;
    }
    return null;
  }
};

export const fetchSharingConfirm = async () => {
  try {
    const { data } = await axiosAuth.get<IBackendApiCallBaseResponse>(
      `quests/confirm-sharing`,
    );
    return data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      return null;
    }
    return null;
  }
};

export const fetchFollowingConfirm = async () => {
  try {
    const { data } = await axiosAuth.get<IBackendApiCallBaseResponse>(
      `quests/confirm-following`,
    );
    return data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      return null;
    }
    return null;
  }
};

export const fetchDiscordConfirm = async () => {
  try {
    const { data } = await axiosAuth.get<IBackendApiCallBaseResponse>(
      `quests/confirm-discord`,
    );
    return data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      return null;
    }
    return null;
  }
};

export const fetchTelegramConfirm = async () => {
  try {
    const { data } = await axiosAuth.get<IBackendApiCallBaseResponse>(
      `quests/confirm-telegram`,
    );
    return data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      return null;
    }
    return null;
  }
};