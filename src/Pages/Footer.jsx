import React from "react";
import logo from "../assets/logo/ar-logo-png.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative border-t border-TextColor/20 ">
      <div className="py-14 max-w-[1440px] w-11/12 mx-auto">

        <a href="">
          <img src={logo} alt="logo" className=" w-14 md:w-16 mb-8" />
        </a>

        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="text-TextColor">
            <p className="max-w-[500px] text-xs md:text-base text-SecondTextColor opacity-70">
            Thank you for visiting my portfolio! I’m passionate about creating responsive, user-friendly, and visually engaging web applications. With a strong foundation in front-end technologies like React.js, Tailwind CSS, and JavaScript, I continuously strive to deliver innovative solutions. Let’s connect and collaborate to bring your ideas to life!
            </p>

          </div>
          <div className="flex gap-8 md:flex-row flex-col mb-10">
            <nav>
              <h3 className="text-base text-TextColor mb-5">Social</h3>
              <div className="flex md:flex-col  md:space-x-0 space-x-4 md:space-y-4 text-xs opacity-70 md:text-sm text-SecondTextColor flex-wrap">
              <a
                  target="_blank"
                  href="https://github.com/Rubayat-Rafi"
                  className="hover:underline"
                >
                  GitHub
                </a>
                <a
                  target="_blank"
                  href="https://x.com/abu_rubayat"
                  className="hover:underline"
                >
                  Twitter
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/aburubayatrafi/"
                  className="hover:underline"
                >
                  LinkedIn
                </a>

                <a
                  target="_blank"
                  href="https://www.facebook.com/aburubayatrafi"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </div>
            </nav>
            {/* <nav>
              <h3 className="text-base text-TextColor mb-5">Information</h3>
              <div className="md:space-y-4 text-xs opacity-70 md:text-sm text-SecondTextColor flex space-x-4 md:flex-col md:space-x-0">
                <a href="/#faq" className="hover:underline">
                  FAQ
                </a>
                <a
                  target="_blank"
                  href="https://tidycal.com/alphavideoedit2001/15-minute-meeting"
                  className="hover:underline"
                >
                  Contact Us
                </a>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </div>
            </nav> */}
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center -mt-6 mb-4 text-SecondTextColor text-xs md:text-base opacity-70">
        <p>&copy; 2024 Abu Rubayat Rafi. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
