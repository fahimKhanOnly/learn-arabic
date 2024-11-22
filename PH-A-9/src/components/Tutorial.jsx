import { Helmet } from "react-helmet";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";


const Tutorial = () => {
    return (
        <div>
            <Helmet>
                <title>Arabic Tutorial</title>
            </Helmet>
            <NavBar></NavBar>
            <div className="container mx-auto mt-6 mb-12 flex flex-col items-center">
                <h1 className="text-4xl font-extrabold">Arabic Tutorials</h1>

                <div className="px-2 space-y-5 md:space-y-0 md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 2xl:grid-cols-4 gap-5 2xl:gap-7 my-8">
                    <div className="card">
                        <div className="flex justify-center items-center">
                        <iframe className="w-[400px] h-[220px] rounded-md" src="https://www.youtube.com/embed/Z60h8b01l5U?si=emYu38jQgum-ZaP9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className="card">
                        <div className="flex justify-center items-center">

                        <iframe className="w-[400px] h-[220px] rounded-md" src="https://www.youtube.com/embed/zwrpXIq4--s?si=ky3i0CAqhcO6TUBS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className="card">
                        <div className="flex justify-center items-center">

                        <iframe className="w-[400px] h-[220px] rounded-md" src="https://www.youtube.com/embed/7RoXDKA633Q?si=QKiqXy3k5oo8sUEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className="card">
                        <div className="flex justify-center items-center">

                        <iframe className="w-[400px] h-[220px] rounded-md" src="https://www.youtube.com/embed/2vXSlrxC5zM?si=MV8rrjzTzvkvigZ6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className="card">
                        <div className="flex justify-center items-center">

                        <iframe className="w-[400px] h-[220px] rounded-md" src="https://www.youtube.com/embed/7RoxmTDMLwo?si=Je8hG7BehG7XOHCL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className="card">
                        <div className="flex justify-center items-center">

                        <iframe className="w-[400px] h-[220px] rounded-md" src="https://www.youtube.com/embed/2I7HsN-DDTs?si=ZiQrI8XU5sWoyq-b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className="card">
                        <div className="flex justify-center items-center">

                        <iframe className="w-[400px] h-[220px] rounded-md" src="https://www.youtube.com/embed/jLJckF8AZvw?si=XVIs6R8yS-OWjZox" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <Link to="/start-learning" className="btn border-green-500 hover:bg-green-500 hover:text-white font-bold">Learn Vocabularies</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Tutorial;