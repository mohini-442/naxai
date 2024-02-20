import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const slidercard2 = [
    {
        paragraph: 'NexAi, measure this table',
    },
    {
        paragraph: 'NexAi, Turn on music',
    },
    {
        paragraph: 'NexAi, NexAi, Turn on light',
    },
    {
        paragraph: 'NexAi, is the front door locked?',
    },
    {
        paragraph: 'NexAi, Turn off light',
    },
    {
        paragraph: 'NexAi, Switch of fan',
    },

]

const Secondslider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: -1,
        autoplay: true,
        pauseonhover: false,
        pauseonfocus: false,
        autoplaySpeed: 0,
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
                    slidesToShow: 2.1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1.6,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1.4,
                }
            },
        ]
    };

    const list = slidercard2.map((slidercard2) => (
        <div className='rounded-[16px]  hover:shadow-none hover:scale-[1.06] duration-[0.5s] max-w-[240px] md:max-w-[340px] h-[190px] md:h-[220px] bg-[#090909] shadow-[0px_4px_20px_0px_#02CDCF29] !flex items-center justify-center flex-col mt-5 mb-5 px-[33px]'>
            <h3 className='text-[20px] ff-recharge text-white font-bold text-center'>{slidercard2.paragraph}</h3>
        </div>
    ));

    return (
        <>
            <div className=''>
                <Slider {...settings}>
                    {list}
                </Slider>
            </div>
        </>
    )
}

export default Secondslider