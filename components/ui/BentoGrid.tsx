"use client";
import { cn } from "@/utils/cn";
import statistics, { gridItems } from "@/data"; // Importing gridItems data
import { IoCopyOutline} from "react-icons/io5";
import { useState } from "react";
import MagicButton from "./magicbutton";
import Lottie from "react-lottie";
import { BackgroundGradientAnimation } from "./GradientBg";
import BTN2 from "./btn2";
import { AnimatedTooltip } from "./animated-tooltip";

import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "../ui/text-reveal-card";

import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
    IconBrandInstagram, IconBrandTwitter, IconBrandLinkedin
} from "@tabler/icons-react";
import { FloatingDock } from "./floating-doc";


export const BentoGrid = ({ className,children }: { className?: string; children?: React.ReactNode; }) => {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto", className)}>
            {gridItems.map((item) => (
                <BentoGridItem key={item.id} {...item} />
            ))}
        </div>
    );
};

export const BentoGridItem = ({
    id,
    title,
    description,
    img,
    className,
    imgClassName,
}: {
    id: number;
    title: string;
    description?: string;
    img?: string;
    spareImg?: string;
    className?: string;
    imgClassName?: string;
    titleClassName?: string;
}) => {
    const [copied, setCopied] = useState(false);

    const leftLists = ["MERN Stack", "JAVA", "Python"];
    const rightLists = ["Django", "NextJS", "Cybersecurity"];

    const handleCopy = () => {
        navigator.clipboard.writeText("atharva.email.com");
    
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const confettiOptions = {
        loop: false,
        autoplay: copied,
        animationData: require("@/data/confetti.json"),
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
    };




    const links = [
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://instagram.com",
        },

        {
            title: "Tweeter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://linkedin.com",
        },
        {
            title: "Linkedin",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://linkedin.com",
        },
        
       

     
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/Mastercoder0406",
        },
    ];

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento  group-hover:shadow-lg transition duration-200 shadow-input dark:shadow-none p-5 lg:p-10",
                className
            )}
            style={{
                background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            {/* ID 1 - Photo, Name, and Education */}
            {id === 1 && (
                <div className="flex items-center group-hover/bento:translate-x-2 transition duration-200 h-full space-x-6">
                    {/* Left side: Profile Image */}
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover"
                    />

                    {/* Right side: Text */}
                    <div className="flex flex-col items-start justify-center">
                        <h2 className="text-white text-3xl font-bold">Atharva Ashok Dhokte</h2>
                        <p className="text-[#c1c2d3] mt-2 text-left">B.Tech in Computer Engineering - BVCOE</p>
                    </div>
                </div>
            )}

            {/* CURRENT STATUS */}
            {id === 7 && (
                <div className="  group-hover/bento:translate-x-2 transition duration-200 flex items-center justify-center mt-2 text-white-200">
                    <h1 className="text-white text-3xl font-bold text-center" >Ready to collaborate, Innovate and deliver excellence</h1>
                    </div>

                
            )}



            {/* ID 2 - Portfolio Statistics */}
            {id === 2 && (
                <div className="flex group-hover/bento:translate-x-2 transition duration-200 flex-col space-y-4 items-center justify-center h-full">
                    <h1 className="text-white text-3xl font-bold text-center">{title}</h1>
                    <div className="text-[#c1c2d3] space-y-2 flex flex-row text-center">
                        <AnimatedTooltip items={ statistics} />
                    </div>
                </div>
                
            )}


            {/* ID 3 - Learning Goals */}
            {id === 3 && (
                
                <div >
                    <h1 className="text-white text-3xl group-hover/bento:translate-x-2 mv-5 transition duration-200 font-bold mb-4 text-bold py-5">{title}
                        
                    </h1>
                    <h2 className="text-white-200 text-bold -py-5">{description}</h2>
                    <h3 className="text-white-200 py-5">

                        <a href="#projects">
                            <BTN2
                                title="Show Projects"
                                position="left"
                                
                            />
                        </a>
                    </h3>
                   
                    <div className="flex gap-1 lg:gap-5 w-fit absolute right-3 lg:right-5 top-20 text-white-200 ">
                    {/* tech stack lists */}
                    <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                        {leftLists.map((item, i) => (
                            <span
                                key={i}
                                className="lg:py-0 lg:right-9 lg:px-3 py-0 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                            >
                                {item}
                            </span>
                            
                        ))}
                        <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                      
                        </div>
                        
                        {/* 2nd stack  */}
                    <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                        <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                        
                        {rightLists.map((item, i) => (
                            <span
                                key={i}
                                className="lg:py-2 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                    </div>

                    
                </div>
            )}

            {id === 4 && (
                // <div className="group-hover/bento:translate-x-2 transition duration-200">
                //     {/* Title for Future Goals */}
                //     <h2 className="text-white text-3xl font-bold mb-4">My Future Goals</h2>

                //     {/* Description of Future Goals */}
                //     <p className="text-[#c1c2d3] text-lg max-w-4xl mx-auto">
                        
                //     </p>

                //     {/* Optional: Add Bullet Points for Specific Goals */}
                //     <div className="flex flex-col space-y-4 mt-6 text-[#c1c2d3] text-lg">
                //         <ul className="list-disc list-inside">
                //             <li>Expand my knowledge in AI/ML algorithms and data analysis.</li>
                //         </ul>
                //     </div>
                // </div>
                <div className="flex items-center justify-center bg-[#0E0E10] h-10px rounded-xl w-full">
                    <TextRevealCard
                        text="My Future Goals"
                        revealText="AIML and Data Analysis "
                    >
                                              
                    </TextRevealCard>
                </div>
            )}


            {/* ID 5 - About Myself */}
            {id === 5 && (
                <div className="">
                    <BackgroundGradientAnimation>  <h2 className="text-white text-center text-2xl group-hover/bento:translate-x-2 transition duration-200 font-bold mb-2 py-5">About Myself</h2>
                        <p className="text-[#c1c2d3] py-5 pb-5 justify-center group-hover/bento:translate-x-2 transition duration-200">{description}</p></BackgroundGradientAnimation>
                  
                </div>
            )}

            {/* ID 6 - Contact Me */}
            {id === 6 && (
                <div className="flex flex-col items-center space-y-4 group-hover/bento:translate-x-2 transition duration-200">
                    <h1 className="text-white text-3xl  font-bold mb-4">Connect with me</h1>
                    <div className="flex space-x-1">
                        {/* <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <img src="/iinsta.jpeg" alt="Instagram"
                                className="w-8 h-8 rounded-lg transition-transform transform hover:scale-110 hover:ring-2 hover:ring-blue-500" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <img src="/tweet.jpeg" alt="Twitter" className="w-8 h-8 rounded-lg transition-transform transform hover:scale-110 hover:ring-2 hover:ring-blue-500" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <img src="/link.png" alt="LinkedIn" className="w-8 h-8 rounded-lg transition-transform transform hover:scale-110 hover:ring-2 hover:ring-blue-500 " />
                        </a> */}
                        <FloatingDock items={links}/>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            {copied && <Lottie options={confettiOptions} height={40} width={40} />}
                            {/* <MagicButton
                                title={copied ? "Email Copied!" : "Copy my email"}
                                icon={<IoCopyOutline />}
                                handleClick={handleCopy}
                                otherClasses="w-24 px-2 text-sm text-center" // Reduced width and padding
                                position="left"
                            /> */}
                            <BTN2 title={copied ? "Email Copied!" : "Copy my email"} position="left"
                                handleClick={handleCopy}/>
                        </div>
                        <a
                            href="/path/to/your/cv.pdf"
                            download="Your_CV_Name"
                            className="text-white py-2 px-4 rounded-lg shadow-lg transition-colors duration-300 flex items-center space-x-2"
                        >
                            <BTN2 title="View CV" position="left" />
                        </a>
                    </div>

                   
                    
                    
                </div>
            )}

         
       

            {/* Image Handling */}
            {img && <img src={img} className={cn("absolute bottom-0 right-0", imgClassName)} alt="" />}
        </div>
    );
};

