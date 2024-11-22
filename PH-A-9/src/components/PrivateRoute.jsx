import { useContext } from "react";
import { AuthenticationContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useContext(AuthenticationContext);
    if(user){
        return children;
    }
};

export default PrivateRoute;