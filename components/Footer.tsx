import React from 'react'
import MagicButton from './ui/magicbutton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
    return (
        <footer className='w-full mb-[100px] md:mb-5 pb-10' id='contact'>
            {/* <div className='w-full absolute left-0 -bottom-72 min-h-92'>
                <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-60' />
            </div> */}

            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw] text-white-200'>Ready to Take <span className='text-purple'> your </span> digital presence </h1>

                <p className='text-white-200 md:mt-10 my-5 textt-center'>Reach out to me and let's discuss </p>
                <a href="mailto:master.atharva04@gmail.com">
                    <MagicButton title='Lets get in touch'
                        icon={<FaLocationArrow />}
                        position='right' />
                </a>
            </div>

            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'><p className='md:text-base text-sm  md:font-normal font-light text-white-200'>Copyright @2024 Atharva</p>
            
                <div className='flex items-center md:gap-3'>
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 '>
                            <img src={profile.img} alt={profile.img}
                                width={20} height={20} />
                        </div>
                    ))}
                </div>
            
            </div>

        </footer>
    )
}

export default Footer
