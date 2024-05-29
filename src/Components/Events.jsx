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

  return (
    <>
      <div className="relative w-[95vw] plus-poster bg-cover" id="events">
        <img src={bottomleft} alt="border" className="absolute bottom-4 left-4" />
        <img src={bottomright} alt="border" className="absolute bottom-4 right-4" />
        <img src={topright} alt="border" className="absolute top-4 right-4" />
        <img src={topleft} alt="border" className="absolute top-4 left-4" />
        <img src={dots} alt="border" className="absolute top-20 left-4" />

        <div className="flex py-20 w-full flex-col md:flex-row justify-around gap-10 md:gap-4  mt-5  lg:px-12 fadeIn" ref={sectionRef}>
          <h1 className="text-white text-center text-6xl md:hidden">Syllabus</h1>
          <div className="flex max-w-[80%] md:gap-8 md:flex-col self-center">
            <div className={dayButton==1?"border-2 max-w-max rounded-lg p-1 border-green-400":""}><button onClick={()=>setDay(1)} className="text-white text-3xl md:text-6xl max-w-max bg-green-400 px-3 py-2 rounded-md">Week 1</button></div>
            <div className={dayButton==2?"border-2 max-w-max rounded-lg p-1 border-green-400  ml-10":""}><button onClick={()=>setDay(2)} className={dayButton==2?"text-white text-3xl md:text-6xl max-w-max bg-green-400 px-3 py-2 rounded-md":"text-white text-4xl md:text-6xl max-w-max bg-green-400 px-3 py-2 rounded-md ml-10"}>Week 2</button></div>
          </div>
          
            {/* <div className={dayButton==1?"text-white text-3xl m-auto md:m-0 md:text-6xl max-w-[60%] md:max-w-[40%] self-center":"hidden"}>
                <ul className="list-decimal break-words">
                    <li className="mb-6"><h1 className="mb-2">Expert talk:</h1><p className="text-base break-words">Gain knowledge from the top industry experts with years of experience</p></li>
                    <li className="mb-6"><h1 className="mb-2">Quiz:</h1><p className="text-base break-words">Flex your tech savvy in our quiz and let the bits and bytes of your knowledge shine!</p></li>
                    <li className="mb-6"><h1 className="mb-2">Stalls:</h1><p className="text-base break-words">Stalls of Skills: Dive into Tech Challenges! Unlock the door to small victories and win exciting prizes.</p></li>
                </ul>
            </div> */}
          
          <div className={dayButton == 1 ? "text-white m-auto md:m-0  max-w-[80%] md:max-w-[40%] self-center" : "hidden"}>
            <h1 className="mb-8 text-3xl md:text-5xl"><span className="text-green-400">Week 1: </span>Setting Up Programmer Mindset and Fundamentals</h1>
            
            <ul className="text-lg break-words">
                <li className="mb-3"><strong className="text-green-400">Day 1:</strong> Introduction to programming mindset, web basics, and development setup.</li>
                <li className="mb-3"><strong className="text-green-400">Day 2:</strong> HTML/CSS fundamentals, building static web pages.</li>
                <li className="mb-3"><strong className="text-green-400">Day 3:</strong> JavaScript basics, problem-solving, and debugging.</li>
                <li className="mb-3"><strong className="text-green-400">Day 4:</strong> Node.js basics, Express.js intro, building APIs.</li>
                <li className="mb-3"><strong className="text-green-400">Day 5:</strong> MongoDB basics, database setup, CRUD operations.</li>
                <li className="mb-3"><strong className="text-green-400">Day 6:</strong> Advanced MongoDB with Mongoose, data modeling, queries.</li>
                <li className="mb-3"><strong className="text-green-400">Day 7:</strong> React intro, basic components, state management.</li>
            </ul>
          </div>



          
          
          {/* <div className={dayButton==2?"text-white text-3xl m-auto md:m-0 md:text-6xl max-w-[60%] md:max-w-[40%] self-center":"hidden"}>
            <ul className="list-decimal break-words">
                <li className="mb-6"><h1 className="mb-2">Workshop:</h1><p className="text-base break-words capitalize">Participate in the multidisciplinary Workshop and know the way of engineering</p></li>
                <li className="mb-6"><h1 className="mb-2">Build And Explore:</h1><p className="text-base break-words capitalize">Watch the builders build their projects in realtime</p></li>
            </ul>
          </div> */}
          
          <div className={dayButton == 2 ? "text-white m-auto md:m-0 max-w-[80%] md:max-w-[40%] self-center" : "hidden"}>
            <h1 className="mb-8 text-3xl md:text-5xl"><span className="text-green-400">Week 2: </span>Connecting Frontend to Backend and Advanced Topics</h1>
            
            <ul className="text-lg break-words">
                <li className="mb-3"><strong className="text-green-400">Day 8:</strong> React Router and State Management</li>
                <li className="mb-3"><strong className="text-green-400">Day 9:</strong> Connecting Frontend to Backend</li>
                <li className="mb-3"><strong className="text-green-400">Day 10:</strong> Authentication and Authorization</li>
                <li className="mb-3"><strong className="text-green-400">Day 11:</strong> Testing and Debugging</li>
                <li className="mb-3"><strong className="text-green-400">Day 12:</strong> Deployment and Final Project Planning</li>
                <li className="mb-3"><strong className="text-green-400">Day 13:</strong> Final Project Development</li>
                <li className="mb-3"><strong className="text-green-400">Day 14:</strong> Final Touches and Demo Day</li>
            </ul>
        </div>


        </div>
      </div>
    </>
  );
}
