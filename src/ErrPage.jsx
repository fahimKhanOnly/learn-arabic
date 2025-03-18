import { Link } from "react-router-dom";

const ErrPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl text-red-500 font-bold">Page not found</h1>
            <p className="font-medium mt-5 text-md">Please go back to <Link className="btn-sm btn btn-outline" to="/">Home</Link></p>
        </div>
    );
};

export default ErrPage;
