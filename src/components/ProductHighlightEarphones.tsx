import ButtonBorder from './ButtonBorder'


interface staticProps {
  find: (id : number) => void

}

const ProductHighlightEarphones: React.FC<staticProps> = ({find}) => {

  return (
    <section className='w-full p-6 flex flex-wrap flex-col md:flex-row gap-6'>

      <article className=' md:w-1/2 md:mb-0 flex-1'>
      <img className='rounded-md w-full h-full object-cover' src="/assets/home/mobile/image-earphones-yx1.jpg"></img>
      </article>

      <article className='bg-secondary-200 py-10 rounded-md md:w-1/2 flex-1 flex flex-col justify-center items-start'>
          <article className='flex flex-col justify-start items-start m-6 md:m-16 lg:text-left lg:justify-start lg:items-start lg:pr-40'>
              <h1 className="text-black text-40 font-bold mb-6 lg:text-56">YX1 EARPHONES</h1>
              <ButtonBorder id={1} find={find}/>
          </article>
      </article>
    </section>
  )
}

export default ProductHighlightEarphones