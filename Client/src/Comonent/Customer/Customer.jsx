import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Customer = () => {

    const reviews = [
        {
            name: "Sarah M.",
            message: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`
        },
        {
            name: "John D.",
            message: `"Shop.co never fails to impress me. The fit, the style, and the comfort are all on point. Highly recommend it to anyone looking to upgrade their wardrobe."`
        },
        {
            name: "Emily R.",
            message: `"From browsing to delivery, the experience was seamless. Great styles and superb customer support!"`
        },
        {
            name: "Emily R.",
            message: `"From browsing to delivery, the experience was seamless. Great styles and superb customer support!"`
        }, {
            name: "Emily R.",
            message: `"From browsing to delivery, the experience was seamless. Great styles and superb customer support!"`
        }, {
            name: "Emily R.",
            message: `"From browsing to delivery, the experience was seamless. Great styles and superb customer support!"`
        },
    ];
    return (
        <div className="max-w-[1440px] mx-auto px-10">
            <h2 className="text-3xl font-bold text-start mb-6">OUR HAPPY CUSTOMERS</h2>
            <Swiper
                modules={[Navigation,Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}  
            >
                {reviews.map((r, i) => (
                    <SwiperSlide key={i}>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold mb-2">{r.name}</h4>
                            <p className="text-gray-600">{r.message}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

export default Customer;
