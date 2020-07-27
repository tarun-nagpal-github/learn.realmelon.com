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
            <div class="row course-container">
              <Course title="Core Java"/>
              <Course title="Spring"/>
              <Course title="Spring Boot"/>
              <Course title="Scrum"/>
              <Course title="Agile"/>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
