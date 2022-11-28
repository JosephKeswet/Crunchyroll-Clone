import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import { useGetActionAnimeQuery, useGetAdventureAnimeQuery, useGetMusicAnimeQuery} from '../redux/services/animeApi';


const CardSection = ({header,description,animeArray}) => {


  return (
    <div>
         <section className="pl-6 pb-2 sm:pl-8 md:pl-10 xl:pl-6 lg:w-[80rem] lg:mx-auto ">
          <main>
              <div>
              <h1 className="text-white text-2xl font-Poppins font-medium mb-2 sm:text-3xl sm:font-semibold ">{header}</h1>
              <h2 className="text-white text-sm font-Poppins sm:text-base">{description}</h2>
              <div className="bg-blue-400 w-auto h-1 mt-3 mr-8 md:mr-20"/>
              </div>
        </main>
        </section>
        <section className="flex items-center mx-4  pb-20 xl:mx-20 gap-4">
                <div className="hidden sm:w-10 sm:h-10 md:w-14 md:h-12 sm:flex items-center justify-center w-5 h-[35rem]  cursor-pointer ease-in-out duration-300 hover:bg-gray-800">
                  <FontAwesomeIcon icon={faChevronLeft} className='text-sm sm:text-3xl text-white  font-extrabold '/>
                </div>
                    <div className="w-auto mt-8 flex items-center gap-0 overflow-hidden overflow-x-auto scrollbar-hide">
                      {animeArray.map((anime) => {
                        const posterImg = anime['posterImage']?.original
                        return <div key={anime.id}>
                                  <MovieCard img={posterImg} title={anime?.canonicalTitle}/>
                              </div>
                      })}
                    </div>
                <div className="hidden sm:w-10 sm:h-10 md:w-14 md:h-12 sm:flex items-center justify-center w-5 h-[35rem]  cursor-pointer ease-in-out duration-300  hover:bg-gray-800">
                <FontAwesomeIcon icon={faChevronRight} className='text-sm  sm:text-3xl text-white font-extrabold'/>
                </div>
            </section>
    </div>
  )
}

export default CardSection