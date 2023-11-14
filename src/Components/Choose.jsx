import bottomleft from "../assets/leftbottom.0983230c.png"
import bottomright from "../assets/rightBottom.f55e2fe4.png"
import topright from "../assets/rightTop.1e802db8.png"
import topleft from "../assets/leftTop.c7fe8e9a.png"
import { gsap } from "gsap";
import { useIntersection } from "react-use";
import { useRef } from "react";
export default function Choose(){
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
    return<>
        <div className="relative w-[95vw] h-max ">
            <img src={bottomleft} alt="border" className="absolute bottom-4 left-4"/>
            <img src={bottomright} alt="border" className="absolute bottom-4 right-4"/>
            <img src={topright} alt="border" className="absolute top-4 right-4"/>
            <img src={topleft} alt="border" className="absolute top-4 left-4"/>

            <div className="flex h-full w-full flex-col justify-center text-center gap-4 py-20 mt-5 lg:py-20 lg:px-24" ref={sectionRef}>
                <h1 className="text-5xl text-green-400">Choose Your Track</h1>
                <p className="text-white w-[80vw] text-lg m-auto">Whether you're a Builder eager to tackle specific challenges or an Explorer looking to broaden your knowledge, both tracks offer unique pathways to success. Choose your track and contribute to the vibrant ecosystem of innovation, collaboration, and problem-solving at our hackathon!
                </p>
            </div>


        </div>
    </>
}