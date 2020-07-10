import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Expertise from "./components/Expertise";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Profiles from "./components/Profiles";
import Awards from "./components/Awards";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import "./assets/css/main.css";
import "./assets/css/themes.dark.css";

function App() {
  return (
    <>
      <div className="c-preloader  js-preloader">
        <div className="c-preloader__spinner  t-preloader__spinner" />
      </div>

      <div className="c-main-container  js-main-container">
        <Header />
        <Intro />
        <Expertise />
        <Skills />
        <Experience />
        <Education />
        <Profiles />
        <Awards />
        <Portfolio />
        <Clients />
        <Footer />
      </div>
    </>
  );
}

export default App;
