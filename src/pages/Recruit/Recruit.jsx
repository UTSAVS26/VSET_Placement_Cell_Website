import React from 'react';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const Recruit = () => {
    return (
        <div className="container mx-auto px-4 lg:px-0" style={{ marginTop: '150px' }}>
            <div className="about-container mb-10 lg:mb-20">
                <div className="about flex flex-col lg:flex-row items-center justify-between mb-8">
                    <div className="about-left flex-4 relative mb-6 md:mb-0">
                        <img src={about_img} alt="" className="about-img w-full rounded-lg mb-4 lg:mb-0 lg:mr-4" />
                        <img
                            src={play_icon}
                            alt=""
                            className="play-icon w-16 lg:absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                    <div className="about-right flex-6 md:pl-12">
                        <h2 className="text-3xl font-bold mb-4 lg:mb-8">Message to the Recruiters</h2>
                        <p className="text-gray-700 text-base mb-4">
                            Our students, faculty, and management work hard and collaborate comprehensively to achieve excellence in the disciplines of engineering, technology, and innovation required to fuel smart automation, industrial revolution, development of intelligent systems and devices, and improve the quality of life of mankind. The curriculum and infrastructure at VIPS are a testament to excellence in digital and technological advancements. Our students are assured to fulfill the great prospects and promises of the fourth industrial revolution with a strong emphasis on productivity and efficiency.
                        </p>
                        <p className="text-gray-700 text-base mb-4">
                            We eagerly look forward to welcoming you and your team at VIPS and facilitating the recruitment of our graduates to your esteemed organization. Our primary aim is to actively assist you to identify and hire individuals who are the most suitable to meet your organizational requirements. Through this collaboration, we endeavor to cultivate a prosperous and enduring recruitment relationship.
                        </p>
                        <p className="text-gray-700 text-base">Join us at VSE&T and embark on a journey of discovery, growth, and success.</p>
                    </div>
                </div>
            </div>
            <div className="new-section-container mt-10 lg:mt-20">
                <h2 className="text-3xl font-bold mb-8 text-center">Why Recruit from VIPS-TC?</h2>
                <p className="mb-8">
                    <strong><u>A. Rigorous student selection process -</u></strong> At VIPS, we pride ourselves on our highly competitive admissions process. Our students are selected based on their academic achievements at the school level and through our rigorous entrance examinations. We are committed to a merit-based approach and do not offer any form of quota system.<br /><br />
                    <strong><u>B. Outstanding curriculum and faculty -</u></strong> Over 85% of our faculty members hold PhDs and are actively engaged in research and scholarly publications. Our curriculum undergoes regular updates to incorporate the latest advancements in technology and research.<br /><br />
                    <strong><u>C. Industry-experienced students -</u></strong> We prepare our students for success in industry careers. Through our Practice School Program, each student gains a minimum of seven months of industry experience prior to graduation. This allows them to apply their academic coursework to real-world situations and develop essential collaborative skills.<br /><br />
                    <strong><u>D. Holistic development -</u></strong> We are committed to nurturing our students' holistic development. Within the classroom, we provide opportunities for soft skill enhancement through presentations and open-ended learning. Additionally, extracurricular activities, student-managed clubs, and events offer avenues for students to explore their interests and develop skills beyond academics.
                </p>
            </div>
        </div>
    );
};

export default Recruit;