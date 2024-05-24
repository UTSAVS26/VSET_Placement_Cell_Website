import React from 'react';
import Carousel from '../../Components/Carousel/CarouselGallery';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const CDC = () => {
  return (
    <div className='w-full'>
      <div className="container mx-auto px-4 lg:px-0" style={{ marginTop: '150px' }}>
        <div className="about-container mb-20">
          <div className="about flex flex-col lg:flex-row items-center justify-between">
            <div className="about-left flex-1 lg:relative lg:w-1/2">
              <img src={about_img} alt="" className="about-img w-full lg:rounded-lg" />
              <img
                src={play_icon}
                alt=""
                className="play-icon w-16 lg:absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="about-right flex-1 lg:pl-12 lg:w-1/2">
              <h3 className="font-bold text-blue-700 text-lg pb-2">About</h3>
              <h2 className="text-3xl font-bold">Career Development Cell</h2>
              <p className="text-gray-700 text-base mb-4">
                The Career Development Cell at VIPS-TC is firmly committed to empowering students to achieve their professional aspirations. We prioritize career guidance, skill development, and industry exposure to ensure that every student is well-equipped to succeed in the competitive job market. Through workshops, seminars, and placement assistance, we aim to bridge the gap between academia and industry, nurturing talent and fostering a culture of innovation and excellence.
              </p>
              <p className="text-gray-700 text-base mb-4">
                The Career Development Centre (CDC) is dedicated to preparing students for the demands of the modern workforce. We offer a range of services to help students develop the skills and knowledge they need to succeed in their chosen careers. Our team of experienced professionals is available to provide personalized career guidance, helping students to explore their options and make informed decisions about their future. In addition to one-on-one guidance, we also organize a variety of workshops and seminars on topics such as entrepreneurship, career planning, industry exposure, and interview skills. These events are designed to give students a broader understanding of the industry and to provide them with practical tools and techniques they can use to enhance their employability.
              </p>
              <p className="text-gray-700 text-base mb-4">
                With state-of-the-art infrastructure and facilities at VIPS-TC, we invite leaders from the corporate world & provide them an exceptional recruitment experience. We forge a vital connection between campus and industry. CDC acts as a mentor and counsellor to give students access to the best professional prospects in the industry thus evolving innovative and dynamic leaders.
              </p>
              <p className="text-gray-700 text-base">Join us at VSE&T and embark on a journey of discovery, growth, and success.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <header className='text-center py-8'>
          <h1 className='text-4xl font-bold'>Our Campus</h1>
        </header>
        <div className='flex justify-center py-8'>
          <Carousel />
        </div>
      </div>
    </div>
  )
}

export default CDC;