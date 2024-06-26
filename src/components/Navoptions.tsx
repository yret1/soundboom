import { Link } from "react-router-dom";
import Headphone from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speaker from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import Earphones from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import Shopbutton from "./Shopbutton";

interface setcategory {
  setCurrent: (category: string) => void;
}

const Item = ({
  title,
  setCurrent,
}: {
  title: string;
  setCurrent: setcategory["setCurrent"];
}) => {
  let img: string = "";
  let text: string = "";

  switch (title) {
    case "Headphones":
      img = Headphone;
      text = "HEADPHONES";
      break;
    case "Speakers":
      img = Speaker;
      text = "SPEAKERS";
      break;
    case "Earphones":
      img = Earphones;
      text = "EARPHONES";
      break;
  }

  return (
    <article className="relative h-80 min-w-60 max-w-80">
      <figure className="w-8/12 max-w-48 absolute top-10 abcenter">
        <img src={img} alt="Productimg" />
      </figure>
      <section className="h-[30%]"></section>

      <section className="rounded-md bg-secondary-200 h-[70%]">
        <section className="w-full h-full flex flex-col justify-end pb-12 items-center">
          <h1 className="font-manrope font-bold text-[15px] tracking-1">
            {text}
          </h1>

          <Link to="/category" onClick={() => setCurrent(title)}>
            <Shopbutton />
          </Link>
        </section>
      </section>
    </article>
  );
};

interface NavOptionsProps {
  setCurrent: (category: string) => void;
}

const Navoptions: React.FC<NavOptionsProps> = ({ setCurrent }) => {
  const items = ["Headphones", "Speakers", "Earphones"];
  return (
    <section className="w-full flex flex-col justify-center items-center p-8 px-10 md:flex-row md:gap-10">
      {items.map((item, index) => {
        return <Item setCurrent={setCurrent} title={item} key={index} />;
      })}
    </section>
  );
};

export default Navoptions;
