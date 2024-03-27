import Catproductdisplay from "../components/Catproductdisplay";
import Navoptions from "../components/Navoptions";

type Products = [
  {
    name: string;
    id: number;
    description: string;
    image: {
      desktop: string;
      mobile: string;
    };
    new: boolean;
  }
];

type Product = {
  name: string;
  id: number;
  description: string;
  image: {
    desktop: string;
    mobile: string;
  };
  new: boolean;
};

type CategoryProps = {
  current: string;
  setCurrent: (category: string) => void;
  products: Products;
  find: (id: number) => void;
};

const Category: React.FC<CategoryProps> = ({
  current,
  setCurrent,
  products,
  find,
}) => {
  return (
    <section>
      <header className="w-full h-20 md:h-32 bg-secondary-100 flex justify-center items-center">
        <h1 className="text-white text-28 md:text-40 text-bold">
          {current.toUpperCase()}
        </h1>
      </header>
      <section className="p-12">
        {products.map((product: Product, index: number) => {
          return (
            <Catproductdisplay
              key={product.id}
              index={index}
              product={product}
              find={find}
            />
          );
        })}
      </section>
      <section>
        <Navoptions setCurrent={setCurrent} />
      </section>
    </section>
  );
};

export default Category;
