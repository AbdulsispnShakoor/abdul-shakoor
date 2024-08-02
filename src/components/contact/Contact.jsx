import contactPerson from '../../assets/images/contactperson.png'


import { useGSAP } from "@gsap/react";
import gsap from "gsap";


import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

  useGSAP(() => {
    gsap.fromTo(
      ".contact-left",
      { opacity:0, x:-200},
      { opacity: 1,x:0, stagger:.3, scrollTrigger: { trigger: ".contact-left", start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, delay:1, duration: 1 }
    );
    gsap.fromTo(
      ".contactText",
      { opacity:0, x:200},
      { opacity: 1,x:0, stagger:.3, scrollTrigger: { trigger: ".contactText", start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, delay:1, duration: 1 }
    );
    gsap.fromTo(
      "#h2I",
      { opacity:0, x:-200},
      { opacity: 1,x:0, stagger:.3, scrollTrigger: { trigger: "#h2I", start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, delay:1, duration: 1 }
    );
    gsap.fromTo(
      "#h2II",
      { opacity:0, x:200},
      { opacity: 1,x:0, scrollTrigger: { trigger: "#h2II", start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, delay:1, duration: 1 }
    );
    gsap.fromTo(
      "#h2III",
      { opacity:0, x:200},
      { opacity: 1,x:0,  scrollTrigger: { trigger: "#h2III", start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, delay:1, duration: 1 }
    );
    gsap.fromTo(
      '#profile',
      { opacity:0, y:200},
      { opacity: 1,y:0, stagger:.3, scrollTrigger: { trigger: '#profile', start: "top 90%", end: "top 10%", toggleActions: "play none none reset", }, delay:1, duration: 1 }
    );
  
  }, []);

  return (
    <div id='contact' className="pt-8 overflow-hidden">
      <div className=" flex items-start justify-between flex-wrap">
        <div className="contact-left lg:basis-1/2">
          <h1 className="font-black text-xl lg:text-5xl flex items-end gap-4">
            <span>Contact </span>
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
          <div className="icons mt-8">
            <p className="flex gap-2 items-center justify-start">
              <span>
                <svg
                  width={80}
                  height={76}
                  viewBox="0 0 80 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_3216_73)">
                    <rect
                      x={18}
                      y={18}
                      width={32}
                      height={28}
                      rx={4}
                      fill="white"
                    />
                    <path
                      d="M30.4133 31.1933C31.3733 33.08 32.92 34.62 34.8067 35.5867L36.2733 34.12C36.4533 33.94 36.72 33.88 36.9533 33.96C37.7 34.2067 38.5067 34.34 39.3333 34.34C39.7 34.34 40 34.64 40 35.0067V37.3333C40 37.7 39.7 38 39.3333 38C33.0733 38 28 32.9267 28 26.6667C28 26.3 28.3 26 28.6667 26H31C31.3667 26 31.6667 26.3 31.6667 26.6667C31.6667 27.5 31.8 28.3 32.0467 29.0467C32.12 29.28 32.0667 29.54 31.88 29.7267L30.4133 31.1933Z"
                      fill="#29B3C7"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_3216_73"
                      x={0}
                      y={0}
                      width={80}
                      height={76}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx={6} dy={6} />
                      <feGaussianBlur stdDeviation={12} />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3216_73"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3216_73"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
              <span className="text-xl">+92 331 2589582</span>
            </p>
            <p className="flex gap-2 items-center justify-start">
              <span>
                <svg
                  width={80}
                  height={79}
                  viewBox="0 0 80 79"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_3216_77)">
                    <rect
                      x={18}
                      y={18}
                      width={32}
                      height={31}
                      rx={4}
                      fill="white"
                    />
                    <path
                      d="M34.0296 26C29.9346 26 26.5971 29.3375 26.5971 33.4325C26.5971 34.745 26.9421 36.02 27.5871 37.145L26.5371 41L30.4746 39.965C31.5621 40.5575 32.7846 40.8725 34.0296 40.8725C38.1246 40.8725 41.4621 37.535 41.4621 33.44C41.4621 31.4525 40.6896 29.585 39.2871 28.1825C38.5994 27.4881 37.7804 26.9375 36.8777 26.5628C35.9751 26.1881 35.0069 25.9968 34.0296 26ZM34.0371 27.2525C35.6871 27.2525 37.2321 27.8975 38.4021 29.0675C38.9761 29.6417 39.4313 30.3234 39.7414 31.0737C40.0516 31.824 40.2107 32.6282 40.2096 33.44C40.2096 36.845 37.4346 39.6125 34.0296 39.6125C32.9196 39.6125 31.8321 39.32 30.8871 38.75L30.6621 38.6225L28.3221 39.2375L28.9446 36.9575L28.7946 36.7175C28.1755 35.7338 27.8479 34.5948 27.8496 33.4325C27.8571 30.0275 30.6246 27.2525 34.0371 27.2525ZM31.3971 29.9975C31.2771 29.9975 31.0746 30.0425 30.9021 30.23C30.7371 30.4175 30.2496 30.875 30.2496 31.7825C30.2496 32.6975 30.9171 33.575 30.9996 33.7025C31.1046 33.83 32.3196 35.705 34.1871 36.5C34.6296 36.7025 34.9746 36.815 35.2446 36.8975C35.6871 37.04 36.0921 37.0175 36.4146 36.9725C36.7746 36.92 37.5096 36.5225 37.6671 36.0875C37.8246 35.6525 37.8246 35.285 37.7796 35.2025C37.7271 35.1275 37.6071 35.0825 37.4196 35C37.2321 34.895 36.3171 34.445 36.1521 34.385C35.9796 34.325 35.8746 34.295 35.7321 34.475C35.6121 34.6625 35.2521 35.0825 35.1471 35.2025C35.0346 35.33 34.9296 35.345 34.7496 35.255C34.5546 35.1575 33.9546 34.9625 33.2496 34.3325C32.6946 33.8375 32.3271 33.23 32.2146 33.0425C32.1246 32.8625 32.2071 32.75 32.2971 32.6675C32.3796 32.585 32.4996 32.45 32.5746 32.3375C32.6721 32.2325 32.7021 32.15 32.7621 32.03C32.8221 31.9025 32.7921 31.7975 32.7471 31.7075C32.7021 31.625 32.3271 30.695 32.1696 30.3275C32.0196 29.9675 31.8696 30.0125 31.7496 30.005C31.6446 30.005 31.5246 29.9975 31.3971 29.9975Z"
                      fill="#29B6CA"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_3216_77"
                      x={0}
                      y={0}
                      width={80}
                      height={79}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx={6} dy={6} />
                      <feGaussianBlur stdDeviation={12} />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3216_77"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3216_77"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
              <span className="text-xl">+92 347 1810373</span>
            </p>
            <p className="flex gap-1 items-center justify-start">
              <span>
                <svg
                  width={80}
                  height={80}
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_3216_79)">
                    <rect
                      x={18}
                      y={18}
                      width={32}
                      height={32}
                      rx={4}
                      fill="white"
                    />
                    <path
                      d="M39.333 28.6665H28.6663C27.933 28.6665 27.3397 29.2665 27.3397 29.9998L27.333 37.9998C27.333 38.7332 27.933 39.3332 28.6663 39.3332H39.333C40.0663 39.3332 40.6663 38.7332 40.6663 37.9998V29.9998C40.6663 29.2665 40.0663 28.6665 39.333 28.6665ZM39.0663 31.4998L34.353 34.4465C34.1397 34.5798 33.8597 34.5798 33.6463 34.4465L28.933 31.4998C28.8662 31.4623 28.8076 31.4116 28.7609 31.3508C28.7142 31.29 28.6804 31.2204 28.6614 31.1461C28.6424 31.0718 28.6387 30.9945 28.6504 30.9187C28.6622 30.843 28.6892 30.7704 28.7299 30.7054C28.7705 30.6404 28.8239 30.5843 28.8868 30.5405C28.9498 30.4967 29.0209 30.4662 29.096 30.4507C29.1711 30.4352 29.2485 30.4351 29.3236 30.4505C29.3988 30.4658 29.47 30.4962 29.533 30.5398L33.9997 33.3332L38.4663 30.5398C38.5294 30.4962 38.6006 30.4658 38.6757 30.4505C38.7508 30.4351 38.8283 30.4352 38.9033 30.4507C38.9784 30.4662 39.0496 30.4967 39.1125 30.5405C39.1755 30.5843 39.2289 30.6404 39.2695 30.7054C39.3101 30.7704 39.3371 30.843 39.3489 30.9187C39.3607 30.9945 39.3569 31.0718 39.338 31.1461C39.319 31.2204 39.2851 31.29 39.2384 31.3508C39.1917 31.4116 39.1332 31.4623 39.0663 31.4998Z"
                      fill="#2ABACE"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_3216_79"
                      x={0}
                      y={0}
                      width={80}
                      height={80}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx={6} dy={6} />
                      <feGaussianBlur stdDeviation={12} />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3216_79"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3216_79"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
              <span className="text-xl">abduldev1786@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="contactText lg:basis-1/3">
          <p>
            I'm always excited to collaborate on new projects, discuss
            innovative ideas, or simply connect with fellow tech enthusiasts.
            Whether you have a question, need assistance with a project, or just
            want to say hello, feel free to reach out!
          </p>
          <h3 className="text-2xl lg:text-3xl  font-bold mt-8">Social Media</h3>
          <div className="links flex flex-wrap items-center justify-center lg:justify-start lg:flex-nowrap gap-2 mt-8">
            <a href="https://github.com/AbdulsispnShakoor" target='_blank'>
              <span>
                <svg
                  width={80}
                  height={80}
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_3216_99)">
                    <rect
                      x={18}
                      y={18}
                      width={32}
                      height={32}
                      rx={4}
                      fill="white"
                    />
                    <path
                      d="M39.9197 28.0662C39.431 27.5775 38.843 27.3335 38.155 27.3335H29.8303C29.1423 27.3335 28.5543 27.5775 28.0657 28.0662C27.577 28.5548 27.333 29.1428 27.333 29.8308V38.1555C27.333 38.8435 27.577 39.4315 28.0657 39.9202C28.5543 40.4088 29.1423 40.6528 29.8303 40.6528H31.773C31.8997 40.6528 31.995 40.6482 32.059 40.6395C32.1335 40.6246 32.2007 40.5849 32.2497 40.5268C32.313 40.4602 32.345 40.3635 32.345 40.2368L32.3403 39.6468C32.3377 39.2708 32.3363 38.9735 32.3363 38.7535L32.1363 38.7882C32.0097 38.8115 31.8497 38.8215 31.6557 38.8188C31.4535 38.8151 31.2519 38.7948 31.053 38.7582C30.8413 38.7191 30.642 38.6299 30.4717 38.4982C30.2933 38.3632 30.1603 38.1772 30.0903 37.9648L30.0037 37.7648C29.9306 37.6071 29.8389 37.4587 29.7303 37.3228C29.6063 37.1608 29.4803 37.0515 29.353 36.9935L29.293 36.9502C29.2512 36.9202 29.2131 36.8853 29.1797 36.8462C29.1477 36.8099 29.1214 36.769 29.1017 36.7248C29.0843 36.6842 29.099 36.6508 29.145 36.6248C29.1917 36.5982 29.275 36.5855 29.397 36.5855L29.5703 36.6122C29.6857 36.6348 29.829 36.7042 29.999 36.8195C30.171 36.9368 30.3148 37.091 30.4197 37.2708C30.553 37.5075 30.713 37.6882 30.901 37.8128C31.089 37.9368 31.2783 37.9995 31.469 37.9995C31.6597 37.9995 31.8243 37.9848 31.9637 37.9562C32.0984 37.9283 32.2293 37.8844 32.3537 37.8255C32.4057 37.4388 32.547 37.1402 32.7783 36.9322C32.4786 36.9028 32.1815 36.8506 31.8897 36.7762C31.6049 36.6979 31.331 36.5844 31.0743 36.4382C30.8058 36.292 30.5687 36.0945 30.3763 35.8568C30.1917 35.6255 30.0397 35.3222 29.921 34.9468C29.803 34.5708 29.7437 34.1368 29.7437 33.6455C29.7437 32.9462 29.9717 32.3508 30.4283 31.8588C30.215 31.3335 30.235 30.7435 30.489 30.0908C30.657 30.0382 30.9057 30.0775 31.235 30.2075C31.5643 30.3375 31.8057 30.4488 31.959 30.5408C32.1123 30.6342 32.235 30.7122 32.3277 30.7755C32.8697 30.6247 33.4298 30.5488 33.9923 30.5502C34.565 30.5502 35.1197 30.6255 35.6577 30.7755L35.987 30.5675C36.2403 30.4154 36.5075 30.2877 36.785 30.1862C37.0917 30.0702 37.325 30.0388 37.4877 30.0908C37.7477 30.7442 37.7703 31.3335 37.5563 31.8595C38.013 32.3508 38.2417 32.9462 38.2417 33.6462C38.2417 34.1375 38.1823 34.5728 38.0637 34.9508C37.9457 35.3295 37.7923 35.6328 37.6043 35.8615C37.4086 36.0961 37.1705 36.2917 36.9023 36.4382C36.6223 36.5942 36.3503 36.7068 36.087 36.7762C35.7952 36.8509 35.4981 36.9032 35.1983 36.9328C35.4983 37.1928 35.649 37.6028 35.649 38.1635V40.2368C35.649 40.3348 35.663 40.4142 35.6923 40.4748C35.7058 40.5041 35.725 40.5303 35.7489 40.5519C35.7727 40.5736 35.8006 40.5902 35.831 40.6008C35.895 40.6235 35.951 40.6382 36.0003 40.6435C36.0497 40.6502 36.1203 40.6522 36.2123 40.6522H38.155C38.843 40.6522 39.431 40.4082 39.9197 39.9195C40.4077 39.4315 40.6523 38.8428 40.6523 38.1548V29.8308C40.6523 29.1428 40.4083 28.5548 39.9197 28.0662Z"
                      fill="#2ABACE"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_3216_99"
                      x={0}
                      y={0}
                      width={80}
                      height={80}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx={6} dy={6} />
                      <feGaussianBlur stdDeviation={12} />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3216_99"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3216_99"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
            </a>
            <a href="https://www.upwork.com/freelancers/~01d903f57486dba650" target='_blank'>
              <span>
                <svg
                  width={80}
                  height={80}
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_3216_88)">
                    <rect
                      x={18}
                      y={18}
                      width={32}
                      height={32}
                      rx={4}
                      fill="white"
                    />
                    <path
                      d="M28.75 27H39.25C40.2156 27 41 27.7844 41 28.75V39.25C41 40.2156 40.2156 41 39.25 41H28.75C27.7844 41 27 40.2156 27 39.25V28.75C27 27.7844 27.7844 27 28.75 27ZM35.4656 34.5688C35.6719 32.9156 36.275 32.3969 37.0719 32.3969C37.8625 32.3969 38.475 33.0281 38.475 33.95C38.475 34.8719 37.8594 35.5031 37.0719 35.5031C36.2 35.5031 35.625 34.8313 35.4656 34.5688ZM34.6312 33.2625C34.375 32.7781 34.1844 32.1281 34.0312 31.525H32.0656V33.9656C32.0656 34.8531 31.6625 35.5094 30.8719 35.5094C30.0813 35.5094 29.6281 34.8562 29.6281 33.9688L29.6375 31.5281H28.5063V33.9688C28.5063 34.6812 28.7375 35.3281 29.1594 35.7875C29.5937 36.2625 30.1844 36.5125 30.8719 36.5125C32.2375 36.5125 33.1906 35.4656 33.1906 33.9656V32.325C33.3344 32.8656 33.6719 33.9031 34.3219 34.8156L33.7188 38.2688H34.8688L35.2688 35.8188C35.4 35.9281 35.5406 36.025 35.6875 36.1125C36.0719 36.3563 36.5125 36.4938 36.9656 36.5063H37.0719C38.4812 36.5063 39.6 35.4156 39.6 33.9469C39.6 32.4781 38.4781 31.3781 37.0719 31.3781C35.6531 31.3781 34.8562 32.3062 34.6312 33.2562V33.2625Z"
                      fill="#2ABACE"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_3216_88"
                      x={0}
                      y={0}
                      width={80}
                      height={80}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx={6} dy={6} />
                      <feGaussianBlur stdDeviation={12} />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3216_88"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3216_88"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
            </a>
            <a href="https://www.fiver.com/s/yvE66k6" target='_blank'>
              <span>
                <svg
                  width={80}
                  height={80}
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_3216_90)">
                    <rect
                      x={18}
                      y={18}
                      width={32}
                      height={32}
                      rx={4}
                      fill="white"
                    />
                    <path
                      d="M38.5003 38.1668V31.5002H31.8337V31.0835C31.8337 30.3942 32.3943 29.8335 33.0837 29.8335H34.3337V27.3335H33.0837C32.0895 27.3347 31.1364 27.7302 30.4334 28.4332C29.7304 29.1362 29.3349 30.0893 29.3337 31.0835V31.5002H27.667V34.0002H29.3337V38.1668H27.667V40.6668H33.5003V38.1668H31.8337V34.0002H36.0237V38.1668H34.3337V40.6668H40.167V38.1668H38.5003Z"
                      fill="#2ABACE"
                    />
                    <path
                      d="M37.25 29.8335C37.9404 29.8335 38.5 29.2739 38.5 28.5835C38.5 27.8931 37.9404 27.3335 37.25 27.3335C36.5596 27.3335 36 27.8931 36 28.5835C36 29.2739 36.5596 29.8335 37.25 29.8335Z"
                      fill="#2ABACE"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_3216_90"
                      x={0}
                      y={0}
                      width={80}
                      height={80}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx={6} dy={6} />
                      <feGaussianBlur stdDeviation={12} />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3216_90"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3216_90"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/abdulshakoorafridi/" target='_blank'>
              <span>
                <svg
                  width={80}
                  height={80}
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_3216_93)">
                    <rect
                      x={18}
                      y={18}
                      width={32}
                      height={32}
                      rx={4}
                      fill="white"
                    />
                    <path
                      d="M40.2222 26C40.6937 26 41.1459 26.1873 41.4793 26.5207C41.8127 26.8541 42 27.3063 42 27.7778V40.2222C42 40.6937 41.8127 41.1459 41.4793 41.4793C41.1459 41.8127 40.6937 42 40.2222 42H27.7778C27.3063 42 26.8541 41.8127 26.5207 41.4793C26.1873 41.1459 26 40.6937 26 40.2222V27.7778C26 27.3063 26.1873 26.8541 26.5207 26.5207C26.8541 26.1873 27.3063 26 27.7778 26H40.2222ZM39.7778 39.7778V35.0667C39.7778 34.2981 39.4725 33.5611 38.929 33.0176C38.3856 32.4742 37.6485 32.1689 36.88 32.1689C36.1244 32.1689 35.2444 32.6311 34.8178 33.3244V32.3378H32.3378V39.7778H34.8178V35.3956C34.8178 34.7111 35.3689 34.1511 36.0533 34.1511C36.3834 34.1511 36.6999 34.2822 36.9333 34.5156C37.1667 34.749 37.2978 35.0655 37.2978 35.3956V39.7778H39.7778ZM29.4489 30.9422C29.8449 30.9422 30.2248 30.7849 30.5048 30.5048C30.7849 30.2248 30.9422 29.8449 30.9422 29.4489C30.9422 28.6222 30.2756 27.9467 29.4489 27.9467C29.0505 27.9467 28.6684 28.1049 28.3867 28.3867C28.1049 28.6684 27.9467 29.0505 27.9467 29.4489C27.9467 30.2756 28.6222 30.9422 29.4489 30.9422ZM30.6844 39.7778V32.3378H28.2222V39.7778H30.6844Z"
                      fill="#2ABACE"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_3216_93"
                      x={0}
                      y={0}
                      width={80}
                      height={80}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx={6} dy={6} />
                      <feGaussianBlur stdDeviation={12} />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3216_93"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3216_93"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100012381725764&mibextid=ZbWKwL" target='_blank'>
              <span>
                <svg
                  width={80}
                  height={80}
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_3216_96)">
                    <rect
                      x={18}
                      y={18}
                      width={32}
                      height={32}
                      rx={4}
                      fill="white"
                    />
                    <g clipPath="url(#clip0_3216_96)">
                      <path
                        d="M39.5998 26.7998H28.3998C27.5198 26.7998 26.7998 27.5198 26.7998 28.3998V39.5998C26.7998 40.4806 27.5198 41.1998 28.3998 41.1998H33.9998V35.5998H32.3998V33.6198H33.9998V31.9798C33.9998 30.2486 34.9694 29.0326 37.0126 29.0326L38.455 29.0342V31.1182H37.4974C36.7022 31.1182 36.3998 31.715 36.3998 32.2686V33.6206H38.4542L37.9998 35.5998H36.3998V41.1998H39.5998C40.4798 41.1998 41.1998 40.4806 41.1998 39.5998V28.3998C41.1998 27.5198 40.4798 26.7998 39.5998 26.7998Z"
                        fill="#2ABACE"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_3216_96"
                      x={0}
                      y={0}
                      width={80}
                      height={80}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx={6} dy={6} />
                      <feGaussianBlur stdDeviation={12} />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3216_96"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3216_96"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_3216_96">
                      <rect
                        width={16}
                        height={16}
                        fill="white"
                        transform="translate(26 26)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </a>
            <a href="https://www.instagram.com/abduldev786/" target='_blank'>
              <span>
                <svg
                  width={80}
                  height={80}
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_3216_102)">
                    <rect
                      x={18}
                      y={18}
                      width={32}
                      height={32}
                      rx={4}
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.8744 26.8994C29.0854 26.8994 28.3286 27.2128 27.7705 27.7707C27.2124 28.3285 26.8987 29.0852 26.8984 29.8743V37.8103C26.8984 38.5996 27.212 39.3565 27.7701 39.9146C28.3282 40.4727 29.0852 40.7863 29.8744 40.7863H37.8104C38.5995 40.786 39.3562 40.4723 39.914 39.9142C40.4719 39.3561 40.7853 38.5994 40.7853 37.8103V29.8743C40.785 29.0854 40.4715 28.3289 39.9136 27.7711C39.3558 27.2132 38.5993 26.8997 37.8104 26.8994H29.8744ZM38.6664 29.8788C38.6664 30.1062 38.5761 30.3242 38.4154 30.4849C38.2546 30.6457 38.0366 30.736 37.8093 30.736C37.582 30.736 37.3639 30.6457 37.2032 30.4849C37.0425 30.3242 36.9522 30.1062 36.9522 29.8788C36.9522 29.6515 37.0425 29.4335 37.2032 29.2728C37.3639 29.112 37.582 29.0217 37.8093 29.0217C38.0366 29.0217 38.2546 29.112 38.4154 29.2728C38.5761 29.4335 38.6664 29.6515 38.6664 29.8788ZM33.8436 31.4651C33.2131 31.4651 32.6085 31.7156 32.1627 32.1614C31.7169 32.6072 31.4664 33.2118 31.4664 33.8423C31.4664 34.4727 31.7169 35.0774 32.1627 35.5232C32.6085 35.969 33.2131 36.2194 33.8436 36.2194C34.474 36.2194 35.0787 35.969 35.5245 35.5232C35.9703 35.0774 36.2207 34.4727 36.2207 33.8423C36.2207 33.2118 35.9703 32.6072 35.5245 32.1614C35.0787 31.7156 34.474 31.4651 33.8436 31.4651ZM30.3224 33.8423C30.3224 32.9087 30.6933 32.0134 31.3534 31.3533C32.0135 30.6931 32.9089 30.3223 33.8424 30.3223C34.776 30.3223 35.6713 30.6931 36.3315 31.3533C36.9916 32.0134 37.3624 32.9087 37.3624 33.8423C37.3624 34.7758 36.9916 35.6712 36.3315 36.3313C35.6713 36.9914 34.776 37.3623 33.8424 37.3623C32.9089 37.3623 32.0135 36.9914 31.3534 36.3313C30.6933 35.6712 30.3224 34.7758 30.3224 33.8423Z"
                      fill="#2ABACE"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_3216_102"
                      x={0}
                      y={0}
                      width={80}
                      height={80}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx={6} dy={6} />
                      <feGaussianBlur stdDeviation={12} />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3216_102"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3216_102"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="img hidden lg:block relative lg:min-h-[60vh]">
        <img id='profile' src={contactPerson} alt="Abdul Shakoor"  className='mx-auto absolute bottom-0 left-[28rem] z-10'/>
        <h2 id='h2I' className='hidden lg:block absolute top-16 left-64'>
        <svg width={1086} height={201} viewBox="0 0 1086 201" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M842.9 4.00049V118.33C842.9 129.763 845.726 138.565 851.379 144.735C857.032 150.905 865.329 153.99 876.27 153.99C887.211 153.99 895.599 150.905 901.434 144.735C907.27 138.565 910.187 129.763 910.187 118.33V4.00049H956.96V118.058C956.96 135.117 953.313 149.544 946.019 161.34C938.725 173.136 928.878 182.029 916.478 188.017C904.261 194.006 890.585 197 875.449 197C860.314 197 846.729 194.097 834.694 188.289C822.841 182.301 813.45 173.408 806.521 161.612C799.592 149.635 796.127 135.117 796.127 118.058V4.00049H842.9Z" fill="#202020" />
  <path d="M132.038 162.909H60.415L48.9334 197H0L69.4362 4.00049H123.564L193 197H143.52L132.038 162.909ZM120.01 126.619L96.2265 55.962L72.7166 126.619H120.01Z" fill="#202020" />
  <g filter="url(#filter0_d_3216_43)">
    <path fillRule="evenodd" clipRule="evenodd" d="M418.17 4V44.2083H683.793V44.2087C699.066 44.3112 714.441 48.8364 725.168 59.7806C735.896 70.7249 741.866 85.5109 741.764 100.886C741.662 116.261 735.497 130.965 724.625 141.765C717.174 149.166 707.93 154.318 697.934 156.794H418.169V197.002H691.586L691.645 196.707C714.112 194.941 735.343 185.245 751.507 169.189C769.604 151.213 779.866 126.736 780.035 101.143C780.205 75.5497 770.268 50.937 752.411 32.7193C734.882 14.8365 710.145 4.55361 685.195 4.02012L685.192 4H418.17ZM418.166 4.00041H377.958V197H418.166V4.00041Z" fill="#1D1D1D" />
  </g>
  <path d="M325.039 98.026C336.134 100.409 345.047 105.999 351.777 114.797C358.508 123.411 361.873 133.309 361.873 144.489C361.873 160.618 356.234 173.448 344.956 182.979C333.861 192.327 318.309 197 298.3 197H209.081V4.00049H295.299C314.762 4.00049 329.95 8.49098 340.864 17.472C351.959 26.453 357.507 38.6415 357.507 54.0375C357.507 65.4012 354.506 74.8404 348.503 82.3551C342.683 89.8698 334.861 95.0935 325.039 98.026ZM255.737 82.0802H286.295C293.935 82.0802 299.756 80.4306 303.757 77.1315C307.941 73.649 310.033 68.6087 310.033 62.0104C310.033 55.4121 307.941 50.3718 303.757 46.8893C299.756 43.4069 293.935 41.6657 286.295 41.6657H255.737V82.0802ZM290.115 159.06C297.937 159.06 303.939 157.319 308.123 153.837C312.488 150.171 314.671 144.947 314.671 138.166C314.671 131.384 312.397 126.069 307.85 122.22C303.484 118.371 297.391 116.446 289.569 116.446H255.737V159.06H290.115Z" fill="#202020" />
  <path d="M1021.78 160.71H1085.63V197H973.042V4.00049H1021.78V160.71Z" fill="#202020" />
  <defs>
    <filter id="filter0_d_3216_43" x="373.958" y={0} width="410.08" height="201.002" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset />
      <feGaussianBlur stdDeviation={2} />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3216_43" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3216_43" result="shape" />
    </filter>
  </defs>
