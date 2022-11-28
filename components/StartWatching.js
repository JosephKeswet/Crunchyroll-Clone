import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as solidBookmark, faPlay } from '@fortawesome/free-solid-svg-icons'

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
  },[posterImg,animeTitle,description])



  
  return (
    <div>
        <section className='w-[21rem] h-[35rem] flex flex-col mx-auto bg-black'>
            <div className='w-[21rem] flex justify-center mb-2'>
                <Image src={posterImg} width={500} height={400} alt='Anime poster image' objectPosition='center' objectFit='cover' />
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-white text-2xl font-Poppins font-medium'>{animeTitle}</h1>
                <div className='flex items-center justify-between'>
                    <h2 className='text-blue-300 text-sm'>Series * <span className='text-gray-300'>Subtitled</span></h2>
                    <FontAwesomeIcon icon={bookmark ? solidBookmark : faBookmark } onClick={() => handleBookmark()} className={`text-white text-xl cursor-pointer ${bookmark ? 'text-orange-400' : ''}`}/>
                </div>
                <div className='w-[21rem] flex flex-col gap-4'>
                    <p className='text-white line-clamp-3 '>{description}</p>
                    <button className='flex items-center justify-center gap-2 w-[21rem] mx-auto h-12
                    bg-gradient-to-r from-orange-400 to-orange-300
                    hover:from-orange-500 hover:to-yellow-500 
                    '>
                    <FontAwesomeIcon icon={faPlay} className='text-black text-xl'/>
                    <h1 className='text-black font-semibold'>START WATCHING S1 E1</h1>
                </button>
                </div>
             

            </div>

        </section>
    </div>
  )
}

export default StartWatching