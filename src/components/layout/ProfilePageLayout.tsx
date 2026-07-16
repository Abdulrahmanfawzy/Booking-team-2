import LeftPanelLinks from "@/features/profile/components/LeftPanelLinks";
import NameAndAddress from "@/features/profile/components/NameAndAddress";
import ProfileImage from "@/features/profile/components/ProfileImage";
import { useEditProfile } from "@/features/profile/hooks/useEditProfile";
import { useGetProfile } from "@/features/profile/hooks/useGetUser";

import { Camera } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function ProfilePageLayout() {
  const { data: user } = useGetProfile();
  const { mutate } = useEditProfile();

  return (
    <div className="min-h-screen h-full px-13 py-8">
      <div className=" md:flex md:gap-16 space-y-14.5">
        {/* left panel*/}
        <div className="md:bg-gray-200 rounded-xl space-y-7">
          <div className="md:mt-20 md:mx-18 mdd:mb-12 text-center flex flex-col justify-center items-center space-y-4 ">
            {/*Profile photo */}
            <div className="h-28.25 w-28.25 md:mx-[31.5px] relative ">
              <ProfileImage
                imageUrl={user.image || "/src/assets/profile-image.jpg"}
                className="w-full h-full"
              />
              <div className="rounded-full bg-[#E6EFFF] w-8 h-8 absolute -right-1.5 bottom-1.5 z-1 flex justify-center items-center">
                <label className="cursor-pointer" htmlFor="image-upload">
                  <Camera color="#005AFB" className="m-auto h-6 w-6" />
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="image-upload"
                />
              </div>
            </div>
            {/*name and address */}
            <NameAndAddress
              name={user.name}
              address={user.address || undefined}
            />
          </div>
          <div className="mx-8 mb-10 space-y-2 md:block ">
            {/*Left panel link*/}
            <LeftPanelLinks />
          </div>
        </div>
        {/*right panel */}
        <div className="w-full md:space-y-8 space-y-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
