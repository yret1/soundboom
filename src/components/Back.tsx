import { Link } from "react-router-dom";

const Back = () => {
  return (
    <section className="w-screen flex justify-start items-center pt-4 pb-2">
      <Link to="/">
        <button className=" w-32 cursor-pointer flex justify-center items-center">
          <p className="font-manrope font font-medium text-[15px] text-black text-opacity-50">
            Go Back
          </p>
        </button>
      </Link>
    </section>
  );
};

export default Back;
