import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHistory, ISliceHistory } from "common/types/types.profile";

const initialState = {
  today: [],
  week: [],
  month: [],
  allTime: [],
  todayPage: 1,
  todayLoading: false,
  todayHasmore: true,
  weekPage: 1,
  weekLoading: false,
  weekHasmore: true,
  monthPage: 1,
  monthLoading: false,
  monthHasmore: true,
  allPage: 1,
  allLoading: false,
  allHasmore: true,
} as ISliceHistory;

export const historySlice = createSlice({
  name: "historySlice",
  initialState,
  reducers: {
    initToday: (state, action: { payload: IHistory[]; type: string }) => {
      state.today = action.payload;
      return state;
    },
    initWeek: (state, action: { payload: IHistory[]; type: string }) => {
      state.week = action.payload;
      return state;
    },
    initMonth: (state, action: { payload: IHistory[]; type: string }) => {
      state.month = action.payload;
      return state;
    },
    initAllTime: (state, action: { payload: IHistory[]; type: string }) => {
      state.allTime = action.payload;
      return state;
    },
    appendToday: (state, action: { payload: IHistory[]; type: string }) => {
      state.today = [...state.today, ...action.payload]; // Append new feed data to the existing array
      return state;
    },
    setTodayPage: (state, action: { payload: number; type: string }) => {
      state.todayPage = action.payload; 
      return state;
    },
    setTodayLoading: (state, action: { payload: boolean; type: string }) => {
      state.todayLoading = action.payload; 
      return state;
    },
    setTodayHasmore: (state, action: { payload: boolean; type: string }) => {
      state.todayHasmore = action.payload; 
      return state;
    },
    appendWeek: (state, action: { payload: IHistory[]; type: string }) => {
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
    appendMonth: (state, action: { payload: IHistory[]; type: string }) => {
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
    appendAllTime: (state, action: { payload: IHistory[]; type: string }) => {
      state.allTime = [...state.allTime, ...action.payload]; // Append new feed data to the existing array
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

export const { initToday, initWeek, initMonth, initAllTime, appendToday, appendWeek, appendMonth, appendAllTime, setTodayPage, setTodayLoading, setTodayHasmore, setWeekPage, setWeekLoading, setWeekHasmore, setMonthPage, setMonthLoading, setMonthHasmore, setAllPage, setAllLoading, setAllHasmore } = historySlice.actions;
