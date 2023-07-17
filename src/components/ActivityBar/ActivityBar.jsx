import SingleItem from "./SingleItem";
import { SlPeople } from "react-icons/sl";
import { BsGear } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const ActivityBar = ({ active, setSidebar }) => {
  const menus = [
    { title: "members", icon: SlPeople, active: false },
    { title: "settings", icon: BsGear, active: true },
  ];

  return (
    <div className="sticky top-0 flex h-full w-14 flex-shrink-0 flex-col justify-between border-r border-[#252528] bg-[#161616]">
      <div>
        <SingleItem
          title="members"
          Icon={SlPeople}
          key="members"
          active={active == "members"}
          onClick={() => setSidebar("members")}
        />

        <SingleItem
          title="settings"
          Icon={BsGear}
          key="settings"
          active={active == "settings"}
          onClick={() => setSidebar("settings")}
        />
      </div>
      <div>
        <SingleItem title={"github"} Icon={AiFillGithub} active={false} />
      </div>
    </div>
  );
};

export default ActivityBar;
