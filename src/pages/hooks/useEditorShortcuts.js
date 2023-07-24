import { useHotkeys } from "react-hotkeys-hook";

export default function (runCode) {
  const hotkeyOptions = {
    enableOnFormTags: true,
    preventDefault: true,
    enableOnContentEditable: true,
  };

  useHotkeys("ctrl+'", runCode, hotkeyOptions);
}
