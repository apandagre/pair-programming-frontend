
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
import AgoraRTC from "agora-rtc-sdk-ng";

const Playground = () => {
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

  const appId = "9b263c24e94f4a85a48a1557ac779359";
  const token = null;
  const rtcUid = Math.floor(Math.random() * 2032);

  let roomId = "main";

  let audioTracks = {
    localAudioTrack: null,
    remoteAudioTracks: {},
  };

  let rtcClient;

  let handleUserJoined = async (user) => {
    console.log("[userJoined]", user);
  };

  let handleUserPublished = async (user, mediaType) => {
    await rtcClient.subscribe(user, mediaType);
    if(mediaType === "audio") {
      audioTracks.remoteAudioTracks[user.uid] = [user.audioTrack]
      user.audioTrack.play()
    }
  };

  let initRtc = async () => {
    rtcClient = AgoraRTC.createClient({
      mode: "rtc",
      codec: "vp8",
    });
    rtcClient.on("user-joined", handleUserJoined);
    rtcClient.on("user-published", handleUserPublished);

    await rtcClient.join(appId, roomId, token, rtcUid);

    audioTracks.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();

    rtcClient.publish(audioTracks.localAudioTrack);
  };

  useEffect(() => {
    window.onload = initRtc;

    return () => {
      if (!audioTracks.localAudioTrack) return;
      audioTracks.localAudioTrack.stop();
      audioTracks.localAudioTrack.close();

      rtcClient.unpublish();
      rtcClient.leave();
    };
  }, []);

  return (
    <div className="h-full flex flex-col">
      <div id={rtcUid} className="hidden"></div>
      <EditorHeader
        link={
          "https://codehub.com/join/invite-code-link-one-more-againhttps://codehub.com/join/invite-code-link-one-more-again"
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
