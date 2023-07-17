const SingleItem = ({ title, Icon, active, onClick }) => {
  console.log(title);
  return (
    <div
      onClick={onClick}
      className={`flex h-12 items-center cursor-pointer text-gray-500 justify-center text-center ${
        active && "border-l-2 text-white"
      }`}
    >
      <Icon size={22} />
    </div>
  );
};

export default SingleItem;
