import bgMob from "/assets/shared/mobile/image-best-gear.jpg";
import bgTab from "/assets/shared/tablet/image-best-gear.jpg";
import bgDesk from "/assets/shared/desktop/image-best-gear.jpg";


import { useState, useEffect } from "react";



const About = () => {


    const [small, setSmall] = useState(false)
    const [medium, setMedium] = useState(false)


    const handleResize = () => {

        if(window.innerWidth < 768) {
            setSmall(true)
            setMedium(false)
        } else if(window.innerWidth < 1200) {
            setSmall(false)
            setMedium(true)
        } else {
            setSmall(false)
            setMedium(false)
        }
    }



    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    },[])

  return (
    <article className="w-full p-6 lg:px-20 flex flex-col lg:flex-row-reverse">

        <figure className="rounded-md shadow-md bg-center bg-cover  h-80 lg:h-[600px] lg:w-[600px] lg:m-10"
        style={small ? {backgroundImage: `url(${bgMob})`} : medium ? {backgroundImage: `url(${bgTab})`} : {backgroundImage: `url(${bgDesk})`}}>
        </figure>

        <section className="w-full  lg:flex-1 flex flex-col justify-center items-center lg:px-10">
        <h1 className="font-manrope text-28 tracking-1 text-center lg:text-start py-6 text-black font-bold md:text-40">BRINGING YOU THE <span className="text-primary-100">BEST</span> AUDIO GEAR</h1>
        <p className="font-manrope lg:text-start md:text text-14 font-medium text-center text-secondary-100 text-opacity-50">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </section>
    </article>
  )
}

export default About