import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";


const Hero = () => {
    return (
        <div className="container mx-auto mt-4">
            <div className="carousel h-[70vh] w-full">
                <div id="slide1" className="relative carousel-item w-full">
                    <div className="z-10 font-extrabold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="text-white text-4xl">Learn Arabic in our Interactive environment.</p>
                    </div>
                    <img
                    src={slide1}
                    className="w-full blur-sm" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>                    
                    </div>                    
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="z-10 font-extrabold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="text-white text-4xl">Learn Arabic in our Interactive environment.</p>
                    </div>
                    <img
                    src={slide2}
                    className="w-full blur-sm" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="z-10 font-extrabold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="text-white text-4xl">Learn Arabic in our Interactive environment.</p>
                    </div>
                    <img
                    src={slide3}
                    className="w-full blur-sm" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;