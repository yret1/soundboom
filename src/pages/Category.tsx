import Catproductdisplay from "../components/Catproductdisplay"
import Navoptions from "../components/Navoptions"

type Products = [
  {
    name: string,
    id: number,
    description: string,
    image: {
        desktop: string,
        mobile: string,
    },
    new: boolean,
  }
]

type Product = {
  name: string,
  id: number,
  description: string,
  image: {
      desktop: string,
      mobile: string,
  },
  new: boolean,
}

type CategoryProps = {
    current: string,
    setCurrent: (category: string) => void,
    products: Products,

}

const Category :React.FC<CategoryProps> = ({current,setCurrent,products}) => {
  return (
    <section>
      <header className="w-full h-20 md:h-32 bg-secondary-100 flex justify-center items-center">
            <h1 className="text-white text-28 md:text-40 text-bold">{current.toUpperCase()}</h1>
        </header>
      <section className="p-12">

        {products.map((product : Product, index: number) => {
            return <Catproductdisplay key={product.id} index={index} product={product} />
        })}
    </section>
    <section>
    <Navoptions setCurrent={setCurrent} />
    </section>
    </section>
  )
}

export default Category