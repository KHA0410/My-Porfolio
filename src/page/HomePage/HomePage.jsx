import React from "react";
import "animate.css";
import Header from "../Header/Header";
import Carousel from "./Carousel";
import About from "./About";
import Education from "./Education";
import Skill from "./Skill";

export default function HomePage() {
  return (
    <div>
      <Header/>
      <Carousel/>
      <About/>
      <Education/>
      <Skill/>
    </div>
  );
}
