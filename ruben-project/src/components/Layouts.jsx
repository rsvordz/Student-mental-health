import React from "react";
const Navbar = React.lazy(() => import("./Navbar"));
const Footer = React.lazy(() => import("./Footer"));

const Layouts = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className=" px-12">{children}</div>
      <Footer />
    </div>
  );
};

export default Layouts;
