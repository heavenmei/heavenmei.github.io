"use client";

import React, { useEffect, useMemo, useState } from "react";
import { routes } from "@/lib/routes";
import Link from "next/link";

const Nav = () => {
  const [navClass, setNavClass] = useState("");

  const NavMenu = useMemo(
    () => routes.filter((item) => item.navShow),
    [routes]
  );

  useEffect(() => {
    window.onscroll = () => {
      const top = document.scrollingElement?.scrollTop ?? 0;
      if (top > 400) {
        setNavClass("navbar-fix");
      } else {
        setNavClass(" ");
      }
    };
  }, []);

  return (
    <nav className={`navbar flex justify-between items-center ${navClass}`}>
      <h3>Heavenmei </h3>
      <div className="nav-list flex gap-8">
        {NavMenu.map((item) => (
          <Link href={item.path} key={item.path} className="nav-item">
            {item.label}
          </Link>
        ))}
      </div>

      <div className="nav-list flex gap-8">
        <button>Contact Me</button>
      </div>
    </nav>
  );
};

export default Nav;
