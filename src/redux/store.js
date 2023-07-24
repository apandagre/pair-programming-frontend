import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./editor/editorSlice";
import roomReducer from "./room/roomSlice";

export const store = configureStore({
  reducer: {
    editor: editorReducer,
    room: roomReducer,
  },
});
