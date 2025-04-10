import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISliceLeaderboard } from "common/types/types.leaderboard";
import { IUserData } from "common/types/types.profile";

const initialState = {
  week: [],
  weekPage: 1,
  weekLoading: false,
  weekHasmore: true,
  month: [],
  monthPage: 1,
  monthLoading: false,
  monthHasmore: true,
  allTime: [],
  allPage: 1,
  allLoading: false,
  allHasmore: true,
} as ISliceLeaderboard;

export const leaderboardSlice = createSlice({
  name: "leaderboardSlice",
  initialState,
  reducers: {
    initWeek: (state, action: { payload: IUserData[]; type: string }) => {
      state.week = action.payload;
      return state;
    },
    appendWeek: (state, action: { payload: IUserData[]; type: string }) => {
      state.week = [...state.week, ...action.payload]; // Append new feed data to the existing array
      return state;
    },
    setWeekPage: (state, action: { payload: number; type: string }) => {
      state.weekPage = action.payload;
      return state;
    },
    setWeekLoading: (state, action: { payload: boolean; type: string }) => {
      state.weekLoading = action.payload;
      return state;
    },
    setWeekHasmore: (state, action: { payload: boolean; type: string }) => {
      state.weekHasmore = action.payload;
      return state;
    },
    initMonth: (state, action: { payload: IUserData[]; type: string }) => {
      state.month = action.payload;
      return state;
    },
    appendMonth: (state, action: { payload: IUserData[]; type: string }) => {
      state.month = [...state.month, ...action.payload]; // Append new feed data to the existing array
      return state;
    },
    setMonthPage: (state, action: { payload: number; type: string }) => {
      state.monthPage = action.payload;
      return state;
    },
    setMonthLoading: (state, action: { payload: boolean; type: string }) => {
      state.monthLoading = action.payload;
      return state;
    },
    setMonthHasmore: (state, action: { payload: boolean; type: string }) => {
      state.monthHasmore = action.payload;
      return state;
    },
    initAllTime: (state, action: { payload: IUserData[]; type: string }) => {
      state.allTime = action.payload;
      return state;
    },
    appendAll: (state, action: { payload: IUserData[]; type: string }) => {
      state.month = [...state.allTime, ...action.payload]; // Append new feed data to the existing array
      return state;
    },
    setAllPage: (state, action: { payload: number; type: string }) => {
      state.allPage = action.payload;
      return state;
    },
    setAllLoading: (state, action: { payload: boolean; type: string }) => {
      state.allLoading = action.payload;
      return state;
    },
    setAllHasmore: (state, action: { payload: boolean; type: string }) => {
      state.allHasmore = action.payload;
      return state;
    },
  },
});

// export const selectCount = (state: RootState) => state.user.value;

export const { initWeek, appendWeek, setWeekPage, setWeekLoading, setWeekHasmore, initMonth, appendMonth, setMonthPage, setMonthLoading, setMonthHasmore, initAllTime, appendAll, setAllPage, setAllLoading, setAllHasmore } = leaderboardSlice.actions;
