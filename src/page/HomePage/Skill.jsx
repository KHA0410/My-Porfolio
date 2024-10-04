import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

export default function Skill() {
    AOS.init();
  let { tech_arr } = useSelector((state) => state.technicalSlice);
  console.log("tech_arr", tech_arr);
  return (
    <div className="pb-5 bg-blue-950">
      <div className="container space-y-5 text-white">
        <h1 className="py-5 text-xl font-medium text-gray-500">
          TECHNICAL SKILLS
        </h1>
        <div>
          {tech_arr.map((item, index) => {
            return (
              <div
              data-aos="fade-right"
                key={index}
                className="items-center justify-around md:flex bg_blur"
              >
                <h1 className="flex-1 text-3xl font-bold">{item.title}</h1>
                <div className="flex-nowrap">
                  {item.skill.map((skill, index) => {
                    return (
                      <div key={index} className="inline-flex ">
                        <div className="px-3">
                        <img
                          className="w-20 h-20 p-2 my-3 bg-white rounded-xl"
                          src={skill.img}
                          alt=""
                        />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
