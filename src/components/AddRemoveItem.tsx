import { useContext } from "react";
import { ItemNumberContext } from "../context/AddRemoveContext";

const AddRemoveItem: React.FC = () => {

  const context = useContext(ItemNumberContext)

  if (!context){
    throw new Error ("AddRemoveItem must be used within a AddRemoveContext")
  }

  const {itemNumber, plusItem, minusItem} = context

  return (
    <div className="flex">
       {/* Button to decrement itemNumber. It's disabled when itemNumber is 0 or less */}
      <button onClick={minusItem} className="py-4 px-5 bg-secondary-200 text-14 tracking-1 font-bold text-gray-500 hover:bg-gray-400 hover:text-black">
        -
      </button>
      {/* Display the current value of itemNumber */}
      <div className="py-4 px-5 bg-secondary-200 text-14 tracking-1 font-bold text-gray-500">
        {itemNumber}
      </div>
      {/* Button to increment itemNumber */}
      <button onClick={plusItem} className="py-4 px-5 bg-secondary-200 text-14 tracking-1 font-bold text-gray-500 hover:bg-gray-400 hover:text-black">
        +
      </button>
    </div>
  );
};

export default AddRemoveItem;