import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";

type refType ={
    current:any,
}

function isOdd(num:number){
    if(num%2===0) return true
    return false
}

gsap.registerPlugin(ScrollTrigger,TextPlugin); 

export function fadeY(ref:refType,y:string,start?:string){
    gsap.fromTo(ref.current,{autoAlpha:0,duration:0.5,y:y},{duration:0.5,autoAlpha:1,y:'0',scrollTrigger:{
        id:'image',
        trigger:ref.current,
        start:start?start:'center 80%',
        toggleActions:'play none none reverse',
      }})
}
export function fadeX(ref:refType,x:string,start?:string){
    gsap.fromTo(ref.current,{autoAlpha:0,duration:0.5,x:x},{duration:0.5,autoAlpha:1,x:'0',scrollTrigger:{
        id:'image',
        trigger:ref.current,
        start:start?start:'center 80%',
        toggleActions:'play none none reverse',
        toggleClass: "active"
      }})
}
export function headerAnimation(ref1:refType,ref2:refType,ref3:refType,ref4:refType){
    const timeline = gsap.timeline({scrollTrigger:{
        id:'image',
        trigger:ref1.current,
        start:() =>  window.innerHeight  ,
        toggleActions:'play none none reset',
      }})
    timeline.fromTo(ref1.current,{autoAlpha:1,y:'-122'},{duration:1,autoAlpha:1,y:'0',ease:'bounce',})
    .fromTo(ref2.current,{scale:0},{scaleX:0.2,duration:0.3,ease:'back',})
    .to(ref2.current,{scaleY:0.5,duration:0.2,ease:'back',})
    .to(ref2.current,{scaleX:0.7,duration:0.2,ease:'back',})
    .to(ref2.current,{scaleY:0.8,duration:0.2,ease:'back',})
    .to(ref2.current,{scaleX:1,duration:0.2,ease:'back',})
    .to(ref2.current,{scaleY:1,duration:0.2,ease:'back',})
    .fromTo(ref3.current,{autoAlpha:0},{duration:1,autoAlpha:1},1)
    .fromTo(ref4.current,{scale:0},{scale:1,autoAlpha:1},1)
}
export function popGroupAnimate(ref:any,start?:string){
    gsap.fromTo(ref,{scale:0},{duration:0.8,scale:1,ease:'back',scrollTrigger:{
        id:'image',
        trigger:ref,
        start:start?start:'center 80%',
        toggleActions:'play none none reverse',
      }})
   
}

export function homeAnimate(ref:any,start?:string){
    const timeline = gsap.timeline()
    timeline.fromTo(ref[0].current,{rotateY:180,autoAlpha:0,scale:0},{rotateY:0,autoAlpha:1,scale:1,duration:1.5},1)
    .fromTo(ref[1].current,{autoAlpha:0},{autoAlpha:1},'-=1')
    .fromTo(ref[2].current,{autoAlpha:0,text:'.'},{autoAlpha:1,text:'Lorem ipsum'})
    .fromTo(ref[3].current,{autoAlpha:0},{autoAlpha:1})
    .fromTo(ref[4].current,{autoAlpha:0,scale:0},{autoAlpha:1,scale:1})
    .fromTo(ref[5].current,{autoAlpha:0,x:40,z:-1},{autoAlpha:1,x:0})
    .fromTo(ref[6].current,{autoAlpha:0,scale:0},{autoAlpha:1,scale:1,duration:1})
    .fromTo(ref[7].current,{autoAlpha:0,x:40,z:-1},{autoAlpha:1,x:0})
}


export function tabsAnimation(ref:refType,start?:string){
    gsap.fromTo(ref.current,{scale:0},{duration:1,scale:1,scrollTrigger:{
        id:'image',
        trigger:ref.current,
        start:start?start:'center 80%',
        toggleActions:'play none none reverse',
      }})
   
}
export function productsBox(ref:refType,ref2:refType,start?:string){
    gsap.fromTo(ref.current,{y:400},{duration:1,y:0,scrollTrigger:{
        id:'image',
        trigger:ref2.current,
        start:start?start:'center 90%',
        toggleActions:'play none none reverse',
      }})
   
}

