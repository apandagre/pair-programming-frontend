import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  setFontSize,
  setTabSize,
  toggleLineNumbers,
  toggleMinimap,
  toggleUsernameOnCursor,
  toggleWordWrap,
} from "../../redux/editor/editorSlice";
import MultiOption from "../MultiOption/MultiOption";

// settings -
// [+] show username on cursor (on, off)
// [+] word wrap (on, off)
// [+] line numbers (on, off)
// [+] minimap (on, off)
// [] fontsize - (small, medium, large)
// [] indent size (2, 4, 8)

const SettingsSidebar = () => {
  const [on, setOn] = useState(true);

  const editor = useSelector((state) => state.editor);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-5 pt-3">
      <Checkbox
        label="Word wrap"
        on={editor.wordWrap === "on"}
        onClick={() => dispatch(toggleWordWrap())}
      />
      <Checkbox
        label="Show username on cursor"
        on={editor.usernameOnCursor}
        onClick={() => dispatch(toggleUsernameOnCursor())}
      />
      <Checkbox
        label="Show line numbers"
        on={editor.lineNumbers === "on"}
        onClick={() => dispatch(toggleLineNumbers())}
      />
      <Checkbox
        label="Show minimap"
        on={editor.minimap}
        onClick={() => dispatch(toggleMinimap())}
      />
      <MultiOption
        title="Font size"
        values={[14, 16, 18]}
        onOptionClick={(val) => dispatch(setFontSize(val))}
        active={editor.fontSize}
      />
      <MultiOption
        title="Indent size"
        values={[2, 4, 8]}
        onOptionClick={(val) => dispatch(setTabSize(val))}
        active={editor.tabSize}
      />
    </div>
  );
};

export default SettingsSidebar;
