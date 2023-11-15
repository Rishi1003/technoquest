import bottomleft from "../assets/leftbottom.0983230c.png";
import bottomright from "../assets/rightBottom.f55e2fe4.png";
import topright from "../assets/rightTop.1e802db8.png";
import topleft from "../assets/leftTop.c7fe8e9a.png";
import dots from "../assets/dots.png";
import { gsap } from "gsap";
import { useIntersection, useScratch } from "react-use";
import { useRef, useState } from "react";

export default function Events() {
  const [dayButton,setDay] = useState(1);
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -40,
      ease: "power1.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power1.out",
    });
  };

  intersection && !intersection.isIntersecting ? fadeOut(sectionRef.current) : fadeIn(sectionRef.current);

  return (
    <>
      <div className="relative w-[95vw] h-max plus-poster bg-cover">
        <img src={bottomleft} alt="border" className="absolute bottom-4 left-4" />
        <img src={bottomright} alt="border" className="absolute bottom-4 right-4" />
        <img src={topright} alt="border" className="absolute top-4 right-4" />
        <img src={topleft} alt="border" className="absolute top-4 left-4" />
        <img src={dots} alt="border" className="absolute top-20 left-4" />

        <div className="flex h-full w-full flex-col md:flex-row justify-around gap-10 md:gap-4 py-20 mt-5 lg:pb-10 lg:pt-20 lg:px-12 fadeIn" ref={sectionRef}>
          <div className="flex md:flex-col gap-8 self-center">
            <button onClick={()=>setDay(1)} className="text-white text-4xl md:text-6xl max-w-max bg-green-400 px-3 py-2 rounded-md">Day 1</button>
            <button onClick={()=>setDay(2)} className="text-white text-4xl md:text-6xl md:ml-20 bg-green-400 px-3 py-2 rounded-md">Day 2</button>
          </div>
          
            <div className={dayButton==1?"text-white text-3xl md:text-6xl max-w-[40%] self-center":"hidden"}>
                <ul className="list-decimal break-words">
                    <li className="mb-6"><h1 className="mb-2">Expert talk:</h1><p className="text-base break-words">Gain knowledge from the top industry experts with years of experience</p></li>
                    <li className="mb-6"><h1 className="mb-2">Quiz:</h1><p className="text-base break-words">Flex your tech savvy in our quiz and let the bits and bytes of your knowledge shine!</p></li>
                    <li className="mb-6"><h1 className="mb-2">Stalls:</h1><p className="text-base break-words">Stalls of Skills: Dive into Tech Challenges! Unlock the door to small victories and win exciting prizes.</p></li>
                </ul>
            </div>
          
          
          
          <div className={dayButton==2?"text-white text-3xl md:text-6xl max-w-[40%] self-center":"hidden"}>
            <ul className="list-decimal break-words">
                <li className="mb-6"><h1 className="mb-2">Workshop:</h1><p className="text-base break-words capitalize">Participate in the multidisciplinary Workshop and know the way of engineering</p></li>
                <li className="mb-6"><h1 className="mb-2">Build And Explore:</h1><p className="text-base break-words capitalize">Watch the builders build their projects in realtime</p></li>
            </ul>
          </div>
          

        </div>
      </div>
    </>
  );
}
