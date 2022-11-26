import Image from 'next/image'
import React from 'react'
import CardImage from '../Assets/img/JJKCard.jpeg'

const NewsCard = () => {
  return (
    <div>
        <section className='w-[14rem] h-[15rem] sm:w-[16.8rem] sm:h-[16rem] hover:bg-slate-800 cursor-pointer flex  justify-center '>
            <main>
                <div className='w-[13.5rem] sm:w-[16rem]  pt-1  '>
                    <Image src={CardImage} width={250} height={150}  objectFit='cover'/>
                    <h1 className='text-white text-base font-medium'>{`FEATURE: A Beginner's Guide to Sword Art Online`}</h1>
                    <p className='text-gray-400 text-sm'>Nov 25, 2022 4:00pm GMT</p>
                    <p className='text-gray-400 text-sm'>by Tony Cocking</p>
                </div>
            </main>
        </section>
    </div>
  )
}

export default NewsCard