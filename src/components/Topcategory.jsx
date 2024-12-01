import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Topcategory = () => {
  const categories = [
    { name: 'Tech', image: 'https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg' },
    { name: 'Science', image: 'https://img.freepik.com/free-vector/hand-drawn-colorful-science-education-background_23-2148486143.jpg?semt=ais_hybrid' },
    { name: 'Business', image: 'https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg' },
    { name: 'Health', image: 'https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191355.jpg' },
    { name: 'Sports', image: 'https://media.istockphoto.com/id/1141191007/vector/sports-set-of-athletes-of-various-sports-disciplines-isolated-vector-silhouettes-run-soccer.jpg?s=612x612&w=0&k=20&c=SEabW4SHZ7blMHJPxZNSTl_anOMHO3whQI7HIMxFpSg=' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Top Categories</h2>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]} // Register modules
          className="mySwiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full group rounded-lg overflow-hidden shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Topcategory;
