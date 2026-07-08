import { Button } from "@/components/ui/button";
import EditProfileInput from "@/features/profile/components/EditProfileInput";

export default function ProfilePasswordPage() {
  return (
    <>
      <h1 className="text-lg text-black">Change Password</h1>
      <div className="md:space-y-5 space-y-6">
        {/*reusable input */}
        <EditProfileInput title="Old Password" type="password" />
        <EditProfileInput title="New Password" type="password" />
        <EditProfileInput title="Confirm Password" type="password" />
      </div>
      <div className="w-full text-end">
        <Button className="w-1/3 py-3 text-center bg-brand text-white">
          Save Changes
        </Button>
      </div>
    </>
  );
}
