import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import s from "../assets/solanaLine.png"
import p from "../assets/prizeright.png"
import h from "../assets/hr.png";
import z from "../assets/dot.png";
import prize from "../assets/prizeLogo.webp"
import pga from "../assets/pga.png"
import { BsCurrencyRupee } from 'react-icons/bs';


const PrizeSection = ()=>{
    return(
        <div className="w-full min-h-[100vh] bg-black p-2 md:flex text-white">
            <div className="relative min-h-[100vh] md:w-[40%] p-5">
                <img src={c1} className="absolute left-0 top-0 md:px-14 md:pr-5 p-2" alt="c1" />
                <img src={c2} className="absolute right-0 top-0 md:px-14 md:pr-5 p-2" alt="c2" />
                <img src={c4} className="absolute left-0 bottom-0 md:px-14 md:pr-5 p-2" alt="c4" />
                <img src={c3} className="absolute right-0 bottom-0 md:px-14 md:pr-5 p-2" alt="c3" />
                <img src={s} className="absolute left-0 top-20 md:px-14 p-2" />
                <img src={p} className="absolute right-[-65px] top-20 md:px-14 p-2" />
                <div className="flex flex-col justify-between items-start px-10 py-5 gap-7 md:px-20  text-left">
                    <div>
                        <h1 className="text-white text-4xl font-bold">PRIZES</h1>
                        <img src={prize} className="p-10" />
                    </div>
                    <h1 className="flex justify-center text-green-400 items-center text-7xl font-bold"><BsCurrencyRupee/>30K</h1>
                    <div>
                        <p className="font-bold text-xl px-5 py-2">GRAND PRIZE</p>
                        <p className="text-sm md:text-xl px-5 py-2">AWS is offering $10k in credits to the Grand Prize winner via their Activate program (see Developer Resources for more details). Additionally, the Solana Foundation is providing the USDC and 3 passes to the 2024 Solana Breakpoint Conference, where you may present your project to the Solana community.</p>
                    </div>
                </div>
             </div>
            <div className="relative md:min-h-[100vh] md:w-[60%]">
                <img src={c1} className="absolute left-0 top-0 md:px-14 md:pl-5 p-2" alt="c1" />
                <img src={c2} className="absolute right-0 top-0 md:px-14  md:pl-5 p-2" alt="c2" />
                <img src={c4} className="absolute left-0 bottom-0 md:px-14  md:pl-5 p-2" alt="c4" />
                <img src={c3} className="absolute right-0 bottom-0 md:px-14  md:pl-5 p-2" alt="c3" />
                <img src={h} className="absolute right-0 top-10 md:px-14 p-2" />
                <img src={z} className="absolute right-0 bottom-20 transform rotate-90 md:px-8"/>
                <div className="flex flex-col items-start justify-center md:gap-5 px-14 py-20 text-center">
                    <div className="flex justify-around w-full items-center gap-10">
                        <h1 className="text-3xl md:text-5xl">First Prize</h1>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="flex justify-center text-green-400 items-center text-3xl md:text-8xl font-bold"><BsCurrencyRupee/>15K</h1>
                            <p className="text-sm md:text-xl p-1">PUBLIC GOODS AWARD</p>
                        </div>
                    </div>
                    <img src={pga} className="w-full p-5" />
                    <div className="flex justify-around w-full items-center gap-10">
                        <h1 className="text-3xl md:text-5xl">Second Prize</h1>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="flex justify-center text-green-400 items-center text-3xl md:text-8xl font-bold"><BsCurrencyRupee/>10K</h1>
                            <p className="text-sm md:text-xl p-1">PUBLIC GOODS AWARD</p>
                        </div>
                    </div>
                    <img src={pga} className="w-full p-5" />
                    <div className="flex justify-around w-full items-center gap-10">
                        <h1 className="text-3xl md:text-5xl">Third Prize</h1>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="flex justify-center text-green-400 items-center text-3xl md:text-8xl font-bold"><BsCurrencyRupee/>5K</h1>
                            <p className="text-sm md:text-xl p-1">PUBLIC GOODS AWARD</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PrizeSection;