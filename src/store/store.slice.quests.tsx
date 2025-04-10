import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuest } from "common/types/types.quests";


const initialState = {
  yactive: 0,
  ypending: 0,
  ydeclined: 0,
  tactive: 0,
  tpending: 0,
  tdeclined: 0,
  referralCreated: false,
  referralLink: ""
} as IQuest;

export const questsSlice = createSlice({
  name: "questsSlice",
  initialState,
  reducers: {
    init: (state, action: { payload: IQuest; type: string }) => {
      state = action.payload;
      return state;
    },
  },
});

// export const selectCount = (state: RootState) => state.user.value;

export const { init: initquests } = questsSlice.actions;
