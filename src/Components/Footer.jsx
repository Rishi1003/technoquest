import logo from "../assets/print_transparent 1.svg"
import playStor from "../assets/google-play-badge.png"
import startUp from "../assets/Startup_India_logo.svg"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";


export const Footer = ()=>{
    return(
        <div className="w-full">
            <div className="text-green-400  bg-black  px-12 py-12 flex flex-col md:flex-row justify-around items-center imd:tems-start gap-8">
            <div className="flex flex-col justify-center items-center gap-5">
            <img src={logo} />
            <img src={startUp} />
            </div>
            <div className="flex flex-col mx-5 gap-5 md:gap-6">
                        <p className="text-center text-3xl font-bold">Follow us</p>
                        <div className=" text-center flex flex-col gap-2 ">
                            <a href="https://www.instagram.com/yuvamytr/" className="text-sm hover:underline">Instagram</a>
                            <a href="https://www.facebook.com/YuvaMytr" className="text-sm hover:underline">Facebook</a>
                            <a href="https://www.linkedin.com/in/yuvamytr" className="text-sm hover:underline">LinkedIn</a>
                            <a href="https://www.youtube.com/@yuvamytr" className="text-sm hover:underline">YouTube</a>
                            <a href="https://www.linkedin.com/in/yuvamytr" className="text-sm hover:underline">Twitter</a>
                        </div>
            </div>
            <div className="flex flex-col gap-5 mx-5 md:gap-6">
                        <p className="text-3xl text-center font-bold">Legal</p>
                        <div className=" text-center flex flex-col gap-2">
                            <a href="https://yuvamytr.com/disclaimer" className="text-sm hover:underline">Disclaimer</a>
                            <a href="https://bootcamp.yuvamytr.com/terms" className="text-sm hover:underline">Terms & Conditions </a>
                            <a href="https://yuvamytr.com/privacy" className="text-sm hover:underline">Data Privacy</a>
                            <a href="https://yuvamytr.com/refund_" className="text-sm hover:underline">Refund</a>
                            <a href="https://yuvamytr.com/cookies" className="text-sm hover:underline">Cookies</a>
                        </div>
            </div>
            <div className="flex flex-col mx-5 gap-5 md:gap-6">
                        <p className=" text-3xl text-center md:text-left font-bold">Contact us</p>
                        <div className="flex flex-col justify-center items-start md:items-start gap-2"> 
                            <div className="flex justify-center items-center gap-3">
                            <FaPhoneAlt /><a href="tel:7019057809">7019057809</a>
                            </div>
                            <div className="flex justify-center items-center gap-3">
                            <IoMdMail /><a href="mailto:contact@yuvamytr.com" >contact@yuvamytr.com</a>
                            </div>
                            <div className="flex justify-center items-start text-left gap-3" >
                                <FaLocationDot/><p>Postmaster, Post Office<br/>
                                                    BANGALORE CITY (SUB OFFICE),<br/>
                                                    BANGALORE, KARNATAKA (KA),<br/>
                                                    India (IN), Pincode:- 560079</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="bg-black text-white flex justify-center  items-center py-3">
                <p>© YuvaMytr. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;