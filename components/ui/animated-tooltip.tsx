"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
    items,
}: {
    items: {
        id: number;
        name: string;
        number: number;
        image: string;
    }[];
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0); // going to set this value on mouse move
    // rotate the tooltip
    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig
    );
    // translate the tooltip
    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig
    );
    const handleMouseMove = (event: any) => {
        const halfWidth = event.target.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
    };

    return (
        <>
           {items.map((item, idx) => (
  <div
    className="relative group"
    key={item.name}
    onMouseEnter={() => setHoveredIndex(item.id)}
    onMouseLeave={() => setHoveredIndex(null)}
  >
    <AnimatePresence mode="popLayout">
      {hoveredIndex === item.id && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 250,
              damping: 12,
            },
          }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
                               className="absolute -top-20 flex flex-row items-center justify-center space-x-4 opacity-20 bg-[#7477ba] text-[#d3d5f2] z-50 shadow-lg rounded-md px-4 py-2"
        >
          <div className="space-y-2  items-center">
            <div className=" font-bold text-2xl">{item.name}</div>
                                   <div className="text-xl text-semibold ">{item.number}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    <Image
      onMouseMove={handleMouseMove}
      height={100}
      width={100}
      src={item.image}
      alt={item.name}
      className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-110 group-hover:z-30 border-gray-300 transition duration-300"
    />
  </div>
))}
        </>
    );
};
