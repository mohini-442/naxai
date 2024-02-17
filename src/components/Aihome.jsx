import React from 'react'
import img1 from '../assets/images/section2img1.png'
import Button from './Button'

const Aihome = () => {
    return (
        <div className='relative z-[2]'>
            <div className='max-w-[1140px] mx-auto px-3 py-12 md:py-44'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='lg:w-1/2 w-full px-3 relative z-[2]' data-aos="fade-up"
                        data-aos-duration="3000">
                        <img src={img1} alt="img1" className='lg:w-full w-[80%]' />
                        <div className='w-[231px] h-[231px] bg-[#02CDCF] blur-[194px] absolute top-[2%] left-[7%] z-[-1] hidden md:block'></div>
                    </div>
                    <div className='lg:w-1/2 w-full px-3 mt-4 lg:pl-10 pt-12 lg:pt-0' data-aos="fade-up"
                        data-aos-duration="3000">
                        <h2 className='md:text-[40px] text-[32px] font-bold text-[#02CDCF] ff-recharge leading-[38px] md:leading-[50px]' data-aos="fade-up"
                            data-aos-duration="3000">Ai-Powered Home Assistant</h2>
                        <p className='font-poppins text-[16px] font-normal text-[#B4B9B9] pt-3 ' data-aos="fade-up"
                            data-aos-duration="3000">Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
                        <p className='font-poppins text-[16px] font-normal text-[#B4B9B9] pt-1' data-aos="fade-up"
                            data-aos-duration="3000">Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide timely reminders</p>
                        <p className='font-poppins text-[16px] font-normal text-[#B4B9B9] pt-1' data-aos="fade-up"
                            data-aos-duration="3000">assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.</p>
                        <Button name='mt-8' data-aos="fade-up"
                            data-aos-duration="3000" btn='Learn More' />
                    </div>
                </div>
            </div>
            <div className='w-[228px] h-[245px] bg-[#02CDCF] blur-[194px] absolute top-[32%] right-[0%] z-[-1] hidden md:block'></div>
        </div>
    )
}

export default Aihome