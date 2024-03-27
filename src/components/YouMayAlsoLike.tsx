import React from 'react'
import YouMayAlsoLikeArticle from './YouMayAlsoLikeArticle'

const YouMayAlsoLike = () => {
  return (
    <section className='flex flex-col justify-center items-center mt-40 lg:px-40'>
        <h1 className="text-black text-24 font-bold mb-6 md:text-32">YOU MAY ALSO LIKE</h1>
        <article className='flex flex-col md:flex-row'>
            <YouMayAlsoLikeArticle/>
            <YouMayAlsoLikeArticle/>
            <YouMayAlsoLikeArticle/>
        </article>
        
    </section>
    
  )
}

export default YouMayAlsoLike