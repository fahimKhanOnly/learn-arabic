import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthenticationContext } from "../AuthProvider/AuthProvider";


const NavBar = () => {
    const {user, signOutUser} = useContext(AuthenticationContext);
    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/start-learning">Start Learning</NavLink></li>
        <li><NavLink to="/tutorials">Tutorials</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        {user && <li><NavLink to="/profile">My Profile</NavLink></li>}
    </>;

    return (
        <div className="container mx-auto mt-2 navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {navItems}
                </ul>
                </div>
                <Link to="/"><img className="w-40" src={logo} /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-7 menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="mr-4">
                            <p className="font-bold italic">Welcome</p>
                            <p className="pl-6 italic">{user.displayName}</p>
                        </div>
                        <div className="flex gap-4">
                            <Link onClick={() => signOutUser()} to="/login" className="btn btn-outline px-6 hover:bg-red-600 hover:text-white">Log out</Link>
                            <img className="size-12 rounded-full" src={user.photoURL}/>
                        </div>
                    </> : <Link to="/login" className="btn btn-outline px-6 hover:bg-green-500 hover:text-black">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;