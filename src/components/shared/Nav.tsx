import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import SearchBar from "./searchBar";
import { useState } from "react";
import ProfileIconMenu from "@/features/profile/components/ProfileMenu";
import NotificationMenu from "@/features/profile/components/NotificationMenu";
import { useAuth } from "@/features/auth/hooks/useAuth";

const linkClass =
  "block text-text-h text-sm font-light capitalize py-2 px-3 bg-grey rounded-lg w-fit cursor-pointer";
const links = ["home", "booking", "contact us"];

const Nav = () => {
  const [linksMenu, setLinksMenu] = useState<boolean>(false);

  const { isAuthenticated, user } = useAuth();
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
                      to={`/${
                        link === "home"
                          ? ""
                          : link.replace(/\s+/g, "-").toLowerCase()
                      }`}
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
            <li>{isAuthenticated && <NotificationMenu />}</li>
          </ul>
          {isAuthenticated ? (
            <ProfileIconMenu
              imageUrl={user?.image || "/src/assets/profile-image.jpg"}
            />
          ) : (
            <Link to="/sign-in" className={linkClass}>
              Sign In
            </Link>
          )}
        </section>
      </section>
    </nav>
  );
};

export default Nav;
