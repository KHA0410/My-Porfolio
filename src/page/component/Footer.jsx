import React from "react";

export default function Footer() {
  return (
    <div className="py-5 text-white bg-black">
      <div className="container">
            <h1 className="text-3xl font-bold">KhaNguyen</h1>
        <div className="justify-around py-3 text-xl sm:space-y-3 md:space-y-0 md:flex">
          <div className="flex-1">
            <div className="flex items-center space-x-3">
              <i class="fa fa-envelope w-4"></i>
              <h2>khanguyen151121@gmail.com</h2>
            </div>
            <div className="flex items-center space-x-3">
              <i class="fa fa-mobile-alt w-4"></i> 
              <h2>0901944029</h2>
            </div>
          </div>
          <div className="flex-1 space-x-3">
            <a href="">
              <i class="fab fa-facebook icon_connect"></i>
            </a>
            <a href="">
              <i class="fab fa-github icon_connect"></i>
            </a>
            <a href="">
              <i class="fa fa-address-card icon_connect"></i>
            </a>
            <a className="w-20" href="">
              <i class="fab fa-linkedin-in icon_connect"></i>
            </a>
          </div>
          <div>
            <h2>Thanks for visiting my portfolio!</h2>
          </div>
        </div>
      </div>
        <hr />
        <div className="pt-5 text-center">
          <p>© 2024 Nguyen Hoang Minh Kha. All rights reserved.</p>
        </div>
    </div>
  );
}
