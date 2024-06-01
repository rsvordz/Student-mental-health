import React from "react";
import { Link as RouterLink , useLocation} from "react-router-dom";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import { Links } from "../shareddata/navlinks";


const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <div className="z-50">
        <header className="bg-primary-100 relative w-full h-40">
          <div className="flex items-center gap-1 w-full h-full ">
            <Image src="/img/knustlogo.png" alt="logo" width="70" height="70" />
            <span>
              <p className="text-white font-Rakkas text-xs">
                Kwame Nkrumah University of Science and Technology
              </p>
              <h1 className="text-white font-bold font-Rakkas text-lg">
                University Counseling Center
              </h1>
            </span>
          </div>
          <nav className="w-[70%] z-50  m-auto flex left-[15%] items-center justify-center absolute -bottom-6 h-16 shadow-md text-black bg-white ">
            <ul className=" flex items-center gap-10">
              {Links.map((link) => (
                <RouterLink
                className={`text-[#333333]  text-base font-medium border-b-2 border-transparent hover:border-b-2 hover:border-b-primary-100 hover:text-primary-100 ${
                  location.pathname === link.src ? "border-b-primary-100  font-semibold text-primary-100" : ""
                }`}
                  to={link.src}
                  key={link.id}
                >
                  {link.name}
                </RouterLink>
              ))}
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
