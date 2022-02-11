import Image from "next/image";
import { useEffect, useRef } from "react";
import { techArr, techObj } from "../utils/consts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { fadeX, fadeY } from "../utils/gsapAiamtiom/gsap";
gsap.registerPlugin(ScrollTrigger);

type itemType = string;

export default function Tecnologies() {
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const MobileRef = useRef(null);
  useEffect(() => {
    fadeY(imgRef, "-30");
    fadeY(titleRef, "-0");
    fadeY(bodyRef, "-0");
    fadeX(frontRef, "-200");
    fadeY(backRef, "100");
    fadeX(MobileRef, "200");
  }, []);
  return (
    <>
      <div
        ref={imgRef}
        className="flex justify-center relative bottom-12 px-12 sm:px-0 "
      >
        <Image src="/devices.png" alt="devices" width="400" height="320" />
      </div>
      <h3
        ref={titleRef}
        className="font-cake font-thin text-3xl px-3 md:text-5xl text-center text-primary-100 tracking-wide"
      >
        Technologies used by the company{" "}
      </h3>
      <p
        ref={bodyRef}
        className="font-myriad font-light text-center text-md px-3 max-w-[40rem] mx-auto mt-12"
      >
        Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam
        Nonummy Nibh Euismod Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing
        Elit,{" "}
      </p>
      <div className="flex flex-wrap px-[5%] justify-around mt-20 ">
        {techArr.map((title, i) => (
          <div
            ref={i === 0 ? frontRef : i === 1 ? backRef : MobileRef}
            key={i}
            className="flex flex-col items-center py-10 m-3  border rounded-3xl w-[15rem] min-h-[21rem] bg-primary-100/10"
          >
            <div className="flex items-center  ">
              <div className="w-[1.1rem] h-[1.1rem]  motion-safe:animate-pulse   bg-primary-100 rounded-full mr-1 mt-1 " />
              <h2 className="text-2xl  text-primary-200 font-cake font-bold ">
                {title}
              </h2>
            </div>
            <div className="w-full mt-3 ">
              {techObj[title].map((ite: itemType, j: number) => (
                <p key={j} className="text-center ">
                  {ite}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
