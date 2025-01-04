import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaSquareFacebook,  FaXTwitter } from "react-icons/fa6";
import profile from "../assets/Profile/profile.jpg"

const Home = () => {
  return (
    <section id="home" className="py-20 w-11/12 mx-auto max-w-[1440px] flex flex-col md:flex-row justify-between items-center gap-6">
         {/* content  */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-medium mb-3">Hello it's Me,</h3>
          <h1 className="text-6xl font-semibold mb-2">Abu Rubayat</h1>
          <h3 className="text-2xl font-medium mb-5">
            And I'm a <span className="text-mainColor">Frontend Developer</span>
          </h3>
          <p>
            with a keen interest in creating responsive and user-friendly
            websites. This is my portfolio where I showcase my skills and
            projects.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <button className="bg-mainColor text-textColor font-medium py-2 px-4 rounded-md border-2 border-mainColor hover:text-mainColor hover:bg-transparent transition-colors duration-300  hover:shadow-custom-glow">
            <a href="#contact">Hire Me</a>
            </button>
            <button className="hover:bg-mainColor hover:text-textColor font-medium py-2 px-4 rounded-md border-2 border-mainColor text-mainColor bg-transparent transition-colors duration-300 hover:shadow-custom-glow">
            <a href="#contact">Let's Talk</a>
            </button>
          </div>

          <div className="flex items-center mt-5 gap-6 text-2xl">
            <a href="#" className="border-2 border-mainColor bg-mainColor text-textColor hover:shadow-custom-glow hover:bg-transparent hover:text-mainColor p-1 rounded-full transition-colors duration-300">
            <FaGithub />
            </a>
            <a href="#" className="border-2 border-mainColor bg-mainColor text-textColor hover:shadow-custom-glow hover:bg-transparent hover:text-mainColor p-1 rounded-full transition-colors duration-300">
            <FaLinkedinIn />
            </a>
            <a href="#" className="border-2 border-mainColor bg-mainColor text-textColor hover:shadow-custom-glow hover:bg-transparent hover:text-mainColor p-1 rounded-full transition-colors duration-300">
            <FaFacebookF />
            </a>
            <a href="#" className="border-2 border-mainColor bg-mainColor text-textColor hover:shadow-custom-glow hover:bg-transparent hover:text-mainColor p-1 rounded-full transition-colors duration-300">
            <FaXTwitter />
            </a>
          </div>
        </div>

      {/* image  */}
      <div className=" w-full md:w-1/2   flex itasm-center justify-center">
        <img src={profile} alt="profile picture" className="rounded-2xl md:w-[500px] border-2 border-mainColor p-5" />
      </div>
    </section>
  );
};

export default Home;
