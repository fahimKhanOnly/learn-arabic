import { Link, useLoaderData, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SingleLesson from "./SingleLesson";
import { createContext } from "react";


export const LessonContext = createContext(null);
const Lesson = () => {
    const data = useLoaderData();
    const {Lesson_no} = useParams();
    const lesson = data.filter(filteredData => filteredData.Lesson_no === parseInt(Lesson_no));
    
    return (
        <div>
            <NavBar></NavBar>
                <div className="w-fit mx-auto flex flex-col items-center mt-5 mb-14">
                    <h1 className="text-center text-4xl font-extrabold">Lesson-No. {Lesson_no}</h1>
                    <div className="my-5 grid md:grid-cols-2 gap-6 xl:grid-cols-3">
                        {
                            lesson.map(singleLesson => <SingleLesson key={singleLesson.Id} lessonNo={Lesson_no} lessonData={singleLesson}></SingleLesson>)
                        }
                    </div>
                    <Link to="/start-learning" className="btn px-10 mt-5 border-green-500 hover:bg-green-500 hover:text-white font-bold">Back to Lesson</Link>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default Lesson;