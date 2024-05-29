import bottomleft from "../assets/leftbottom.0983230c.png"
import bottomright from "../assets/rightBottom.f55e2fe4.png"
import topright from "../assets/rightTop.1e802db8.png"
import topleft from "../assets/leftTop.c7fe8e9a.png"
import dots from "../assets/dots.png"
import { gsap } from "gsap";
import { useIntersection } from "react-use";
import { useRef } from "react";
export default function Steps(){
    const sectionRef = useRef(null);

    const intersection = useIntersection(sectionRef, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
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
    <div id="outcome" className="poster relative w-[95vw] h-max bg-opacity-10 bg-cover">
    <img src={bottomleft} alt="border" className="absolute bottom-4 left-4"/>
    <img src={bottomright} alt="border" className="absolute bottom-4 right-4"/>
    <img src={topright} alt="border" className="absolute top-4 right-4"/>
    <img src={topleft} alt="border" className="absolute top-4 left-4"/>
    <img src={dots} alt="border" className="absolute bottom-20 right-4"/>

    <div className="flex h-full w-full px-11 flex-col justify-center md:flex-row gap-4 py-20 mt-5 lg:py-20 lg:px-24" ref={sectionRef}>
        <div className="w-full md:w-4/5">
            <h1 className="text-4xl mb-3 lg:text-7xl text-center font-bold text-white">Transform Your Skills: From Learner to Builder</h1>
            <div className="flex flex-col mt-10 gap-8">
                <div>
                    <h1 className="text-green-400 text-2xl"><span className="text-green-400 capitalize"># </span>Get Certified</h1>
                    <p className="md:text-white text-gray-400 mt-1 ml-5 ">Receive a certificate of completion, validating your achievements and expertise.</p>
                </div>
                <div>
                    <h1 className="text-green-400 text-2xl"><span className="text-green-400"># </span>Master Problem-Solving</h1>
                    <p className="md:text-white text-gray-400 mt-1 ml-5 ">Develop a keen problem-solving mindset to tackle real-world challenges effectively.</p>
                </div>
                <div>
                    <h1 className="text-green-400 text-2xl w-full"><span className="text-green-400"># </span>Hands-on Project Experience</h1>
                    <p className="md:text-white text-gray-400 mt-1 ml-5 ">Build practical skills through hands-on projects, culminating in a final project showcase.</p>
                </div>
                <div>
                    <h1 className="text-green-400 text-2xl"><span className="text-green-400"># </span>Expert Guidance & Collaboration</h1>
                    <p className="md:text-white text-gray-400 mt-1 ml-5 ">Interact with industry experts, collaborate with peers, and grow within a supportive community.</p>
                </div>
                <div>
                    <h1 className="text-green-400 text-2xl"><span className="text-green-400 capitalize"># </span>Launch Your Career</h1>
                    <p className="md:text-white text-gray-400 mt-1 ml-5 ">Gain the skills and confidence to kickstart your career in web development and beyond.</p>
                </div>
                <div>
                    <h1 className="text-green-400 text-2xl"><span className="text-green-400 capitalize"># </span>Complete a Final Project</h1>
                    <p className="md:text-white text-gray-400 mt-1 ml-5 ">Cap off your bootcamp experience by completing a comprehensive final project, showcasing your newfound skills.</p>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
}