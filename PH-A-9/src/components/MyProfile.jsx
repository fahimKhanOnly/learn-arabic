import { useContext } from "react";
import { AuthenticationContext } from "../AuthProvider/AuthProvider";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const MyProfile = () => {
    const {user} = useContext(AuthenticationContext);
    console.log(user);
    return (
        <div>
            <NavBar></NavBar>
            <div className="container mx-auto flex flex-col items-center mt-10">
                <h1 className="font-bold text-2xl italic">Welcome {user.displayName}</h1>
                <div className="flex flex-col items-center mt-4 border p-6 rounded-lg">
                    <img className="rounded-full" src={user.photoURL} alt={`${user.displayName}'s Profile`}/>
                    <div className="divider"></div>
                    <p className="text-xl text-gray-600 font-medium">Name: <span className="text-black text-xl">{user.displayName}</span></p>
                    <div className="divider"></div>
                    <p className="text-xl text-gray-600 font-medium">Email: <span className="text-black text-xl">{user.email}</span></p>
                    <div className="divider"></div>
                    <p className="text-xl text-gray-600 font-medium">Phone: <span className="text-black text-xl">{user.phoneNumber ? user.phoneNumber : "N/A"}</span></p>
                    <div className="divider"></div>

                    <Link to="/update-profile" className="btn btn-outline btn-wide hover:bg-green-600">Update Profile</Link>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;