export function buttonAnimate(ref1:refType,ref2:refType,start?:string){
    const timeline = gsap.timeline({scrollTrigger:{
        id:'image',
        trigger:ref2.current,
        start:start?start:'center 80%',
        toggleActions:'play none none reverse',
      }})
    timeline.fromTo(ref1.current,{autoAlpha:0},{duration:0.1,autoAlpha:0,})
    timeline.fromTo(ref2.current,{x:150,autoAlpha:0},{duration:1,x:0,autoAlpha:1})
    timeline.fromTo(ref1.current,{scale:0},{autoAlpha:1,scale:1})
}

export function customersAnimation(ref:any,i:number){
    const timeline = gsap.timeline({scrollTrigger:{
        id:'image',
        trigger:ref,
        start:'center 80%',
        toggleActions:'play none none reverse',
      }})
      timeline.fromTo(ref,{scale:0},{duration:0.5,scale:1})
      timeline.fromTo(ref,{x:0},{duration:0.5,x:isOdd(i)?-10:+10,ease:'bounce'})
      timeline.to(ref,{duration:0.5,x:isOdd(i)?+10:-10,ease:'bounce'})
      timeline.to(ref,{duration:0.5,x:0,ease:'bounce'})
   
}

export function swiperAnimation(ref:refType,start?:string){
    gsap.fromTo(ref.current,{scale:0},{duration:1,scale:1,scrollTrigger:{
        id:'image',
        trigger:ref.current,
        start:start?start:'center 80%',
        toggleActions:'play none none reverse',
      }})
   
}
// export function swiperContentsAnimation(ref1:refType,ref2:refType,ref3:refType,ref4:refType,start?:string){
//     const timeline = gsap.timeline({scrollTrigger:{
//         id:'image',
//         trigger:ref2.current,
//         start:'center 80%',
//         toggleActions:'play reverse play reverse',
//         horizontal: true
//       }})
//       timeline.fromTo(ref2.current,{scale:0},{duration:3,scale:1})
//       timeline.fromTo(ref3.current,{scale:0},{duration:2,scale:1})
//       timeline.fromTo(ref4.current,{scale:0},{duration:1,scale:1})
   
// }

// export function swiperContentsAnimations(ref:refType,ref2:refType,start?:string){
//     gsap.fromTo(ref.current,{scale:0},{duration:1,scale:1,scrollTrigger:{
//         id:'image',
//         trigger:ref2.current,
//         start:start?start:'center 80%',
//         toggleActions:'play none none reset',
//         horizontal: true,
//         markers:true
//       }})
   
// }

export function SubscribeAnimation(ref1:refType,ref2:refType,ref3:refType,ref4:refType,ref5:refType){
    const timeline = gsap.timeline({scrollTrigger:{
        id:'image',
        trigger:ref1.current,
        start:'center 80%'  ,
        toggleActions:'play none none reverse',
      }})
    timeline.fromTo(ref1.current,{scaleY:0},{duration:1,scaleY:1})
    .fromTo(ref2.current,{scale:0},{scale:1})
    .fromTo(ref3.current,{autoAlpha:0,y:-20},{autoAlpha:1,y:0})
    .fromTo(ref4.current,{autoAlpha:0,y:-20},{autoAlpha:1,y:0})
    .fromTo(ref5.current,{scaleY:0},{scaleY:1})
}

export function footerColAnimation(ref1:refType,ref2:refType){
    const timeline = gsap.timeline({scrollTrigger:{
        id:'image',
        trigger:ref1.current,
        start:'center 80%'  ,
        toggleActions:'play none none reverse',
      }})
    timeline.fromTo(ref1.current,{autoAlpha:0,y:-20},{autoAlpha:1,y:0})
    .fromTo(ref2.current,{autoAlpha:0},{autoAlpha:1})
   
}







