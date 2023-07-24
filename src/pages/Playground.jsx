import { useEffect, useState } from "react";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import ActivityBar from "../components/ActivityBar/ActivityBar";
import Editor from "../components/Editor/Editor";
import EditorHeader from "../components/EditorHeader/EditorHeader";
import Input from "../components/InputOutput/Input";
import Output from "../components/InputOutput/Output";
import Log from "../components/Log/Log";
import MembersSidebar from "../components/MembersSidebar/MembersSidebar";
import SettingsSidebar from "../components/SettingsSidebar/SettingsSidebar";
import SidebarContainer from "../components/Sidebar/SidebarContainer";
import useSidebarShortcuts from "./hooks/useSidebarShortcuts";
import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/editor/editorSlice";

const Playground = () => {
  const dispatch = useDispatch();
  const [activeSidebar, setActiveSidebar] = useState("members"); // "members" | "settings"

  const [openSidebar, setOpenSidebar] = useState(true);

  const setSidebar = (sidebar) => {
    if (activeSidebar === sidebar) setOpenSidebar(!openSidebar);
    else {
      setActiveSidebar(sidebar);
      setOpenSidebar(true);
    }
  };

  useSidebarShortcuts(setSidebar, activeSidebar);

  useEffect(() => {
    dispatch(setLanguage("python"));
  });

  return (
    <div className="h-full flex flex-col">
      <EditorHeader
        link={
          "https://http://localhost:5173/playground?invite-code-link-one-more-again"
        }
      />
      <ReflexContainer className="flex flex-1" orientation="vertical">
        <ReflexElement className="w-fit" flex={0} resizeWidth={false}>
          <ActivityBar active={activeSidebar} setSidebar={setSidebar} />
        </ReflexElement>
        <ReflexElement className="h-full min-w-0" flex={openSidebar ? 0.15 : 0}>
          <SidebarContainer title={activeSidebar}>
            {activeSidebar == "members" ? (
              <MembersSidebar />
            ) : (
              <SettingsSidebar />
            )}
          </SidebarContainer>
        </ReflexElement>
        <ReflexSplitter className="bg-[#363636] w-[3px] cursor-col-resize hover:bg-cyan-700" />
        <ReflexElement className="flex flex-col w-full  min-w-0">
          <Editor />
        </ReflexElement>
        <ReflexSplitter className="bg-[#363636] w-[3px] cursor-col-resize hover:bg-cyan-700" />

        <ReflexElement flex={0.3}>
          <ReflexContainer
            className="flex flex-col w-full h-full divide-solid divide-y-2 divide-[#252528] min-w-0"
            orientation="horizontal"
          >
            <ReflexElement className="w-full h-full" flex={0.65}>
              <Input />
            </ReflexElement>

            <ReflexSplitter className="bg-[#363636] h-[5px] cursor-row-resize hover:bg-cyan-700" />

            <ReflexElement className="w-full h-full">
              <Output />
            </ReflexElement>
          </ReflexContainer>
        </ReflexElement>
      </ReflexContainer>
      <Log />
    </div>
  );
};

export default Playground;
