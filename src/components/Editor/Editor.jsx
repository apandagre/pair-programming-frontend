import { Editor as MonacoEditor, useMonaco } from "@monaco-editor/react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setEditorValue } from "../../redux/editor/editorSlice";
import collaborationSetup from "./collaborationSetup";
import { addMember } from "../../redux/room/roomSlice";

const Editor = () => {
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const editorState = useSelector((state) => state.editor);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const room = queryParams.get("room");

  useEffect(() => {
    dispatch(
      addMember({
        name: "Your self",
        id: "your-self",
      })
    );
  }, []);

  function editorMount(editor, monaco) {
    console.log("[mounting editor..]", editorState);

    editorRef.current = editor;

    monaco?.editor.defineTheme("my-theme", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: { "editor.background": "#121212" },
    });
    monaco?.editor.setTheme("my-theme");

    // https://github.com/yjs/y-monaco

    collaborationSetup(room, editorRef, dispatch);

    editor.setValue(editorState.value);
  }

  const onChange = (value) => {
    dispatch(setEditorValue(value));
    console.log(editorState);
  };

  return (
    <>
      {editorState && editorState.language && (
        <MonacoEditor
          defaultLanguage={editorState.language}
          onMount={editorMount}
          onChange={onChange}
          value={editorState.value}
          options={{
            fontSize: editorState.fontSize,
            minimap: {
              enabled: editorState.minimap,
            },
            wordWrap: editorState.wordWrap,
            lineNumbers: editorState.lineNumbers,
            padding: { top: 1 },
            tabSize: editorState.tabSize,
          }}
        />
      )}
    </>
  );
};

export default Editor;
