import NavBar from "./NavBar";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.init";
import { toast } from "react-toastify";
import { useContext, useRef, useState } from "react";
import { EmailContext } from "./Login";
import Footer from "./Footer";



const ForgetPass = () => {
    const [getErr, setErr] = useState(null);
    const email = useContext(EmailContext);
    console.log(email);
    const emailRef = useRef();
    const handleForgotPass = () => {
        const pass = emailRef.current.value;
        if(pass){
            sendPasswordResetEmail(auth, pass)
            .then(() => {
                toast.success("Reset email was sent.");
                window.open('https://mail.google.com/mail/u/0/#inbox', "_blank");
            })
            .catch(err => setErr(err.message))
        }
        else{
            setErr("Please provide a valid email.");
        }
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="mx-auto mt-10 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input ref={emailRef} type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div>
                        <p className="text-red-500">{getErr}</p>
                    </div>
                    <div className="form-control mt-6">
                        <a onClick={handleForgotPass} className="btn btn-primary">Reset</a>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ForgetPass;