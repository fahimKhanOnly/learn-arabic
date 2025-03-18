import React from 'react';
import CountUp from 'react-countup';

const SuccessSection = () => {
  const successData = [
    { label: 'Users', count: 1500 },
    { label: 'Lessons', count: 250 },
    { label: 'Vocabulary Words', count: 5000 },
    { label: 'Tutorials', count: 100 },
  ];

  return (
    <div className="container mx-auto py-16 my-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">Our Success</h2>
        <p className="text-lg text-gray-600 mt-4">Proud milestones achieved through dedication and passion.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4">
        {successData.map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-5xl font-extrabold text-green-500 mb-4">
              <CountUp end={item.count} duration={2.5} />
            </h3>
            <p className="text-xl text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessSection;
