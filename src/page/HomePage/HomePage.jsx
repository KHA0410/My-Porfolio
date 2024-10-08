import React from "react";
import "animate.css";
import Header from "../component/Header";
import Carousel from "./Carousel";
import About from "./About";
import Education from "./Education";
import Skill from "./Skill";
import Project from "./Project";

export default function HomePage() {
  return (
    <div>
      <Carousel/>
      <About/>
      <Education/>
      <Skill/>
      <Project/>
    </div>
  );
}
