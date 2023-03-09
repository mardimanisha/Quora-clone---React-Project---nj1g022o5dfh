import { createSlice } from "@reduxjs/toolkit";
/* The first line imports the createSlice function from the "@reduxjs/toolkit" package.
The userSlice constant is created by calling the createSlice function and passing an object with the following properties:
name: A string used to identify the slice in the Redux store.
initialState: An object representing the initial state of the slice, which in this case only contains a user field set to null.
reducers: An object containing functions that define the state mutations, where login and logout functions set the user field to the payload value and null, respectively.
The next two lines export the login and logout actions created by the createSlice function.
The selectUser function is defined as a selector function that retrieves the user field from the user slice of the Redux store state.
Finally, the userSlice.reducer is exported, which is a function that generates the reducer for the user slice. */
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
