import Logo from "../assets/logo-text.png";
import { FaBars } from "react-icons/fa6";

const Nav = () => {
    return (
        <nav className=" sticky top-0 z-50 container mx-auto grid grid-cols-3 md:grid-cols-3 gap-4 justify-center items-center px-4 pt-4">

             <FaBars className ="text-gray-600 block text-xl md:hidden" />
             <img src={Logo} alt="" />
                
                <ul className="hidden md:flex items-center gap-4 text-gray-600">
                    <li><a href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

                <div className="flex items-center gap-2">
                    <button className="btn rounded-4xl border-none">Sign in</button>
                    <button className="btn btn-secondary rounded-4xl">Sign Up</button>
                </div>
         </nav>
    );
};
export default Nav;