import React from 'react'
import { projects } from '@/data/index'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'

const RecentProjects = () => {
    return (
        <div className='py-20' id='projects'>
            <h1 className='heading text-white-200'>
                A small selection of {''}
                <span className='text-purple'>recent-projects</span>
            </h1>

            {/*  list of projects */}
            <div className='flex flex-wrap items-center  justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {/*  list of projects */}
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className=' sm:h-[41rem] h-[32rem] text-white lg:min-h-[32.5rem] sm:w-[32.5rem] flex items-center justify-center  w-[80vw] '>
                        {/* adding the card , on pinc ontiner hovering gives you link, yu can choose between title and link */}
                        <PinContainer

                            title={title}
                            href={link}
                        >
                            {/* <Link href={link}></Link> */}
                            <div className='relative flex items-center justify-center sm:w-[540px] w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] sm:h-[40vh] mb-10 '>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'
                                    style={{ backgroundColor: "#13162D" }}>
                                    <img src='/bg.img' alt='bg-img' />
                                </div>
                                <img src={img}
                                    alt={title}
                                    className='z-10 absolute bottom-0 ' />
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>

                            <p className='lg:text-xl lg:font-normalfont-light text-sm line-clamp-2 '>{des}</p>


                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center'>
                                    {iconLists.map((icon, index) => (
                                        <div className='border border-white-100 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{ transform: `translateX(-${5 * index * 2}px)` }}> <img src={icon} alt={icon} className='p-2' /></div>
                                    ))}

                                </div>
                                <div className='flex justify-center items-center'>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-purple'> Check Live Sight</p>
                                    <FaLocationArrow className='ms-3' color='#CBACF9' />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects
