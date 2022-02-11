import { useEffect, useRef, useState } from "react"
import { tabsAnimation } from "../utils/gsapAiamtiom/gsap"

type inPageTabsProps={
    options:string[],
    getId:(id:number)=>void
}

const InPageTabs = ({options,getId}:inPageTabsProps) =>{
    const[id,setId]=useState(0)

    const tabsRef =useRef(null)

    useEffect(()=>{
        tabsAnimation(tabsRef)
    },[])

    useEffect(()=>{
        getId(id)
    },[id]) 

    return(
        <div ref={tabsRef} className='flex p-1 border-2 rounded-full relative'>
            {
                options.map((title,i)=>(
                    <div key={i} className=' relative' onClick={()=>setId(i)}>
                        <h3 className={` cursor-pointer px-5  py-2 ${i===id?'text-white':'text-black'}  step-start transition-all delay-200  `}>{title}</h3>
                    </div>
                ))
            }
            <div className='absolute bg-primary-100 rounded-full top-1 shadow-lg shadow-blue-200 -z-10 transition-all duration-700' style={{height:'calc(100% - 8px)' ,width:`calc((100% - 8px )/ ${options.length})`, left:`calc(5px + (((100% - 8px ) / ${options.length}) * ${id}))`}} />
        </div>
    )
}

export default InPageTabs