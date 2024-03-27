const AddRemoveItem = () => {
  return (
    <div className="flex">
      <button className="py-4 px-5 bg-secondary-200 text-14 tracking-1 font-bold text-gray-500 hover:bg-gray-400 hover:text-black">
        -
      </button>
      <div className="py-4 px-5 bg-secondary-200 text-14 tracking-1 font-bold text-gray-500">
        0
      </div>
      <button className="py-4 px-5 bg-secondary-200 text-14 tracking-1 font-bold text-gray-500 hover:bg-gray-400 hover:text-black">
        +
      </button>
    </div>
  );
};

export default AddRemoveItem;
