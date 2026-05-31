import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const NavLinks = [
    {
      title: "Products",
      url: "/products",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>react deploy</h2>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        {NavLinks.map((link, index) => (
          <Link key={index} to={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
