import React, { useState } from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import HeroBg from "../components/heroBackground";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function About({ children }) {
  const location = useLocation();

  return (
    <>
      <HeroBg />
      <div className="flex flex-col lg:flex-row h-[60vh] mt-16 mb-36 gap-5">
        <div>
          <h1 className="text-4xl text-primary-100 font-semibold">About</h1>
          <p className="text-xl text-medium">
            Our services are confidential <br /> and free
          </p>
        </div>
        <Image
          src="/img/KnustLibrary.jpg"
          alt="logo"
          className="lg:w-[68%] h-[340px] "
        />
      </div>
      <div className="grid grid-cols-4 gap-4 ">
        <div className="col-span-4 lg:col-span-1">
          <ul>
            <Link to={"/about/confidentiality"}>
              <li className=" text-xl hover:bg-primary-300 p-2 cursor-pointer   text-primary-100">
                Confidentiality
              </li>
            </Link>
            <Link to={"/about/contact"}>
              <li className=" text-xl hover:bg-primary-300 p-2 cursor-pointer   text-primary-100">
                Contact
              </li>
            </Link>
            <Link to={"/about/staff"}>
              <li className=" text-xl hover:bg-primary-300 p-2 cursor-pointer   text-primary-100">
                Meet Our Staff
              </li>
            </Link>
          </ul>
        </div>
        <div className="col-span-3 ">
          <ul className="flex gap-2 mb-12">
            <li className="text-xs cursor-pointer  ">
              <a href="/" className="hover:underline ">
                Home
              </a>{" "}
              &gt;
            </li>

            {location.pathname !== "/about" && (
              <a
                href="/about"
                className="text-xs hover:underline  cursor-pointer"
              >
                About
              </a>
            )}
          </ul>
          {children}
        </div>
      </div>
    </>
  );
}

export default About;
