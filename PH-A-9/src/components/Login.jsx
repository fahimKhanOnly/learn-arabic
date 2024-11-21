import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { IoMdEyeOff, IoIosEye } from "react-icons/io";
import { useState } from "react";
import Footer from "./Footer";


const Login = () => {
    const [getEyeStatus, setEyeStatus] = useState(true);
    const [getErr, setErr] = useState(null);

    const loginHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
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
                <h1 className="font-extrabold text-4xl">Login</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={loginHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type={getEyeStatus ? "password" : "text"} placeholder="password" className="input input-bordered" required />
                            <span  className="absolute right-4 text-xl bottom-[46px]" onClick={() => setEyeStatus(!getEyeStatus)}>{
                                getEyeStatus ? <IoMdEyeOff/> : <IoIosEye/>
                            }</span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        {/* Error container */}
                        <div>
                            <p className="text-red-500">{getErr}</p>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-bold">Login</button>
                        </div>
                    </form>
                    <div className="mx-auto flex flex-col gap-3 mb-5">
                        <p className="font-medium">Don't have an account</p>
                        <Link className="btn btn-outline btn-sm hover:bg-green-500 hover:text-black" to="/registration">Registration</Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Login;