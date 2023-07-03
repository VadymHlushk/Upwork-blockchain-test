import { configureStore } from "@reduxjs/toolkit";
import QuestionSlice from "../features/QuestionSlice";

export const store = configureStore({
  reducer: {
    isConnected: QuestionSlice,
  },
});