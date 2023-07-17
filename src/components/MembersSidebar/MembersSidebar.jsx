import React from "react";

const img_url =
  "https://t3.ftcdn.net/jpg/05/23/82/00/360_F_523820033_WFwvxecXoVR4e0Bjbr1EjUEFgXNTzHF9.jpg";

const MembersSidebar = () => {
  return (
    <div className="flex flex-col gap-4 py-2 grow-0 shrink-0 text-gray-200">
      {/* single user */}
      <div className="flex items-center gap-3">
        <img src={img_url} className="rounded-lg object-cover h-8 w-8" />
        <span>Charlie Puth</span>
      </div>
    </div>
  );
};

export default MembersSidebar;
