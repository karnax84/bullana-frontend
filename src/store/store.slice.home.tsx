import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFeedData, ISliceHome } from "common/types/types.home";

const initialState = {
  feeds: [],
  feedPage: 1,
  feedLoading: false,
  feedHasmore: true,
  myfeeds: [],
  myfeedPage: 1,
  myfeedLoading: false,
  myfeedHasmore: true,
} as ISliceHome;

export const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    initFeed: (state, action: { payload: IFeedData[]; type: string }) => {
      state.feeds = action.payload;
      return state;
    },
    appendFeed: (state, action: { payload: IFeedData[]; type: string }) => {
      state.feeds = [...state.feeds, ...action.payload]; // Append new feed data to the existing array
      return state;
    },
    setFeedPage: (state, action: { payload: number; type: string }) => {
      state.feedPage = action.payload; 
      return state;
    },
    setFeedLoading: (state, action: { payload: boolean; type: string }) => {
      state.feedLoading = action.payload; 
      return state;
    },
    setFeedHasmore: (state, action: { payload: boolean; type: string }) => {
      state.feedHasmore = action.payload; 
      return state;
    },
    initMyFeed: (state, action: { payload: IFeedData[]; type: string }) => {
      state.myfeeds = action.payload;
      return state;
    },
    appendMyFeed: (state, action: { payload: IFeedData[]; type: string }) => {
      state.myfeeds = [...state.myfeeds, ...action.payload]; // Append new feed data to the existing array
      return state;
    },
    setMyFeedPage: (state, action: { payload: number; type: string }) => {
      state.myfeedPage = action.payload; 
      return state;
    },
    setMyFeedLoading: (state, action: { payload: boolean; type: string }) => {
      state.myfeedLoading = action.payload; 
      return state;
    },
    setMyFeedHasmore: (state, action: { payload: boolean; type: string }) => {
      state.myfeedHasmore = action.payload; 
      return state;
    },
  },
});

// export const selectCount = (state: RootState) => state.user.value;

export const { initFeed, appendFeed, setFeedPage, setFeedLoading, setFeedHasmore, initMyFeed, appendMyFeed, setMyFeedPage, setMyFeedLoading, setMyFeedHasmore } = homeSlice.actions;
