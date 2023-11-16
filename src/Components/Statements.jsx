import bottomleft from "../assets/leftbottom.0983230c.png"
import bottomright from "../assets/rightBottom.f55e2fe4.png"
import topright from "../assets/rightTop.1e802db8.png"
import topleft from "../assets/leftTop.c7fe8e9a.png"
import dots from "../assets/dots.png"
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai"
import { useState } from "react"
import { gsap } from "gsap";
import { useIntersection } from "react-use";
import { useRef } from "react";
export default function Statements(){
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
    const [show, setShow] = useState(1);
    return<>
        <div className="relative w-[95vw] bg-cover plus-poster">
            <img src={bottomleft} alt="border" className="absolute bottom-4 left-4"/>
            <img src={bottomright} alt="border" className="absolute bottom-4 right-4"/>
            <img src={topright} alt="border" className="absolute top-4 right-4"/>
            <img src={topleft} alt="border" className="absolute top-4 left-4"/>
            <img src={dots} alt="border" className="absolute top-20 left-4"/>

            <div className="flex w-full px-10 flex-col gap-5 pb-10 pt-12 mt-10 lg:pb-20 lg:pt-16" ref={sectionRef} >
                <h1 className="text-white select-none text-center mb-8 text-3xl">Choose One Problem Statement</h1>
                <div onClick={()=>{show == 1?setShow(0):setShow(1)}} className="px-2 select-none border-x-2 border-green-400"><div className="text-white flex items-center justify-between px-4 bg-green-400 py-1 text-xl">1.Smart Cities and Infrastructure {show==1?<AiOutlineDown/>:<AiOutlineRight/>} </div></div>
                    <div className={show==1?"":"hidden"}><div className={"flex md:px-10 flex-col gap-6 text-white"}> 
                        <p>a. Design a prototype of a smart traffic light system that optimizes traffic flow at a busy intersection.</p>
                        <p>b. Develop a low-cost sensor network to monitor air quality in a specific urban area and provide real-time data to residents.</p>
                    </div></div>
                <div onClick={()=>{show == 2?setShow(0):setShow(2)}} className="px-2 select-none border-x-2 border-green-400"><div className="text-white flex items-center justify-between px-4 bg-green-400 py-1 text-xl">2. Healthcare and Biomedical Engineering {show==2?<AiOutlineDown/>:<AiOutlineRight/>} </div></div>
                    <div className={show==2?"":"hidden"}><div className={"flex md:px-10 flex-col gap-6 text-white"}> 
                        <p>a. Create a wearable health monitoring device that tracks heart rate, body temperature, and activity levels for remote patient monitoring.</p>
                        <p>b. Design a smartphone application that uses image recognition to identify and classify common skin conditions.</p>
                    </div></div>
                <div onClick={()=>{show == 3?setShow(0):setShow(3)}} className="px-2 select-none border-x-2 border-green-400"><div className="text-white flex items-center justify-between px-4 bg-green-400 py-1 text-xl">3. Environmental Sustainability {show==3?<AiOutlineDown/>:<AiOutlineRight/>} </div></div>
                    <div className={show==3?"":"hidden"}><div className={"flex md:px-10 flex-col gap-6 text-white"}> 
                        <p>a. Develop a mobile app that educates users about sustainable practices and rewards them for eco-friendly behaviours.</p>
                        <p>b. Design a small-scale composting system for urban households to reduce organic waste.</p>
                    </div></div>
                <div onClick={()=>{show == 4?setShow(0):setShow(4)}} className="px-2 select-none border-x-2 border-green-400"><div className="text-white flex items-center justify-between px-4 bg-green-400 py-1 text-xl">4. Transportation and Mobility {show==4?<AiOutlineDown/>:<AiOutlineRight/>} </div></div>
                    <div className={show==4?"":"hidden"}><div className={"flex md:px-10 flex-col gap-6 text-white"}> 
                        <p>a. Create a mobile app that provides real-time information on available parking spaces in a busy city centre.</p>
                        <p>b. Develop a smart waste management system that optimizes the collection and disposal of waste in urban areas. The system should incorporate sensors and IoT technology to monitor the fill levels of waste bins, provide real-time status updates to waste management teams, and dynamically optimize collection routes. The goal is to improve the efficiency of waste collection while minimizing environmental impact and operational costs.</p>
                    </div></div>
                <div onClick={()=>{show == 5?setShow(0):setShow(5)}} className="px-2 select-none border-x-2 border-green-400"><div className="text-white flex items-center justify-between px-4 bg-green-400 py-1 text-xl">5. AI and Machine Learning Applications {show==5?<AiOutlineDown/>:<AiOutlineRight/>} </div></div>
                    <div className={show==5?"":"hidden"}><div className={"flex md:px-10 flex-col gap-6 text-white"}> 
                        <p>a. Create a real-time sentiment analysis tool for analysing social media data related to a specific topic or event.</p>
                        <p>b. Creating a real-time sentiment analysis tool for social media data involves leveraging natural language processing (NLP) techniques to automatically determine the sentiment expressed in a given piece of text.</p>
                    </div></div>
                <div onClick={()=>{show == 6?setShow(0):setShow(6)}} className="px-2 select-none border-x-2 border-green-400"><div className="text-white flex items-center justify-between px-4 bg-green-400 py-1 text-xl">6. Robotics and automation {show==6?<AiOutlineDown/>:<AiOutlineRight/>} </div></div>
                    <div className={show==6?"":"hidden"}><div className={"flex md:px-10 flex-col gap-6 text-white"}> 
                        <p>a. Design and construct a maze-solving robot capable of autonomously navigating through a predefined maze, starting from a designated entrance and reaching the exit point in the shortest possible time. The robot should make intelligent decisions to find the optimal path through the maze.</p>
                        <p>b. Develop an autonomous object-detection arm system with the capability to identify and remove out-of-shape objects from a designated area.</p>
                    </div></div>
                <div onClick={()=>{show == 7?setShow(0):setShow(7)}} className="px-2 select-none border-x-2 border-green-400"><div className="text-white flex items-center justify-between px-4 bg-green-400 py-1 text-xl">7. Aerospace and Aviation {show==7?<AiOutlineDown/>:<AiOutlineRight/>} </div></div>
                    <div className={show==7?"":"hidden"}><div className={"flex md:px-10 flex-col gap-6 text-white"}> 
                        <p>a. Conduct experiments using weather balloons to collect data on atmospheric conditions, such as temperature, humidity, and pressure, at various altitudes. Analyse the data to gain insights into atmospheric behaviour.</p>
                        <p>b. Design a communication system for a small-scale satellite that enables reliable data transmission to and from ground stations. Consider factors like data rates, signal strength, and power consumption.</p>
                    </div></div>
            </div>


        </div>
    </>
}