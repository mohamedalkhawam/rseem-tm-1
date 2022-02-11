import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { footerColAnimation } from '../../utils/gsapAiamtiom/gsap'


const Footer =()=>{
const logoRef=useRef(null)
const text1Ref=useRef(null)
const title2Ref=useRef(null)
const text2Ref=useRef(null)
const title3Ref=useRef(null)
const text3Ref=useRef(null)
const title4Ref=useRef(null)
const text4Ref=useRef(null)

useEffect(()=>{
    footerColAnimation(logoRef,text1Ref)
    footerColAnimation(title2Ref,text2Ref)
    footerColAnimation(title3Ref,text3Ref)
    footerColAnimation(title4Ref,text4Ref)
},[])

    return(
        <footer className='bg-primary-300 px-6 md:px-[10%] pt-40 pb-16 '>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-x-12 md:gap-x-16 gap-y-12'>
                <div>
                    <div ref={logoRef}>
                        <Image src='/logo.png' alt='logo' width='200' height='75'/>
                    </div>
                    <p ref={text1Ref} className='  text-white leading-5'>
                        Lorem Ipsum Dolor Sit Amet, Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Lorem Ipsum Dolor Sit Amet, Adipiscing Elit, 
                    </p>
                </div>
                <div>
                    <h3 ref={title2Ref} className=' font-bold text-xl text-primary-100 mb-5'>Contacts</h3>
                    <p ref={text2Ref} className='  text-white leading-5'>
                        Lorem Ipsum Dolor Sit Amet, Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Lorem Ipsum Dolor Sit Amet, Adipiscing Elit, 
                    </p>
                </div>
                <div>
                    <h3 ref={title3Ref} className=' font-bold text-xl text-primary-100 mb-5'>Services</h3>
                    <p ref={text3Ref} className='  text-white leading-5'>
                        Lorem Ipsum Dolor Sit Amet, Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Lorem Ipsum Dolor Sit Amet, Adipiscing Elit, 
                    </p>
                </div>
                <div>
                    <h3 ref={title4Ref} className=' font-bold text-xl text-primary-100 mb-5'>Instagram</h3>
                    <p ref={text4Ref} className='  text-white leading-5'>
                        Lorem Ipsum Dolor Sit Amet, Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Lorem Ipsum Dolor Sit Amet, Adipiscing Elit, 
                    </p>
                </div>
            </div>
            <p className='  text-white text-center text-xs mt-24'>Copyright © 2020 . All Rights Reserved</p>
        </footer>
    )
}
export default Footer