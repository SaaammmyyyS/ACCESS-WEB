import {Link} from '@inertiajs/react';
import logo from '/public/assets/images/logo.png';

export default function MainNavBar(){
    return(
        <div className="w-full h-auto fixed text-white">
            <div className="flex justify-around items-center p-5">
                <div>
                    <Link to="/">
                        <img src={logo} className=' w-40'/>
                    </Link>
                </div>
                <div className="flex">
                    <div className="flex px-5 items-center">
                        <Link to="/" className="mx-2">
                            <h6>About Us</h6>
                        </Link>
                        
                        <Link to="/" className="mx-2">
                            <h6>Resource</h6>
                        </Link>
                        
                        <Link to="/" className="mx-2">
                            <h6>Contact Us</h6>
                        </Link>
                        
                        <Link to="/" className="mx-2">
                            <h6>Blog</h6>
                        </Link>
                    </div>
                    <div>
                        <button className=" px-16 py-5  rounded-full bg-pink">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}