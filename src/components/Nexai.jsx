import React from 'react'
import Button from './Button'
import ai from '../assets/images/ai.png'

const Nexai = () => {
    return (
        <>
            <div className='bg-[url(./assets/images/Frame3.png)] bg-center bg-size bg-no-repeat max-w-[1320px] lg:mx-auto py-[32px] px-[12px] lg:p-[163px_119px_124px_100px] m-[12px]'>
                <div className='flex lg:flex-row flex-wrap -mx-3 flex-col-reverse '>
                    <div className='lg:w-6/12 px-3 flex items-center lg:items-start flex-col pt-7 lg:pt-0'>
                        <h2 className=' text-[32px] md:text-[40px] font-bold ff-recharge text-[#02CDCF]'>What is NexAi?</h2>
                        <p className='font-poppins font-normal text-[16px] text-[#B7B8BA] text-center lg:text-start pt-4'>Beyond its convenience, Nexai revolutionizes the way you interact with your home environment. It enhances productivity, efficiency, and overall well-being. From managing your schedules to transforming the way you experience smart living, Nexai opens up a world of possibilities.</p>
                        <p className='font-poppins font-normal text-[16px] text-[#B7B8BA]  text-center lg:text-start  pt-3'>Nexai's software can be installed on all your smart devices, including smartphones, computers, smart TVs, and kitchen appliances. It acts as a centralized control hub, allowing you to manage and interact with all your devices seamlessly. Whether it's adjusting the temperature, turning on appliances, or even accessing files on your home computer from anywhere, Nexai empowers you with effortless control.</p>
                        <Button name='!mt-9' btn='Learn More' />
                    </div>
                    <div className='lg:w-6/12 mx-auto px-3 relative flex justify-center lg:justify-start'>
                        <img src={ai} alt="ai" className='w-[70%]' />
                        <div className='w-[468px] h-[463px] bg-[#02CDCF] blur-[294px] absolute top-[2%] right-[-8%] hidden lg:block'></div>
                    </div>
                </div>
            </div>
         

        </>
    )
}

export default Nexai