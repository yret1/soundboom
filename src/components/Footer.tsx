const Footer = () => {
  return (
    <footer className='bg-secondary-100 h-auto'>
        <section className='px-12 md:px-40'>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <h1 className='text-white font-bold text-28 text-center py-12 md:text-left'>SoundBoom</h1>
                <ul className='text-white font-bold text-13 flex items-center justify-center flex-col uppercase gap-4 pb-12 md:flex-row md:justify-start lg:pb-0'>
                    <li className='tracking-2 hover:text-primary-100'>Home</li>
                    <li className='tracking-2 hover:text-primary-100'>Headphones</li>
                    <li className='tracking-2 hover:text-primary-100'>Speakers</li>
                    <li className='tracking-2 hover:text-primary-100'>Earphones</li>
                </ul>
            </div>
        

        <p className='text-white font-medium text-15 text-center opacity-50 leading-25 pb-12 md:text-left lg:w-6/12'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>

<div className="flex flex-col md:flex-row md:justify-between">
<p className='text-white font-bold text-15 text-center opacity-50 leading-25 pb-12'>Copyright 2021. All Rights Reserved</p>

        <article className="flex items-center justify-center gap-4 pb-12">
        <img src="src/assets/shared/desktop/icon-twitter.svg" alt="twitter icon"/> 
        <img src="src/assets/shared/desktop/icon-instagram.svg" alt="instagram icon"/> 
        <img className="filter hover:grayscale hover:brightness-150" src="src/assets/shared/desktop/icon-facebook.svg" alt="facebook icon"/> 
        </article>
</div>
        
        </section>
    </footer>
  )
}

export default Footer