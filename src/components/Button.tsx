interface ProductFeaturesProps {
  find: (id: number) => void;
  id: number;
}
const Button: React.FC<ProductFeaturesProps> = ({find,id}) => {

  const handleClick = () => {
    find(id);
  }
  return (
    <>
      <button onClick={handleClick} className="py-4 px-5 bg-primary-100 text-14 tracking-1 font-bold text-white hover:bg-primary-200">
        SEE PRODUCT
      </button>
    </>
  );
};

export default Button;
