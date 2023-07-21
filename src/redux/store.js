import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./editor/editorSlice";

export const store = configureStore({
  reducer: {
    editor: editorReducer,
  },
});
