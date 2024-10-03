import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-16'>
            <h1 className='text-7xl font-["NeueMontreal"] tracking-tight'>Featured Projects</h1>
        </div>

        <div className='px-20'>
        <div className="card flex gap-20 mt-10">
                <div className="cardcontainer  relative w-1/2 h-[75vh] ">
                <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-semibold text-8xl leading-none tracking-tighter'>
                {"FYDE".split("").map((item,index) => (
                    <span>{item}</span>
                )
                )}
                </h1>
                <div className='card w-full h-full rounded-xl overflow-hidden '>
                    <img className='w-full h-full ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" />
                </div>
                </div>
                <div className="cardcontainer relative w-1/2 h-[75vh]">
                <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-semibold text-8xl leading-none tracking-tighter'>
                {"VISE".split("").map((item,index) => (
                    <span>{item}</span>
                )
                )}
                </h1>
                <div className='card w-full h-full rounded-xl  overflow-hidden'>
                    <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" />
                </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Featured