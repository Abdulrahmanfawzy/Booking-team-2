import { cva } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const classVariants = cva("text-sm cursor-pointer", {
  variants: {
    class: {
      logout: "text-red-500",
      info: "text-black",
      password: "text-black",
    },
  },
  defaultVariants: { class: "info" },
});

export default function LeftPanelLink({
  title,
  Icon,
  variant,
}: {
  title: "Personal information" | "Password Management" | "Log out";
  Icon: LucideIcon;
  variant?: "info" | "logout" | "password";
}) {
  const iconColor =
    variant === "info" || variant === "password" ? "#000000" : "#ff0000";

  return (
    <NavLink
      to={variant}
      className={({ isActive }) =>
        `w-full py-3 px-3 rounded-lg border flex items-center gap-2 ${
          isActive ? "border-brand" : "border-transparent"
        }`
      }
    >
      {/*Icon  */}
      <Icon
        color={iconColor}
        className={`${variant === "logout" ? "-rotate-180" : ""}`}
      />
      {(variant === "info" || variant === "password") && (
        <p className={classVariants({ class: variant })}>{title}</p>
      )}
      {variant === "logout" && (
        <button className={classVariants({ class: variant })}>{title}</button>
      )}
    </NavLink>
  );
}
