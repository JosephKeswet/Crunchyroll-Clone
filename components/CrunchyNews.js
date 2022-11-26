import React from 'react'
import NewsCard from './NewsCard'

const CrunchyNews = () => {
  return (
    <div className="w-full h-[50rem] flex items-center bg-[url('../Assets/img/liquid-cheese.svg')] bg-no-repeat bg-center bg-cover">
        <section className='w-auto h-[45rem] sm:w-[35rem] md:w-[48rem] lg:w-[60rem] xl:w-[70rem] mx-auto my-auto bg-black'>
          <main className='px-2 sm:px-4'>
            <h1 className='text-white text-2xl font-medium font-Poppins md:text-3xl'>Crunchyroll News</h1>
            <div className='flex items-center gap-0'>
                <NewsCard/>
                {/* <NewsCard/> */}
            </div>
          </main>
        </section>
    </div>
  )
}

export default CrunchyNews