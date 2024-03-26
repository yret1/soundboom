import ButtonBorder from './ButtonBorder'

const ProductHighlightSpeakerOrange = () => {
  return (
    <section className='w-full p-6'>

            <article className='bg-[url("/src/assets/home/mobile/image-speaker-zx7.jpg")] md:bg-[url("/assets/home/tablet/image-speaker-zx7.jpg")] lg:bg-[url("/assets/home/desktop/image-speaker-zx7.jpg")] bg-cover bg-right h-96 flex items-center rounded-md'>
                        <article className='flex flex-col justify-start items-start text-center m-6 md:m-16 lg:text-left lg:justify-start lg:items-start lg:pr-40'>
                            <h1 className="text-black text-40 font-bold mb-6 md:text-56">ZX7 SPEAKER</h1>
                            <ButtonBorder/>
                        </article>
                </article>
    </section>
  )
}

export default ProductHighlightSpeakerOrange