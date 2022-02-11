import Image from 'next/image'
import { useEffect, useRef } from 'react'
import {customers} from '../utils/consts'
import { buttonAnimate, customersAnimation, fadeY } from '../utils/gsapAiamtiom/gsap'

export default function TopCustomers() {
  const titleRef = useRef(null)
  const bodyRef = useRef(null)
  const imgRef = useRef(null)
  const buttonRef = useRef(null)
  const circleButtonRef = useRef(null)
  const customersRef=useRef<HTMLElement[]>([])
  const addToRef = (el:HTMLElement | null)=>{
    if (el && !customersRef.current.includes(el)){
      customersRef.current.push(el)
    }
  }

  useEffect(()=>{
      fadeY(titleRef,'-10')
      fadeY(bodyRef,'-10')
      fadeY(imgRef,'0')
      buttonAnimate(buttonRef,circleButtonRef)
      customersRef.current.map((el,i)=>{
        customersAnimation(el,i)
      })
  },[])



    return (
        <div className='px-[10%] mt-12'>
        <div className='flex flex-col lg:flex-row' >
          <div className='flex flex-col justify-center  sm:w-[80%] mx-auto lg:w-1/3 order-last lg:order-first'>
            <h4 ref={titleRef} className='font-cake font-thin text-primary-100 text-3xl lg:text-5xl mb-7'>Top customers</h4>
            <p ref={bodyRef} className='font-myriad font-light leading-5'>Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, </p>
            <div className="flex justify-end mt-12 ">
              <div ref={circleButtonRef} className="  w-9 h-9 bg-primary-100 rounded-full  mr-6 " />
              <button ref={buttonRef} className="bg-white px-6 shrink-0 rounded-full  font-myriad font-normal relative shadow-sm shadow-primary-100/40 border border-primary-100/20">
                View all customers
              </button>
            </div>
          </div>
          <div ref={imgRef} className='relative lg:-right-20 mx-auto' >
            <Image src='/laptop.png' alt='laptop' width='600' height='350' />
          </div>
        </div>
        <div className='flex flex-wrap justify-center mt-10 mb-5'>
          {
            customers.map((cus,i)=>(
              <div ref={addToRef} key={i} className='relative  border shadow-lg mx-8 mb-6 flex justify-center items-center  rounded-2xl w-[250px] h-[180px]'>
                <Image src={cus} alt='customer' width={i===0|| i===2||i===3?'180':'120'} height={i===0|| i===2||i===3?'80':'120'}  />
              </div>
            ))
          }
        </div>
      </div>
    )
}