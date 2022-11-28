import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook,faInstagram,faPinterest,faTwitter, faYoutube, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <section className='w-full'>
            <div>
                <h1 className='text-white'>Navigation</h1>
                <ul>
                    <li>Browse Popular</li>
                    <li>Browse Simulcasts</li>
                    <li>Browse Manga</li>
                    <li>Release Calendar</li>
                    <li>News</li>
                    <li>Games</li>
                </ul>
            </div>
            <hr />
            <div>
                <h1 className='text-white'>Connect With Us</h1>
                <main>
                    <div className='flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faYoutube} className='text-gray-300 text-base'/>
                        <h2 className='text-gray-400'>Youtube</h2>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faSquareFacebook} className='text-gray-300 text-base'/>
                        <h2 className='text-gray-400'>Facebook</h2>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faTwitter} className='text-gray-300 text-base'/>
                        <h2 className='text-gray-400'>Twitter</h2>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faInstagram} className='text-gray-300 text-base'/>
                        <h2 className='text-gray-400'>Instagram</h2>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faTiktok} className='text-gray-300 text-base'/>
                        <h2 className='text-gray-400'>TikTok</h2>
                    </div>
                </main>
            </div>
            <hr />
            <div>
                <h1 className='text-white'>Crunchyroll</h1>
                <ul>
                    <li>About</li>
                    <li>Help/FAQ</li>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>AdChoices</li>
                    <li>Do Not Sell My Personal Information</li>
                    <li>Cookie Consent Tool</li>
                    <li>Press Inquiries</li>
                    <li>Get the Apps</li>
                    <li>Redeem Gift Card</li>
                    <li>Jobs</li>
                </ul>
            </div>
            <hr />
            <div>

            </div>
        </section>
    </div>
  )
}

export default Footer