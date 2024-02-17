import React from 'react'
import Button from './Button'
import frame2 from '../assets/images/frame2.png'

const Talkus = () => {
    return (
        <>
            <div className='relative z-[2]'>
                <div className='max-w-[1320px] px-3 mx-auto pt-16 md:pt-28 pb-12'>
                    <div className='flex flex-wrap flex-row -mx-3'>
                        <div className='md:w-1/2 w-full px-3' data-aos="fade-right">
                            <h2 className='font-bold text-[32px] md:text-[40px] ff-recharge text-white leading-[52px] text-center md:text-start'>Ready to get started
                                <span className='text-[#02CDCF]'> Talk to us Today </span></h2>
                        </div>
                        <div className='md:w-1/2 w-full px-3 flex md:justify-end justify-center pt-9 md:pt-0 items-center' data-aos="fade-left">
                            <Button name='h-[58px]' btn='Get Started' />
                        </div>
                    </div>
                </div>
                <div className='w-[228px] h-[228px] bg-[#02CDCF] blur-[194px] absolute top-[2%] left-[-12%] z-[-1] hidden md:block'></div>
                <img src={frame2} alt="frame2" className='absolute top-[-22%] right-0 z-[-1] opacity-[20%] hidden md:block' />
            </div>
        </>
    )
}

export default Talkus