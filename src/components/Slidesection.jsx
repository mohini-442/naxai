import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Secondslider from './Secondslider';
import Thirdslider from './Thirdslider';

const slidercards = [
    {
        paragraph: 'NexAi, Turn on light',
    },
    {
        paragraph: 'NexAi, set alarm of 5:00 am',
    },
    {
        paragraph: 'NexAi, measure this table',
    },
    {
        paragraph: 'NexAi, Turn on music',
    },

]

const Slidersection = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 500,
        responsive: [
            {
                breakpoint: 1194,
                settings: {
                    slidesToShow: 3.1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.6,
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2.2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.6,
                }
            },
        ]
    };

    const list = slidercards.map((slidercards) => (
        <div className='rounded-[16px] max-w-[240px]  hover:shadow-none hover:scale-[1.06] duration-[0.5s] md:max-w-[340px] h-[190px] md:h-[220px] bg-[#090909] shadow-[0px_4px_20px_0px_#02CDCF29] !flex items-center justify-center flex-col mt-20 mb-5 px-[33px]'>
            <h3 className='text-[20px] ff-recharge text-white font-bold text-center'>{slidercards.paragraph}</h3>
        </div>
    ));

    return (
        <>
            <div className='md:py-44 py-24 overflow-hidden' data-aos="fade-up"
                data-aos-duration="3000">
                <div className='px-3'>
                    <h2 className='ff-recharge text-[32px] md:text-[40px] font-bold text-[#02CDCF] text-center leading-[36px] md:leading-[50px]'>NexAi does all this. And more.</h2>
                    <p className='font-poppins text-[16px] font-normal text-[#B4B4B4] max-w-[912px] mx-auto text-center pt-2'>Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
                </div>
                <Slider {...settings}>
                    {list}
                </Slider>
                <Secondslider />
                <Thirdslider />
            </div>
        </>
    )
}

export default Slidersection