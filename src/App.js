import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Expertise from "./components/Expertise";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Volunteer from "./components/Volunteer";
import Education from "./components/Education";
import Profiles from "./components/Profiles";
import Awards from "./components/Awards";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import "./assets/css/main.css";
import "./assets/css/custom.scss";
import "./assets/css/themes.light.scss";
import "./assets/css/themes.dark.scss";

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
        <Experience />
        <Education />
        <Volunteer />
        <Skills />
        {/* <Profiles />
        <Awards />
        <Portfolio />
        <Clients /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
