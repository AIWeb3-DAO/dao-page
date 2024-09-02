import React from 'react'
import { AuroraBackground } from '../ui/aurora-background'
import { motion } from "framer-motion";
import Link from 'next/link';
export default function HeroSection() {
  return (
 <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center  px-4"
      >
        <div  className=" flex items-center justify-center flex-col space-y-4  max-w-3xl p-4">
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Ignite Your Polkadot Potential.
        </div>
        <div className="font-extralight text-center text-base md:text-4xl dark:text-neutral-200 py-4 ">
         
        Curate, Learn, Lead—Your Gateway to Polkadot Mastery
        </div>
        <Link href={`#waitlist`} className="bg-yellow-500 dark:bg-white rounded-full w-fit text-black dark:text-black px-6 py-3">
          Join waitlist
        </Link>
        </div>
      </motion.div>
      </AuroraBackground>

  )
}
