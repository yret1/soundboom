
const ProductImageGrid = () => {
  return (
    <section className="w-full px-6 py-6 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-5">
      <article className="col flex flex-col gap-5">
        <img
          className="rounded-md w-full object-cover"
          src="/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"
        ></img>
        <img
          className="rounded-md w-full object-cover"
          src="/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"
        ></img>
      </article>
      <div className="md:col-span-1">
        <img
          className="rounded-md w-full h-auto md:h-full object-cover"
          src="/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"
        ></img>
      </div>
    </section>
  );
};

export default ProductImageGrid;
