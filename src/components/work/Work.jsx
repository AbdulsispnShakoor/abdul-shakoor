import img1 from '../../assets/images/Desktop - 1.png'
import img2 from '../../assets/images/Desktop - 2.png'
import img3 from '../../assets/images/Desktop - 3.png'
import img4 from '../../assets/images/Desktop - 4.png'
import img5 from '../../assets/images/Desktop - 5.png'
import img6 from '../../assets/images/Desktop - 6.png'
import img7 from '../../assets/images/Desktop - 7.png'
import img8 from '../../assets/images/Desktop - 8.png'
import img9 from '../../assets/images/Desktop - 9.png'
import img10 from '../../assets/images/Desktop - 10.png'
import img11 from '../../assets/images/Desktop - 11.png'
import img12 from '../../assets/images/Desktop - 12.png'



import { useGSAP } from "@gsap/react";
import gsap from "gsap";


import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const Work = () => {

    useGSAP(() => {
        gsap.fromTo(
          "#proCard",
          { opacity:0, scale:0},
          { opacity: 1,scale:1, stagger:.3, scrollTrigger: { trigger: "#proCard", start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, delay:1, duration: 1 }
        );
        gsap.fromTo(
          "#imgCon",
          { opacity:0, x:200},
          { opacity: 1,x:0, stagger:.3, scrollTrigger: { trigger: "#imgCon", start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, delay:1, duration: 1 }
        );
        gsap.fromTo(
          "#imgCon2",
          { opacity:0, x:-200},
          { opacity: 1,x:0, stagger:.3, scrollTrigger: { trigger: "#imgCon2", start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, delay:1, duration: 1 }
        );
      }, []);

  return (
    <div id='work' className="px-2 overflow-hidden xl:px-48 py-8 mt-16 lg:mt-24">
        <div className="topText overflow-hidden flex items-center justify-center gap-2 lg:space-x-10  rounded-lg ">
            <div id='proCard' className="text-center lg:p-8 border-b sm:border-b-white lg:border-r">
                <h2 className="text-2xl lg:text-[120px] text-slate-800">100<span className="text-2xl">+</span></h2>
                <p className="text-sm lg:text-xl text-slate-600 ">Projects</p>
            </div>
            <div id='proCard' className="text-center border-b lg:p-8 sm:border-b-white lg:border-r w-96">
                <h2 className="text-2xl lg:text-[120px] text-slate-800">70<span className="text-2xl">+</span></h2>
                <p className="text-sm lg:text-xl text-slate-600 ">International</p>
            </div>
            <div id='proCard' className="text-center lg:p-8 min-w-36 ">
                <h2 className="text-2xl lg:text-[120px] text-slate-800">30<span className="text-2xl">+</span></h2>
                <p className="text-sm lg:text-xl text-slate-600 ">In House</p>
            </div>
        </div>

        {/* work */}
        <div className="projects">
            <div id='imgCon'  className="flex items-center space-x-4 overflow-x-scroll sm:no-scrollbar scroll-smooth snap-x py-4">
                <img src={img1} className='w-48 lg:w-96 snap-center select-none rounded-lg'/>
                <img src={img2} className='w-48 lg:w-96 snap-center select-none rounded-lg'/>
                <img src={img3} className='w-48 lg:w-96 snap-center select-none rounded-lg'/>
                <img src={img4} className='w-48 lg:w-96 snap-center select-none rounded-lg'/>
                <img src={img5} className='w-48 lg:w-96 snap-center select-none rounded-lg'/>
                <img src={img6} className='w-48 lg:w-96 snap-center select-none rounded-lg'/>          
           </div>
           <h3 className='text-center  lg:text-3xl py-4 font-bold text-slate-400 animate-pulse'>Some Of My Recent Works.</h3>
            <div id='imgCon2' className="flex items-center space-x-4 overflow-x-scroll sm:no-scrollbar scroll-smooth snap-x py-4">
                <img src={img7} className='w-48 lg:w-96 snap-center select-none rounded-lg'/>
                <img src={img8} className='w-48 lg:w-96 snap-center select-none rounded-lg'/>
                <img src={img9} className='w-48 lg:w-96 snap-center select-none rounded-lg'/>
                <img src={img10} className='w-48 lg:w-96 snap-center select-none rounded-lg'/>
                <img src={img11} className='w-48 lg:w-96 snap-center select-none rounded-lg'/>
                <img src={img12} className='w-48 lg:w-96 snap-center select-none rounded-lg'/>          
           </div>
        </div>
    </div>
  )
}

export default Work