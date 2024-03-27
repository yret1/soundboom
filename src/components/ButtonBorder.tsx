import { Link } from "react-router-dom";
interface staticProps {
  find: (id: number) => void;
  id: number;
}
const ButtonBlack: React.FC<staticProps> = ({ find, id }) => {
  const handleClick = () => {
    // Ensure that 'find' function is available and 'id' is valid
    if (find && id) {
      find(id);
    } else {
      console.error("Error: 'find' function or 'id' prop is missing.");
    }
  };

  return (
    <>
      <Link to={"/product"}>
        <button
          onClick={handleClick}
          className="py-4 px-5 border-2 border-black text-14 tracking-1 font-bold text-black hover:bg-black hover:text-white"
        >
          SEE PRODUCT
        </button>
      </Link>
    </>
  );
};

export default ButtonBlack;
