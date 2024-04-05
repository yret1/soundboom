import { Link } from "react-router-dom";

const Back = () => {
  return (
    <section className="w-screen flex justify-start items-center p-6">
      <Link to="/">
        <button className=" cursor-pointer flex justify-center items-center">
          <p className="font-manrope font font-medium text-[15px] text-black text-opacity-50">
            Go Back
          </p>
        </button>
      </Link>
    </section>
  );
};

export default Back;
