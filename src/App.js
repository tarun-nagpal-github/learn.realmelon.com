import React from "react";
import "./App.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Course from "./course/Course";
import LowerHeader from "./lower-header/LowerHeader";

function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
      <LowerHeader />
        <div class="album py-5 bg-light">
          <div class="container">
            <div className="row course-container card-deck">
              <Course title="Core Java" description2="Java is an object-oriented, class-based, concurrent, secured and general-purpose computer-programming language. It is a widely used robust technology."/>
              <Course title="Spring" description2="The Spring Framework is an application framework and inversion of control container for the Java platform. "/>
              <Course title="Spring Boot" description2="Spring Boot is an open source Java-based framework used to create a micro Service. It is developed by Pivotal Team and is used to build stand-alone and production ready spring applications."/>
              <Course title="Scrum" description2="Scrum is a framework within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value."/>
              {/* <Course title="Agile" description2="Agile software development refers to  software development methodologies centered round the idea of iterative development, where requirements and solutions evolve through collaboration between self-organizing cross-functional teams. "/> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
