import React from 'react'
import { useState } from 'react';
import Button from './Button';
import shadow from '../assets/images/navshadow.png'

function Myheader() {
    const [show, setshow] = useState(true);
    function nav() {
        setshow(!show);
        document.body.classList.toggle("max-lg:!overflow-hidden")
    }
    return (
        <>
            <div className='mt-1 relative min-h-[84vh] md:min-h-screen xl:px-12'>
                <div className='bg-[url(./assets/images/bgheader.png)] flex flex-col bg-right lg:bg-center bg-no-repeat bg-cover xl:bg-bgSize md:mt-3 bg-black min-h-[80vh] md:min-h-[94vh] z-10'>
                    <nav className=" px-3 pt-3 flex items-center gap-28 justify-between lg:pr-24">
                        <div className='hidden xl:block'></div>
                        <ul
                            className={`flex items-center gap-5 mobileView lg:pl-64 ${show ? "right-[-100%]" : "right-0"}`} >
                            <li onClick={nav}><a href="#home"
                                className="text-white relative after:absolute after:w-0 after:h-[1px] hover:after:absolute after:bottom-[-5px] hover:after:w-full hover:text-[#02CDCF] after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF] font-poppins font-normal text-[16px]" >Home
                            </a>
                            </li>
                            <li onClick={nav}><a href="#marketplace" className="text-white  relative after:absolute after:w-0 after:h-[1px] hover:after:absolute hover:text-[#02CDCF] after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF]  text-base font-normal font-poppins"  >Marketplace
                            </a>
                            </li>
                            <li onClick={nav}><a
                                href="#nexai"
                                className="text-white  relative after:absolute after:w-0 after:h-[1px] hover:after:absolute after:bottom-[-5px] hover:after:w-full hover:text-[#02CDCF] after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF] text-base font-normal font-poppins"
                            > About
                            </a>
                            </li>
                            <li onClick={nav}>
                                <a
                                    href="#roadmap"
                                    className="text-white relative after:absolute after:w-0 after:h-[1px] hover:after:absolute after:bottom-[-5px] hover:after:w-full hover:text-[#02CDCF] after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF]  text-base font-normal font-poppins"
                                >
                                    NexChat
                                </a>
                            </li>
                            <li onClick={nav}>
                                <a
                                    href="#talkus"
                                    className="text-white  relative after:absolute after:w-0 after:h-[1px] hover:after:absolute after:bottom-[-5px] hover:after:w-full hover:text-[#02CDCF] after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF]  text-base font-normal font-poppins"
                                >
                                    Tokens
                                </a>
                            </li>
                        </ul>
                        <Button name='xl:!ml-12 !mt-6 lg:!mt-0 !text-nowrap' btn='Sign up' />
                        <label className=" lg:hidden" onClick={nav}>
                            {show ? (
                                <div className="z-20 relative pl-2">
                                    <span className="flex bg-[#ffff] h-[3px] rounded-3xl duration-300 w-6"></span>
                                    <span className="flex bg-[#ffff] h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                                    <span className="flex bg-[#ffff] h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                                </div>
                            ) : (
                                <div className="z-20 relative">
                                    <span className="flex bg-[#ffff] absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                                    <span className="flex bg-[#ffff] absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
                                </div>
                            )}
                        </label>
                    </nav>
                    <div className='max-w-[1240px] px-3 flex flex-grow items-center justify-center'>
                        <div className='flex flex-wrap flex-row -mx-3'>
                            <div className='lg:w-7/12 px-3 pl-4 lg:pl-[120px]'>
                                <h2 className='ff-recharge font-normal text-[40px] md:text-[60px] text-white leading-[48px] md:leading-[75px]'> <span className='font-bold text-[#02CDCF]'>Nexai</span> is an advanced AI-powered home assistant</h2>
                                <p className='font-poppins text-base font-normal text-[#B2B8B9] pt-2 pb-3'>Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
                                <Button name='mt-6 lg:!mt-12' btn='Know More' />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={shadow} alt="shadow" className='absolute bottom-0 left-0 w-full' />
                <div className=' w-[262px] h-[262px] bg-[#02CDCF] blur-[194px] absolute top-[26%] right-[12%] hidden lg:block'></div>
                <div className=' w-[262px] h-[262px] bg-[#02CDCF] blur-[194px] absolute top-[26%] left-[0%] opacity-[30%] hidden lg:block'></div>
            </div>
        </>
    )
}
export default Myheader