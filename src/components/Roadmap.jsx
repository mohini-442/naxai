import React from 'react'
import roadmap from '../assets/images/roadmap.png'
import frame2 from '../assets/images/frame2.png'

const Roadmap = () => {
    return (
        <>
            <div className='relative z-[2] overflow-hidden'>
                <div className='py-20 max-w-[1320px] mx-auto px-3' data-aos="fade-up"
                    data-aos-duration="3000">
                    <h2 className='ff-recharge font-bold text-[32px] md:text-[40px] text-[#02CDCF] text-center '>NexAI Token & utility</h2>
                    <div className='flex flex-wrap flex-row -mx-3 pt-12'>
                        <div className='lg:w-1/2 px-3 '>
                                <div className='relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[#02CDCF] mix-blend-hue after:mix-blend-hue'>
                                    <img src={roadmap} alt="roadmap" className='mix-blend-hue' />
                                </div>
                        </div>
                        <div className='lg:w-1/2 px-3 mx-auto pt-12 relative gap-5 '>
                            <div className='h-[512px] overflow-y-scroll'>
                                <div className='relative z-[2] after:bg-[#02CDCF] after:rounded-[20px] after:h-full after:w-[6px] after:top-[10px] after:left-[10px] after:z-[-1] after:absolute'>
                                    <div className='flex gap-5 md:gap-16 items-center'>
                                        <div>
                                            <div className='h-[24px] w-[24px] bg-white rounded-[50%]'></div>
                                        </div>
                                        <div className=''>
                                            <h2 className='ff-recharge font-bold text-[24px] text-white'>Purchasing Nexai Products</h2>
                                            <p className='font-normal text-[16px] font-poppins text-[#B4B8B8] pt-4'>Nex AI tokens will be the primary currency for acquiring Nexai's extensive range of software solutions, hardware devices, including drones and sensors, and other smart home products available on the Nexai marketplace. Users can confidently make purchases using Nex tokens, enjoying the convenience and flexibility of a token-based payment system.</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-5 md:gap-16 items-center'>
                                        <div>
                                            <div className='h-[24px] w-[24px] bg-white rounded-[50%]'></div>
                                        </div>
                                        <div>
                                            <h2 className='ff-recharge font-bold text-[24px] text-white pt-16'>Accessing Exclusive Content</h2>
                                            <p className='font-normal text-[16px] font-poppins text-[#B4B8B8] pt-4'>By holding Nex AI tokens, users will gain privileged access to exclusive content within the Nexai platform. These tokens will unlock premium features, advanced functionalities, and specialized services, enabling users to fully explore and enjoy the enhanced capabilities of Nexai's ecosystem.</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-5 md:gap-16 items-center'>
                                        <div>
                                            <div className='h-[24px] w-[24px] bg-white rounded-[50%]'></div>
                                        </div>
                                        <div>
                                            <h2 className='ff-recharge font-bold text-[24px] text-white pt-16'>Loyalty and Rewards</h2>
                                            <p className='font-normal text-[16px] font-poppins text-[#B4B8B8] pt-4'>The Nexai ecosystem will feature a robust loyalty program, rewarding users with Nex AI tokens for their active engagement, ongoing participation, and dedicated usage of Nexai's products and services. Token holders will have the opportunity to redeem their accumulated rewards for discounts, incentives, or exclusive offers, fostering a strong sense of loyalty and encouraging continued involvement.</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-5 md:gap-16 items-center'>
                                        <div>
                                            <div className='h-[24px] w-[24px] bg-white rounded-[50%]'></div>
                                        </div>
                                        <div>
                                            <h2 className='ff-recharge font-bold text-[24px] text-white pt-16'>Participating in Governance</h2>
                                            <p className='font-normal text-[16px] font-poppins text-[#B4B8B8] pt-4'>Nex AI token holders will play a vital role in the governance of the Nexai ecosystem. Through voting mechanisms, token holders will have a direct say in the decision-making process. They can express their opinions, vote on proposed changes or improvements, and actively contribute to shaping the future development and direction of the Nexai ecosystem.</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-5 md:gap-16 items-center'>
                                        <div>
                                            <div className='h-[24px] w-[24px] bg-white rounded-[50%]'></div>
                                        </div>
                                        <div>
                                            <h2 className='ff-recharge font-bold text-[24px] text-white pt-16'>Peer-to-Peer Transactions</h2>
                                            <p className='font-normal text-[16px] font-poppins text-[#B4B8B8] pt-4'>Nex AI tokens will enable seamless peer-to-peer transactions within the Nexai community. Users will have the ability to exchange tokens with others for various purposes, such as purchasing pre-owned Nexai devices, engaging in token trading activities, or conducting value exchanges directly within the ecosystem, all with the utmost security and convenience.</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-5 md:gap-16 items-center'>
                                        <div>
                                            <div className='h-[24px] w-[24px] bg-white rounded-[50%]'></div>
                                        </div>
                                        <div>
                                            <h2 className='ff-recharge font-bold text-[24px] text-white pt-16'>Token Staking and Rewards</h2>
                                            <p className='font-normal text-[16px] font-poppins text-[#B4B8B8] pt-4'>Nex AI tokens will support staking mechanisms, allowing users to lock up their tokens for a specified period. By staking their tokens, users will earn additional rewards, such as interest, dividends, or other incentives, further incentivizing token holding and fostering long-term engagement and loyalty.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[228px] h-[128px] bg-[#02CDCF] blur-[144px] absolute top-[22%] left-[-12%] z-[-1] hidden md:block'></div>
                <img src={frame2} alt="frame2" className='absolute top-[2%] right-0 z-[-1] opacity-[20%] hidden md:block' />
                <div className='w-[228px] h-[228px] bg-[#02CDCF] blur-[144px] absolute top-[44%] right-[-12%] z-[-1] hidden md:block'></div>
            </div>
        </>
    )
}

export default Roadmap