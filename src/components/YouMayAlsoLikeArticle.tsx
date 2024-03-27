import { useState, useEffect } from "react";
import Button from "./Button";
import Cartutton from "./Cartbutton";

const YouMayAlsoLikeArticle = () => {
  const [imageSrc, setImageSrc] = useState(
    "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"
  );

  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is >= 768 pixels (md size)
      if (window.innerWidth >= 768) {
        // Update the image source for md screens
        setImageSrc(
          "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
        ); // Example path, change it as needed
      } else {
        // Update the image source for smaller screens
        setImageSrc("/assets/shared/mobile/image-xx99-mark-one-headphones.jpg");
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handleResize initially in case the user loads the page on a md screen
    handleResize();

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs only once on mount

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
