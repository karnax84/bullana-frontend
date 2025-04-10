import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { questsSlice } from "./store.slice.quests";
import { historySlice } from "./store.slice.history";
import { leaderboardSlice } from "./store.slice.leaderboad";
import { homeSlice } from "./store.slice.home";

const store = configureStore({
  reducer: {
    quests: questsSlice.reducer,
    histories: historySlice.reducer,
    leaderboards: leaderboardSlice.reducer,
    home: homeSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
