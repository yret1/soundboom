
interface ProductFeaturesProps {
  features: string,
  includes: [{quantity: number, item: string}]
}
const ProductFeatures : React.FC<ProductFeaturesProps> = ({features, includes}) => {
  return (
    <section className="w-full px-6 pb-6 lg:px-40 flex justify-between items-center">
      <article className="flex flex-col lg:flex-row lg:justify-start lg:gap-32">
        <article className="mt-20 lg:w-1/2">
          <h1 className="text-black text-24 font-bold mb-6 md:text-32">
            FEATURES
          </h1>
          <p className="text-black text-15 leading-25 mb-6 w-full">
            {features}
          </p>
        </article>
        <article className="mt-20 flex flex-col md:flex-row lg:flex-col">
          <h1 className="text-black text-24 font-bold mb-6 md:text-32">
            IN THE BOX
          </h1>
          <article className="md:ml-[20vw] lg:m-0">
            {includes.map((item, index) => (
               <p key={index} className="text-black text-15 leading-25 mb-2 w-full">
               <span className="text-primary-100 text-15 font-bold leading-25 mr-6">
                 {item.quantity}x
               </span>
               {item.item}
             </p>
            ))}
          </article>
        </article>
      </article>
    </section>
  );
};

export default ProductFeatures;
