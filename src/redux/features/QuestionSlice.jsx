import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  theme: "false",

  // userDetails: {
  //   isChanged: false,
  // }
};
export const QuestionAndAnswerSlice = createSlice({
  name: "isConnected",
  initialState,
  reducers: {
    SetTheme: (state, action) => {
      state.theme = action.payload;
    },


  },
});

// Action creators are generated for each case reducer function
export const {
  SetTheme
} = QuestionAndAnswerSlice.actions;

export default QuestionAndAnswerSlice.reducer;