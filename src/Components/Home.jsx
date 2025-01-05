import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import profile from "../assets/Profile/profile.jpg"

const Home = () => {
  return (
    <section id="home" className=" py-16 md:py-20 w-11/12 mx-auto max-w-[1440px] flex flex-col md:flex-row justify-between items-center gap-6 md:mt-[68px]">
         {/* content  */}
        <div className="w-full md:w-1/2">
          <h3 className=" md:text-2xl font-medium mb-2 md:mb-3">Hello it's Me,</h3>
          <h1 className="text-3xl md:text-6xl font-semibold mb-1 md:mb-2">Abu Rubayat</h1>
          <h3 className=" md:text-2xl font-mediu mb-4  md:mb-5">
            And I'm a <span className="text-mainColor">Frontend Developer</span>
          </h3>
          <p className="text-xs md:text-base">
            with a keen interest in creating responsive and user-friendly
            websites. This is my portfolio where I showcase my skills and
            projects.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <button className="bg-mainColor  text-textColor font-medium py-2 px-4 rounded-md border-2 border-mainColor hover:text-mainColor hover:bg-transparent transition-colors duration-300  hover:shadow-custom-glow text-sm md:text-base">
            <a href="#contact">Hire Me</a>
            </button>
            <button className="hover:bg-mainColor hover:text-textColor font-medium py-2 px-4 rounded-md border-2 border-mainColor text-mainColor bg-transparent transition-colors duration-300 hover:shadow-custom-glow text-sm md:text-base">
            <a href="#contact">Let's Talk</a>
            </button>
          </div>

          <div className="flex items-center mt-5 gap-6 text-lg md:text-2xl">
            <a href="https://github.com/Rubayat-Rafi" target="_blank" className="border-2 border-mainColor bg-mainColor text-textColor hover:shadow-custom-glow hover:bg-transparent hover:text-mainColor p-1 rounded-full transition-colors duration-300">
            <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aburubayatrafi/" target="_blank" className="border-2 border-mainColor bg-mainColor text-textColor hover:shadow-custom-glow hover:bg-transparent hover:text-mainColor p-1 rounded-full transition-colors duration-300">
            <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/aburubayatrafi" target="_blank"  className="border-2 border-mainColor bg-mainColor text-textColor hover:shadow-custom-glow hover:bg-transparent hover:text-mainColor p-1 rounded-full transition-colors duration-300">
            <FaFacebookF />
            </a>
            <a href="https://x.com/abu_rubayat" target="_blank"  className="border-2 border-mainColor bg-mainColor text-textColor hover:shadow-custom-glow hover:bg-transparent hover:text-mainColor p-1 rounded-full transition-colors duration-300">
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
