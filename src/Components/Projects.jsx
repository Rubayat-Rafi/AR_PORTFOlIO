import React from "react";
import poject1 from "../assets/projrcts/p1.png"
import poject2 from "../assets/projrcts/p2.png"
import poject3 from "../assets/projrcts/p3.png"

const projects = [
  {
    title: "E-commerce Store",
    description:
      "A fully responsive e-commerce website with cart and wishlist functionality.",
    techStack: ["React.js", "Tailwind CSS", "Firebase"],
    demoLink: "#",
    codeLink: "#",
    image: poject1, 
  },
  {
    title: "Job Search Platform",
    description:
      "A dynamic job search application with filtering and bookmarking features.",
    techStack: ["React.js", "Node.js", "MongoDB"],
    demoLink: "#",
    codeLink: "#",
    image: poject2,
  },
  {
    title: "Travel Booking Website",
    description:
      "A user-friendly platform for booking travel packages and tickets.",
    techStack: ["React.js", "DaisyUI", "JavaScript"],
    demoLink: "#",
    codeLink: "#",
    image: poject3,
  },
  {
    title: "E-commerce Store",
    description:
      "A fully responsive e-commerce website with cart and wishlist functionality.",
    techStack: ["React.js", "Tailwind CSS", "Firebase"],
    demoLink: "#",
    codeLink: "#",
    image: poject1, 
  },
  {
    title: "Job Search Platform",
    description:
      "A dynamic job search application with filtering and bookmarking features.",
    techStack: ["React.js", "Node.js", "MongoDB"],
    demoLink: "#",
    codeLink: "#",
    image: poject2,
  },
  {
    title: "Travel Booking Website",
    description:
      "A user-friendly platform for booking travel packages and tickets.",
    techStack: ["React.js", "DaisyUI", "JavaScript"],
    demoLink: "#",
    codeLink: "#",
    image: poject3,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondbBgColor">
        <h2 className="text-center mb-10 font-medium text-mainColor ">My Projects</h2>
      <div className="max-w-[1440px] w-11/12 mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    className="bg-mainColor text-bgColor px-4 py-2 rounded shadow hover:shadow-custom-glow"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="bg-secondbBgColor text-white px-4 py-2 rounded shadow"
                  >
                    Source Code
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
