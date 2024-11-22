import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Learning = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="container mx-auto flex flex-col items-center my-10">
                <h1 className="text-4xl font-extrabold mb-6">Lessons</h1>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-10">
                    <Link to="/lessons/1" className="card border bg-[#a7ffa73d] border-green-500 w-64">
                        <div className="card-body items-center text-center">
                            <h1 className="card-title text-2xl font-bold">Lesson-1</h1>
                        </div>
                    </Link>

                    <Link to="/lessons/2" className="card border bg-[#a7ffa73d] border-green-500 w-64">
                        <div className="card-body items-center text-center">
                            <h1 className="card-title text-2xl font-bold">Lesson-2</h1>
                        </div>
                    </Link>

                    <Link to="/lessons/3" className="card border bg-[#a7ffa73d] border-green-500 w-64">
                        <div className="card-body items-center text-center">
                            <h1 className="card-title text-2xl font-bold">Lesson-3</h1>
                        </div>
                    </Link>

                    <Link to="/lessons/4" className="card border bg-[#a7ffa73d] border-green-500 w-64">
                        <div className="card-body items-center text-center">
                            <h1 className="card-title text-2xl font-bold">Lesson-4</h1>
                        </div>
                    </Link>

                    <Link to="/lessons/5" className="card border bg-[#a7ffa727] border-green-500 w-64">
                        <div className="card-body items-center text-center">
                            <h1 className="card-title text-2xl font-bold">Lesson-5</h1>
                        </div>
                    </Link>

                    <Link to="/lessons/6" className="card border bg-[#a7ffa727] border-green-500 w-64">
                        <div className="card-body items-center text-center">
                            <h1 className="card-title text-2xl font-bold">Lesson-6</h1>
                        </div>
                    </Link>

                    <Link to="/lessons/7" className="card border bg-[#a7ffa727] border-green-500 w-64">
                        <div className="card-body items-center text-center">
                            <h1 className="card-title text-2xl font-bold">Lesson-7</h1>
                        </div>
                    </Link>

                    <Link to="/lessons/8" className="card border bg-[#a7ffa727] border-green-500 w-64">
                        <div className="card-body items-center text-center">
                            <h1 className="card-title text-2xl font-bold">Lesson-8</h1>
                        </div>
                    </Link>

                    <Link to="/lessons/9" className="card border bg-[#a7ffa727] border-green-500 w-64">
                        <div className="card-body items-center text-center">
                            <h1 className="card-title text-2xl font-bold">Lesson-9</h1>
                        </div>
                    </Link>

                    <Link to="/lessons/10" className="card border bg-[#a7ffa727] border-green-500 w-64">
                        <div className="card-body items-center text-center">
                            <h1 className="card-title text-2xl font-bold">Lesson-10</h1>
                        </div>
                    </Link>
                </div>
                <Link to="/tutorials" className="btn border-green-500 hover:bg-green-500 hover:text-white font-bold">View more</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Learning;