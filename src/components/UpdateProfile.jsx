import { useContext } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { AuthenticationContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const navigate = useNavigate();
    const {updateInfo} = useContext(AuthenticationContext);
    const updateHandler = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const profile = e.target.profile.value;
        updateInfo(name, profile).then(() => navigate("/profile"))
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="hero bg-base-200 pt-12 pb-20">
                <div className="w-full hero-content flex-col">
                    <h1 className="font-extrabold text-4xl">Update Profile Now</h1>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={updateHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="profile" type="text" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div>
                                <p className="text-red-500">{}</p>
                            </div>
                            <div className="form-control mt-6 gap-4">
                                <button className="btn bg-green-500 font-bold">Update Information</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateProfile;
