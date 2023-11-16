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
        <div className="relative plus-poster w-[95vw] h-max md:h-screen bg-cover">
            <img src={bottomleft} alt="border" className="absolute bottom-4 left-4"/>
            <img src={bottomright} alt="border" className="absolute bottom-4 right-4"/>
            <img src={topright} alt="border" className="absolute top-4 right-4"/>
            <img src={topleft} alt="border" className="absolute top-4 left-4"/>
            <img src={dots} alt="border" className="absolute top-20 left-4"/>

            <div className="flex h-full w-full px-10 md:px-16 flex-col md:flex-row gap-12 py-20 mt-5 md:py-10 lg:py-20 lg:px-24"  ref={sectionRef} id="tracks">
                
                    <div className="w-full md:w-1/2">
                        <h1 className="text-3xl mb-3 lg:text-4xl  font-bold text-green-400">Explore the Fest and Find Opportunities</h1>
                        <p className="text-white lg:text-xl">Explore and learn with the Explorer track! Dive into workshops, discover new domains, seize opportunities at the fest, and participate in exciting stalls. No fixed problem statements—just the freedom to explore emerging tech and trends. Expand your horizons with us at the hackathon!
                        <br/>
                        <div className="mt-2"><a target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc6NqwjwyaQy0w0InrrIQuNwGRDDQbCoNAAiFbUT55cckgS8w/viewform?usp=sf_link"><button className="text-white bg-green-400 px-2 py-1 mr-1 hover:scale-95">Register Now</button></a> As an explorer</div>
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 self-end">
                        <h1 className="text-3xl mb-3 lg:text-4xl  font-bold text-green-400">Build and Showcase Your Ideas</h1>
                        <p className="text-white lg:text-xl">Ready to bring ideas to life? Join the Builder track! Pick a challenge from our list, dive into hands-on creation, code up prototypes, and show how your solutions can make a real impact. Let's turn concepts into reality together!
                        <br/>
                        <div className="mt-2"><a target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdCXf65yOX__qiJwoFquu_6dzNHCKv8nmSOsnH8muuDokONMA/viewform?usp=sf_link" ><button className="text-white bg-green-400 px-2 py-1 mr-1 hover:scale-95">Register</button></a> your team as builders</div>
                        </p>
                    </div>
                
            </div>


        </div>
    </>
}