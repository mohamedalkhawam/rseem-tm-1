import Service from "./Service"
import Image from "next/image"
import {services} from '../utils/consts'
import React, { useEffect, useRef } from "react"
import {  fadeX, fadeY, popGroupAnimate } from "../utils/gsapAiamtiom/gsap"



export default function FeaturedServices(){
  const titleRef = useRef(null)
  const bodyRef = useRef(null)
  const imgRef = useRef(null)
  const img2Ref = useRef(null)
  const servicesRef=useRef<HTMLElement[]>([])
  const addToRef = (el:HTMLElement | null)=>{
    if (el && !servicesRef.current.includes(el)){
      servicesRef.current.push(el)
    }
  }
  useEffect(()=>{
    fadeY(titleRef,'-40')
    fadeY(bodyRef,'-20')
    fadeX(imgRef,'100')
    fadeX(img2Ref,'-100')
    servicesRef.current.map((el)=>{
      popGroupAnimate(el)
    })
  },[])
    return(
        <div className='flex  flex-col items-center sm:block bg-services bg-cover bg-right relative px-[10%] pt-44 sm:pt-14 pb-24 sm:pb-20'>
          <div ref={imgRef} className=' absolute  sm:right-20 -top-28 sm:-top-32 ' >
            <div  >
              <Image src='/screenImage.png' alt='2 persons lookaing at screen' height='250' width='250' />
            </div>
            <div ref={img2Ref} className='absolute -top-0 left-0 rotate'>
              <div className="counterrotate">
                <Image  src='/rLogo.png' alt='R logo' height='100' width='100'  />
              </div>
            </div>
          </div>
            <h3 ref={titleRef} className='font-cake font-bold text-white text-3xl mb-8 text-center sm:text-left'>Featured services</h3>
            <p ref={bodyRef} className='font-myriad font-light text-white sm:w-[60%] mb-16 sm:mb-24 text-center sm:text-left'>Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, </p>
            <div className='flex flex-wrap justify-center px-[8%]'>
              {
                services.map((service,i)=>(
                  <div ref={addToRef} key={i} className={` mb-6 ${i%2===0?' sm:mr-[30%] xl:mr-[9%]':'sm:ml-[30%] xl:ml-0'}`}>
                  <Service  title={service.title} body={service.body} icon={service.icon} />
                  </div>
                ))
              }

            </div>
        </div>
    )
}