import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import logo from "/public/assets/images/logo.png";
import PrimaryButton from "@/Components/ui/PrimaryButton";


export default function MainNavBar({
    main = false
}) {
    const [bgClass, setBgClass] = useState('');
    const [menuVisible, setMenuVisible] = useState(false);
    if(main){
        useEffect(() => {
            const handleScroll = () => {
                const currentScrollY = window.scrollY;
                    if(currentScrollY > 1) {
                        setBgClass('bg-[#08072c]');
                    } else {
                        setBgClass('');
                    }
            }
            window.addEventListener('scroll', handleScroll);
    
            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }, []);
    }else{
        useEffect(() => {
            setBgClass('bg-[#08072c]');
        }, []);
    }
    return (
        <div className={`w-full h-auto fixed text-white ${bgClass} transition-colors duration-100`}>
            <div className="flex lg:justify-around items-center p-5 sm:justify-between sm:px-10">
                <div>
                    <Link to="/">
                        <img src={logo} className=" w-40" />
                    </Link>
                </div>
                <div className=" hidden lg:flex">
                    <div className="flex px-5 items-center">
                        <Link to="/about" className="mx-2">
                            <h6>About Us</h6>
                        </Link>

                        <Link to="/" className="mx-2">
                            <h6>Resource</h6>
                        </Link>

                        <Link to="/contact" className="mx-2">
                            <h6>Contact Us</h6>
                        </Link>

                        <Link to="/" className="mx-2">
                            <h6>Blog</h6>
                        </Link>
                    </div>
                    <div className="hidden px-5 w-16 xl:block justify-center items-center">
                        <PrimaryButton>Subscribe</PrimaryButton>
                    </div>
                </div>
                <div className="hidden lg:block xl:hidden">
                        <PrimaryButton>Subscribe</PrimaryButton>
                    </div>
                {/*The Hamburger*/}
                <div className="lg:hidden">
                    <button
                        className="text-white focus:outline-none transition-all duration-300"
                        onClick={() => setMenuVisible(!menuVisible)}
                    >
                        <svg
                            className="w-6 h-6 transform ${menuVisible ? 'rotate-90' : 'rotate-0'}`"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            
            </div>

            {/*The Hamburger Menu*/}
            <div className={`lg:hidden ${menuVisible ? 'block' : 'hidden'}`}>
                <div className=" flex flex-col items-ceter bg-[#08072c] transition-all duration-300">
                    <div className="flex flex-col items-center py-5">
                        <Link to="/about" className="py-2">
                            <h6>About Us</h6>
                        </Link>

                        <Link to="/" className="py-2">
                            <h6>Resource</h6>
                        </Link>

                        <Link to="/contact" className="py-2">
                            <h6>Contact Us</h6>
                        </Link>

                        <Link to="/" className="py-2">
                            <h6>Blog</h6>
                        </Link>
                    </div>
                    <PrimaryButton>Subscribe</PrimaryButton>
                </div>
            </div>

        </div>
    );
}
