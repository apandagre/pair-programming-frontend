import { Editor as MonacoEditor } from "@monaco-editor/react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { MonacoBinding } from "y-monaco";
import { WebrtcProvider } from "y-webrtc";
import * as Y from "yjs";
import { addCursor, randomColor, randomInt } from "./utils";

const Editor = () => {
  const editorRef = useRef(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const room = queryParams.get("room");

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

    const doc = new Y.Doc();
    doc.clientID = randomInt(0, 100);

    // wss://pair-programming-signaling-server.onrender.com - donesn't work :(
    const provider = new WebrtcProvider(room, doc);
    const type = doc.getText("monaco");
    const awareness = provider.awareness;

    console.log("clientId = ", doc.clientID);

    awareness.setLocalStateField("user", {
      name: "user-" + doc.clientID,
      color: randomColor(),
    });

    const binding = new MonacoBinding(
      type,
      editorRef.current.getModel(),
      new Set([editorRef.current]),
      awareness
    );

    awareness.on("update", (action) => {
      for (let id of action.added) {
        let { user } = awareness.getStates().get(id);
        addCursor(user.name, id, user.color);
      }

      for (let id of action.removed) {
        let userObj = awareness.getStates().get(id);
        // if possible, remove the particular style element..
      }
    });
  }

  return (
    <MonacoEditor
      defaultLanguage="javascript"
      onMount={editorMount}
      value={"console.log('hi mom');"}
      options={{
        fontSize: 18,
        minimap: {
          enabled: false,
        },
        padding: { top: 1 },
      }}
    />
  );
};

export default Editor;
