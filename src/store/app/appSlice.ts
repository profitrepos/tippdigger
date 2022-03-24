import { RootState } from "./../store";
import { IUser } from "./../../models/User";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DB } from "../../firebase";

export interface AppState {
  recipientData: IUser | null;
  loading: boolean;
  errorMessage: string | null;
}

const initialState: AppState = {
  recipientData: null,
  loading: false,
  errorMessage: null,
};

export const getRecepient = createAsyncThunk(
  "app/getRecepient",
  async (id: string, thunkAPI) => {
    try {
      const findResp = await DB.getUserById(id);

      if (findResp.exists()) {
        return findResp.data();
      } else {
        thunkAPI.rejectWithValue("Пользователь не найден");
      }
    } catch (error) {
      thunkAPI.rejectWithValue("Ошибка авторизации");
    }
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: {
    // ПОЛУЧЕНИЕ ПОЛУЧАТЕЛЯ ЧАЕВЫХ
    [getRecepient.pending.type]: (state) => {
      state.errorMessage = null;
      state.loading = true;
    },
    [getRecepient.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.errorMessage = null;
      state.loading = false;
      state.recipientData = action.payload;
    },
    [getRecepient.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const selectRecipientData = (state: RootState) =>
  state.app.recipientData;
export const selectRecipientLoading = (state: RootState) => state.app.loading;
export const selectRecipientError = (state: RootState) =>
  state.app.errorMessage;

export default appSlice.reducer;
