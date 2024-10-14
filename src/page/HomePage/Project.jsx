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
              <NavLink to={`/detail/${item.code}`} data-aos="fade-right" key={index} className="space-y-3 project_item">
                <img className="object-cover rounded-md h-46" src={item.img} alt="" />
                <h3 className="text-xl font-medium">{item.name}</h3>
                <Tooltip title={item.desc}> 
                <p style={{width: 200}}  className="text-gray-400 truncate">{item.desc}</p>
                </Tooltip>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
