'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import Link from 'next/link';
import { Button } from '@heroui/react';

const images = [
  '/images/banner-1.png',
  '/images/banner-2.png',
  '/images/banner-3.png',
  '/images/banner-4.jpg',
];

const Banner = () => {
  return (
    <section className="relative mb-5 md:mb-10 h-[60vh] overflow-hidden sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
      <Swiper
        modules={[Autoplay]}
        loop
        speed={1200}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="absolute inset-0 h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover   bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="flex h-full items-center bg-black/55">
                <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
                  <div className="text-left text-white">
                    <h1 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-outfit">
                      Turn Ideas into <br></br> Stunning{' '}
                      <span className="text-purple-700">AI Art</span>
                    </h1>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg lg:mt-6 lg:text-xl xl:text-2xl font-outfit">
                      Generate high-quality AI images from simple prompts in
                      seconds.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4 lg:mt-10">
                      <Link href="/">
                        <Button
                          color="primary"
                          size="lg"
                          className="px-6 py-6 text-base lg:px-8 lg:text-lg"
                        >
                          Explore Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
