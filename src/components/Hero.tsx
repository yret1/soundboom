import { Link } from "react-router-dom";
import Button from "./Button";
interface HeroProps {
  find: (id: number) => void;

}
const Hero : React.FC<HeroProps> = ({find}) => {

  return (
    <section className="flex justify-center lg:justify-start items-center bg-[url('/assets/home/mobile/image-header.jpg')] bg-cover bg-bottom h-[33rem] md:bg-[url('/assets/home/tablet/image-header.jpg')] lg:bg-[url('/assets/home/desktop/image-hero.jpg')]">
      <article className="flex flex-col justify-center items-center text-center px-8 md:w-3/5 lg:items-start lg:justify-start lg:py-0 lg:text-left lg:w-4/12 lg:mx-40">
        <p className="opacity-50 text-white text-14 tracking-10 mb-4">
          NEW PRODUCT
        </p>
        <h1 className="text-white text-40 font-bold mb-6 md:text-56">
          XX99 MARK II HEADPHONES
        </h1>
        <p className="text-white text-15 leading-25 mb-6">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to={"/product"}>

        <Button find={find} id={4} />
        </Link>
      </article>
    </section>
  );
};

export default Hero;
