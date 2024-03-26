import Hero from "../components/Hero"
import Navoptions from "../components/Navoptions"
import ProductHighlightSpeakerOrange from "../components/ProductHighlightSpeakerOrange"
import ProductHighlightSpeakerGray from "../components/ProductHighlightSpeakerGray"
import ProductHighlightEarphones from "../components/ProductHighlightEarphones"

interface HomeProps {
  setCategory: (category: string) => void

}

const Home: React.FC<HomeProps> = ({ setCategory }) => {
  return (
    <>
        <Hero/>
        <Navoptions setCurrent={setCategory} />
        <ProductHighlightSpeakerOrange/>
        <ProductHighlightSpeakerGray/>
        <ProductHighlightEarphones/>

    </>
  )
}

export default Home