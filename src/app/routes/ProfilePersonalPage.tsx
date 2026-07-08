import { Button } from "@/components/ui/button";
import BirthDataPicker from "@/features/profile/components/BirthDataPicker";
import EditProfileInput from "@/features/profile/components/EditProfileInput";

export default function ProfilePersonalPage() {
  return (
    <>
      <h1 className="text-lg text-black">Personal information</h1>
      <div className="md:grid md:grid-cols-2 md:gap-x-25 md:gap-y-5 gap-y-6">
        <EditProfileInput title="Full Name" />
        <EditProfileInput title="Phone Number" />
        <EditProfileInput title="Email" />
        <BirthDataPicker />
        <EditProfileInput title="Location" className="col-span-2" />
      </div>
      <div className="w-full text-end">
        <Button className="md:w-1/3 w-full py-3 text-center bg-brand text-white">
          Save Changes
        </Button>
      </div>
    </>
  );
}
