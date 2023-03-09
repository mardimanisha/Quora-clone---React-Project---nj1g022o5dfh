import { createSlice } from "@reduxjs/toolkit";

/* ➡️➡️ The slice is given a name of "question" and an initial state object that contains two properties: questionId and questionName, both set to null. */
export const questionSlice = createSlice({
  name: "question",
  initialState: {
    questionId: null,
    questionName: null,
  },
  /* ➡️➡️ The slice's reducers object contains a single reducer function, setQuestionInfo. This reducer is responsible for updating the questionId and questionName properties of the state object when called. It takes two arguments: the current state object and an action object containing a payload property with the questionId and questionName values. */
  reducers: {
    setQuestionInfo: (state, action) => {
      state.questionId = action.payload.questionId;
      state.questionName = action.payload.questionName;
    },
  },
});

export const { setQuestionInfo } = questionSlice.actions;

export const selectQuestionName = (state) => state.question.questionName;
export const selectQuestionId = (state) => state.question.questionId;
export default questionSlice.reducer;
