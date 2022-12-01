import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import YellowLogo from '../Assets/logo/Yellow_Logo.png'
import Big_Logo from '../Assets/logo/Big_Logo.png'
import { faBars, faCrown, faMagnifyingGlass, faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import DropdownItems from './DropdownItems'
import Link from 'next/link'

const Navbar = () => {
    const [showDrop,setShowDrop] = useState(false);
    const handleDropShow = ()=>{
        showDrop ? setShowDrop(false) : setShowDrop(true);
    };
    const [genre,setGenre] = useState(false)
    const handleshowGenre = () => {
        genre ? setGenre(false) : setGenre(true);
    }
  return (
    <div>
        <nav className='w-full fixed   z-30  h-16 flex items-center justify-between  bg-gray-800'>
            <section className='flex items-center'>
                <div className={`w-16 h-16 flex items-center justify-center cursor-pointer ease-in-out duration-150 hover:bg-gray-900 hover:text-white ${showDrop && 'bg-gray-900'} text-gray-50 
                lg:hidden`}
                onClick={handleDropShow}
                >
                    <FontAwesomeIcon icon={faBars} className='text-2xl'/>
                </div>
                <main>
                    <Link href='/'>
                        <div className='w-16 h-16 sm:hidden flex items-center justify-center cursor-pointer '>
                            <Image src={YellowLogo} alt='Logo' objectFit='contain' />
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className='w-48 h-16 pl-4 lg:pl-10 lg:w-56 hidden sm:flex items-center justify-center cursor-pointer '>
                            <Image src={Big_Logo} alt='Logo' objectFit='contain' />
                        </div>
                    </Link>
                </main>
                <main className='flex  ml-4 '>
                    <div className={`w-28 h-16 lg:flex items-center justify-center gap-2 cursor-pointer ease-in-out duration-150 hover:bg-gray-900 ${showDrop && 'bg-gray-900'}
                    hidden `}
                    onClick={handleDropShow}
                    
                    >
                            <h1 className='text-white text-base font-Poppins font-medium'>Browse</h1>
                            <FontAwesomeIcon icon={faCaretDown} className='text-base text-white pb-1'/>
                    </div>
                    {showDrop ? <div className='w-full hidden lg:flex h-80 bg-gray-900 text-black absolute z-20 top-[64px] left-0 right-0'>
                        <section className='flex mt-8 md:ml20 xl:ml-64'>
                            <div className=' mr-14'>
                                <DropdownItems list={['Popular','New','Alphabetical','Simulcast Season','Release Calendar']}/>
                            </div>
                            <div className='pt-4 h-64 border-gray-700 border-[0.01rem] border-solid'/>
                            <div className='ml-10 '>
                                <h1 className='text-gray-200 text-sm pl-5 pb-2'>GENRES</h1>
                                <DropdownItems list={['Action','Adventure','Comedy','Drama','Fantasy']} color='text-gray-200'/>
                            </div>
                            <div className='ml-10 mt-6 '>
                                <DropdownItems list={['Music','Romance','Sci-Fi','Seinen','Shojo']} color='text-gray-200'/>
                            </div>
                            <div className='ml-10 mt-6 '>
                                <DropdownItems list={['Shonen','Slice of life','Sports','Supernatural','Thriller']} color='text-gray-200'/>
                            </div>
                        </section>
                    </div> : null}
                    {showDrop ? <div className='text-white absolute w-screen h-screen overflow-scroll bg-gray-900 left-0 right-0 z-20 top-16 lg:hidden'>
                        <section className='mt-6'>
                            <h1 className='pl-4 text-xs font-Poppins font-semibold text-gray-500'>BROWSE</h1>
                            <ul className='flex flex-col mt-4'>
                                <li className='w-full h-12 pl-4 flex items-center font-Poppins font-medium hover:bg-gray-700 cursor-pointer ease-in-out duration-300
                                
                                '>Popular</li>
                                <li className='w-full h-12 pl-4 flex items-center font-Poppins font-medium hover:bg-gray-700 cursor-pointer ease-in-out duration-300'>New</li>
                                <li className='w-full h-12 pl-4 flex items-center font-Poppins font-medium hover:bg-gray-700 cursor-pointer ease-in-out duration-300'>Alphabetical</li>
                                <li className='w-full h-12 pl-4 flex items-center font-Poppins font-medium hover:bg-gray-700 cursor-pointer ease-in-out duration-300'>Simulcast Season</li>
                                <li className='w-full h-12 pl-4 flex items-center font-Poppins font-medium hover:bg-gray-700 cursor-pointer ease-in-out duration-300'>Release Calendar</li>
                                <li className='flex items-center justify-between w-full h-10 pl-4  font-Poppins font-medium hover:bg-gray-700 cursor-pointer ease-in-out duration-300' 
                                onClick={handleshowGenre}
                                >
                                    Genres
                                    <FontAwesomeIcon icon={faCaretDown} className='mr-12 text-xl'/>
                                </li>
                            </ul>
                            {genre && <ul className='bg-gray-800 '>
                                <li className='flex items-center w-full h-12 hover:bg-zinc-700 pl-8 '>Action</li>
                                <li className='flex items-center w-full h-12 hover:bg-zinc-700 pl-8 '>Adventure</li>
                                <li className='flex items-center w-full h-12 hover:bg-zinc-700 pl-8 '>Comedy</li>
                                <li className='flex items-center w-full h-12 hover:bg-zinc-700 pl-8 '>Drama</li>
                                <li className='flex items-center w-full h-12 hover:bg-zinc-700 pl-8 '>Fantasy</li>
                                <li className='flex items-center w-full h-12 hover:bg-zinc-700 pl-8 '>Music</li>
                                <li className='flex items-center w-full h-12 hover:bg-zinc-700 pl-8 '>Romance</li>
                                <li className='flex items-center w-full h-12 hover:bg-zinc-700 pl-8 '>Sports</li>
                                <li className='flex items-center w-full h-12 hover:bg-zinc-700 pl-8 '>Supernatural</li>
                                <li className='flex items-center w-full h-12 hover:bg-zinc-700 pl-8 '>Thriller</li>
                            </ul>}
                            <hr className='mt-2'/>
                            <ul className='flex flex-col mt-4'>
                                <li className='w-full h-12 pl-4 flex items-center font-Poppins font-medium hover:bg-gray-700 cursor-pointer ease-in-out duration-300
                                
                                '>Manga</li>
                                <li className='w-full h-12 pl-4 flex items-center font-Poppins font-medium hover:bg-gray-700 cursor-pointer ease-in-out duration-300'>Games</li>
                                <li className='w-full h-12 pl-4 flex items-center font-Poppins font-medium hover:bg-gray-700 cursor-pointer ease-in-out duration-300'>Store</li>
                                <li className='flex items-center justify-between w-full h-10 pl-4  font-Poppins font-medium hover:bg-gray-700 cursor-pointer ease-in-out duration-300'>
                                    News
                                    <FontAwesomeIcon icon={faCaretDown} className='mr-12 text-xl'/>
                                </li>
                            </ul>
                        </section>
                    </div> : null}
                    <div className='w-20 h-16 lg:flex items-center justify-center gap-2 cursor-pointer ease-in-out duration-150 hover:bg-gray-900
                    hidden
                    '>
                            <h1 className='text-white text-base font-Poppins font-medium'>Manga</h1>
                    </div>
                    <div className='w-20 h-16 lg:flex items-center justify-center gap-2 cursor-pointer ease-in-out duration-150 hover:bg-gray-900
                    hidden
                    '>
                            <h1 className='text-white text-base font-Poppins font-medium'>Games</h1>
                    </div>
                    <div className='w-28 h-16 lg:flex items-center justify-center gap-2 cursor-pointer ease-in-out duration-150 hover:bg-gray-900
                    hidden
                    '>
                            <h1 className='text-white text-base font-Poppins font-medium'>News</h1>
                            <FontAwesomeIcon icon={faCaretDown} className='text-base text-white pb-1'/>
                    </div>
                </main>
            </section>
            <section className='w-48 flex items-center
            sm:w-80
            '>
                <div className='w-16 h-16 flex items-center justify-center gap-2 cursor-pointer ease-in-out duration-150 hover:bg-gray-900
                sm:w-28
                '>
                    <FontAwesomeIcon icon={faCrown} className='text-2xl text-orange-500'/>
                    <div className='hidden md:inline'>
                        <h1 className='text-xs text-orange-500 font-semibold font-Poppins'>TRY FREE</h1>
                        <p className='text-xs text-white'>PREMIUM</p>
                    </div>
                </div>
                <div className='w-16 h-16 flex items-center justify-center cursor-pointer ease-in-out duration-150 hover:bg-gray-900 text-gray-50  hover:text-white 
                
                '>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl'/>
                </div>
                <div className='w-16 h-16 hidden sm:flex items-center justify-center cursor-pointer ease-in-out duration-150 hover:bg-gray-900 hover:text-white text-gray-50 
                '>
                    <FontAwesomeIcon icon={faBookmark} className='text-2xl '/>
                </div>
                <div className='w-16 h-16 flex items-center justify-center cursor-pointer ease-in-out duration-150 hover:bg-gray-900 hover:text-white text-gray-50 '>
                    <FontAwesomeIcon icon={faUser} className='text-2xl'/>
                </div>
            </section>

        </nav>
    </div>
  )
}

export default Navbar