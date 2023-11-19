// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Naver = () => {
    const [open, setOpen] = useState(false)

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Product", path: "/product" },
    { id: 5, name: "Service", path: "/service" },
    // Add more routes as needed
  ];

  return (
    <nav>
      <div onClick={() => setOpen(!open)}>
        <Bars3Icon className="h-6 w-6 text-blue-500" />
      </div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Naver;
