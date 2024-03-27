interface ProductImageGridProps {
  images: {
    first: {
      mobile?: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile?: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile?: string;
      tablet: string;
      desktop: string;
    };
    }
  }



const ProductImageGrid : React.FC<ProductImageGridProps> = ({images}) => {
  return (
    <section className="w-full px-6 py-6 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-5">
      <article className="col flex flex-col gap-5">
        {images.first.mobile && (
          <img
            className="rounded-md w-full object-cover"
            src={images.first.mobile}
          ></img>
        )}
        {images.second.mobile && (
          <img
          className="rounded-md w-full object-cover"
          src={images.second.desktop }
        ></img>
        )}
      </article>
      <div className="md:col-span-1">
        {images.third.mobile && (
          <img
          className="rounded-md w-full h-auto md:h-full object-cover"
          src={images.third.desktop}
        ></img>
        )}
      </div>
    </section>
  );
};

export default ProductImageGrid;
