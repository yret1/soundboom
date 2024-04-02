import AddRemoveItem from "./AddRemoveItem";
import { Link } from "react-router-dom";
import Cartutton from "./Cartbutton";
import {AddRemoveContext} from "../context/AddRemoveContext";

type OtherProduct = {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

interface ProductArticleProps {
  text: {
    name: string;
    price: number;
    img: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    description: string;
    others?: OtherProduct[];
    new: boolean;
  };

}

const ProductArticle : React.FC<ProductArticleProps> = ({text}) => {
  return (
    <>
      <section className="w-full px-6 py-6 lg:px-40 flex items-center">
        <article className="flex flex-col md:flex-row items-center">
          <article className="flex flex-col w-full lg:w-1/2">
            <Link
              to="/"
              className="mb-6 opacity-50 text-15 hover:cursor-pointer"
            >
              Go Back
            </Link>
            <img
              className="rounded-md w-full h-96 md:h-[500px] object-cover"
              src={text.img.mobile}
            ></img>
          </article>

          <article className="flex flex-col md:ml-16">
            <article className="flex flex-col justify-start items-start lg:text-left lg:justify-start lg:items-start">
              {text.new && (<p className="opacity-50 text-primary-100 text-14 tracking-10 my-6">
                NEW PRODUCT
              </p>)}

              <h1 className="text-black text-40 font-bold mb-6 md:text-56">
                {text.name}
              </h1>
              <p className="text-black text-15 leading-25 mb-6 w-full lg:w-[600px]">
                {text.description}
              </p>
              <p className="text-black font-bold text-18 leading-25 mb-6">
                {"$" + text.price}
              </p>
            </article>

            <article className="flex gap-6 justify-start items-center">
              <AddRemoveContext>
                <AddRemoveItem />
              </AddRemoveContext>
              

              <Cartutton />
            </article>
          </article>
        </article>
      </section>
    </>
  );
};

export default ProductArticle;
