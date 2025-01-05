import React from "react";
import poject1 from "../assets/projrcts/p1.png";
import poject2 from "../assets/projrcts/p2.png";
import poject3 from "../assets/projrcts/p3.png";
import poject4 from "../assets/projrcts/p4.png";
import poject5 from "../assets/projrcts/p5.png";
import poject6 from "../assets/projrcts/p6.png";

const projects = [
  {
    title: "Video Editor",
    description:
      "A fully responsive Video Editor portfolio website with Booking meeting functionality.",
    techStack: ["React.js", "Tailwind CSS", "JavaScript"],
    demoLink: "https://alphavideoedit.com",
    image: poject4,
  },
  {
    title: "SEO Expert",
    description:
      "A fully responsive SEO Expert website with Contact Form functionality.",
    techStack: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://rubayat-rafi.github.io/BAYJID-VAI",

    image: poject5,
  },
  {
    title: "Crickvend",
    description:
      "This is a cricket player bidding platform where you can bid on players and build your personalized team.",
    techStack: ["React.js", "tailwind CSS", "DaisyUI", "JavaScript"],
    demoLink: "https://crickvend.surge.sh/",

    image: poject6,
  },
  {
    title: "Restaurant Website",
    description:
      "A fully responsive Restaurant website with signIn and order now functionality.",
    techStack: ["React.js", "Tailwind CSS", "Firebase", "Node.js", "MongoDB"],
    demoLink: "https://taste-odyssey.web.app",

    image: poject1,
  },
  {
    title: "Sports Store",
    description:
      "A dynamic E-Commerce where you can buy or add your products.",
    techStack: ["React.js","Tailwind CSS", "Firebase", "Node.js", "MongoDB"],
    demoLink: "https://equisports.surge.sh/",

    image: poject2,
  },
  {
    title: "Counseling Platform",
    description:
      "A fully responsive Career Counseling Platform website with signIn functionality.",
    techStack: ["React.js", "Tailwind CSS", "Firebase"],
    demoLink: "https://career-counseling-14089.web.app/",

    image: poject3,
  },
];

const Projects = () => {
  return (
    <section id="projects" className=" py-16 md:py-20 bg-secondbBgColor">
      <h2 className="text-center mb-6 md:mb-10  text-2xl font-semibold">
        My <span className="text-mainColor">Projects</span>
      </h2>
      <div className="max-w-[1440px] w-11/12 mx-auto">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-110 md:h-[220px]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className=" text-xl md:text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className=" text-xs md:text-sm mb-4 px-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4 px-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-secondbBgColor px-3 py-1 rounded-full text-[10px] md:text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    className="bg-mainColor text-textColor px-4 py-2 text-xs md:text-sm rounded shadow hover:shadow-custom-glow transition-colors duration-300 font-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
