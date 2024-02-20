import React from 'react'
import img1 from '../assets/images/section2img1.png'
import Button from './Button'

const Aihome = () => {
    return (
        <div className='relative z-[2]' id='home'>
            <div className='max-w-[1140px] mx-auto px-3 pb-16 lg:pt-16 lg:pb-36'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='lg:w-1/2 w-full px-3 relative z-[2] mix-blend-hue' data-aos="fade-up"
                        data-aos-duration="3000">
                        <img src={img1} alt="img1" className='lg:w-[80%] w-[60%] mx-auto mix-blend-lighten' />
                        <div className='w-[231px] h-[181px] bg-[#02CDCF] blur-[194px] absolute top-[52%] left-[17%] z-[-1] hidden lg:block'></div>
                    </div>
                    <div className='lg:w-1/2 w-full px-3 mt-4 lg:pl-10 pt-5 lg:pt-0 flex items-center lg:items-start flex-col' data-aos="fade-up"
                        data-aos-duration="3000">
                        <h2 className='md:text-[40px] text-[30px] font-bold text-[#02CDCF] ff-recharge leading-[38px] md:leading-[50px] text-center lg:text-start' data-aos="fade-up"
                            data-aos-duration="3000">Ai-Powered Home Assistant</h2>
                        <p className='font-poppins text-[14px] md:text-[16px] font-normal text-[#B4B9B9] pt-3 text-center lg:text-start' data-aos="fade-up"
                            data-aos-duration="3000">Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
                        <p className='font-poppins text-[14px] md:text-[16px] font-normal text-[#B4B9B9] pt-1 text-center lg:text-start' data-aos="fade-up"
                            data-aos-duration="3000">Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide timely reminders</p>
                        <p className='font-poppins text-[14px] md:text-[16px] font-normal text-[#B4B9B9] pt-1 text-center lg:text-start' data-aos="fade-up"
                            data-aos-duration="3000">assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.</p>
                        <Button name='mt-8' data-aos="fade-up"
                            data-aos-duration="3000" btn='Learn More' />
                    </div>
                </div>
            </div>
            <div className='w-[228px] h-[245px] bg-[#02CDCF] blur-[194px] absolute top-[32%] right-[0%] z-[-1] hidden lg:block'></div>
        </div>
    )
}

export default Aihome