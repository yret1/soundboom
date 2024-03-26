
import { Link } from "react-router-dom";
import Button from "./Button"

interface Product {
    name: string,
    description: string,
    image: {
        desktop: string,
        mobile: string,
    },
    new: boolean,

}

const Catproductdisplay = ({product, index}: {product : Product; index: number }) => {

    const name : string = product.name

    const Upped: string = name.toUpperCase();


  return (
        <article className={`h-full w-full flex flex-col justify-center gap-8 items-center p-5 ${index == 0 || index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"} lg:h-[500px]`}>

            <figure className="lg:flex-1 lg:w-10/12 lg:h-full w-full bg-center flex justify-center items-center bg-cover bg-no-repeat bg-secondary-200 md:h-60"
            >
                <img src={product.image.desktop} alt="Product image" className="h-full rounded-md" />
            </figure>
            <section className="flex lg:flex-1 lg:w-10/12 lg:px-10 flex-col justify-center gap-8 items-center">
                {product.new && <span className="text-primary-100 text-14 tracking-10">NEW PRODUCT</span>}
                <h1 className="font-manrope  font-bold text-28 text-center">{Upped}</h1>
                <h2 className="font-manrope text-black text-opacity-50 text-18 text-center">{product.description}</h2>

                <Link to="/product">
                <Button/>
                </Link>
            </section>

        </article>
  )
}

export default Catproductdisplay