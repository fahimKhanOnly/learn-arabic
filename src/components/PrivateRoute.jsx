import { useContext } from "react";
import { AuthenticationContext } from "../AuthProvider/AuthProvider";
import { PacmanLoader } from "react-spinners";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useContext(AuthenticationContext);
    if(isLoading){
        return <div className="flex justify-center items-center h-screen"><PacmanLoader></PacmanLoader></div>;
    }
    if(user){
        return children;
    }
    else{
        return <Navigate to="/login"></Navigate>
    }
};

export default PrivateRoute;