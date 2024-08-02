import backenddev from "../../assets/images/backend.png";
import uiux from "../../assets/images/uiux.png";
import frdev from "../../assets/images/frdev.png";


import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

  useGSAP(() => {
    gsap.fromTo(
      ".giffe",
      {opacity:0},
      { opacity: 1, zIndex:-99, scrollTrigger: { trigger: ".giffe", start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, delay:.5,duration: 2 }
    );

    gsap.fromTo(
      ".card",
      { opacity:0, y:100},
      { opacity: 1, y:-100, stagger:.3, scrollTrigger: { trigger: ".card", start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, delay:.2, duration: 1 }
    );

  },[]);



  return (
    <div id="services" className="overflow-hidden">
      <h1 className="pt-16 font-black text-xl lg:text-5xl flex items-end gap-4">
        <span>Services </span>
        <span>
          <svg
            width="62"
            height="16"
            viewBox="0 0 62 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="16" height="16" rx="8" fill="#DF0043" />
            <rect x="23" width="16" height="16" rx="8" fill="#FE9000" />
            <rect x="46" width="16" height="16" rx="8" fill="#00D8A6" />
          </svg>
        </span>
      </h1>
      <div className="pt-16">
        <div className="giffe w-full h-[600px] rounded-2xl"></div>
        <div className="relative z-10 cards flex items-center justify-between -mt-36 px-4 lg:space-x-8 space-y-16 xl:px-24 flex-wrap lg:flex-nowrap ">
          <div className="card bg-white shadow-2xl mt-16 p-4 xl:w-96 xl:h-[22rem] rounded-xl">
            <img
              className="card-img -mt-16 mx-auto w-36 h-36"
              src={uiux}
              alt="UI / UX Design"
            />
            <div className="card-body">
              <h5 className="card-title text-2xl font-semibold py-3">
                UI / UX Design
              </h5>
              <p className="card-text">
                Dive into the world of intuitive interfaces and captivating user
                experiences crafted with precision and passion. From wireframing
                to prototyping, I specialize in creating seamless interactions
                that resonate with your audience and elevate your brand
                identity.
              </p>
            </div>
          </div>
          <div className="card bg-white shadow-2xl p-4 xl:w-96 xl:h-[22rem]  rounded-xl">
            <img
              className="card-img -mt-16 mx-auto w-36 h-36"
              src={frdev}
              alt="Frontend Development"
            />
            <div className="card-body">
              <h5 className="card-title text-2xl font-semibold py-3">
                Frontend & CMS Development
              </h5>
              <p className="card-text">
                Unlock the potential of your online presence with bespoke
                websites that marry form and function seamlessly. Leveraging the
                latest frontend technologies and design principles, I transform
                concepts into responsive and visually stunning websites that
                leave a lasting impression.
              </p>
            </div>
          </div>
          <div className="card bg-white shadow-2xl p-4 xl:w-96 xl:h-[22rem]  rounded-xl">
            <img
              className="card-img -mt-16 mx-auto w-36 h-36"
              src={backenddev}
              alt="Backend Development"
            />
            <div className="card-body">
              <h5 className="card-title text-2xl font-semibold py-3">
                Backend Development
              </h5>
              <p className="card-text">
                In the digital age, having a robust and scalable backend is
                crucial for the success of any application. Our Node.js backend
                development services are designed to deliver high-performance,
                reliable, and secure server-side solutions that can power your
                web and mobile applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
