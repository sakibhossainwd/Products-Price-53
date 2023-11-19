// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Naver = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Product", path: "/product" },
    { id: 5, name: "Service", path: "/service" },
    // Add more routes as needed
  ];

  return (
    <nav className="bg-purple-200">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-purple-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-purple-700" />
          )}
        </span>
      </div>
      <ul className={`md:flex absolute md:static duration-500 bg-purple-200 p-2 rounded ${open ? 'top-6' : '-top-36'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>

          
        ))}
      </ul>
    </nav>
  );
};

export default Naver;
