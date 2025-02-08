import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import { Tooltip } from "antd";

export default function Education() {
  AOS.init();
  let edu_arr = useSelector((state) => state.educationSlice.edu_arr);

  return (
    <div className="py-5 text-white bg-black">
      <div className="container">
        <h1 className="text-xl font-medium text-gray-500">
          EDUCATION & CERTIFICATIONS
        </h1>
        <div className="md:space-x-5 md:flex justify-evenly">
          {edu_arr.map((item, index) => {
            return (
              <Tooltip
                overlayClassName="custom-tooltip"
                placement="bottom"
                title={"Click to view certificate"}
                color="rgba(255, 255, 255, 0.5)"
                key={index}
                data-aos="fade-right"
                className="space-y-3 cursor-pointer bg_blur"
              >
                <a href="https://drive.google.com/drive/folders/1CaZB8wHHMs5MMU2ENvFsadvitIbnILZS?usp=sharing">
                <h1 className="text-3xl font-bold ">{item.type}</h1>
                <h2 className="text-xl font-medium">{item.location}</h2>

                {item.course.map((course, index) => {
                  return (
                    <div key={index}>
                      <div className="flex items-center justify-between space-x-5">
                        <h3>{course.name}</h3>
                        <h3>{course.time}</h3>
                      </div>
                    </div>
                  );
                })}
                </a>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </div>
  );
}
