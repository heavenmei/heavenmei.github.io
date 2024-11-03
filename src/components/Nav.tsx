"use client";

import React, { useEffect, useMemo, useState } from "react";
import { routes } from "@/lib/routes";
import Link from "next/link";

const Nav = () => {
  const NavMenu = useMemo(
    () => routes.filter((item) => item.navShow),
    [routes]
  );

  useEffect(() => {
    const handleScroll = () => {
      const navDom = document.querySelector("#navbar") as HTMLElement;

      if (!navDom) return;
      const top = document.scrollingElement?.scrollTop ?? 0;
      if (top > 100) {
        navDom.className = "navbar navbar-fix";
      } else {
        navDom.className = "navbar";
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
