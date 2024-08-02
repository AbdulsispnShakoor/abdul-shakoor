
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../assets/images/Group 34.png";
import img2 from "../../assets/images/Rectangle 81.png";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const containerRef = useRef(null);

useGSAP(() => {
  const el = containerRef.current;
  gsap.fromTo(
    el,
    { opacity: 0,y:200 },
    { opacity: 1,y:0, scrollTrigger: { id: "about", trigger: el, start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, duration: 1 }
  );
  gsap.fromTo(
    "#img1",
    { opacity: 0,x:-200 },
    { opacity: 1,x:0, scrollTrigger: { id: "#img1", trigger: el, start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, delay:1,duration: 2 }
  );
  gsap.fromTo(
    "#img2",
    { opacity: 0,x:-200, rotate:180 },
    { opacity: 1,x:0,rotate:45, scrollTrigger: { id: "#img2", trigger: el, start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, delay:1, duration: 2.5 }
  );
  gsap.fromTo(
    "#text-paragraph",
    { opacity: 0, x:200 },
    { opacity: 1, x:0, scrollTrigger: { id: "#text-paragraph", trigger: el, start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, delay:1, duration: 2.5 }
  );
},[]);


  return (
    <div ref={containerRef} id="about" className="overflow-hidden">
    <h1 className="pt-16 font-black lg:text-4xl flex items-end gap-4"><span>MY JOURNEY </span>  <span><svg width="62" height="16" viewBox="0 0 62 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="16" height="16" rx="8" fill="#DF0043"/>
<rect x="23" width="16" height="16" rx="8" fill="#FE9000"/>
<rect x="46" width="16" height="16" rx="8" fill="#00D8A6"/>
</svg>
</span></h1>
    <div className="flex items-start justify-between flex-wrap lg:flex-nowrap gap-16 py-8 overflow-hidden">
      <div className="relative p-8 w-full  lg:basis-1/2">
        <img
        id="img1"
          className="absolute z-10 w-36 lg:w-64 top-0 lg:-top-24"
          src={img1}
          alt="about"
        />
        {/* <div className="hidden lg:block card absolute w-96 h-96 bg-white drop-shadow-2xl rounded-3xl opacity-60 rotate-90 top-0"></div> */}
        <img
          id="img2"
          className="absolute z-30  xl:right-36 w-48 right-0 xl:w-80 rotate-45 top-16"
          src={img2}
          alt="about"
        />
      </div>
      <div className="text-Content mt-80 lg:mt-8 lg:basis-1/2">
        <p id="text-paragraph"  className="xl:px-16">
          Throughout my journey, I have honed my skills in frontend development,
          mastering languages such as HTML, CSS, and JavaScript to build
          responsive and visually stunning websites. Simultaneously, my
          expertise in UI/UX design has enabled me to create intuitive
          interfaces that prioritize user delight and engagement. <br /> <br />
          From conceptualization to execution, I thrive on turning ideas into
          tangible, impactful solutions. My portfolio showcases a diverse range
          of projects, each reflecting my dedication to excellence and my
          commitment to staying at the forefront of technology and design
          trends.
        </p>
        <br />
        <p id="text-paragraph" className="xl:px-16  ">
          With a focus on collaboration and communication, I believe in the
          power of teamwork to achieve exceptional results. Whether it's
          brainstorming ideas with fellow creatives or collaborating closely
          with clients to bring their vision to life, I am driven by a shared
          goal of creating memorable experiences that leave a lasting
          impression. <br /> <br />
          Join me as I continue to push the boundaries of frontend development
          and UI/UX design, leveraging my expertise and passion to craft
          experiences that resonate with users and inspire action.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
