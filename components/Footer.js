import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook,faInstagram,faTwitter, faYoutube, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <section className='w-full '>
            <main className='flex flex-col  sm:flex sm:flex-row sm:justify-center sm:gap-4 
            md:gap-12 lg:gap-44 xl:gap-20
            '>
                    <div className='flex flex-row  gap-10 mx-6 mb-6
                    sm:flex sm:flex-col sm:mb-2 sm:gap-2 sm:w-40
                    '>
                        <h1 className='text-white w-48'>Navigation</h1>
                        <ul className='text-gray-400 w-80 sm:w-40'>
                            <li className=' hover:text-white ease-in-out duration-300 cursor-pointer hover:underline hover:underline-offset-2'>Browse Popular</li>
                            <li className=' hover:text-white ease-in-out duration-300 cursor-pointer hover:underline hover:underline-offset-2'>Browse Simulcasts</li>
                            <li className=' hover:text-white ease-in-out duration-300 cursor-pointer hover:underline hover:underline-offset-2'>Browse Manga</li>
                            <li className=' hover:text-white ease-in-out duration-300 cursor-pointer hover:underline hover:underline-offset-2'>Release Calendar</li>
                            <li className=' hover:text-white ease-in-out duration-300 cursor-pointer hover:underline hover:underline-offset-2'>News</li>
                            <li className=' hover:text-white ease-in-out duration-300 cursor-pointer hover:underline hover:underline-offset-2'>Games</li>
                        </ul>
                    </div>
                    <hr className='mx-6 inline-block sm:hidden'/>
                    <div className='flex  gap-10 mx-6 mt-6 mb-6
                    sm:flex sm:flex-col sm:mb-2 sm:gap-2 sm:w-40
                    '>
                        <h1 className='text-white w-48'>Connect With Us</h1>
                        <main className='w-80 sm:w-40'>
                            <div className='w-20 flex gap-2 items-center text-gray-300 hover:text-white ease-in-out duration-300 cursor-pointer hover:underline hover:underline-offset-2'>
                                <FontAwesomeIcon icon={faYoutube} className='text-lg'/>
                                <h2 className=''>Youtube</h2>
                            </div>
                            <div className='w-20 flex gap-2 items-center text-gray-300 hover:text-white ease-in-out duration-300 cursor-pointer hover:underline hover:underline-offset-2'>
                                <FontAwesomeIcon icon={faSquareFacebook} className='text-lg'/>
                                <h2 className=''>Facebook</h2>
                            </div>
                            <div className='w-20 flex gap-2 items-center text-gray-300 hover:text-white ease-in-out duration-300 cursor-pointer hover:underline hover:underline-offset-2'>
                                <FontAwesomeIcon icon={faTwitter} className='text-lg'/>
                                <h2 className=''>Twitter</h2>
                            </div>
                            <div className='flex gap-2 items-center text-gray-300 hover:text-white ease-in-out duration-300 cursor-pointer hover:underline hover:underline-offset-2'>
                                <FontAwesomeIcon icon={faInstagram} className='text-lg'/>
                                <h2 className=''>Instagram</h2>
                            </div>
                            <div className='w-20 flex gap-2 items-center text-gray-300 hover:text-white ease-in-out duration-300 cursor-pointer hover:underline hover:underline-offset-2'>
                                <FontAwesomeIcon icon={faTiktok} className='text-lg'/>
                                <h2 className=''>TikTok</h2>
                            </div>
                        </main>
                    </div>
                    <hr className='mx-6 sm:hidden'/>
                    <div className='flex gap-10 mx-6 mt-6 mb-6
                    sm:flex sm:flex-col sm:mb-2 sm:gap-2 sm:w-40
                    '>
                        <h1 className='text-white w-48'>Crunchyroll</h1>
                        <ul className='text-gray-400 w-80 sm:w-40'>
                            <li className='hover:text-white cursor-pointer ease-in-out duration-200 hover:underline underline-offset-2'>About</li>
                            <li className='hover:text-white cursor-pointer ease-in-out duration-200 hover:underline underline-offset-2'>Help/FAQ</li>
                            <li className='hover:text-white cursor-pointer ease-in-out duration-200 hover:underline underline-offset-2'>Terms of Use</li>
                            <li className='hover:text-white cursor-pointer ease-in-out duration-200 hover:underline underline-offset-2'>Privacy Policy</li>
                            <li className='hover:text-white cursor-pointer ease-in-out duration-200 hover:underline underline-offset-2'>AdChoices</li>
                            <li className='hover:text-white cursor-pointer ease-in-out duration-200 hover:underline underline-offset-2'>Do Not Sell My Personal Information</li>
                            <li className='hover:text-white cursor-pointer ease-in-out duration-200 hover:underline underline-offset-2'>Cookie Consent Tool</li>
                            <li className='hover:text-white cursor-pointer ease-in-out duration-200 hover:underline underline-offset-2'>Press Inquiries</li>
                            <li className='hover:text-white cursor-pointer ease-in-out duration-200 hover:underline underline-offset-2'>Get the Apps</li>
                            <li className='hover:text-white cursor-pointer ease-in-out duration-200 hover:underline underline-offset-2'>Redeem Gift Card</li>
                            <li className='hover:text-white cursor-pointer ease-in-out duration-200 hover:underline underline-offset-2'>Jobs</li>
                        </ul>
                    </div>
                    <div className='hidden xl:flex xl:flex-col'>
                        <h1 className='text-white w-48'>Navigation</h1>
                        <ul className='text-gray-400 w-80 sm:w-40'>
                            <li>Browse Popular</li>
                            <li>Browse Simulcasts</li>
                            <li>Browse Manga</li>
                            <li>Release Calendar</li>
                            <li>News</li>
                            <li>Games</li>
                        </ul>
                    </div>
            </main>
            <hr className='pb-6 mx-6 '/>
            <div className='flex items-center justify-between pb-6 mx-6'>
                <h1 className='text-gray-400 text-sm'>crunchyrollclone</h1>
                <div className='w-40 h-10 ease-in-out duration-500 justify-center cursor-pointer hover:bg-gray-500 hover:text-white  text-gray-400 flex items-center gap-4'>
                    <FontAwesomeIcon icon={faCaretDown} className='text-white'/>
                    <h2 className=''>ENGLISH (US)</h2>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer