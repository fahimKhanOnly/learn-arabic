const About = () => {
  return (
    <section className="bg-white py-16 my-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">Empowering learners to master Arabic through a fun, interactive, and structured approach.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-semibold text-green-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">At <span className="font-bold">Learn Arabic</span>, our mission is to make learning Arabic easy, accessible, and enjoyable for everyone. With engaging lessons, interactive exercises, and expertly curated tutorials, we aim to help users build fluency and confidence in reading, writing, and speaking Arabic.</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-semibold text-green-600 mb-4">Learn Vocabulary Effectively</h3>
            <p className="text-gray-700 text-lg leading-relaxed text-center">Expand your vocabulary with our interactive tools, including:</p>
            <ul className="text-gray-700 text-lg mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-2xl">✔</span> Flashcards to help you memorize words faster.
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-2xl">✔</span> Quizzes to test your knowledge and track progress.
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-2xl">✔</span> Daily word challenges to keep learning exciting.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
