// import {Link} from "react-router-dom";
import { X } from "lucide-react";
import { Bell } from "lucide-react";

import SearchBar from "./searchBar";
const Nav = ()=>{
    return (
      <nav>
        {/*====  Here Put Link Tag ==== */}
        <section className="mainContainer py-7 flex justify-between items-center gap-15">
          <a href="#">
            <img src="/public/Logo.png" className="min-w-8" />
          </a>
          <SearchBar />

          {/* Nav Links And Profile Page */}
          <section className="flex items-center gap-5">
            <ul className="flex items-center gap-5">
              {/*===== Here But Navigate After Create The Routing ==== */}
              {/* Nav Links */}
              <a href="#">
                <li className="text-text-h text-sm font-light capitalize py-2 px-3 bg-Auth-bg rounded-lg w-fit">
                  home
                </li>
              </a>
              <a href="#">
                <li className="text-text-h text-sm font-light capitalize py-2 px-3 bg-Auth-bg rounded-lg w-fit">
                  booking
                </li>
              </a>
              <a href="#">
                <li className="text-text-h text-sm font-light capitalize py-2 px-3 bg-Auth-bg rounded-lg w-fit">
                  chat
                </li>
              </a>
              <a href="#">
                <li className="text-text-h text-sm font-light capitalize py-2 px-3 bg-Auth-bg rounded-lg w-fit">
                  <X />
                </li>
              </a>
              <a href="#">
                <li className="text-text-h text-sm font-light capitalize py-2 px-3 bg-Auth-bg rounded-lg w-fit">
                  <Bell />
                </li>
              </a>
            </ul>
            {/*=== Nav Links ===*/}

            {/* Profile Image */}
            <section className="size-11 rounded-full  cursor-pointer overflow-hidden">
              <img src="https://placehold.co/400" className="size-full"></img>
            </section>
            {/*===== Profile Image =====*/}
          </section>
          {/* ===== Nav Links And Profile Page ===== */}
        </section>
      </nav>
    );
}

export default Nav;