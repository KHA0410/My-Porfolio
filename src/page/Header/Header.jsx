import React from "react";

export default function Header() {
  return (
    <div className="bg-black nt-medium text-xl text-white header_fixed shadow-lg shadow-blue-500">
      <div className="flex justify-between items-center container h-20">
        <div>
          <h1 className="font-bold text-3xl">NguyenKha</h1>
        </div>
        <div>
          <nav className="space-x-5">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
