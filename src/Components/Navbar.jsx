import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


export const nav = [
    {
        id: 1,
        name: "HOME",
        href: "#hero"
    },
    {
        id: 2,
        name: "PRIZES",
        href: "#prizes"
    },
    {
        id: 3,
        name: "EVENTS",
        href: "#events"
    },
    {
        id: 4,
        name: "TRACKS",
        href: "#tracks"
    },
]

const Navbar = () => {
    const [navv, setNav] = useState(true);

    const handleNav = () => {
        setNav(!navv);
    }

    const handleMenuItemClick = () => {
        // Close the sidebar when a menu item is clicked
        setNav(true);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                // Reset navv state when screen size is greater than 768px
                setNav(true);
            }
        };

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="text-white w-full flex justify-between items-center mx-auto px-3 md:px-14 h-24 z-50">
            <h1 className="w-full text-3xl md:text-5xl font-bold text-white">AIEMS</h1>
            <ul className="hidden md:flex">
                {nav.map((item) => {
                    const { id, name, href } = item
                    return <li className="p-4 text-xl md:text-2xl text-gray-400 hover:text-white" key={id}><a href={href}>{name}</a></li>
                })}
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!navv ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!navv ? "fixed left-0 top-0 w-[70%] h-screen border-r border-r-gray-900 bg-[#000000] z-50 ease-in-out duration-500" : "fixed left-[-100%]"}>
                <h1 className="w-full text-3xl md:text-5xl font-bold text-white p-2 mt-5 px-8">AIEMS</h1>
                <ul className="p-4 uppercase">
                    {nav.map((item) => {
                        const { id, name, href } = item
                        return <li className="p-4 border-b border-gray-600 md:text-2xl" onClick={handleMenuItemClick} key={id}><a href={href}>{name}</a></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
