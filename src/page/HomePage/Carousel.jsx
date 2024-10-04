import React from "react";

export default function Carousel() {
  return (
    <div className="bg_homePage">
      <div
        style={{ height: "40rem" }}
        className="flex items-center justify-center "
      >
        <div className="space-y-5">
          <div className="animate__animated animate__backInDown">
            <img
              className="w-64 border-2 border-white rounded-full shadow_avt"
              src="./img/avt.jpg"
              alt=""
            />
          </div>

          <div className="text-2xl font-bold text-center text-white  animate__animated animate__backInUp">
            <h1 className="text-3">Hello, I'm Nguyen Kha</h1>
            <h2>A Front-End Developer</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
