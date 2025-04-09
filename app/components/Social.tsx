'use client'
import Insta from './icons/Insta'
import Whatsapp from './icons/Whatsapp'
import Plus from './icons/Plus'
import { useState } from 'react'
import {motion} from 'framer-motion'

export default function Social() {
    const [social, setSocial] = useState(false)

    const handleClick = () => {
        setSocial(!social)
    }
  return (
    <section onClick={handleClick} className='fixed cursor-pointer md:bottom-10 bottom-20 right-5'>
        <Plus />
        {social && <motion.div
        
            initial={{ y: 100, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='fixed flex overflow-hidden z-0 flex-col items-center transition-all justify-center text-black font-bold gap-3 md:bottom-30 bottom-35 right-4.5 md:right-3.5'>
            <Insta />    
            <Whatsapp />
        </motion.div>}
    </section>
  )
}
