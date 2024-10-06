import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";

export default function Header() {
  return (
    <div className="text-xl text-white bg-black shadow-lg nt-medium header_fixed shadow-blue-500">
      <div className="container flex items-center justify-between h-20">
        <div>
          <h1 className="text-3xl font-bold">KhaNguyen</h1>
        </div>
        <nav className="space-x-5">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </nav>
        <div className="mobile-menu">
        <i class="fa fa-bars"></i>       
        </div>
      </div>
    </div>
  );
}
