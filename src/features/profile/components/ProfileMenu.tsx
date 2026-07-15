import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useClickOutside } from "../hooks/ProfileMenuToggle";
import {
  Banknote,
  ChevronRight,
  Heart,
  LockKeyhole,
  MapPin,
  Settings,
  X,
} from "lucide-react";
import LogoutButton from "./LogoutButton";

import ProfileImage from "./ProfileImage";
import { useGetProfile } from "../hooks/useGetUser";

export default function ProfileIconMenu({ imageUrl }: { imageUrl: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const { data: user } = useGetProfile();
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const links = [
    { title: "Payment Method", Icon: Banknote, link: "#" },
    { title: "Favorite", Icon: Heart, link: "/favorite" },
    { title: "Settings", Icon: Settings, link: "/profile" },
    { title: "Privacy and Policy", Icon: LockKeyhole, link: "#" },
  ];

  // Close on outside click
  useClickOutside<HTMLDivElement>(menuRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar */}
      <button
        onClick={toggleMenu}
        className="focus:outline-none cursor-pointer"
      >
        <ProfileImage imageUrl={imageUrl} className="w-10 h-10" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="md:absolute md:right-0 fixed z-50 md:mt-2 md:w-70 md:rounded-xl md:py-4  h-screen md:h-fit md:inset-auto inset-0 bg-grey shadow-lg space-y-2 py-8 px-5">
          {/*close mob menu button */}
          <div className="w-full flex justify-end md:hidden ">
            <button
              type="button"
              className=" text-text-h text-sm font-light capitalize py-2 px-3 bg-Auth-bg rounded-lg block md:hidden w-fit cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <X />
            </button>
          </div>
          {/*profile image name and settings */}
          <div className=" flex justify-between items-center py-2 ">
            <div className="flex items-center gap-2.5">
              <ProfileImage imageUrl={imageUrl} className="w-15 h-15" />
              <div className="">
                <h1 className="text-lg text-black">{user.name}</h1>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <p className="text-xs">{user.address}</p>
                </div>
              </div>
            </div>
            <Link to="/profile">
              <Settings color="blue" />
            </Link>
          </div>
          {/*profile menu links */}
          {links.map(({ title, Icon, link }, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center">
                <Icon color="#000000" />
                <Link
                  to={link}
                  className="block px-4 py-2  text-black"
                  onClick={toggleMenu}
                >
                  {title}
                </Link>
              </div>
              <ChevronRight color="#000000" />
            </div>
          ))}
          <LogoutButton />
        </div>
      )}
    </div>
  );
}
