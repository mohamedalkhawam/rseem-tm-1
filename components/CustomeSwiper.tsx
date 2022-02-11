import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation
} from 'swiper';
import Image from 'next/image'

import 'swiper/css';
import "swiper/css/navigation"

SwiperCore.use([Navigation]);

const Dummy =()=>{
  

    return(
        <div className='h-full flex flex-col items-center mt-2'>
          <div className=' relative '>
            <div className='absolute w-[160px] h-[160px] border border-primary-300 rounded-full -top-1 -right-3'  />
            <Image src='/avatar.png' alt='avatar' width='160' height='160' />
          </div>
            <p className='font-myriad font-light text-white leading-5 mt-4 w-[90%] sm:w-1/2 '>Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod
            Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, </p>
            <p className='font-myriad font-light text-white leading-5 mt-6'>Ahmad Ahmad</p>
        </div>
    )
}

const CustomeSwiper =()=>{
    return (
      <div className='bg-swiper bg-cover bg-center min-h-[100vh] text-center px-8'>
         <h3 className='font-cake font-thin text-5xl text-white pt-16'>Reviews</h3>
          <p className='font-myriad font-light text-white leading-5 mt-8 sm:w-1/2 mx-auto mb-32'>Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, </p>
        <div className=' sm:px-[10%]'>
        <Swiper
          navigation={true}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide ><Dummy/></SwiperSlide>
          <SwiperSlide ><Dummy/></SwiperSlide>
          <SwiperSlide ><Dummy/></SwiperSlide>
          <SwiperSlide ><Dummy/></SwiperSlide>
        </Swiper>
        </div>
        </div>
      );
}
export default CustomeSwiper