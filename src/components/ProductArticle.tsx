import AddRemoveItem from './AddRemoveItem'
import Button from './Button'

const ProductArticle = () => {
  return (
    <>
    
    <section className='w-full px-6 py-6 lg:px-40 flex items-center'>
        

        <article className='flex flex-col md:flex-row items-center'>
            <article className='flex flex-col w-full lg:w-1/2'>
            <a href="#" className='mb-6 opacity-50 text-15 hover:cursor-pointer'>Go Back</a>
            <img className='rounded-md w-full h-96 md:h-[500px] object-cover' src="/src/assets/home/mobile/image-earphones-yx1.jpg"></img>
            </article>
            

                    <article className='flex flex-col md:ml-16'>
                        <article className='flex flex-col justify-start items-start lg:text-left lg:justify-start lg:items-start'>
                            <p className="opacity-50 text-primary-100 text-14 tracking-10 my-6">NEW PRODUCT</p>
                            <h1 className="text-black text-40 font-bold mb-6 md:text-56">XX99 Mark II Headphones</h1>
                            <p className="text-black text-15 leading-25 mb-6 w-full lg:w-[600px]">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                            <p className='text-black font-bold text-18 leading-25 mb-6'>$ 2,999</p>
                        </article>         

                    <article className='flex gap-6 justify-start items-center'>
                            <AddRemoveItem/>
                        
                        <Button/>
                    </article>
                </article>

        </article>
                    
                        

    </section>
    </>
    
  )
}

export default ProductArticle