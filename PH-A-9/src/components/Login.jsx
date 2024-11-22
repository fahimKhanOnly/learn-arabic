import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { IoMdEyeOff, IoIosEye } from "react-icons/io";
import { useContext, useRef, useState } from "react";
import Footer from "./Footer";
import { FcGoogle } from "react-icons/fc";
import { AuthenticationContext } from "../AuthProvider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.init";
import { toast } from "react-toastify";


const Login = () => {
    const [getEyeStatus, setEyeStatus] = useState(true);
    const [getErr, setErr] = useState(null);
    const emailRef = useRef();
    const {signInUser, createUserWithGoogle} = useContext(AuthenticationContext);

    const navigate = useNavigate();
    const googleLoginHandler = () => {
        createUserWithGoogle()
        .then(() => navigate("/"));
    }
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
            signInUser(email, pass)
            .then(result => {
                console.log(result.user);
                navigate("/");
            })
            .catch(err => setErr(err.message));
        }
    }

    const handleForgotPass = () => {
        const pass = emailRef.current.value;
        if(pass){
            sendPasswordResetEmail(auth, pass)
            .then(() => {
                toast.success("Reset email was sent.");
            })
            .catch(err => {
                setErr(err.message);
            })
        }
        else{
            setErr("Please provide an email.");
        }
        
    }
    return (
    <div>
        <NavBar></NavBar>
        <div className="hero bg-base-200 pt-4 pb-10">
            <div className="w-full hero-content flex-col">
                <h1 className="font-extrabold text-4xl">Login</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={loginHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} name="email" type="email" placeholder="email" className="input input-bordered" required />
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
                                <span onClick={handleForgotPass} href="#" className="label-text-alt link link-hover">Forgot password?</span>
                            </label>
                        </div>
                        <div>
                            <p className="text-red-500">{getErr}</p>
                        </div>
                        <div className="form-control mt-6 gap-4">
                            <button className="btn bg-green-500 font-bold">Login</button>
                            <button onClick={googleLoginHandler} className="btn font-bold"><FcGoogle className="text-xl"/> Login with Google</button>
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