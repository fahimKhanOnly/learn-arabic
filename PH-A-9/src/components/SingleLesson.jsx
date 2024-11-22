const SingleLesson = ({lessonData}) => {
    const {word, pronunciation, meaning, part_of_speech, difficulty, when_to_say, example} = lessonData;
    return (
        <div>
            <div className={`w-[380px] h-[515px] mt-2 flex flex-col items-center justify-between border border-green-500 rounded-lg shadow-md p-6 max-w-md mx-auto ${difficulty === "easy" ? "bg-[#a7ffa73d]" : difficulty === "medium" ? "bg-[#ffca6642]" : "bg-[#ff8a8a54]"}`}>
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-green-800">{word}</h1>
                    <p className="text-lg italic text-green-600 mt-2">{pronunciation}</p>
                    <span className="mt-3 inline-block bg-[#a7ffa73d] border border-green-500 text-black text-sm font-medium px-3 py-1 rounded-full">
                    {part_of_speech}
                    </span>
                </div>

                <div className="mt-6 text-left">
                    <p className="text-lg text-green-800 font-bold">Meaning: <span className="text-black text-base italic">{meaning}</span></p>
                    <div className="divider"></div>

                    <p className="text-lg text-green-800 font-bold">When to Say: <span className="text-black text-base italic">{when_to_say}</span></p>
                    <div className="divider"></div>
                    <p className="text-lg text-green-800 font-bold">Example: <span className="text-black text-base italic">{example}</span></p>
                </div>
                <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-outline border-green-800">When to say</button>
            </div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className={`modal-box ${difficulty === "easy" ? "bg-[#a7ffa7ec]" : difficulty === "medium" ? "bg-[#ffc966e5]" : "bg-[#ff8a8aea]"}`}>
                    
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-green-800">{word}</h1>
                    <p className="text-lg italic text-green-600 mt-2">{pronunciation}</p>
                    <span className="mt-3 inline-block bg-[#a7ffa73d] border border-green-500 text-black text-sm font-medium px-3 py-1 rounded-full">
                    {part_of_speech}
                    </span>
                </div>

                <div className="mt-6 text-left">
                    <p className="text-lg text-green-800 font-bold">Meaning: <span className="text-black text-base italic">{meaning}</span></p>
                    <div className="divider"></div>

                    <p className="text-lg text-green-800 font-bold">When to Say: <span className="text-black text-base italic">{when_to_say}</span></p>
                    <div className="divider"></div>
                    <p className="text-lg text-green-800 font-bold">Example: <span className="text-black text-base italic">{example}</span></p>
                </div>

                    <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-outline">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default SingleLesson;