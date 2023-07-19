import { useHotkeys } from "react-hotkeys-hook";

export default function (setSidebar, activeSidebar) {
  const hotkeyOptions = {
    enableOnFormTags: true,
    preventDefault: true,
  };

  useHotkeys("ctrl+b", () => setSidebar(activeSidebar), hotkeyOptions);

  useHotkeys(
    "ctrl+shift+s",
    () => {
      setSidebar("settings");
    },
    hotkeyOptions
  );

  useHotkeys(
    "ctrl+shift+m",
    () => {
      setSidebar("members");
    },
    hotkeyOptions
  );
}
