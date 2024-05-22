import React from 'react';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const Message = () => {
  return (
    <div className="container mx-auto px-4" style={{ marginTop: '150px' }}>
      <div className="about-container mb-20">
        <div className="about flex items-center justify-between">
          <div className="about-left flex-4 relative">
            <img src={about_img} alt="" className="about-img w-full rounded-lg" />
            <img
              src={play_icon}
              alt=""
              className="play-icon w-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="about-right flex-6 pl-12">
            <h2 className="text-3xl font-bold">Message from the Vice-Chairperson</h2>
            <h3 className="font-bold text-blue-700 text-lg pb-2">Name</h3>
            <p className="text-gray-700 text-base mb-4">
              At VSE&T, we believe in nurturing tomorrow's leaders today. With a focus on providing quality education and
              holistic development, we prepare our students to face the challenges of the future. Our dedicated faculty,
              state-of-the-art infrastructure, and emphasis on practical learning ensure that our students are
              well-equipped to excel in their chosen fields.
            </p>
            <p className="text-gray-700 text-base mb-4">
              With a rich history of academic excellence and a commitment to innovation, VSE&T is more than just an
              educational institution; it's a community where students are encouraged to explore their passions, expand
              their horizons, and reach their full potential.
            </p>
            <p className="text-gray-700 text-base">Join us at VSE&T and embark on a journey of discovery, growth, and success.</p>
          </div>
        </div>
        <div className="about flex items-center justify-between flex-row-reverse">
          <div className="about-left flex-4 relative">
            <img src={about_img} alt="" className="about-img w-full rounded-lg" />
            <img
              src={play_icon}
              alt=""
              className="play-icon w-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="about-right flex-6 pr-12">
            <h2 className="text-3xl font-bold">Message from the Placement Officer</h2>
            <h3 className="font-bold text-blue-700 text-lg pb-2">Name</h3>
            <p className="text-gray-700 text-base mb-4">
              At VSE&T, we believe in nurturing tomorrow's leaders today. With a focus on providing quality education and
              holistic development, we prepare our students to face the challenges of the future. Our dedicated faculty,
              state-of-the-art infrastructure, and emphasis on practical learning ensure that our students are
              well-equipped to excel in their chosen fields.
            </p>
            <p className="text-gray-700 text-base mb-4">
              With a rich history of academic excellence and a commitment to innovation, VSE&T is more than just an
              educational institution; it's a community where students are encouraged to explore their passions, expand
              their horizons, and reach their full potential.
            </p>
            <p className="text-gray-700 text-base">Join us at VSE&T and embark on a journey of discovery, growth, and success.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;