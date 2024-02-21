import React from 'react'
import Button from './Button'
import frame2 from '../assets/images/frame2.png'

const Talkus = () => {
    return (
        <>
            <div className='relative z-[2]' id='talkus'>
                <div className='max-w-[1320px] px-3 mx-auto pt-2 md:pt-28 pb-12 md:pb-0'>
                    <div className='flex flex-wrap flex-row -mx-3'>
                        <div className='lg:w-1/2 w-full px-3' data-aos="fade-right">
                            <h2 className='font-bold text-[32px] sm:max-w-[600px] mx-auto md:text-[40px] ff-recharge text-white leading-[40px] md:leading-[52px] text-center lg:text-start'>Ready to get started
                                <span className='text-[#02CDCF]'> Talk to us Today </span></h2>
                        </div>
                        <div className='lg:w-1/2 w-full px-3 flex lg:justify-end justify-center pt-5 lg:pt-0 items-center' data-aos="fade-left">
                            <Button name=' md:!h-[58px]' btn='Get Started' />
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