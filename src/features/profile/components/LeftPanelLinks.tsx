import { LockKeyhole, LogOut, UserRound } from "lucide-react";
import LeftPanelLink from "./LeftPanelLink";

export default function LeftPanelLinks() {
  return (
    <>
      <LeftPanelLink
        title="Personal information"
        Icon={UserRound}
        variant="info"
      />
      <LeftPanelLink
        title="Password Management"
        Icon={LockKeyhole}
        variant="password"
      />
      <LeftPanelLink title="Log out" Icon={LogOut} variant="logout" />
    </>
  );
}
