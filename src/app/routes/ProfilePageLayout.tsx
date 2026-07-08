import LeftPanelLinks from "@/features/profile/components/LeftPanelLinks";
import NameAndAddress from "@/features/profile/components/NameAndAddress";

import { Camera } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function ProfilePageLayout() {
  return (
    <div className="min-h-screen h-full px-13 py-8">
      <div className=" md:flex md:gap-16 space-y-14.5">
        {/* left panel*/}
        <div className="md:bg-gray-200 rounded-xl space-y-7">
          <div className="md:mt-20 md:mx-18 mdd:mb-12 text-center flex flex-col justify-center items-center space-y-4 ">
            {/*Profile photo */}
            <div className="h-28.25 w-28.25 md:mx-[31.5px] relative ">
              <div className="rounded-full h-full w-full overflow-hidden ">
                <img
                  src="/profileImage.jpg"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-full bg-[#E6EFFF] w-8 h-8 absolute -right-1.5 bottom-1.5 z-1 flex justify-center items-center">
                <button className="cursor-pointer">
                  <Camera color="#005AFB" className="m-auto h-6 w-6" />
                </button>
              </div>
            </div>
            {/*name and address */}
            <NameAndAddress
              name="Seif Mohamed"
              address="129,El-Nasr Street, Cairo"
            />
          </div>
          <div className="mx-8 mb-10 space-y-2 md:block hidden">
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
