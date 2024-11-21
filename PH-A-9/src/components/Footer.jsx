import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
    <footer className="bg-gradient-to-r from-[#e0f8c4] to-[#f4ffe6] text-black py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h4 className="text-2xl font-bold mb-4">About Learn Arabic</h4>
                <p className="text-sm leading-relaxed">Learn Arabic is your trusted platform for mastering the beautiful Arabic language.  Explore lessons, exercises, and resources to make learning Arabic fun and accessible.</p>
            </div>
            <div>
                <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-green-300">About Us</Link></li>
                <li><Link to="/courses" className="hover:text-green-300">Courses</Link></li>
                <li><Link to="/contact" className="hover:text-green-300">Contact</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-2xl font-bold mb-4">Stay Connected</h4>
                <ul className="text-sm space-y-2">
                    <li>Email: <p className="hover:underline">learn@abic.com</p></li>
                    <li>Phone: <p className="hover:underline">+7 (123) 416-36390</p></li>
                </ul>
                <div className="mt-4 flex space-x-4">
                    <a href="https://facebook.com" target="_blank" className="p-2 rounded-full"><FaFacebook className="size-6"/></a>
                    <a href="https://twitter.com" target="_blank" className="p-2 rounded-full"><AiFillTwitterCircle className="size-6"/></a>
                    <a href="https://www.linkedin.com/" target="_blank" className="p-2 rounded-full"><FaLinkedin className="size-6"/></a>
                </div>
            </div>
        </div>
        <div className="container mx-auto mt-8 text-center text-sm border-t border-green-600 pt-4">
            <p className="text-gray-700">©  2024 Learn Arabic. All rights reserved.</p>
        </div>
    </footer>
    );
};

export default Footer;