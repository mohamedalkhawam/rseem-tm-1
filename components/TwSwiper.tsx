import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { fadeX, swiperAnimation } from "../utils/gsapAiamtiom/gsap";
const Dummy = ({
  swiperSlideRef,
  swiperImgRef,
  swiperDescRef,
  swiperNameRef,
}: any) => {
  return (
    <div ref={swiperSlideRef} className="h-full  flex flex-col items-center  ">
      <div ref={swiperImgRef} className=" relative ">
        {/*  <div  className="absolute w-[160px] h-[160px] border border-primary-300 rounded-full -top-1 -right-3" /> */}
        <Image src="/avatar.png" alt="avatar" width="160" height="160" />
      </div>
      <p
        ref={swiperDescRef}
        className="font-myriad font-light text-white leading-5 mt-4 w-[90%] max-w-[600px] "
      >
        Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam
        Nonummy Nibh Euismod Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing
        Elit,{" "}
      </p>
      <p
        ref={swiperNameRef}
        className="font-myriad font-light text-white leading-5 mt-6"
      >
        Ahmad Ahmad
      </p>
    </div>
  );
};
const TwSwiper = () => {
  const [curSlide, setCurSlide] = useState(0);
  console.log(curSlide);
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    fadeX(titleRef, "-40");
    fadeX(bodyRef, "40");
    swiperAnimation(swiperRef);
  }, []);

  return (
    <div className="relative min-h-[120vh] sm:min-h-[100vh] text-center px-2 sm:px-8">
      <div
        className="bg-swiper bg-cover bg-center absolute h-full right-0 transition-transform duration-500 -z-[1]"
        style={{
          width: `calc(100% + 4 * 10vw )`,
          transform: `translateX(${10 * curSlide}vw)`,
        }}
      />
      <h3
        ref={titleRef}
        className="font-cake font-thin text-5xl text-white pt-16"
      >
        Reviews
      </h3>
      <p
        ref={bodyRef}
        className="font-myriad font-light text-white leading-5 mt-8 sm:w-1/2 mx-auto mb-32"
      >
        Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam
        Nonummy Nibh Euismod Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing
        Elit,{" "}
      </p>
      <div className="relative">
        {curSlide > 0 && (
          <div
            className="z-10 absolute cursor-pointer left-0 top-16 sm:bottom-3 w-8 h-16 sm:w-[50px] sm:h-[100px]"
            onClick={() => curSlide > 0 && setCurSlide(curSlide - 1)}
          >
            <Image src="/icons/chevronLeft.png" alt="icon" layout="fill" />
          </div>
        )}
        {curSlide < 3 && (
          <div
            className="z-10  absolute cursor-pointer  right-0 top-16 sm:bottom-3 w-8 h-16 sm:w-[50px] sm:h-[100px]"
            onClick={() => curSlide < 3 && setCurSlide(curSlide + 1)}
          >
            <Image src="/icons/chevronRight.png" alt="icon" layout="fill" />
          </div>
        )}
        <div ref={swiperRef} className=" sm:px-[10%] h-auto ">
          <div
            className="snap-x transition-all duration-700 flex"
            style={{ transform: `translate(-${100 * curSlide}%)` }}
          >
            {[1, 2, 3, 4].map((item, i) => (
              <div
                key={i}
                className={`snap-center w-full shrink-0 transition-opacity duration-700 ${
                  i === curSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Dummy />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TwSwiper;
