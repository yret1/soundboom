import ButtonBlack from './ButtonBlack'

interface staticProps {
    find: (id : number) => void
  
  }

const ProductHighlightSpeakerOrange : React.FC<staticProps> = ({find}) => {
  return (
    <section className='w-full p-6'>

        <article className='bg-primary-100 rounded-md h-auto lg:relative lg:overflow-hidden'>
            <article className='bg-[url("/assets/home/desktop/pattern-circles.svg")] bg-bottom bg-no-repeat lg:bg-left-top'>
                <article className='flex flex-col justify-center items-center text-center py-20 px-12 lg:flex-row lg:gap-80 lg:relative lg:justify-end'>
                    <img className="w-44 mb-6 lg:w-96 lg:absolute lg:top-20 lg:left-40" src="/assets/home/mobile/image-speaker-zx9.png"></img>
                        <article className='flex flex-col justify-center items-center text-center lg:text-left lg:justify-start lg:items-start lg:pr-40'>
                            <h1 className="text-white text-40 font-bold mb-6 md:text-56">ZX9 <br></br> SPEAKER</h1>
                            <p className="text-white text-15 leading-25 mb-6 w-80 lg:w-96">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <ButtonBlack find={find} id={6}/>
                        </article>
                </article>
            </article>
        </article>
    </section>
  )
}

export default ProductHighlightSpeakerOrange