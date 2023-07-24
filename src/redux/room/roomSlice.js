import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  members: [],
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    addMember: (state, action) => {
      console.log("adding member", action.payload);
      state.members.push(action.payload);
    },
  },
});

export const { addMember } = roomSlice.actions;

export default roomSlice.reducer;
