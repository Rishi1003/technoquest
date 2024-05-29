import React from 'react';
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import hl from "../assets/hl.png";
import hr from "../assets/hr.png";
import { FaRupeeSign } from "react-icons/fa";


const Hero = () => {
    const url = "https://player.vimeo.com/progressive_redirect/playback/855402035/rendition/720p/file.mp4?loc=external&signature=25efff13a9fa9901af9a2a96ebfbca57cd27facd2b3b5e67c2a7b75e506a2f3c";

    return (
        <div className="relative w-full h-[80vh] md:h-screen overflow-hidden flex" id='#hero'>
            <div className="w-full h-[80vh] md:h-screen relative z-20 flex items-center justify-center">
                <img src={c1} className="absolute left-0 top-0 md:px-14 p-3" alt="c1" />
                <img src={c2} className="absolute right-0 top-0 md:px-14 p-3" alt="c2" />
                <img src={c4} className="absolute left-0 bottom-0 md:px-14 p-3" alt="c4" />
                <img src={c3} className="absolute right-0 bottom-0 md:px-14 p-3" alt="c3" />
                <img src={hl} className="absolute left-0 top-10 md:px-14 p-3" alt="hl" />
                <img src={hr} className="absolute right-0 top-10 md:px-14 p-3" alt="hr" />
            </div>
            <video autoPlay loop muted className="object-cover w-full h-full absolute inset-0">
                <source src={url} type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex flex-col justify-center items-center z-30 p-6 text-white text-center">
                <h2 className="text-xl md:text-3xl lg:text-5xl font-bold p-2">Yuvamytr's</h2>
                <h1 className='text-3xl md:text-7xl lg:text-8xl font-bold p-2'>
                    <span className='glitch' data-text='Full Stack'>Full Stack</span>
                    <br/> Online BootCamp
                </h1>
                <p className='text-xs md:text-lg lg:text-xl xl:text-2xl flex flex-wrap justify-center p-2 tracking-wide w-full font-bold'>D I S C O V E R &nbsp;&nbsp;T H E &nbsp;&nbsp;E N G I N E E R&nbsp;&nbsp; I N&nbsp;&nbsp; Y O U</p>
                <p className='text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 p-2 md:max-w-[700px] lg:max-w-[900px]'>Launch Your Career in Tech: Master Fullstack Development with Our Intensive Bootcamp!</p>
                <p className='text-base md:text-lg lg:text-xl xl:text-2xl text-green-400 font-bold p-2'>15-06-2024 -- 28-06-2024</p>
                
                <div className="text-center p-2">
                    <p className='text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-400 line-through'>₹3499</p>
                    <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-green-400 font-bold'>₹599</p>
                </div>

                <a href="https://yuvamytr.com/version-test/bootcamp"><button className='bg-green-400 text-black p-3 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 text-sm md:text-base lg:text-lg xl:text-xl font-bold m-2 rounded-br-3xl rounded-tl-3xl hover:bg-green-600'>Register now</button></a>
            </div>
        </div>
    );
}

export default Hero;
