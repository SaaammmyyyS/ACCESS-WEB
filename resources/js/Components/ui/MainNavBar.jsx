import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import logo from "/public/assets/images/logo.png";
import PrimaryButton from "@/Components/ui/PrimaryButton";


export default function MainNavBar({
    main = false
}) {
    const [bgClass, setBgClass] = useState('');
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
            <div className="flex justify-around items-center p-5">
                <div>
                    <Link to="/">
                        <img src={logo} className=" w-40" />
                    </Link>
                </div>
                <div className="flex">
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
                    <div>
                        <PrimaryButton>Subscribe</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
