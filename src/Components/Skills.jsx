import React from "react";


const Skills = () => {
    const frontendSkills = [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "React.js",
        "Firebase (Authentication)",
      ];
    
      const backendSkills = [
        "Node.js",
        "Express.js",
        "MongoDB",
      ];
    
      const tools = [
        "Git",
        "VS Code",
        "Chrome DevTools",

      ];
    
  return (
    <section id="skills" className="py-20">
      <h2 className="text-center mb-10 font-medium text-mainColor ">My Skills</h2>

      <div className="max-w-5xl mx-auto px-6">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Frontend Technologies
            </h3>
            <ul className="flex flex-wrap gap-4">
              {frontendSkills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-transparent border-2 border-mainColor text-mainColor hover:bg-mainColor rounded-lg p-3 hover:shadow-custom-glow hover:text-textColor  transition cursor-pointer"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Backend Technologies
            </h3>
            <ul className="flex flex-wrap gap-4">
              {backendSkills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-transparent border-2 border-mainColor text-mainColor hover:bg-mainColor rounded-lg p-3 hover:shadow-custom-glow hover:text-textColor  transition cursor-pointer"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold  mb-4">
              Tools & Libraries
            </h3>
            <ul className="flex flex-wrap gap-4">
              {tools.map((tool, index) => (
                <li
                  key={index}
                  className="bg-transparent border-2 border-mainColor text-mainColor hover:bg-mainColor rounded-lg p-3 hover:shadow-custom-glow hover:text-textColor  transition cursor-pointer"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              In Progress
            </h3>
            <p className="opacity-70">
              Expanding knowledge in advanced JavaScript frameworks and front-end best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
