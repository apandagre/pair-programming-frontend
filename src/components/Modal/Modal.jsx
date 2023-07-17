import ReactDom from "react-dom";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <div>
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-white/0 backdrop-blur-sm z-50 "
        onClick={onClose}
      ></div>
      <div
        className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 z-50 text-white selection:bg-[#0f3058] bg-[#2c2c2c] rounded-lg border border-gray-600"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
