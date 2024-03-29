import { useState, useEffect } from "react";
import Cartutton from "./Cartbutton";

const YouMayAlsoLikeArticle = () => {
  const [imageSrc, setImageSrc] = useState(
    "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setImageSrc(
          "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
        );
      } else {
        setImageSrc("/assets/shared/mobile/image-xx99-mark-one-headphones.jpg");
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
        XX99 Mark II Headphones
      </h1>
      <Cartutton />
    </section>
  );
};

export default YouMayAlsoLikeArticle;
