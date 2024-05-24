import React, { useState } from 'react';
import courseData from './courseData';

const Degree = () => {
  const [selectedCourse, setSelectedCourse] = useState(0);

  const handleSelect = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="flex flex-wrap justify-center p-4 w-full bg-yellow-200">
        {courseData.map((course, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`relative py-2 px-4 m-2 w-full md:w-auto md:min-w-[10rem] transition duration-500 ${
              selectedCourse === index ? 'bg-[#e4443f] text-white' : 'bg-yellow-300 text-black'
            }`}
            style={{ transitionDelay: selectedCourse === index ? '0s' : '0.3s' }}
          >
            {course.name}
            {selectedCourse === index && (
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 text-[#e4443f]">▼</span>
            )}
          </button>
        ))}
      </div>
      <div className="mt-8 p-4 border rounded bg-gray-100 w-full text-center">
        <h2 className="text-2xl font-semibold">{courseData[selectedCourse].name}</h2>
        <p className="mt-4">{courseData[selectedCourse].description}</p>
        <div className="mt-8 space-y-8">
          {/* Section 1 */}
          <div className="flex justify-around">
            {courseData[selectedCourse].syllabus[0].content.map((item, idx) => (
              <div key={idx} className="p-4 bg-white border rounded shadow-md w-1/3">
                <h3 className="font-semibold underline">{item.title}</h3>
                <ul className="list-none ml-0 mt-2">
                  {item.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Section 2 */}
          <div className="flex justify-around items-center space-x-4">
            <div className="p-4 bg-white border rounded shadow-md w-1/3">
              <h3 className="font-semibold underline">{courseData[selectedCourse].syllabus[1].content[0].title}</h3>
              <ul className="list-none ml-0 mt-2">
                {courseData[selectedCourse].syllabus[1].content[0].topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center w-36 h-36 border-4 border-yellow-500 rounded-full shadow-md">
              {courseData[selectedCourse].alias}
            </div>
            <div className="p-4 bg-white border rounded shadow-md w-1/3">
              <h3 className="font-semibold underline">{courseData[selectedCourse].syllabus[1].content[1].title}</h3>
              <ul className="list-none ml-0 mt-2">
                {courseData[selectedCourse].syllabus[1].content[1].topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Section 3 */}
          <div className="flex justify-center">
            {courseData[selectedCourse].syllabus[2].content.map((item, idx) => (
              <div key={idx} className="p-4 bg-white border rounded shadow-md w-1/3">
                <h3 className="font-semibold underline">{item.title}</h3>
                <ul className="list-none ml-0 mt-2">
                  {item.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Degree;