import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import frame2 from '../assets/images/frame2.png'
import frame4 from '../assets/images/frame4.png'

const slidercard = [
    {
        heading: 1,
        paragraph: 'Security and Privacy',
        botm: "lg:-translate-y-[83px]",
    },
    {
        heading: 2,
        paragraph: 'Transparent and Reliable Data Management',
    },
    {
        heading: 3,
        paragraph: 'Self-learning and Personalization',
        botm: "lg:-translate-y-[83px]",
    },
    {
        heading: 4,
        paragraph: 'Automated and Transparent Transactions',
    },

]

const Blockchain = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.6,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2.1,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1.6,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1.2,
                }
            },
        ]
    };

    const list = slidercard.map((slidercard, i) => (

        <div className={`bg-[url(./assets/images/boxbg.png)] object-cover max-w-[367px] h-[367px] mt-14 md:mt-22 lg:mt-44 bg-center bg-no-repeat hover:scale-[1.06] duration-[0.5s] bg-size !flex items-center pt-[74px] flex-col px-[77px] ${slidercard.botm} key{i}`}>
            <div className='w-[58px] h-[58px] bg-black rounded-[50%] shadow-[0px_4px_16px_0px_#02CDCF99_inset]  flex items-center justify-center '>
                <p className='text-[32px] ff-recharge font-bold text-white'>{slidercard.heading}</p>
            </div>
            <h3 className='text-[20px] ff-recharge text-white font-bold text-center pt-7 duration-[0.5s]'>{slidercard.paragraph}</h3>
        </div>
    ));

    return (
        <>
            <div className='overflow-hidden relative z-[2]' id='marketplace'>
                <div className='lg:pt-44 md:pt-28 md:pb-12 pb-24 pt-12 max-w-[1320px] mx-auto Blockchain'>
                    <h2 className='ff-recharge text-[30px] md:text-[40px] font-bold text-[#02CDCF] text-center leading-[36px] md:leading-[50px]' data-aos="fade-up"
                        data-aos-duration="3000">Blockchain & AI technology</h2>
                    <p className='font-poppins text-[14px] md:text-[16px] font-normal text-[#B4B4B4] max-w-[997px] mx-auto text-center pt-2' data-aos="fade-up"
                        data-aos-duration="3000">Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
                    <p className='ff-recharge font-bold text-[18px] md:text-[20px] text-white text-center max-w-[684px] mx-auto pt-7 md:pt-14 lg:pt-20' data-aos="fade-up"
                        data-aos-duration="3000">By building the software on blockchain, Nexai provides the following advantages</p>
                    <Slider {...settings}>
                        {list}
                    </Slider>
                </div>
                <div className='w-[302px] h-[262px] bg-[#02CDCF] blur-[194px] absolute top-[48%] left-[-18%] z-[2] hidden lg:block'></div>
                <div className='w-[228px] h-[228px] bg-[#02CDCF] blur-[174px] absolute top-[22%] right-[-12%] z-[-1] hidden lg:block'></div>
                <img src={frame2} alt="frame2" className='absolute top-[12%] right-0 z-[-1] opacity-[20%] hidden lg:block' />
                <img src={frame4} alt="frame2" className='absolute bottom-[0%] left-0 z-[2] opacity-[70%] hidden lg:block' />
            </div>
        </>
    )
}

export default Blockchain