import { Editor as MonacoEditor } from "@monaco-editor/react";

function editorMount(editor, monaco) {
  monaco?.editor.defineTheme("my-theme", {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: { "editor.background": "#121212" },
  });
  monaco?.editor.setTheme("my-theme");

  console.log(editor.getOptions());
}

const Editor = () => {
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
