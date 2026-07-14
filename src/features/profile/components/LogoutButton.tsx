import { AuthContext } from "@/features/auth/context/AuthContext";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { useContext } from "react";

export default function LogoutButton({ className }: { className?: string }) {
  const { logout } = useContext(AuthContext);
  return (
    <div className={cn(`w-full flex items-center`, className)}>
      <LogOut color="#ff0000" className="-rotate-180" />
      <button
        onClick={() => {}}
        className="w-full px-4 py-2 text-left text-red-500 "
      >
        Logout
      </button>
    </div>
  );
}
