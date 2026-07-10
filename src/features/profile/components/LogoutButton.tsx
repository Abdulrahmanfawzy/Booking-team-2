import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";

export default function LogoutButton({ className }: { className?: string }) {
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
