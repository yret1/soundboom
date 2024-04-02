import { useState, createContext, ReactNode } from "react";

interface ItemNumberContextType {
    itemNumber: number;
    plusItem: () => void;
    minusItem: () => void;
}

const ItemNumberContext = createContext<ItemNumberContextType | undefined > (undefined)

interface AddRemoveContextProps {
    children: ReactNode;
}

const AddRemoveContext: React.FC<AddRemoveContextProps> = ({ children }) => {

   // State hook for managing the item number, initialized to 0
  const [itemNumber, setItemNumber] = useState<number>(0)

  // Function to increment the item number
  function plusItem(){
    setItemNumber(prevItemNumber => prevItemNumber + 1)
  }

  // Function to decrement the item number but not below 0
  function minusItem() {

  // Checks if itemNumber is greater than 0 before decrementing; otherwise, keeps it the same  
    setItemNumber(prevItemNumber => prevItemNumber > 0 ? prevItemNumber -1 : prevItemNumber);
  }

  return (
    <ItemNumberContext.Provider value={{itemNumber, plusItem, minusItem}}>
        {children}
    </ItemNumberContext.Provider>
  )
}

export {ItemNumberContext, AddRemoveContext}