import ProductArticle from '../components/ProductArticle'
import ProductFeatures from '../components/ProductFeatures'
import YouMayAlsoLike from '../components/YouMayAlsoLike'
import ProductImageGrid from '../components/ProductImageGrid'



type Product = {
  id: number;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  price: number;
  category: string;
  description: string;
  features: string;
  includes: [{quantity: number, item: string}];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others?: string[];
  new: boolean;
};

interface currentProduct {
  product: Product,
  find: (id: number) => void
}

const ProductDetail : React.FC<currentProduct> = ({product}) => {



  const text = {
    name: product.name || "Loading...",
    price: product.price || 0,
    img: {
      mobile: product.image.mobile || "Loading...",
      tablet: product.image.tablet || "Loading...",
      desktop: product.image.desktop || "Loading...",
    },
    description: product.description || "Loading...",
    others: product.others || [],
    new: product.new || false,
  }
  const features = product.features;

  const includes = product.includes;

  const images = product.gallery;








  return (
    <>
      <ProductArticle text={text}/>
      <ProductFeatures features={features} includes={includes} />
      <ProductImageGrid images={images}/>
      <YouMayAlsoLike />
    </>
  )
}

export default ProductDetail