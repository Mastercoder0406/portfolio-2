import React from 'react'

const MagicButton = ({ title, icon, position, handleClick, otherClasses }: { title: string; icon: React.ReactNode; position: string; handleClick?: () => void; otherClasses?:string}) => {
  return (
      <button className="bg-slate-800 items-center w-auto no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block md:w-70 md:mt-10 lg:mb-5" onClick={handleClick}>
          <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-lg bg-zinc-950 py-0.5 px-7 ring-1 ring-white/10 text-center ">
              
              <span className={otherClasses}>
                  
                 
                  {/* {position === 'left' && icon} */}
                  {title}
                  {/* {position ==='right' && icon} */}
              </span>
              <span className='gap-2'>{icon}</span>
              
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>
  )
}

export default MagicButton



//real button used in vide
//     //<button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//     < span className = "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//         <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
//             Border Magic
//         </span>
// </button >

    