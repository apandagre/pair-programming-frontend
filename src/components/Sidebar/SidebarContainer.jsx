const SidebarContainer = ({ title, children }) => {
  return (
    <div className="flex flex-col divide-y divide-[#2d2d31] h-full border-r border-[#252528]">
      <span className="px-3 py-1 bg-[#111111]">{title}</span>
      <div className="flex justify-between px-3 py-1 bg-[#111111] h-full">
        {children}
      </div>
    </div>
  );
};

export default SidebarContainer;
