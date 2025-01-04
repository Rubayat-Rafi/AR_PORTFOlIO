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
            <h6 className="text-lg font-semibold mb-4">Join Our Newsletter</h6>
            <p className="max-w-[500px] text-base text-SecondTextColor">
              Sign up to our mailing list below and be the first to know about
              new updates. Don't worry, we hate spam too.
            </p>

          </div>
          <div className="flex gap-8 md:flex-row flex-col mb-10">
            <nav>
              <h3 className="text-base text-TextColor mb-5">Social</h3>
              <div className="flex md:flex-col  md:space-x-0 space-x-4 md:space-y-4 text-sm text-SecondTextColor flex-wrap">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/imam-hasan-666021204/"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/alphavideoedit/"
                  className="hover:underline"
                >
                  Instagram
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/people/Alphavideoeditcom/61566444836135/?mibextid=ZbWKwL"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </div>
            </nav>
            <nav>
              <h3 className="text-base text-TextColor mb-5">Information</h3>
              <div className="md:space-y-4 text-sm text-SecondTextColor flex space-x-4 md:flex-col md:space-x-0">
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
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center -mt-6 mb-4 text-SecondTextColor text-xs md:text-base">
        <p>&copy; 2024 Alpha Video Edit. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
