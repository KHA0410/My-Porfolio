import React from "react";
import { useSelector } from "react-redux";

export default function Project() {
  let { project_arr } = useSelector((state) => state.projectSlice);
  console.log("project_arr", project_arr);
  return (
    <div className="text-white bg-black">
      <div className="container">
        <h1 className="pt-5 text-xl font-medium text-gray-500">MY WORK</h1>
        <h2 className="text-3xl font-bold">PROJECT</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {project_arr.map((item, index) => {
            return (
              <div className="space-y-3">
                <img className="object-cover rounded-md h-46" src={item.img} alt="" />
                <h3 className="text-xl font-medium">{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
