import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
            <h1 className='text-[17vw] leading-none font-["Founders_Grotesk_Condensed"] uppercase pt-10 -mb-[3vw] font-semibold'>We are Ochi</h1>
            <h1 className='text-[17vw] leading-none font-["Founders_Grotesk_Condensed"] uppercase pt-10 -mb-[3vw] font-semibold'>We are Ochi</h1>

        </div>
    </div>
  )
}

export default Marquee