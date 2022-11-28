import Image from 'next/image'
import React from 'react'


const MovieCard = ({img,title}) => {
  return (
    <div>
        <section className='w-48 h-auto sm:w-52 md:w-60 lg:w-48 ease-in-out duration-500 cursor-pointer  flex justify-center rounded-sm hover:bg-slate-800'>
          <main className='flex flex-col mx-2 justify-center'>
              <div className='mt-2 w-44 h-[16rem] object-cover sm:h-[17.5rem] sm:w-48 md:w-56 lg:w-44 lg:h-[16rem] '>
                <Image src={img} width={300} height={440} alt={title + 'poster image'} objectFit='cover'/>
              </div>
              <div className='w-36 mt-4 mb-2 sm:mt-6 md:mt-16 lg:mt-4'>
                <h1 className='text-white text-base font-Poppins font-medium mb-2 truncate'>{title}</h1>
                <h2 className='text-blue-300'>Series * <span className='text-gray-300'>Sub | Dub</span> </h2>
              </div>
          </main>
       
        </section>
    </div>
  )
}

export default MovieCard