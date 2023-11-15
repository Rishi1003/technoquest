import bottomleft from "../assets/leftbottom.0983230c.png";
import bottomright from "../assets/rightBottom.f55e2fe4.png";
import topright from "../assets/rightTop.1e802db8.png";
import topleft from "../assets/leftTop.c7fe8e9a.png";
import dots from "../assets/dots.png";
import { gsap } from "gsap";
import { useIntersection } from "react-use";
import { useRef } from "react";

export default function Intro() {
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
      <div className="relative w-[95vw] h-max md:h-screen plus-poster bg-cover">
        <img src={bottomleft} alt="border" className="absolute bottom-4 left-4" />
        <img src={bottomright} alt="border" className="absolute bottom-4 right-4" />
        <img src={topright} alt="border" className="absolute top-4 right-4" />
        <img src={topleft} alt="border" className="absolute top-4 left-4" />
        <img src={dots} alt="border" className="absolute top-20 left-4" />

        <div className="flex h-full w-full px-20 flex-col md:flex-row gap-10 md:gap-4 py-20 mt-5 lg:py-28 lg:px-24 fadeIn" ref={sectionRef}>
          <div className="w-full md:w-1/2 one">
            <h1 className="text-xl mb-3 lg:text-2xl font-bold text-white">
              <span className="text-green-400">JOIN US,</span> BE THE CHANGE
            </h1>
            <p className="text-white lg:text-xl">
              Don't miss the chance to be part of Ignite Change. Let's turn ideas into action and code into solutions. Together, we can harness the power of technology to make a lasting impact.
              <br />
              <div className="mt-2">
                <button className="text-green-400 mr-1 hover:scale-95">Register now</button>and be a catalyst for change!
              </div>
            </p>
          </div>
          <div className="w-full md:w-1/2 self-end two">
            <h1 className="text-xl lg:text-2xl mb-3 font-bold uppercase text-white">Prize worth <span className="text-green-400">₹30,000</span> up for grabs</h1>
            <p className="text-white lg:text-xl">
              Don't miss the chance to be part of Ignite Change. Let's turn ideas into action and code into solutions. Together, we can harness the power of technology to make a lasting impact.
              <br />
              <div className="mt-2">
                <button className="text-green-400 mr-1 hover:scale-95">Register now</button>and be a catalyst for change!
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
