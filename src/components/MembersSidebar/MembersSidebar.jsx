import React from "react";
import { useSelector } from "react-redux";

const img_url =
  "https://t3.ftcdn.net/jpg/05/23/82/00/360_F_523820033_WFwvxecXoVR4e0Bjbr1EjUEFgXNTzHF9.jpg";

const MembersSidebar = () => {
  const room = useSelector((state) => state.room);
  console.log(room.members);

  return (
    <div className="flex flex-col gap-4 py-2 grow-0 shrink-0 text-gray-200">
      {/* single user */}
      {room.members.map((member) => (
        <div className="flex items-center gap-3" key={member.id}>
          <img src={img_url} className="rounded-lg object-cover h-8 w-8" />
          <span>{member.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MembersSidebar;
