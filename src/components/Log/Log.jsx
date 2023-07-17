import { FiAlertTriangle } from "react-icons/fi";

const Log = () => {
  return (
    <div className="w-full bg-cyan-700 text-white px-8 py-[2px] flex items-center gap-2">
      <FiAlertTriangle />
      <span>Taylor Swift joined</span>
    </div>
  );
};

export default Log;
