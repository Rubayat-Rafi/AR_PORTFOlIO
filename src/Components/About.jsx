import React from "react";
import aboutImg from "../assets/Profile/about.jpg"

const About = () => {
  return (
    <section id="about" className="bg-secondbBgColor py-20">
      <h2 className="text-center mb-10 font-medium text-mainColor ">
        About Me
      </h2>

      <div className="flex items-start justify-between gap-6 mx-auto w-11/12 max-w-[1440px] flex-col-reverse md:flex-row">

      {/* image  */}
        <div className="about-image">
          <img src={aboutImg} alt="second profile picture" className="rounded-2xl  border-2 border-mainColor p-5" />
        </div>
        {/* content  */}
        <div className="">
          <h3>Frontend Developer!</h3>
          <p>
            Hey there! I'm Rubayat, a frontend developer on a mission to create
            visually appealing and user-friendly websites. I specialize in HTML,
            CSS, Bootstrap, JavaScript, React, and Angular, combining these
            skills to bring digital ideas to life.
          </p>
          <p>
            I'm all about making the web experience seamless and enjoyable. From
            crafting clean HTML structures to adding interactive elements with
            JavaScript, I aim to create websites that not only look good but
            also engage users.
          </p>
          <p>
            My expertise extends to using Bootstrap for responsive designs and
            working with frameworks like React and Angular for building scalable
            applications. I'm a firm believer in user-centric design, always
            striving to stay ahead by learning and adapting to new technologies.
          </p>
          <a href="#" className="btn about-btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
