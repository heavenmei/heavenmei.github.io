"use client";

import React, { useEffect, useMemo, useState } from "react";
import { routes } from "@/configs/routes";
import Link from "next/link";

const Nav = () => {
  const NavMenu = useMemo(
    () => routes.filter((item) => item.navShow),
    [routes]
  );

  useEffect(() => {
    const handleScroll = () => {
      const navDom = document.querySelector("#navbar") as HTMLElement;
      const oAffix = document.querySelector("#affix") as HTMLElement;
      const top = document.scrollingElement?.scrollTop ?? 0;

      if (navDom) {
        top > 100
          ? (navDom.className = "navbar navbar-fix")
          : (navDom.className = "navbar");
      }
      if (oAffix) {
        top >= 300
          ? (oAffix.style.display = "block")
          : (oAffix.style.display = "none");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navbar" className="navbar">
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
