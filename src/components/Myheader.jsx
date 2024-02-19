import React from 'react'
import { useState } from 'react';
import Button from './Button';

function Myheader() {
    const [nav, setNav] = useState(true);
    if (nav === false) {
        document.body.classList.add("max-lg:overflow-hidden");
    } else {
        document.body.classList.remove("max-lg:overflow-hidden");
    }
    return (
        <div className='bg-[url(./assets/images/bgheader.png)] bg-center bg-no-repeat bg-cover md:bg-size md:mt-3 h-[778px] max-w-[1440px] mb-5 mx-auto bg-black'>
            <nav className="max-w-[1240px] px-3 mx-auto md:pt-4">
                <div className="flex justify-end py-3 gap-28 ">
                    <ul
                        className={`${nav ? "left-[-100%]" : "left-0"}
            max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:z-[7] bg-black max-lg:transition-all max-lg:ease-linear max-lg:duration-300 max-lg:min-h-screen max-lg:flex-col max-lg:justify-center flex gap-12 items-center`}
                    >
                        <li onClick={() => setNav(!nav)}><a href="#home"
                            className="text-white relative after:absolute after:w-0 after:h-[1px] hover:after:absolute after:bottom-[-5px] hover:after:w-full hover:text-[#02CDCF] after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF] font-poppins font-normal text-[16px]" >Home
                        </a>
                        </li>
                        <li onClick={() => setNav(!nav)}><a href="#marketplace" className="text-white  relative after:absolute after:w-0 after:h-[1px] hover:after:absolute hover:text-[#02CDCF] after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF]  text-base font-normal font-poppins"  >Marketplace
                        </a>
                        </li>
                        <li onClick={() => setNav(!nav)}><a
                            href="#nexai"
                            className="text-white  relative after:absolute after:w-0 after:h-[1px] hover:after:absolute after:bottom-[-5px] hover:after:w-full hover:text-[#02CDCF] after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF] text-base font-normal font-poppins"
                        > About
                        </a>
                        </li>
                        <li onClick={() => setNav(!nav)}>
                            <a
                                href="#roadmap"
                                className="text-white  relative after:absolute after:w-0 after:h-[1px] hover:after:absolute after:bottom-[-5px] hover:after:w-full hover:text-[#02CDCF] after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF]  text-base font-normal font-poppins"
                            >
                                NexChat
                            </a>
                        </li>
                        <li onClick={() => setNav(!nav)}>
                            <a
                                href="#talkus"
                                className="text-white  relative after:absolute after:w-0 after:h-[1px] hover:after:absolute after:bottom-[-5px] hover:after:w-full hover:text-[#02CDCF] after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF]  text-base font-normal font-poppins"
                            >
                                Tokens
                            </a>
                        </li>
                    </ul>
                    <Button name='mt-4' btn='Sign up' />
                    
                    <div
                        onClick={() => setNav(!nav)}
                        className="lg:hidden w-[27px] h-[21px] mr-[17px] relative z-[7] flex justify-between flex-col mt-8"
                    >
                        <span
                            className={`${nav ? "" : "rotate-[50deg] translate-y-[15px]"
                                } bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                        ></span>
                        <span
                            className={`${nav ? "" : "hidden"
                                } bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                        ></span>
                        <span
                            className={`${nav ? "" : "rotate-[-50deg] translate-y-[-50%]"
                                } bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                        ></span>
                    </div>
                </div>
            </nav>
            <div className='max-w-[1240px] mx-auto px-3 pt-28'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='lg:w-7/12 px-3'>
                        <h2 className='ff-recharge font-normal text-[40px] md:text-[60px] text-white leading-[48px] md:leading-[75px] pt-3'> <span className='font-bold text-[#02CDCF]'>Nexai</span> is an advanced AI-powered home assistant</h2>
                        <p className='font-poppins text-base font-normal text-[#B2B8B9] pt-2'>Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
                        <Button name='!mt-14' btn='Know More' />
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Myheader