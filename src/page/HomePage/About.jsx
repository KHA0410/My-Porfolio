import React, { useState } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

export default function () {
    AOS.init();

  return (
    <div className="py-5 bg-blue-950">
      <div className="container space-y-5 text-white">
        <h1 className="text-xl font-medium text-gray-500">INTRODUCTION</h1>
        <div data-aos="fade-right" className="space-y-3 text-xl">
          <h1 className="text-3xl font-bold ">OVERVIEW</h1>
          <p>
            I am a graduation student majorinig in electronics and
            telecommunications at Saigon University, with knowledge and skills
            in website development, I am seeking an internship opportunity in
            the website field. My term goal is to integrate into the company's
            working environment, master web development technologies and
            processes, and become a Junior Fullstack Developer within a year.
          </p>
        </div>
      </div>
    </div>
  );
}
