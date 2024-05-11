import React, { useState, useEffect } from "react";
import "./Stories.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Stories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
    };

    return (
        <div className="stories">
            <img src={next_icon} alt="" className="next-btn" onClick={nextSlide} />
            <img src={back_icon} alt="" className="back-btn" onClick={prevSlide} />
            <div className="slider">
                <ul style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
                    <li>
                        <div className="slide">
                            <img src={user_1} alt="User 1" />
                            <div className="company-info">
                                <h3>John Doe</h3>
                                <span>Software Engineer</span>
                                <span>Microsoft</span>
                                <span>New York, USA</span>
                            </div>
                            <p>
                                "I am incredibly grateful for the opportunities provided by the
                                VSE&T Placement Cell. Thanks to their support and guidance, I
                                secured a position as a Software Engineer at Microsoft. The
                                experience has been invaluable, and I am excited about the
                                journey ahead."
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <img src={user_2} alt="User 2" />
                            <div className="company-info">
                                <h3>Jane Smith</h3>
                                <span>Data Analyst</span>
                                <span>Google</span>
                                <span>California, USA</span>
                            </div>
                            <p>
                                "The VSE&T Placement Cell played a crucial role in helping me
                                kickstart my career. With their assistance, I landed a position
                                as a Data Analyst at Google. I am thankful for their continuous
                                support and guidance throughout the placement process."
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <img src={user_3} alt="User 3" />
                            <div className="company-info">
                                <h3>Michael Johnson</h3>
                                <span>Software Developer</span>
                                <span>Amazon</span>
                                <span>Seattle, USA</span>
                            </div>
                            <p>
                                "My journey from VSE&T to Amazon has been nothing short of
                                amazing, and I owe a huge thanks to the Placement Cell. Their
                                efforts and guidance helped me secure a position as a Software
                                Developer at Amazon. I am excited to begin this new chapter in
                                my career."
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <img src={user_4} alt="User 4" />
                            <div className="company-info">
                                <h3>Emily Brown</h3>
                                <span>Business Analyst</span>
                                <span>Facebook</span>
                                <span>Menlo Park, USA</span>
                            </div>
                            <p>
                                "Thanks to the VSE&T Placement Cell, I landed my dream job as a
                                Business Analyst at Facebook. Their support and guidance were
                                instrumental throughout the placement process. I am grateful for
                                the opportunities they provided me."
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Stories;
