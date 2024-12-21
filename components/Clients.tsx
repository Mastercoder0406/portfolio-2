import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from "@/data"
import { companies } from "@/data"

const Clients = () => {
    return (
        // Make it either Services section or show the certificates +awards
        <div className='py-20' id='testimonials'>
            <h1 className='heading text-white-200'>
                Certifications
                <span className='text-purple'>Satisfied clients</span>
            </h1>

            {/*  list of projects */}
            <div className='flex flex-wrap items-center  max-lg:mt-10 '>
                <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'
                />

                {/* showing the experience, companies  logos and in the above cards put the companies experience and projects developed there  */}

                <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 '>
                    {companies.map(({ id, img, name, nameImg })=>(
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <img src={ img} alt={name} className="md:w-24 w-20 " />
                        <img src={ nameImg} alt={name} className="md:w-10 w-5 " />
                    </div>
                    
                    
                    ))}

                </div>
                {/* <div className='h-[50vh] md:h-[30rem]
                rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
                  </div> */}

            </div>
        </div>

    )
}

export default Clients
