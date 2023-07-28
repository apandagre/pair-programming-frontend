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

    removeMember: (state, action) => {
      console.log("removing member", action.payload);
      state.members = state.members.filter(
        (member) => member.id != action.payload
      );
    },

    setRoomName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { addMember, setRoomName, removeMember } = roomSlice.actions;

export default roomSlice.reducer;
