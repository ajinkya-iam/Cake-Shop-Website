import React from 'react'
import thank_you from '../images/thank_you.png'
import sign from '../images/sign.png'

const ThankYouSection = () => {
  return (
    <div className='md:ml-[19%] flex flex-col mx-auto items-center'>
        <img className='h-28 object-contain' src={thank_you}/>
        <p className='text-slate-100 md:w-[500px] font-sans mx-5 text-sm text-center mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam autem quisquam, ex quas laboriosam placeat, dolor nihil facere iure modi cum officiis rem corrupti tempora ratione? Quas veritatis vitae tempora?</p>
        <img src={sign} className='object-contain h-24 mt-10' />
        <h1 className='mt-10 text-white font-sans font-semibold text-center italic'>Swapnil</h1>
        <p className='text-gray-400 text-center text-sm font-sans mb-10 mt-1 underline'>Restaurant Owner</p>
    </div>
  )
}

export default ThankYouSection