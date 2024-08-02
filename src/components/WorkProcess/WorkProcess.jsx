import processgif from '../../assets/process.gif'


import { useGSAP } from "@gsap/react";
import gsap from "gsap";


import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const WorkProcess = () => {

  useGSAP(() => {
    gsap.fromTo(
      "#h111",
      { opacity:0, scale:0},
      { opacity: 1,scale:1, stagger:.3, scrollTrigger: { trigger: "#h111", start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, delay:1, duration: 1 }
    );
    gsap.fromTo(
      "#gif",
      { opacity:0, scale:0},
      { opacity: 1,scale:1, stagger:.3, scrollTrigger: { trigger: "#gif", start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, delay:1, duration: 1 }
    );
    gsap.fromTo(
      ".firstCard",
      { opacity:0, scale:0},
      { opacity: 1,scale:1, stagger:.3, scrollTrigger: { trigger: ".firstCard", start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, delay:1, duration: 1 }
    );

  }, []);



  return (
    <div className="py-16 overflow-hidden">
        <h1 id='h111'  className="text-3xl xl:text-5xl text-center lg:w-1/3 mx-auto font-bold uppercase text-slate-800 relative py-8 lg:py-16">How we can work together <span className="absolute -top-2 lg:top-6 left-0 lg:-left-36 z-10 text-blue-600 bg-white -rotate-12 py-3 px-6 lg:px-16 lg:py-4 shadow-2xl text-sm lg:text-xl rounded-xl shadow-slate-500">Process</span></h1>
        <div className="gif relative overflow-hidden">
           <img id='gif' src={processgif}  className='lg:w-1/2 mx-auto'/>
           <div className="hidden lg:block firstCard p-4 w-96 shadow-md rounded-xl absolute top-8 left-36 bg-slate-50 -rotate-12">
            <span className="span text-4xl font-bold text-slate-800">01</span>
            <p className='text-slate-700'> <b>Brief/Short Details: </b>  Come to us with a project brief or short project details that you have currently to give us an idea of your project or product.</p>
           </div>
           <div className="hidden lg:block firstCard p-4 w-96 shadow-md rounded-xl absolute top-8 right-36 bg-slate-50 -rotate-12">
            <span className="span text-4xl font-bold text-slate-800">02</span>
            <p className='text-slate-700'> <b>Questions: </b>  After having the details from you, we'll ask questions related to your project to understand the project length and scope.</p>
           </div>
           <div className="hidden lg:block firstCard p-4 w-96 shadow-md rounded-xl absolute top-56 left-0 bg-slate-50 rotate-12">
            <span className="span text-4xl font-bold text-slate-800">03</span>
            <p className='text-slate-700'> <b>Providing Quote: </b>  We will be providing you a quote for the project after having the answers from you.</p>
           </div>
           <div className="hidden lg:block firstCard p-4 w-96 shadow-md rounded-xl absolute top-56 right-8 bg-slate-50 rotate-12">
            <span className="span text-4xl font-bold text-slate-800">04</span>
            <p className='text-slate-700'> <b>Get Started:</b>  Come to us with a project brief or short project details that you have currently to give us an idea of your project or product.</p>
           </div>
        </div>
    </div>
  )
}

export default WorkProcess