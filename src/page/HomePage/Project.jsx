import { Tooltip } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";


export default function Project() {
  AOS.init();
  let { project_arr } = useSelector((state) => state.projectSlice);
  return (
    <div className="text-white bg-black">
      <div className="container">
        <h1 className="pt-5 text-xl font-medium text-gray-500">MY WORK</h1>
        <h2 className="py-3 pb-5 text-3xl font-bold">PROJECT</h2>
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {project_arr.map((item, index) => {
            return (
              <div data-aos="fade-right" key={index} className="space-y-3 project_item">
                <a href={item.link_deloy}>
                  <img className="object-cover h-48 rounded-md" src={item.img} alt="" />
                <div className="flex justify-between pt-2 ">
                <h3 className="text-xl font-medium">{item.name}</h3>
                <a className="text-2xl" href={item.link_git}>
              <i class="fab fa-github"></i>
            </a>
                </div>
                <Tooltip title={item.desc}> 
                <p style={{width: 200}}  className="text-gray-400 truncate">{item.desc}</p>
                </Tooltip>
                </a>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
