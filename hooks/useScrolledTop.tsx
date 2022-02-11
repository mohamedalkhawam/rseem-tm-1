import { useState, useEffect } from "react"

const useScrolledTop=()=>{
    const [topScrolled,settopScrolled]=useState(0)
    
    useEffect(()=>{
        const scrollFun =() =>{
            settopScrolled(window.pageYOffset)
        }
        if (process.browser ){
            window.addEventListener('scroll',scrollFun)
            return ()=>window.removeEventListener('scroll',scrollFun)
        }
    },[])

    return topScrolled
}

export default useScrolledTop

 