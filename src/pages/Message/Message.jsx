import React from 'react'
import './Message.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const Message = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About VSE&T</h3>
        <h2>Nurturting Tommorrow's Leaders Today</h2>
        <p>
          At VSE&T, we believe in nurturing tomorrow's leaders today. With a focus on providing quality education and holistic development, we prepare our students to face the challenges of the future. Our dedicated faculty, state-of-the-art infrastructure, and emphasis on practical learning ensure that our students are well-equipped to excel in their chosen fields.
        </p>
        <p>
          With a rich history of academic excellence and a commitment to innovation, VSE&T is more than just an educational institution; it's a community where students are encouraged to explore their passions, expand their horizons, and reach their full potential.
        </p>
        <p>
          Join us at VSE&T and embark on a journey of discovery, growth, and success.
        </p>
      </div>
    </div>
  );
}

export default Message
