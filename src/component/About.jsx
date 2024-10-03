import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["NeueMontreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell Product, explain complex ideas, and hire great people.
        </h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#75814e]'>
        <div className='w-1/2'>
        <h1 className='text-6xl' >Our Approach</h1>
        <button className='flex gap-10 items-center uppercase px-10 py-6 bg-zinc-900 mt-10 rounded-full text-lg text-white'>Read More
        <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
        </button>
        </div>

        <div className='w-1/2 h-[60vh] rounded-3xl bg-[#6c7e2b]'>
        <img className='rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="Couple Image" />

        </div>

        </div>

    </div>
  )
}

export default About