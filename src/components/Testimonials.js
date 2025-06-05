import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: "Ahmed Khan",
            profession: "Software Engineer",
            rating: 5,
            text: "The service was exceptional, and the team went above and beyond to meet our needs. Highly recommended!"
        },
        {
            id: 2,
            name: "Fatima Ali",
            profession: "Graphic Designer",
            rating: 4,
            text: "Great experience overall! The design and attention to detail were impressive. Would definitely use their services again."
        },
        {
            id: 3,
            name: "Zainab Malik",
            profession: "Project Manager",
            rating: 5,
            text: "Absolutely loved the professionalism and quality of work. Everything was delivered on time and exceeded expectations."
        },
        {
            id: 4,
            name: "Bilal Ahmed",
            profession: "Entrepreneur",
            rating: 5,
            text: "Fantastic team to work with! They understood our requirements perfectly and delivered outstanding results."
        },
        {
            id: 5,
            name: "Ayesha Siddiqui",
            profession: "Content Writer",
            rating: 4,
            text: "Very satisfied with the service. The team was responsive and ensured everything was completed to our satisfaction."
        }
    ];

    const style = {
        "--swiper-pagination-color": "#EF4444",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "10px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
    }

    return (
        <div id='testimonials' className='py-10 bg-gray-100 relative' >
            <h1 className='text-center text-2xl lg:text-4xl font-bold'>What our Customer Say</h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={style}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((item) => {
                        return <SwiperSlide key={item.id}>
                            <div className='border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4'>
                                {item.rating === 4 ? (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star />
                                    </div>
                                ) : (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                    </div>
                                )}
                                <p className='py-3'>{item.text}</p>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                        <p className='text-sm mt-1'>{item.profession}</p>
                                    </div>
                                    <Quote className='text-red-400'/>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}

                </Swiper>
                    <div style={style} className='swiper-pagination my-10 gap-1 relative'></div>
            </div>
        </div>
    )
}

export default Testimonials