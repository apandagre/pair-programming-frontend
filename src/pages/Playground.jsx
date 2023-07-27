import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import { useLocation, useNavigate } from "react-router-dom";
import fetchData from "../api/fetchData";
import ActivityBar from "../components/ActivityBar/ActivityBar";
import Editor from "../components/Editor/Editor";
import EditorHeader from "../components/EditorHeader/EditorHeader";
import Input from "../components/InputOutput/Input";
import Output from "../components/InputOutput/Output";
import Log from "../components/Log/Log";
import MembersSidebar from "../components/MembersSidebar/MembersSidebar";
import SettingsSidebar from "../components/SettingsSidebar/SettingsSidebar";
import SidebarContainer from "../components/Sidebar/SidebarContainer";
import { setEditorValue, setLanguage } from "../redux/editor/editorSlice";
import { setRoomName } from "../redux/room/roomSlice";
import useSidebarShortcuts from "./hooks/useSidebarShortcuts";

const Playground = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const room = queryParams.get("room");
  const navigate = useNavigate();

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
    const getRoomInfo = async () => {
      const roomInfo = await fetchData(`/room/${room}`);
      console.log("[roomInfo]", roomInfo);
      if (!roomInfo.name) return navigate("/dashboard");
      dispatch(setLanguage(roomInfo.language));
      dispatch(setRoomName(roomInfo.name));
      dispatch(setEditorValue(roomInfo.code));
    };

    getRoomInfo();
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen">
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

            <ReflexElement className="min-w-0">
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
