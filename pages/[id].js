import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCaretDown, faPlus} from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { useGetAdventureAnimeQuery, useGetMusicAnimeQuery, useGetMysteryAnimeQuery } from '../redux/services/animeApi';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

const SingleAnime = () => {
    const router = useRouter()
    const query = router.query;
    console.log(query)
    const fetchGenre = useSelector((state) => state.genre.newGenre)

    const {data:adventureData,isSuccess} = useGetAdventureAnimeQuery();
    const {data:musicData} = useGetMusicAnimeQuery()
    const {data:mysteryData} = useGetMysteryAnimeQuery()
    const [posterUrl,setPosterUrl] = useState('')
    const [animeName,setAnimeName] = useState('')
    const [rank,setRank] = useState(0)
    const [description,setDescription] = useState('')
    const [readmore,setReadmore] = useState(false);

    const handleReadMore = () => {
      readmore ? setReadmore(false) : setReadmore(true);
    }



  
  
    useEffect(() =>{
  
      if (isSuccess) {
       if (fetchGenre == 'adventure') {
        const animeDataImage = adventureData['data'][query.id]['attributes']['posterImage'].large;
        setPosterUrl(animeDataImage);
        const animeData = adventureData['data'][query.id]['attributes']
        setAnimeName(animeData.canonicalTitle);
        setRank(animeData.popularityRank)
        setDescription(animeData.description)

       }
       if (fetchGenre == 'music') {
        const animeDataImage = musicData['data'][query.id]['attributes']['posterImage'].large;
        setPosterUrl(animeDataImage);
        const animeData = musicData['data'][query.id]['attributes']
        setAnimeName(animeData.canonicalTitle);
        setRank(animeData.popularityRank)
        setDescription(animeData.description)
        
       }
       if (fetchGenre == 'mystery') {
        const animeDataImage = mysteryData['data'][query.id]['attributes']['posterImage'].large;
        setPosterUrl(animeDataImage);
        const animeData = mysteryData['data'][query.id]['attributes']
        setAnimeName(animeData.canonicalTitle);
        setRank(animeData.popularityRank)
        setDescription(animeData.description)
       }

      }
  
    },[adventureData,musicData,mysteryData])

  return (
    <div>
      <section>
        <Navbar/>
        <div className='flex justify-center items-center w-screen relative top-12 bottom-0 h-[30rem]'>
          <img src={posterUrl} className='w-[20rem] absolute z-10' alt={`${animeName} + 'Poster Image'`}/>
          <img src={posterUrl} className='w-screen h-[22rem] absolute blur-2xl' alt={`${animeName} + 'Blurred Background'`}/>
        </div>
        <div className='bg-black h-auto mt-[2.2rem]'> 
          <main className='mx-4'>
              <div className='pt-6'>
                <h1 className='text-white text-2xl mb-2'>{animeName}</h1>
                <p className='text-gray-400'>217videos * Sub | Dub</p>
                <div className='flex items-center gap-2 mt-4'>
                  <FontAwesomeIcon icon={faStar} className='text-gray-300 text-2xl'/>
                  <FontAwesomeIcon icon={faStar} className='text-gray-300 text-2xl'/>
                  <FontAwesomeIcon icon={faStar} className='text-gray-300 text-2xl'/>
                  <FontAwesomeIcon icon={faStar} className='text-gray-300 text-2xl'/>
                  <FontAwesomeIcon icon={faStar} className='text-gray-300 text-2xl'/>
                </div>
                <section className='flex items-center mt-3'>
                  <div className='flex items-center gap-2'>
                    <p className='text-gray-300 text-sm'>Average Rating: <span className='text-white'>4.8(27.8K)</span></p>
                    <FontAwesomeIcon icon={faCaretDown} className='text-white'/>
                  </div>
                  <hr className='rotate-90 w-4'/>
                  <p className='text-gray-300 text-sm'>{rank.toLocaleString()} Reviews</p>
                </section>
              </div>
              <section className='mt-6 flex items-center gap-4'>
                    <button className='w-[18rem] h-[2.5rem] flex items-center justify-center gap-4 bg-orange-400'>
                      <FontAwesomeIcon icon={faPlayCircle} className='text-lg'/>
                      <h1 className='text-base font-medium'>START WATCHING S1 E1</h1>
                    </button>
                    <div className='w-[2.4rem] h-[2.5rem] flex items-center justify-center border-2 border-orange-400'>
                      <FontAwesomeIcon icon={faBookmark} className='text-xl text-orange-400'/>
                    </div>
              </section>
              <section className='flex items-center gap-3 mt-4 ml-2'>
                <FontAwesomeIcon icon={faPlus} className='text-gray-300 text-2xl'/>
                <p className='text-gray-300 text-base'>ADD TO CRUNCHYLIST</p>
              </section>
              <section className='mt-6'>
                <p className={`text-white ${readmore ? 'line-clamp-6' : ''}`}>{description} </p>
                <p className='text-gray-400 pb-4' onClick={handleReadMore}>Read More</p>
              </section>
            </main>
         </div>
      </section>
    </div>
  )
}

export default SingleAnime