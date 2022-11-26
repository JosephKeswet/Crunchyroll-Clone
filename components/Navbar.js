import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import YellowLogo from '../Assets/logo/Yellow_Logo.png'
import Big_Logo from '../Assets/logo/Big_Logo.png'
import { faBars, faCrown, faMagnifyingGlass, faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import DropdownItems from './DropdownItems'

const Navbar = () => {
    const [showDrop,setShowDrop] = useState(false);
    const handleDropShow = ()=>{
        showDrop ? setShowDrop(false) : setShowDrop(true)
    };
  return (
    <div>
        <nav className='w-full fixed   z-30  h-16 flex items-center justify-between  bg-gray-800'>
            <section className='flex items-center'>
                <div className='w-16 h-16 flex items-center justify-center cursor-pointer ease-in-out duration-150 hover:bg-gray-900 hover:text-white text-gray-50 
                lg:hidden
                '>
                    <FontAwesomeIcon icon={faBars} className='text-2xl'/>
                </div>
                <main>
                    <div className='w-16 h-16 sm:hidden flex items-center justify-center cursor-pointer '>
                        <Image src={YellowLogo}  objectFit='contain' />
                    </div>
                    <div className='w-48 h-16 pl-4 lg:pl-10 lg:w-56 hidden sm:flex items-center justify-center cursor-pointer '>
                        <Image src={Big_Logo}  objectFit='contain' />
                    </div>
                </main>
                <main className='flex  ml-4 '>
                    <div className={`w-28 h-16 lg:flex items-center justify-center gap-2 cursor-pointer ease-in-out duration-150 hover:bg-gray-900 ${showDrop && 'bg-gray-900'}
                    hidden `}
                    onClick={handleDropShow}
                    
                    >
                            <h1 className='text-white text-base font-Poppins font-medium'>Browse</h1>
                            <FontAwesomeIcon icon={faCaretDown} className='text-base text-white pb-1'/>
                    </div>
                    {showDrop ? <div className='w-full h-80 bg-gray-900 text-black absolute z-20 top-[64px] left-0 right-0'>
                        <section className='flex mt-8 ml-64'>
                            <div className='mr-14'>
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