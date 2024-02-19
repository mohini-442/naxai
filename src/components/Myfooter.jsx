import React from 'react'

const Myfooter = () => {
    return (
        <>
            <div className='overflow-hidden'>
                <div className=' bg-[url(./assets/images/footerbg.png)] bg-cover lg:bg-size bg-center bg-no-repeat'>
                    <div className='relative z-[2]'>
                        <div className='max-w-[1320px] mx-auto px-3 md:pt-44 pb-5'>
                            <div className='flex flex-row flex-wrap -mx-3 '>
                                <div className='lg:w-8/12 w-full px-3 pt-9' data-aos="fade-right">
                                    <p className='ff-recharge font-bold text-[14px] md:text-[16px] text-[#B4B4B4] max-w-[356px]'>Nullam viverra natoque amet et sed scelerisque viverra fringilla platea. Ullamcorper.</p>
                                    <div className='flex items-center gap-3 pt-4'>
                                        <span className='cursor-pointer duration-[0.5s] hover:translate-y-[-10%]'>
                                            <a href="https://www.instagram.com/accounts/login/">
                                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.65 34.2892L20.65 34.5731L20.9316 34.5372C24.8274 34.0415 28.3884 32.0809 30.8906 29.054C33.3929 26.0271 34.6487 22.1609 34.4027 18.2413C34.1568 14.3217 32.4276 10.6429 29.5667 7.95243C26.7057 5.262 22.9276 3.7619 19.0003 3.75703L19.0002 3.75703C15.0681 3.7541 11.2828 5.25054 8.41566 7.94143C5.54851 10.6323 3.81523 14.3152 3.569 18.2395C3.32277 22.1639 4.58212 26.0345 7.09044 29.0627C9.59877 32.0909 13.1673 34.0487 17.0689 34.5373L17.35 34.5725V34.2892V23.007V22.757H17.1H13.55V19.457H17.1H17.35V19.207V16.0644C17.35 13.5447 17.6137 12.6694 18.0807 11.7909L18.081 11.7905C18.544 10.9155 19.2598 10.2004 20.1351 9.7381L20.1366 9.73732C20.8177 9.3718 21.6798 9.14223 23.2396 9.04262C23.7965 9.00708 24.5159 9.04486 25.4019 9.16291V12.3051H24.7019C23.8292 12.3051 23.2023 12.3255 22.7366 12.3762C22.2724 12.4267 21.949 12.5092 21.6938 12.6454C21.3927 12.8009 21.1474 13.0463 20.992 13.3475C20.7312 13.8391 20.6519 14.3272 20.6519 16.0625V19.207V19.457H20.9019H25.3317L24.5067 22.757H20.9019H20.6519L20.6519 23.007L20.65 34.2892ZM19 37.957C8.64437 37.957 0.25 29.5627 0.25 19.207C0.25 8.8514 8.64437 0.457031 19 0.457031C29.3556 0.457031 37.75 8.8514 37.75 19.207C37.75 29.5627 29.3556 37.957 19 37.957Z" fill="#02CDCF" stroke="black" stroke-width="0.5" />
                                                </svg>
                                            </a>
                                        </span>
                                        <span className='cursor-pointer duration-[0.5s] hover:translate-y-[-10%]'>
                                            <a href="https://twitter.com/?lang=en">
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.0012 1.20703C9.52476 1.20703 1 9.72942 1 20.207C1 30.6846 9.52476 39.207 20.0012 39.207C30.4776 39.207 39.0024 30.6846 39.0024 20.207C39.0024 9.72942 30.4776 1.20703 20.0012 1.20703ZM20.0012 37.9415C10.2227 37.9415 2.26793 29.9855 2.26793 20.207C2.26793 10.4286 10.2227 2.47259 20.0012 2.47259C29.7796 2.47259 37.7344 10.4286 37.7344 20.207C37.7344 29.9855 29.7796 37.9415 20.0012 37.9415Z" fill="#02CDCF" stroke="#02CDCF" />
                                                    <path d="M30.4221 14.3376C30.5535 14.0943 30.6618 13.8392 30.7456 13.5757C30.7844 13.4534 30.7852 13.3223 30.7478 13.1996C30.7105 13.0769 30.6369 12.9684 30.5366 12.8884C30.4364 12.8084 30.3142 12.7607 30.1863 12.7516C30.0584 12.7425 29.9307 12.7724 29.8201 12.8374C29.2129 13.1981 28.5556 13.4669 27.8696 13.6349C27.0369 12.8834 25.9554 12.4667 24.8337 12.4653C24.2243 12.4658 23.6213 12.5893 23.0607 12.8285C22.5002 13.0676 21.9937 13.4175 21.5717 13.8572C21.1497 14.2968 20.8208 14.8171 20.6047 15.3869C20.3886 15.9568 20.2898 16.5643 20.3142 17.1733C17.6492 16.8378 15.2156 15.4892 13.5183 13.4074C13.4533 13.3285 13.3702 13.2665 13.2761 13.2266C13.1819 13.1868 13.0796 13.1702 12.9777 13.1783C12.8758 13.1865 12.7774 13.2191 12.6908 13.2734C12.6042 13.3277 12.532 13.4021 12.4803 13.4903C12.0916 14.1574 11.8804 14.9129 11.8667 15.6848C11.853 16.4567 12.0373 17.2192 12.4021 17.8997C12.3126 17.9148 12.2267 17.9461 12.1485 17.9921C12.0527 18.0532 11.9738 18.1374 11.9191 18.237C11.8644 18.3367 11.8357 18.4484 11.8357 18.5621C11.8357 19.907 12.4341 21.1418 13.3986 21.9807L13.3572 22.0222C13.2843 22.1046 13.2343 22.2045 13.2118 22.3122C13.1894 22.4198 13.1954 22.5314 13.2292 22.636C13.4303 23.2635 13.7662 23.8394 14.2132 24.3235C14.6602 24.8076 15.2077 25.1882 15.8172 25.4385C14.5654 26.0492 13.1644 26.2873 11.7811 26.1246C11.639 26.1101 11.496 26.1432 11.3746 26.2187C11.2532 26.2942 11.1603 26.4078 11.1104 26.5417C11.0625 26.6767 11.0616 26.8238 11.1079 26.9593C11.1541 27.0949 11.2448 27.2108 11.3652 27.2883C13.2458 28.4952 15.4336 29.1365 17.6681 29.1357C24.9913 29.1357 29.3687 23.187 29.3687 17.4363L29.3675 17.242C30.0772 16.6879 30.6937 16.0238 31.1935 15.2749C31.2692 15.1617 31.3064 15.0271 31.2997 14.8911C31.2929 14.7551 31.2425 14.6249 31.156 14.5197C31.0695 14.4145 30.9514 14.3401 30.8192 14.3073C30.687 14.2745 30.5478 14.2851 30.4221 14.3376ZM28.3543 16.4172C28.2683 16.4791 28.1992 16.5615 28.1532 16.6569C28.1073 16.7523 28.086 16.8577 28.0912 16.9635C28.0983 17.1199 28.1019 17.2787 28.1019 17.4351C28.1019 22.5637 24.1998 27.8689 17.6693 27.8689C16.5046 27.8694 15.3481 27.674 14.2483 27.2906C15.5655 27.0382 16.8029 26.4733 17.8565 25.6435C17.9591 25.5626 18.0342 25.4521 18.0715 25.3269C18.1089 25.2017 18.1066 25.0681 18.0651 24.9443C18.0236 24.8204 17.9449 24.7124 17.8397 24.635C17.7345 24.5576 17.6079 24.5146 17.4774 24.5119C16.9664 24.5021 16.4649 24.3724 16.0133 24.1332C15.5617 23.894 15.1727 23.5521 14.8775 23.1349C15.1773 23.1148 15.4712 23.065 15.7568 22.988C15.895 22.951 16.0166 22.8682 16.1017 22.7532C16.1869 22.6383 16.2305 22.4978 16.2256 22.3548C16.2206 22.2118 16.1673 22.0747 16.0745 21.9659C15.9816 21.8571 15.8545 21.7829 15.7141 21.7556C15.137 21.6382 14.6028 21.3661 14.1684 20.9685C13.734 20.5709 13.4159 20.0627 13.2482 19.4982C13.5634 19.5776 13.8869 19.6238 14.2104 19.6345C14.4888 19.6333 14.7472 19.4627 14.8337 19.1948C14.9202 18.927 14.8183 18.632 14.5824 18.4756C14.0249 18.1041 13.5956 17.5695 13.3532 16.9449C13.1107 16.3203 13.067 15.6362 13.228 14.9858C15.2864 17.0978 18.0658 18.3555 21.011 18.5076C21.2195 18.5087 21.402 18.4341 21.5288 18.2812C21.6556 18.1284 21.7042 17.9257 21.6592 17.7314C21.4971 17.0334 21.5696 16.3015 21.8654 15.6489C22.1612 14.9963 22.6639 14.4594 23.2956 14.1213C23.9274 13.7832 24.6529 13.6627 25.36 13.7785C26.0671 13.8942 26.7164 14.2399 27.2072 14.7618C27.2808 14.8403 27.3731 14.8988 27.4756 14.9318C27.578 14.9647 27.6871 14.9711 27.7926 14.9502C27.9881 14.9111 28.1813 14.8661 28.3721 14.814C28.2861 14.8784 28.1967 14.9381 28.1043 14.9929C27.9814 15.0682 27.8878 15.1831 27.839 15.3186C27.7901 15.4542 27.7889 15.6024 27.8356 15.7387C27.8822 15.8751 27.9739 15.9914 28.0956 16.0687C28.2172 16.1459 28.3616 16.1794 28.5048 16.1637L28.7205 16.1364C28.6017 16.2342 28.4796 16.3279 28.3543 16.4172Z" fill="#02CDCF" />
                                                </svg>
                                            </a>
                                        </span>
                                        <span className='cursor-pointer duration-[0.5s] hover:translate-y-[-10%]'>
                                            <a href="https://web.telegram.org/k/">
                                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M30.4026 11.605L5.70264 20.155L14.2526 23.005M30.4026 11.605L14.2526 23.005M30.4026 11.605L22.8026 31.555L14.2526 23.005" stroke="#02CDCF" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M37.0023 19.207C37.0023 29.1484 28.9437 37.207 19.0023 37.207C9.0609 37.207 1.00232 29.1484 1.00232 19.207C1.00232 9.26562 9.0609 1.20703 19.0023 1.20703C28.9437 1.20703 37.0023 9.26562 37.0023 19.207Z" stroke="#02CDCF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                                <div className='lg:w-4/12 w-full px-3 pt-12 lg:pt-0' data-aos="fade-left">
                                    <div className='flex flex-wrap flex-row -mx-3'>
                                        <div className='w-1/2 px-3'>
                                            <p className='ff-recharge font-bold text-[16px] md:text-[18px] text-white'>Quick links</p>
                                            <ul>
                                                <li className='pt-4'><a href="" className='ff-recharge font-bold text-[16px] text-[#B6B6B9] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#B6B6B9]'>Home</a></li>
                                                <li className='pt-4'><a href="" className='ff-recharge font-bold text-[16px] text-[#B6B6B9] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#B6B6B9]'>Features</a></li>
                                                <li className='pt-4'><a href="" className='ff-recharge font-bold text-[16px] text-[#B6B6B9] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#B6B6B9]'>Marketplace</a></li>
                                                <li className='pt-4'><a href="" className='ff-recharge font-bold text-[16px] text-[#B6B6B9] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#B6B6B9]'>Tokens</a></li>
                                                <li className='pt-4'><a href="" className='ff-recharge font-bold text-[16px] text-[#B6B6B9] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#B6B6B9]'>NexChat</a></li>
                                                <li className='pt-4'><a href="" className='ff-recharge font-bold text-[16px] text-[#B6B6B9] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#B6B6B9]'>About</a></li>
                                            </ul>
                                        </div>
                                        <div className='w-1/2 px-3'>
                                            <p className='ff-recharge font-bold text-[16px] md:text-[18px] text-white'>Information's</p>
                                            <ul>
                                                <li className='pt-4'><a href="" className='ff-recharge font-bold text-[14px] md:text-[16px] text-[#B6B6B9] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#B6B6B9]'>Contact</a></li>
                                                <li className='pt-4'><a href="" className='ff-recharge font-bold text-[14px] md:text-[16px] text-[#B6B6B9] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#B6B6B9]'>Phone</a></li>
                                                <li className='pt-4'><a href="" className='ff-recharge font-bold text-[14px] md:text-[16px] text-[#B6B6B9] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#B6B6B9]'>terms</a></li>
                                                <li className='pt-4'><a href="" className='ff-recharge font-bold text-[14px] md:text-[16px] text-[#B6B6B9] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#B6B6B9]'>Privacy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[2px] bg-[#6B7070] mt-8'></div>
                            <p className='ff-recharge font-bold text-[14px] md:text-[16px] text-[#B4B4B6] text-center pt-5'>@Copyright.nexai</p>
                        </div>
                        <div className='w-[128px] h-[128px] bg-[#02CDCF] blur-[114px] absolute top-[32%] right-[-8%] z-[-1] hidden md:block'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Myfooter