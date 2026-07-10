import { Link } from "react-router-dom";
import { X, Bell, Menu } from "lucide-react";

import SearchBar from "./searchBar";
import { useState } from "react";
import ProfileIconMenu from "@/features/profile/components/ProfileMenu";
import { cn } from "@/lib/utils";

const linkClass =
  "block text-text-h text-sm font-light capitalize py-2 px-3 bg-Auth-bg rounded-lg w-fit cursor-pointer";
const links = ["home", "booking", "chat"];

const Nav = () => {
  const [linksMenu, setLinksMenu] = useState<boolean>(false);
  return (
    <nav className="md:px-13 px-4  sticky top-0 z-50">
      <section className=" py-7 flex bg-white justify-between items-center gap-15 ">
        <Link to="/">
          <img src="/src/assets/logo.png" className="min-w-8" />
        </Link>
        <SearchBar />
        {/* Nav Links And Profile Page */}
        <section className="flex items-center gap-5">
          <ul className="flex items-center gap-2">
            {/* Nav Links */}
            {linksMenu && (
              <>
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={`/${link === "home" ? "" : link}`}
                      className={linkClass}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </>
            )}
            <li>
              <button
                type="button"
                className={linkClass}
                onClick={() => setLinksMenu((prev) => !prev)}
              >
                {linksMenu ? <X /> : <Menu />}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={cn(linkClass, "hidden md:block")}
              >
                <Bell />
              </button>
            </li>
          </ul>
          <ProfileIconMenu imageUrl="/public/profileImage.jpg" />
        </section>
      </section>
    </nav>
  );
};

export default Nav;
