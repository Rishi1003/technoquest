import React from 'react';
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import hl from "../assets/hl.png";
import hr from "../assets/hr.png";

const Hero = () => {
    const url = "https://player.vimeo.com/progressive_redirect/playback/855402035/rendition/720p/file.mp4?loc=external&signature=25efff13a9fa9901af9a2a96ebfbca57cd27facd2b3b5e67c2a7b75e506a2f3c";

    return (
        <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
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
                <h2 className="text-3xl md:text-6xl font-bold p-2">AIEMS</h2>
                <h1 className='text-4xl md:text-9xl font-bold p-2'><span className='text-green-400'>TECHNO</span>QUEST</h1>
                <p className='text-[12px] md:text-3xl flex flex-wrap justify-center  p-2 tracking-wide w-full font-bold'>D I S C O V E R &nbsp;&nbsp;T H E &nbsp;&nbsp;E N G I N E E R&nbsp;&nbsp; I N&nbsp;&nbsp; Y O U</p>
                <p className='text-gray-400 p-2 md:max-w-[900px] md:text-xl'>"Experience innovation live at AIEMS in the Techno Quest Hackathon—an offline challenge where creativity thrives and game-changing projects unfold!"</p>
                <p className='text-xl text-green-400 font-bold md:text-3xl p-2'>02-12-2023 -- 03-12-2023</p>
                <button className='bg-green-400 text-black px-5 py-2 md:px-10 md:py-5 md:text-2xl font-bold m-2 rounded-br-3xl rounded-tl-3xl hover:bg-green-600' >Register Now</button>
            </div>
        </div>
    );
}

export default Hero;
