import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark,faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useGetSportAnimeQuery } from '../redux/services/animeApi';

const StartWatching = () => {
  const {data:sportData,isSuccess} = useGetSportAnimeQuery();
  const [bookmark,setBookmark] = useState(false)
  const [posterImg,setPosterImg] = useState()
  const [animeTitle,setAnimeTitle] = useState()
  const [description,setDescription] = useState()



  const handleBookmark = () =>{
    bookmark ? setBookmark(false) : setBookmark(true);
  }

  useEffect(()=>{
    if (isSuccess) {
        console.log(sportData)
        const posterImg = sportData ? sportData['data'][8]['attributes']['posterImage']?.medium : '';
        setPosterImg(posterImg);
        const animeTitle = sportData ? sportData['data'][8]['attributes']['canonicalTitle'] : '';
        setAnimeTitle(animeTitle);
        const description = sportData ? sportData['data'][8]['attributes']['description'] : '';
        setDescription(description);

    }
  },[posterImg,animeTitle,description,sportData])



  
  return (
    <div>
        <section className='w-[21.2rem] h-[30rem] flex flex-col
         sm:flex sm:flex-row sm:w-[36rem] sm:h-[17.5rem] sm:justify-between sm:items-center 
         md:w-[42rem]
         lg:w-[59rem] lg:flex lg:flex-row
         xl:w-[75rem] xl:h-[19rem]
         mx-auto bg-black'>
            <div className=' flex justify-center mb-2'>
                <img src={posterImg}  className='object-fill w-[21rem] h-[14rem] 
                sm:w-[10rem] sm:h-[16.7rem] 
                lg:w-[25rem] lg:h-[12rem]
                xl:w-[28rem] xl:h-[18rem]
                '
                 alt='Anime poster image' objectPosition='center' objectFit='cover' />
            </div>
            <main className='flex flex-col sm:w-[23rem] gap-4
            md:w-[30.5rem]
            xl:w-[45rem]
            '>
                <h1 className='text-white text-2xl xl:text-4xl cursor-pointer font-Poppins font-medium'>{animeTitle}</h1>
                <div className='flex items-center justify-between'>
                    <h2 className='text-blue-300 text-sm'>Series * <span className='text-gray-300'>Subtitled</span></h2>
                    <FontAwesomeIcon icon={bookmark ? solidBookmark : faBookmark } onClick={() => handleBookmark()} className={`text-white text-xl cursor-pointer sm:hidden ${bookmark ? 'text-orange-400' : ''}`}/>
                </div>
                <div className='w-[21rem] flex flex-col gap-4
                sm:w-[22rem] md:w-[28rem] xl:w-[38rem]
                '>
                    <p className='text-white xl:line-clamp-2 line-clamp-3 '>{description}</p>
                    <div className='flex flex-col gap-4 
                    md:flex md:flex-row
                    lg:flex lg:flex-row
                    '>
                            <button className='flex items-center justify-center gap-2 w-[21rem] mx-auto h-10
                            bg-gradient-to-r from-orange-400 to-orange-300
                            hover:from-orange-500 hover:to-yellow-500
                            sm:w-[23rem] 
                            md:w-[20rem]
                            '>
                            <FontAwesomeIcon icon={faPlayCircle} className='text-black text-xl'/>
                            <h1 className='text-black text-base  font-semibold
                            md:text-xs
                            '>START WATCHING S1 E1</h1>
                        </button>
                        <button className='hidden sm:flex sm:items-center sm:justify-center sm:gap-2 
                            sm:w-[23rem] mx-auto sm:h-10 sm:border-2 sm:border-orange-400
                            sm:hover:border-orange-300 sm:hover:text-orange-300 sm:duration-300
                            '>
                            <FontAwesomeIcon icon={faBookmark} className='text-orange-400 text-xl'/>
                            <h1 className='text-orange-400 font-semibold text-base
                            md:text-xs
                            '>ADD TO WATCHLIST</h1>
                        </button>
                    </div>
                </div>
            </main>

        </section>
    </div>
  )
}

export default StartWatching