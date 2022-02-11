import { RiMailSendLine } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import Image from 'next/image'
import { useEffect, useRef } from "react";
import { SubscribeAnimation } from "../utils/gsapAiamtiom/gsap";

const SubscribeBox = () => {
  const subscribeBoxRef=useRef(null)
  const subscribeImgRef=useRef(null)
  const subscribeTitleRef=useRef(null)
  const subscribeSubtitleRef=useRef(null)
  const subscribeButtonRef=useRef(null)

  useEffect(()=>{
      SubscribeAnimation(subscribeBoxRef,subscribeImgRef,subscribeTitleRef,subscribeSubtitleRef,subscribeButtonRef)
  },[])
  return (
    <div ref={subscribeBoxRef} className="flex flex-col md:flex-row justify-center md:justify-start items-center  w-full h-48 subscribeBG rounded-[50px] px-[5%]">
      <div className='flex items-center'>
      <div ref={subscribeImgRef} className="relative shrink-0 w-[45px] h-[60px] md:w-[70px] md:h-[70px]">
        <Image src='/letter.png' alt='letter' layout='fill'  />
      </div>
      <div className="text-white ">
        <p ref={subscribeTitleRef} className="font-semibold text-lg md:text-3xl mb-1 md:mb-4">Subscribe for Newsletter</p>
        <p ref={subscribeSubtitleRef} className=" text-base md:text-lg mb-3 md:mb-0">Grow Your Business with Our SEO Agency</p>
      </div>
      </div>
      <div ref={subscribeButtonRef} className="h-12 md:h-16 w-10/12 min-w-[40%] max-w-[20rem] md:max-w-0 rounded-full bg-white flex items-center mx-auto md:mr-0 md:ml-auto pr-2">
        <input
          placeholder="write here"
          className="w-full h-full rounded-full outline-0 px-4"
        />
        <button className="group flex items-center  w-[4rem] md:w-[7.5rem] shrink-0 bg-[#FE4C1C] rounded-full h-5/6 relative">
          <span className='text-white text-md font-semibold pl-3 md:opacity-0 transition-all delay-[50ms] group-hover:opacity-100'>SEND</span>
          <div className='hidden md:flex items-center justify-center w-12 h-12 bg-white/40 rounded-full transition-all duration-300 absolute left-2 group-hover:left-16 '>
              <FiArrowRight size={30} color='white' />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SubscribeBox;
