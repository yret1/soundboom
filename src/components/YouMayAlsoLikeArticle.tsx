import { useState, useEffect } from "react";
import Cartutton from "./Cartbutton";

interface YouMayAlsoLikeArticleProps {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const YouMayAlsoLikeArticle: React.FC<YouMayAlsoLikeArticleProps> = ({name, image}) => {
  const [imageSrc, setImageSrc] = useState(
    image.mobile
  );

  /* UseEffect som anpassar vilken bild som visas beroende på skärmstorlek */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setImageSrc(image.desktop);
      } else {
        setImageSrc(image.mobile);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full px-6 py-6 flex flex-col justify-center items-center">
      <img
        className="rounded-md w-full object-contain mb-6"
        src={imageSrc}
      ></img>
      <h1 className="text-black text-24 font-bold mb-6 text-center">
        {name}
      </h1>
      <Cartutton />
    </section>
  );
};

export default YouMayAlsoLikeArticle;
