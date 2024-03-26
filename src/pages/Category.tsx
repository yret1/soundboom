import Catproductdisplay from "../components/Catproductdisplay"

type CategoryProps = {
    current: string,
    setCurrent: (category: string) => void,
    products: object[]
}

const Category :React.FC<CategoryProps> = ({current,setCurrent,products}) => {
  return (
    <section>
        <header className="w-full h-20 bg-secondary-100 flex justify-center items-center">
            <h1 className="text-white text-2xl">{current.toUpperCase()}</h1>
        </header>

        {products.map((product : any) => {
            console.log(product)
            return <Catproductdisplay key={product.id} product={product} />
        })}
    </section>
  )
}

export default Category