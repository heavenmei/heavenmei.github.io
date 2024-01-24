import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "@/routes";

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
      <div>Heavenmei Blog </div>
      <div className="nav-list flex gap-8">
        {NavMenu.map((item) => (
          <Link to={item.path} key={item.path} className="nav-item">
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
