import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "python",
  value: "",
  wordWrap: "off",
  lineNumbers: "on",
  minimap: false,
  fontSize: 18,
  usernameOnCursor: true,
  tabSize: 2,
  input: "",
  output: "",
  language: "",
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    toggleWordWrap: (state) => {
      if (state.wordWrap === "on") state.wordWrap = "off";
      else state.wordWrap = "on";
    },

    toggleUsernameOnCursor: (state) => {
      if (state.usernameOnCursor) state.usernameOnCursor = false;
      else state.usernameOnCursor = true;
    },

    toggleLineNumbers: (state) => {
      if (state.lineNumbers === "on") state.lineNumbers = "off";
      else state.lineNumbers = "on";
    },

    toggleMinimap: (state) => {
      if (state.minimap) state.minimap = false;
      else state.minimap = true;
    },

    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },

    setTabSize: (state, action) => {
      state.tabSize = action.payload;
    },

    setEditorValue: (state, action) => {
      state.value = action.payload;
    },

    setInput: (state, action) => {
      state.input = action.payload;
    },

    setLanguage: (state, action) => {
      state.language = action.payload;
    },

    setOuput: (state, action) => {
      state.output = action.payload;
    },
  },
});

export const {
  toggleWordWrap,
  toggleUsernameOnCursor,
  toggleLineNumbers,
  toggleMinimap,
  setFontSize,
  setTabSize,
  setEditorValue,
  setInput,
  setLanguage,
  setOuput,
} = editorSlice.actions;

export default editorSlice.reducer;
