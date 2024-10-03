import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 border-t-2'>
        <div className='textstructure mt-40 px-20'>
            {["We Create", "Eye Opening", "Presentation"].map((item,index) => {
                return<div className='masker'>
                    <div className='w-fit flex items-center'>
                        {index === 1 && (
                            <div className='mr-[1vw] w-[8vw]  h-[5.0vw] -top-[1.3vw] relative bg-green-500'></div>
                        )}
                    
                <h1 className='uppercase text-[7vw] leading-[7vw]  font-["Founders_Grotesk_Condensed"] font-bold'>{item}</h1>
                </div>
            </div>
            })}
        </div>

        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center px-20 py-5'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index) => <p className='text-md font-light tracking-tight leading-none'>{item}</p>)}

            <div className='start flex items-center gap-5'>
                <div className='py-2 px-5 border-[2px] border-zinc-500 rounded-full text-sm capitalize'>Start The Project</div>
                
                <div className='w-10 h-10  flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
                    <span className='rotate-45'>
                    <FaArrowUpLong />
                    </span>
                </div>
                </div>
        </div>
    </div>
  )
}

export default LandingPage