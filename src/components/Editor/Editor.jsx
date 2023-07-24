import { Editor as MonacoEditor } from "@monaco-editor/react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setEditorValue } from "../../redux/editor/editorSlice";
import collaborationSetup from "./collaborationSetup";
import { addMember } from "../../redux/room/roomSlice";

const Editor = () => {
  const editorRef = useRef(null);
  const dispatch = useDispatch();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const room = queryParams.get("room");

  useEffect(() => {
    dispatch(addMember({
      name: 'Your self',
      id: 'your-self'
    }))
  }, [])

  function editorMount(editor, monaco) {
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
  }

  const editorState = useSelector((state) => state.editor);

  const onChange = (value) => {
    dispatch(setEditorValue(value));
  };

  return (
    <MonacoEditor
      defaultLanguage={editorState.language}
      onMount={editorMount}
      value={"console.log('hi mom');"}
      onChange={onChange}
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
  );
};

export default Editor;
