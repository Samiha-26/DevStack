import Logo from "../assets/logo-text.png";
import { FaBars } from "react-icons/fa6";

const Nav = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
            <div className="container mx-auto flex items-center justify-between px-5 py-4 md:px-8 lg:px-16">
             <FaBars className ="text-gray-600 block text-xl md:hidden" />
             <img src={Logo} alt="" />
                
                <ul className="hidden md:flex items-center gap-4 text-gray-600 font-sans font-semibold">
                    <li><a href="" className="hover:text-pink-600 transition-colors">Home</a></li>
                    <li><a href="" className="hover:text-pink-600 transition-colors">Technologies</a></li>
                    <li><a href="" className="hover:text-pink-600 transition-colors">Projects</a></li>
                    <li><a href="" className="hover:text-pink-600 transition-colors">About</a></li>
                    <li><a href="" className="hover:text-pink-600 transition-colors">Contact</a></li>
                </ul>

                <div className="flex items-center gap-2">
                    <button className="btn rounded-4xl border-none py-4">Sign in</button>
                    <button className="btn btn-secondary rounded-4xl">Sign Up</button>
                </div>
                </div>
         </nav>
    );
};
export default Nav;