</svg>


        </h2>
        <h2 id='h2II' className='hidden lg:block absolute top-72 left-48'>
        <svg width={1192} height={178} viewBox="0 0 1192 178" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M69.7208 178C56.6587 178 44.9538 175.937 34.6059 171.811C24.2581 167.685 15.9459 161.578 9.6693 153.491C3.56237 145.404 0.339274 135.666 0 124.278H46.3109C46.9894 130.715 49.2795 135.666 53.1812 139.132C57.0828 142.433 62.1719 144.083 68.4485 144.083C74.8947 144.083 79.9838 142.681 83.7158 139.875C87.4478 136.904 89.3138 132.86 89.3138 127.744C89.3138 123.453 87.7871 119.904 84.7336 117.099C81.8498 114.293 78.2026 111.982 73.792 110.167C69.5511 108.351 63.4442 106.288 55.4713 103.978C43.936 100.512 34.5211 97.0459 27.2267 93.58C19.9323 90.114 13.6558 84.9977 8.39703 78.2309C3.13828 71.4641 0.508911 62.6342 0.508911 51.7413C0.508911 35.567 6.53102 22.9411 18.5752 13.8637C30.6195 4.62123 46.3109 0 65.6495 0C85.3274 0 101.188 4.62123 113.233 13.8637C125.277 22.9411 131.723 35.6495 132.571 51.9889H85.497C85.1577 46.3774 83.0373 42.0037 79.1356 38.8679C75.234 35.567 70.2297 33.9165 64.1227 33.9165C58.864 33.9165 54.6231 35.3194 51.4 38.1252C48.1769 40.7659 46.5653 44.6444 46.5653 49.7608C46.5653 55.3723 49.2795 59.7459 54.7079 62.8818C60.1363 66.0176 68.6181 69.401 80.1534 73.032C91.6887 76.828 101.019 80.459 108.144 83.9249C115.438 87.3908 121.714 92.4247 126.973 99.0264C132.232 105.628 134.861 114.128 134.861 124.526C134.861 134.428 132.232 143.423 126.973 151.51C121.884 159.598 114.42 166.034 104.581 170.821C94.7422 175.607 83.1221 178 69.7208 178Z" fill="#1D1D1D" />
  <path d="M306.169 2.47566V176.267H262.658V104.72H194.972V176.267H151.461V2.47566H194.972V70.5563H262.658V2.47566H306.169Z" fill="#1D1D1D" />
  <path d="M438.599 145.569H371.932L361.245 176.267H315.698L380.329 2.47566H430.711L495.343 176.267H449.287L438.599 145.569ZM427.403 112.89L405.266 49.2656L383.383 112.89H427.403Z" fill="#1D1D1D" />
  <path d="M608.399 176.267L548.347 99.5216V176.267H504.835V2.47566H548.347V78.726L607.89 2.47566H659.035L589.823 87.6384L661.58 176.267H608.399Z" fill="#1D1D1D" />
  <path d="M756.559 178C739.765 178 724.328 174.204 710.248 166.612C696.338 159.02 685.227 148.457 676.915 134.924C668.772 121.225 664.701 105.876 664.701 88.8762C664.701 71.8767 668.772 56.6101 676.915 43.0765C685.227 29.5429 696.338 18.9801 710.248 11.388C724.328 3.79601 739.765 0 756.559 0C773.353 0 788.705 3.79601 802.616 11.388C816.695 18.9801 827.722 29.5429 835.695 43.0765C843.837 56.6101 847.909 71.8767 847.909 88.8762C847.909 105.876 843.837 121.225 835.695 134.924C827.552 148.457 816.526 159.02 802.616 166.612C788.705 174.204 773.353 178 756.559 178ZM756.559 139.38C770.809 139.38 782.174 134.758 790.656 125.516C799.308 116.274 803.633 104.06 803.633 88.8762C803.633 73.5271 799.308 61.3139 790.656 52.2364C782.174 42.994 770.809 38.3727 756.559 38.3727C742.14 38.3727 730.605 42.9114 721.953 51.9889C713.471 61.0663 709.231 73.3621 709.231 88.8762C709.231 104.225 713.471 116.521 721.953 125.764C730.605 134.841 742.14 139.38 756.559 139.38Z" fill="#1D1D1D" />
  <path d="M946.417 178C929.623 178 914.186 174.204 900.106 166.612C886.196 159.02 875.084 148.457 866.772 134.924C858.63 121.225 854.558 105.876 854.558 88.8762C854.558 71.8767 858.63 56.6101 866.772 43.0765C875.084 29.5429 886.196 18.9801 900.106 11.388C914.186 3.79601 929.623 0 946.417 0C963.211 0 978.563 3.79601 992.473 11.388C1006.55 18.9801 1017.58 29.5429 1025.55 43.0765C1033.69 56.6101 1037.77 71.8767 1037.77 88.8762C1037.77 105.876 1033.69 121.225 1025.55 134.924C1017.41 148.457 1006.38 159.02 992.473 166.612C978.563 174.204 963.211 178 946.417 178ZM946.417 139.38C960.666 139.38 972.032 134.758 980.514 125.516C989.165 116.274 993.491 104.06 993.491 88.8762C993.491 73.5271 989.165 61.3139 980.514 52.2364C972.032 42.994 960.666 38.3727 946.417 38.3727C931.998 38.3727 920.462 42.9114 911.811 51.9889C903.329 61.0663 899.088 73.3621 899.088 88.8762C899.088 104.225 903.329 116.521 911.811 125.764C920.462 134.841 931.998 139.38 946.417 139.38Z" fill="#1D1D1D" />
  <path d="M1142.89 176.267L1105.74 110.662H1095.31V176.267H1051.8V2.47566H1124.82C1138.9 2.47566 1150.86 4.8688 1160.7 9.65507C1170.71 14.4413 1178.17 21.0431 1183.09 29.4604C1188.01 37.7126 1190.47 46.955 1190.47 57.1878C1190.47 68.7408 1187.08 79.0561 1180.3 88.1335C1173.68 97.2109 1163.84 103.648 1150.78 107.444L1192 176.267H1142.89ZM1095.31 80.7065H1122.28C1130.25 80.7065 1136.19 78.8085 1140.09 75.0125C1144.16 71.2165 1146.2 65.8526 1146.2 58.9207C1146.2 52.319 1144.16 47.1201 1140.09 43.3241C1136.19 39.528 1130.25 37.63 1122.28 37.63H1095.31V80.7065Z" fill="#1D1D1D" />
