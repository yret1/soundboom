

const Catproductdisplay = ({product}: {product : any}) => {
  return (
        <article className="h-full w-full">

            <figure className="h-32 w-full bg-center bg-cover bg-no-repeat"
            >
                <img src={product.image.desktop} alt="" />
            </figure>
            <section>
                {product.new && <span className="text-primary-100">NEW PRODUCT</span>}
                <h2>{product.description}</h2>
            </section>

        </article>
  )
}

export default Catproductdisplay