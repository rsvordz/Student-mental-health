import { Link, useLocation } from "react-router-dom";

function SelfHelp({ children }) {
  const location = useLocation();

  return (
    <>
      <div className="z-50 mt-14 mb-12 grid grid-cols-4">
        <div className="col-span-4 lg:col-span-1">
          <ul>
            <Link to={"/self-help/resources"}>
              <li className=" text-xl hover:bg-primary-300 p-2 cursor-pointer   text-primary-100">
                Recommended Resources
              </li>
            </Link>
          </ul>
        </div>
        <div className=" p-2 col-span-3">
          <ul className="flex gap-2 mb-12">
            <li className="text-xs cursor-pointer  ">
              <a href="/" className="hover:underline ">
                Home
              </a>{" "}
              &gt;
            </li>
            {location.pathname === "/self-help/resources" && (
              <span
                onClick={() => setHelp("self")}
                className="text-xs hover:underline  cursor-pointer">
                self-help
              </span>
            )}
          </ul>
          {children}
        </div>
      </div>
    </>
  );
}

export default SelfHelp;
