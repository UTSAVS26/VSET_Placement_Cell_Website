import React from "react";
import logofooter from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#022742] text-white px-[4px] py-12 bottom-0 left-0 flex items-top justify-evenly">
      <div>
        <img src={logofooter} alt="" className="w-[100px]" />
        <p>
          <b>
            Vivekananda Institute of Professional Studies - Technical Campus
          </b>
          <br />
          <b>Vivekananda Institute of Engineering & Technology</b>
          <br />
          <b>Contact Us</b>
          <br />
          AU- Block (Outer Ring Road) <br /> Pitampura, Delhi - 110034
        </p>
      </div>
      <div>
        <h3 className="font-bold text-xl tracking-widest text-[#ff951d] underline underline-offset-4 mb-4">
          Quick Links
        </h3>
        <ul>
          <li>
            <a href="#">Examination Notice</a>
          </li>
          <li>
            <a href="#">Admission</a>
          </li>
          <li>
            <a href="#">Anti Ragging</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-xl tracking-widest text-[#ff951d] underline underline-offset-4 mb-4">
          Schools
        </h3>
        <ul>
          <li>
            <a href="#">Law and Legal Studies</a>
          </li>
          <li>
            <a href="#">Information Technology</a>
          </li>
          <li>
            <a href="#">Journalism and Mass Communication</a>
          </li>
          <li>
            <a href="#">Business Studies</a>
          </li>
          <li>
            <a href="#">Economics</a>
          </li>
          <li>
            <a href="#">English Studies</a>
          </li>
          <li>
            <a href="#">Engineering and Technology</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-xl tracking-widest text-[#ff951d] underline underline-offset-4 mb-4">
          Explore
        </h3>
        <ul>
          <li>
            <a href="#">Administration</a>
          </li>
          <li>
            <a href="#">Campus</a>
          </li>
          <li>
            <a href="#">Vivekananda Research Centre</a>
          </li>
          <li>
            <a href="#">Work with us</a>
          </li>
          <li>
            <a href="#">School Login</a>
          </li>
          <li>
            <a href="#">Website Development Cell</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