</svg>





        </h2>
        <h2 id='h2III'  className='hidden lg:block absolute top-72 left-[190px] z-20'>
        <svg width={1199} height={182} viewBox="0 0 1199 182" fill="none" xmlns="http://www.w3.org/2000/svg">
  <mask id="path-1-outside-1_3216_112" maskUnits="userSpaceOnUse" x={0} y={0} width={1199} height={182} fill="black">
    <rect fill="white" width={1199} height={182} />
    <path d="M72.7208 180C59.6587 180 47.9538 177.937 37.6059 173.811C27.2581 169.685 18.9459 163.578 12.6693 155.491C6.56237 147.404 3.33927 137.666 3 126.278H49.3109C49.9894 132.715 52.2795 137.666 56.1812 141.132C60.0828 144.433 65.1719 146.083 71.4485 146.083C77.8947 146.083 82.9838 144.681 86.7158 141.875C90.4478 138.904 92.3138 134.86 92.3138 129.744C92.3138 125.453 90.7871 121.904 87.7336 119.099C84.8498 116.293 81.2026 113.982 76.792 112.167C72.5511 110.351 66.4442 108.288 58.4713 105.978C46.936 102.512 37.5211 99.0459 30.2267 95.58C22.9323 92.114 16.6558 86.9977 11.397 80.2309C6.13828 73.4641 3.50891 64.6342 3.50891 53.7413C3.50891 37.567 9.53102 24.9411 21.5752 15.8637C33.6195 6.62123 49.3109 2 68.6495 2C88.3274 2 104.188 6.62123 116.233 15.8637C128.277 24.9411 134.723 37.6495 135.571 53.9889H88.497C88.1577 48.3774 86.0373 44.0037 82.1356 40.8679C78.234 37.567 73.2297 35.9165 67.1227 35.9165C61.864 35.9165 57.6231 37.3194 54.4 40.1252C51.1769 42.7659 49.5653 46.6444 49.5653 51.7608C49.5653 57.3723 52.2795 61.7459 57.7079 64.8818C63.1363 68.0176 71.6181 71.401 83.1534 75.032C94.6887 78.828 104.019 82.459 111.144 85.9249C118.438 89.3908 124.714 94.4247 129.973 101.026C135.232 107.628 137.861 116.128 137.861 126.526C137.861 136.428 135.232 145.423 129.973 153.51C124.884 161.598 117.42 168.034 107.581 172.821C97.7422 177.607 86.1221 180 72.7208 180Z" />
    <path d="M309.169 4.47566V178.267H265.658V106.72H197.972V178.267H154.461V4.47566H197.972V72.5563H265.658V4.47566H309.169Z" />
    <path d="M441.599 147.569H374.932L364.245 178.267H318.698L383.329 4.47566H433.711L498.343 178.267H452.287L441.599 147.569ZM430.403 114.89L408.266 51.2656L386.383 114.89H430.403Z" />
    <path d="M611.399 178.267L551.347 101.522V178.267H507.835V4.47566H551.347V80.726L610.89 4.47566H662.035L592.823 89.6384L664.58 178.267H611.399Z" />
    <path d="M759.559 180C742.765 180 727.328 176.204 713.248 168.612C699.338 161.02 688.227 150.457 679.915 136.924C671.772 123.225 667.701 107.876 667.701 90.8762C667.701 73.8767 671.772 58.6101 679.915 45.0765C688.227 31.5429 699.338 20.9801 713.248 13.388C727.328 5.79601 742.765 2 759.559 2C776.353 2 791.705 5.79601 805.616 13.388C819.696 20.9801 830.722 31.5429 838.695 45.0765C846.837 58.6101 850.909 73.8767 850.909 90.8762C850.909 107.876 846.837 123.225 838.695 136.924C830.552 150.457 819.526 161.02 805.616 168.612C791.705 176.204 776.353 180 759.559 180ZM759.559 141.38C773.809 141.38 785.174 136.758 793.656 127.516C802.308 118.274 806.633 106.06 806.633 90.8762C806.633 75.5271 802.308 63.3139 793.656 54.2364C785.174 44.994 773.809 40.3727 759.559 40.3727C745.14 40.3727 733.605 44.9114 724.953 53.9889C716.471 63.0663 712.231 75.3621 712.231 90.8762C712.231 106.225 716.471 118.521 724.953 127.764C733.605 136.841 745.14 141.38 759.559 141.38Z" />
    <path d="M949.417 180C932.623 180 917.186 176.204 903.106 168.612C889.196 161.02 878.084 150.457 869.772 136.924C861.63 123.225 857.558 107.876 857.558 90.8762C857.558 73.8767 861.63 58.6101 869.772 45.0765C878.084 31.5429 889.196 20.9801 903.106 13.388C917.186 5.79601 932.623 2 949.417 2C966.211 2 981.563 5.79601 995.473 13.388C1009.55 20.9801 1020.58 31.5429 1028.55 45.0765C1036.69 58.6101 1040.77 73.8767 1040.77 90.8762C1040.77 107.876 1036.69 123.225 1028.55 136.924C1020.41 150.457 1009.38 161.02 995.473 168.612C981.563 176.204 966.211 180 949.417 180ZM949.417 141.38C963.666 141.38 975.032 136.758 983.514 127.516C992.165 118.274 996.491 106.06 996.491 90.8762C996.491 75.5271 992.165 63.3139 983.514 54.2364C975.032 44.994 963.666 40.3727 949.417 40.3727C934.998 40.3727 923.462 44.9114 914.811 53.9889C906.329 63.0663 902.088 75.3621 902.088 90.8762C902.088 106.225 906.329 118.521 914.811 127.764C923.462 136.841 934.998 141.38 949.417 141.38Z" />
    <path d="M1145.89 178.267L1108.74 112.662H1098.31V178.267H1054.8V4.47566H1127.82C1141.9 4.47566 1153.86 6.8688 1163.7 11.6551C1173.71 16.4413 1181.17 23.0431 1186.09 31.4604C1191.01 39.7126 1193.47 48.955 1193.47 59.1878C1193.47 70.7408 1190.08 81.0561 1183.3 90.1335C1176.68 99.2109 1166.84 105.648 1153.78 109.444L1195 178.267H1145.89ZM1098.31 82.7065H1125.28C1133.25 82.7065 1139.19 80.8085 1143.09 77.0125C1147.16 73.2165 1149.2 67.8526 1149.2 60.9207C1149.2 54.319 1147.16 49.1201 1143.09 45.3241C1139.19 41.528 1133.25 39.63 1125.28 39.63H1098.31V82.7065Z" />
  </mask>
  <path d="M72.7208 180C59.6587 180 47.9538 177.937 37.6059 173.811C27.2581 169.685 18.9459 163.578 12.6693 155.491C6.56237 147.404 3.33927 137.666 3 126.278H49.3109C49.9894 132.715 52.2795 137.666 56.1812 141.132C60.0828 144.433 65.1719 146.083 71.4485 146.083C77.8947 146.083 82.9838 144.681 86.7158 141.875C90.4478 138.904 92.3138 134.86 92.3138 129.744C92.3138 125.453 90.7871 121.904 87.7336 119.099C84.8498 116.293 81.2026 113.982 76.792 112.167C72.5511 110.351 66.4442 108.288 58.4713 105.978C46.936 102.512 37.5211 99.0459 30.2267 95.58C22.9323 92.114 16.6558 86.9977 11.397 80.2309C6.13828 73.4641 3.50891 64.6342 3.50891 53.7413C3.50891 37.567 9.53102 24.9411 21.5752 15.8637C33.6195 6.62123 49.3109 2 68.6495 2C88.3274 2 104.188 6.62123 116.233 15.8637C128.277 24.9411 134.723 37.6495 135.571 53.9889H88.497C88.1577 48.3774 86.0373 44.0037 82.1356 40.8679C78.234 37.567 73.2297 35.9165 67.1227 35.9165C61.864 35.9165 57.6231 37.3194 54.4 40.1252C51.1769 42.7659 49.5653 46.6444 49.5653 51.7608C49.5653 57.3723 52.2795 61.7459 57.7079 64.8818C63.1363 68.0176 71.6181 71.401 83.1534 75.032C94.6887 78.828 104.019 82.459 111.144 85.9249C118.438 89.3908 124.714 94.4247 129.973 101.026C135.232 107.628 137.861 116.128 137.861 126.526C137.861 136.428 135.232 145.423 129.973 153.51C124.884 161.598 117.42 168.034 107.581 172.821C97.7422 177.607 86.1221 180 72.7208 180Z" stroke="white" strokeWidth={4} mask="url(#path-1-outside-1_3216_112)" />
  <path d="M309.169 4.47566V178.267H265.658V106.72H197.972V178.267H154.461V4.47566H197.972V72.5563H265.658V4.47566H309.169Z" stroke="white" strokeWidth={4} mask="url(#path-1-outside-1_3216_112)" />
  <path d="M441.599 147.569H374.932L364.245 178.267H318.698L383.329 4.47566H433.711L498.343 178.267H452.287L441.599 147.569ZM430.403 114.89L408.266 51.2656L386.383 114.89H430.403Z" stroke="white" strokeWidth={4} mask="url(#path-1-outside-1_3216_112)" />
  <path d="M611.399 178.267L551.347 101.522V178.267H507.835V4.47566H551.347V80.726L610.89 4.47566H662.035L592.823 89.6384L664.58 178.267H611.399Z" stroke="white" strokeWidth={4} mask="url(#path-1-outside-1_3216_112)" />
  <path d="M759.559 180C742.765 180 727.328 176.204 713.248 168.612C699.338 161.02 688.227 150.457 679.915 136.924C671.772 123.225 667.701 107.876 667.701 90.8762C667.701 73.8767 671.772 58.6101 679.915 45.0765C688.227 31.5429 699.338 20.9801 713.248 13.388C727.328 5.79601 742.765 2 759.559 2C776.353 2 791.705 5.79601 805.616 13.388C819.696 20.9801 830.722 31.5429 838.695 45.0765C846.837 58.6101 850.909 73.8767 850.909 90.8762C850.909 107.876 846.837 123.225 838.695 136.924C830.552 150.457 819.526 161.02 805.616 168.612C791.705 176.204 776.353 180 759.559 180ZM759.559 141.38C773.809 141.38 785.174 136.758 793.656 127.516C802.308 118.274 806.633 106.06 806.633 90.8762C806.633 75.5271 802.308 63.3139 793.656 54.2364C785.174 44.994 773.809 40.3727 759.559 40.3727C745.14 40.3727 733.605 44.9114 724.953 53.9889C716.471 63.0663 712.231 75.3621 712.231 90.8762C712.231 106.225 716.471 118.521 724.953 127.764C733.605 136.841 745.14 141.38 759.559 141.38Z" stroke="white" strokeWidth={4} mask="url(#path-1-outside-1_3216_112)" />
  <path d="M949.417 180C932.623 180 917.186 176.204 903.106 168.612C889.196 161.02 878.084 150.457 869.772 136.924C861.63 123.225 857.558 107.876 857.558 90.8762C857.558 73.8767 861.63 58.6101 869.772 45.0765C878.084 31.5429 889.196 20.9801 903.106 13.388C917.186 5.79601 932.623 2 949.417 2C966.211 2 981.563 5.79601 995.473 13.388C1009.55 20.9801 1020.58 31.5429 1028.55 45.0765C1036.69 58.6101 1040.77 73.8767 1040.77 90.8762C1040.77 107.876 1036.69 123.225 1028.55 136.924C1020.41 150.457 1009.38 161.02 995.473 168.612C981.563 176.204 966.211 180 949.417 180ZM949.417 141.38C963.666 141.38 975.032 136.758 983.514 127.516C992.165 118.274 996.491 106.06 996.491 90.8762C996.491 75.5271 992.165 63.3139 983.514 54.2364C975.032 44.994 963.666 40.3727 949.417 40.3727C934.998 40.3727 923.462 44.9114 914.811 53.9889C906.329 63.0663 902.088 75.3621 902.088 90.8762C902.088 106.225 906.329 118.521 914.811 127.764C923.462 136.841 934.998 141.38 949.417 141.38Z" stroke="white" strokeWidth={4} mask="url(#path-1-outside-1_3216_112)" />
  <path d="M1145.89 178.267L1108.74 112.662H1098.31V178.267H1054.8V4.47566H1127.82C1141.9 4.47566 1153.86 6.8688 1163.7 11.6551C1173.71 16.4413 1181.17 23.0431 1186.09 31.4604C1191.01 39.7126 1193.47 48.955 1193.47 59.1878C1193.47 70.7408 1190.08 81.0561 1183.3 90.1335C1176.68 99.2109 1166.84 105.648 1153.78 109.444L1195 178.267H1145.89ZM1098.31 82.7065H1125.28C1133.25 82.7065 1139.19 80.8085 1143.09 77.0125C1147.16 73.2165 1149.2 67.8526 1149.2 60.9207C1149.2 54.319 1147.16 49.1201 1143.09 45.3241C1139.19 41.528 1133.25 39.63 1125.28 39.63H1098.31V82.7065Z" stroke="white" strokeWidth={4} mask="url(#path-1-outside-1_3216_112)" />
</svg>






        </h2>
      </div>
    </div>
  );
};

export default Contact;
