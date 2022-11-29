import Image from "next/image";
import Navbar from "../components/Navbar";
import MHA from '../Assets/img/MHA.jpeg'
import Spy from '../Assets/img/Spy.jpg'
import SpyLarge from '../Assets/img/Spy-Large.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import CardSection from "../components/CardSection";
import { useGetActionAnimeQuery, useGetAdventureAnimeQuery, useGetMusicAnimeQuery, useGetMysteryAnimeQuery } from "../redux/services/animeApi";
import StartWatching from "../components/StartWatching";
import Footer from "../components/Footer";
// import { setInterval } from "timers/promises";

export default function Home() {
  const [image,setImage] = useState()
  const array = [MHA,Spy];
  // const loop = ()=>{
  //   const interval = setInterval(()=>{
  //     setIndex()
  //   })
  // }
  const {data:adventureData,isSuccess} = useGetAdventureAnimeQuery();
  const {data:musicData} = useGetMusicAnimeQuery()
  const {data:mysteryData} = useGetMysteryAnimeQuery()
  const [newAdventureArr,setAdventure] = useState([])
  const [newMusicArr,setMusic] = useState([])
  const [newMysteryArr,setMystery] = useState([])


  useEffect(() =>{
    const newAdventureArray = []
    const newMusicArray = []
    const newMysteryArray = []
    if (isSuccess) {
     adventureData && adventureData['data']?.map((anime) => {
        const animeArray = anime['attributes'];
        newAdventureArray.push(animeArray)
      })

      musicData && musicData['data']?.map((anime) => {
        const animeArray = anime['attributes'];
        newMusicArray.push(animeArray)
      })

      mysteryData && mysteryData['data']?.map((anime) => {
        const animeArray = anime['attributes'];
        newMysteryArray.push(animeArray)
      })
    }

    setAdventure(newAdventureArray);
    setMusic(newMusicArray);
    setMystery(newMysteryArray);


  },[adventureData,musicData,mysteryData])


  
  
  return (
    <div className="bg-black overflow-hidden   w-full h-full">
      <div className="h-12">
      <Navbar/>
      </div>
      <section className="w-full h-[35rem] bg-[url('../Assets/img/Backdrop.svg')] bg-no-repeat bg-center bg-cover  flex items-center justify-center">
        <div className="flex items-center justify-between lg:mx-6 xl:mx-10 2xl:mx-36 w-full  sm:gap-36">
          <div className="sm:w-10 sm:h-10 md:w-14 md:h-12 flex items-center justify-center w-5 h-[35rem]  cursor-pointer ease-in-out duration-300 hover:text-white hover:bg-gray-800">
              <FontAwesomeIcon icon={faChevronLeft} className='text-sm sm:text-3xl  font-extrabold '/>
          </div>
          <div className="w-[20rem] h-[30rem] z-10 md:w-[35rem] md:h-[30rem]  lg:w-[50rem] lg:h-[30rem] flex ">
            <Image src={Spy} alt='Top cover image'  width={800} height={800} className='object-cover'/>
          </div>
             {/* <div className="hidden z-10 sm:w-[55rem] sm:h-[15rem] md:w-[65rem] md:h-[18rem]  lg:w-[100rem] lg:h-[25rem] sm:flex ">
            <Image src={SpyLarge}  width={800} height={800}  objectFit="cover"/>
          </div> */}
          <div className="sm:w-10 sm:h-10 md:w-14 md:h-12 flex items-center justify-center w-5 h-[35rem]  cursor-pointer ease-in-out duration-300 hover:text-white hover:bg-gray-800">
            <FontAwesomeIcon icon={faChevronRight} className='text-sm  sm:text-3xl  font-extrabold'/>
          </div>
        </div>
      </section>
      
      <section className="lg:hidden mt-4 pb-12 mx-4 flex items-center justify-center gap-3">
          <div className="w-14 h-[0.4rem] cursor-pointer bg-gray-400"/>
          <div className="w-14 h-[0.25rem] cursor-pointer hover:h-[0.4rem] bg-white ease-in-out duration-50"/>
          <div className="w-14 h-[0.25rem] cursor-pointer hover:h-[0.4rem] bg-white ease-in-out duration-50"/>
          <div className="w-14 h-[0.25rem] cursor-pointer hover:h-[0.4rem] bg-white ease-in-out duration-50"/>
          <div className="w-14 h-[0.25rem] cursor-pointer hover:h-[0.4rem] bg-white ease-in-out duration-50"/>
          <div className="w-14 h-[0.25rem] cursor-pointer hover:h-[0.4rem] bg-white ease-in-out duration-50"/>
      </section>
      <section className="lg:mt-20">
        <CardSection header='Free-to-Watch Anime!' animeArray={newAdventureArr} description='Watch some of our most popular titles right here!'/>
        <CardSection header={`I'm Gonna Be a Star!`} animeArray={newMusicArr} description='These idols are determined to take over the musical world!'/>
      </section>
      <section>
        <StartWatching/>
      </section>
      <section className="mt-6 ">
        <CardSection header='Most Popular' animeArray={newMysteryArr}  />
      </section>
      <footer className="mt-6 md:mt-14 ">
        <Footer/>
      </footer>
    
    </div>
  )
}
