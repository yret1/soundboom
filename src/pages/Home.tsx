import Hero from "../components/Hero"
import Navoptions from "../components/Navoptions"
import ProductHighlightSpeakerOrange from "../components/ProductHighlightSpeakerOrange"
import ProductHighlightSpeakerGray from "../components/ProductHighlightSpeakerGray"
import ProductHighlightEarphones from "../components/ProductHighlightEarphones"





interface HomeProps {
  setCategory: (category: string) => void,
  find: (id : number) => void

}


const Home: React.FC<HomeProps> = ({ setCategory , find }) => {
  return (
    <>
        <Hero/>
        <Navoptions setCurrent={setCategory} />
        <ProductHighlightSpeakerOrange find={find} />
        <ProductHighlightSpeakerGray find={find} />
        <ProductHighlightEarphones find={find} />

    </>
  )
}

export default Home