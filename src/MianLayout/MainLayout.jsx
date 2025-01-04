import React from "react";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import Home from "../Components/Home";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

const MainLayout = () => {
  return (
    <>
      <Header />

      <div className="min-h-[calc(100vh-430px)]">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;
