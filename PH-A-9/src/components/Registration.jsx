import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useState } from "react";
import { IoMdEyeOff, IoIosEye } from "react-icons/io";
import Footer from "./Footer";
import { FcGoogle } from "react-icons/fc";


const Registration = () => {
    const [getErr, setErr] = useState(null);
    const [getEyeStatus, setEyeStatus] = useState(true);
    const registrationHandler = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const profile = e.target.photo.value;
        const pass = e.target.password.value;
        const checkPass = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if(!checkPass.test(pass)){
            setErr("Password must be contain at least 6 characters, Uppercase letter and Lowercase letter.");
        }
        else{
            setErr(null);
        }
    }
    return (
    <div>
        <NavBar></NavBar>
        <div className="hero bg-base-200 h-[90vh]">
            <div className="w-full hero-content flex-col">
                <h1 className="font-extrabold text-4xl">Registration</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={registrationHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text block">Password</span>
                            </label>

                            <input name="password" type={getEyeStatus ? "password" : "text"} placeholder="password" className="input input-bordered" required />
                            <span  className="absolute right-4 text-xl bottom-3.5" onClick={() => setEyeStatus(!getEyeStatus)}>{
                                getEyeStatus ? <IoMdEyeOff/> : <IoIosEye/>
                            }</span>
                        </div>
                        <div>
                            <p className="text-red-500">{getErr}</p>
                        </div>
                        <div className="form-control mt-6 gap-4">
                            <button className="btn bg-green-500 font-bold">Registration</button>
                            <button className="btn font-bold"><FcGoogle className="text-xl"/> Register with Google</button>
                        </div>
                    </form>

                    <div className="mx-auto flex flex-col gap-3 mb-5">
                        <p className="font-medium">Already have an account</p>
                        <Link className="btn btn-outline btn-sm hover:bg-green-500 hover:text-black" to="/Login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Registration;