import bottomleft from "../assets/leftbottom.0983230c.png"
import bottomright from "../assets/rightBottom.f55e2fe4.png"
import topright from "../assets/rightTop.1e802db8.png"
import topleft from "../assets/leftTop.c7fe8e9a.png"
import dots from "../assets/dots.png"
import { gsap } from "gsap";
import { useIntersection } from "react-use";
import { useRef } from "react";


export default function Intro(){

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
            amount: 0.1,
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
        <div className="relative bootcamp-features w-[95vw] h-max md:h-screen bg-cover">
    <img src={bottomleft} alt="border" className="absolute bottom-4 left-4"/>
    <img src={bottomright} alt="border" className="absolute bottom-4 right-4"/>
    <img src={topright} alt="border" className="absolute top-4 right-4"/>
    <img src={topleft} alt="border" className="absolute top-4 left-4"/>
    <img src={dots} alt="border" className="absolute top-20 left-4"/>

    <div className="flex h-full w-full px-10 md:px-16 flex-col md:flex-row gap-12 py-20 mt-5 md:py-10 lg:py-20 lg:px-24" ref={sectionRef} id="features">
        
        <div className="w-full md:w-1/2">
            <h1 className="text-3xl mb-3 lg:text-4xl  font-bold text-green-400">Unlock Your Potential</h1>
            <p className="text-white lg:text-xl">Discover a comprehensive learning experience designed to unlock your full potential. With a blend of theory and hands-on practice, our bootcamp equips you with the skills and knowledge needed to excel in the ever-evolving tech industry.
                <br/>
                <div className="mt-2"><a href="#program-details"><button className="text-white bg-green-400 px-2 py-1 mr-1 hover:scale-95">Learn More</button></a></div>
            </p>
        </div>
        
        <div className="w-full md:w-1/2 self-end">
            <h1 className="text-3xl mb-3 lg:text-4xl  font-bold text-green-400">Hands-On Learning</h1>
            <p className="text-white lg:text-xl">Immerse yourself in practical, hands-on learning experiences that prepare you for real-world challenges. From building projects to collaborating with peers, our bootcamp empowers you to apply your knowledge and skills effectively.
                <br/>
                <div className="mt-2"><a href="#program-details"><button className="text-white bg-green-400 px-2 py-1 mr-1 hover:scale-95">Explore Curriculum</button></a></div>
            </p>
        </div>
        
    </div>
</div>

    </>
}