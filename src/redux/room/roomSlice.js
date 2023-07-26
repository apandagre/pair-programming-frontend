import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
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

    setRoomName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { addMember, setRoomName } = roomSlice.actions;

export default roomSlice.reducer;
