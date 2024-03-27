import React from "react";

const ProductFeatures = () => {
  return (
    <section className="w-full px-6 pb-6 lg:px-40 flex justify-between items-center">
      <article className="flex flex-col lg:flex-row lg:justify-start lg:gap-32">
        <article className="mt-20 lg:w-1/2">
          <h1 className="text-black text-24 font-bold mb-6 md:text-32">
            FEATURES
          </h1>
          <p className="text-black text-15 leading-25 mb-6 w-full">
            Experience unrivalled stereo sound thanks to innovative acoustic
            technology. With improved ergonomics designed for full day wearing,
            these revolutionary earphones have been finely crafted to provide
            you with the perfect fit, delivering complete comfort all day long
            while enjoying exceptional noise isolation and truly immersive
            sound. <br></br>
            <br></br>The YX1 Wireless Earphones features customizable controls
            for volume, music, calls, and voice assistants built into both
            earbuds. The new 7-hour battery life can be extended up to 28 hours
            with the charging case, giving you uninterrupted play time.
            Exquisite craftsmanship with a splash resistant design now available
            in an all new white and grey color scheme as well as the popular
            classic black.
          </p>
        </article>
        <article className="mt-20 flex flex-col md:flex-row lg:flex-col">
          <h1 className="text-black text-24 font-bold mb-6 md:text-32">
            IN THE BOX
          </h1>
          <article className="md:ml-[20vw] lg:m-0">
            <p className="text-black text-15 leading-25 mb-2 w-full">
              <span className="text-primary-100 text-15 font-bold leading-25 mr-6">
                1x
              </span>
              Headphone Unit
            </p>
            <p className="text-black text-15 leading-25 mb-2 w-full">
              <span className="text-primary-100 text-15 font-bold leading-25 mr-6">
                2x
              </span>
              Replacement Earcups
            </p>
            <p className="text-black text-15 leading-25 mb-2 w-full">
              <span className="text-primary-100 text-15 font-bold leading-25 mr-6">
                1x
              </span>
              User Manual
            </p>
            <p className="text-black text-15 leading-25 mb-2 w-full">
              <span className="text-primary-100 text-15 font-bold leading-25 mr-6">
                1x
              </span>
              3.5mm 5m Audio Cable
            </p>
            <p className="text-black text-15 leading-25 mb-2 w-full">
              <span className="text-primary-100 text-15 font-bold leading-25 mr-6">
                1x
              </span>
              Travel Bag
            </p>
          </article>
        </article>
      </article>
    </section>
  );
};

export default ProductFeatures;
