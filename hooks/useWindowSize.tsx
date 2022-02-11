const { useEffect, useState } = require("react")

const useWindowSize =() =>{
    const [windowH,setWindowH]=useState(0)
    const [windowW,setWindowW]=useState(0)
    useEffect(()=>{
        if(process.browser){
            setWindowH(window.innerHeight)
            setWindowW(window.innerWidth)
        } 
    },[])

    return {windowH,windowW}
}

export default useWindowSize