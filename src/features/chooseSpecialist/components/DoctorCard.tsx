import { Star } from "lucide-react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const DoctorCard = ({
  header=false,
  image,
  namespecialization,
  hospital,
  rate,
  time,
  price,
}) => {
  return (
    <section className="shadow-[0px_8px_24px_rgba(149,157,165,0.2)] rounded-lg p-5">
      {/* Doctor Info */}
      <section>
        {/* Here We Make This Card Reusable By Using Header Flag */}
        {header && "here card header"}
        {/*===== Here We Make This Card Reusable By Using Header Flag =====*/}
        <section className="flex items-center gap-4">
          {/* ProfileImage */}
          <img
            src="https://placehold.co/400x400"
            className="size-21 rounded-lg"
          ></img>
          {/*=== ProfileImage ===*/}
          <section className="space-y-1">
            <h5 className="text-text-h font-semibold capitalize">
              Robert Johnson
            </h5>
            <p className="text-text font-light text-md">
              Orthopedic | El-Nasr Hospital
            </p>
            <p className="flex items-center gap-3">
              <span className="flex items-center gap-2">
                <Star className="text-[#F9E000]" />
                <span>4.8</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="text-[#6D7379]" />
                <span className="text-text-h">9:30am - 8:00pm</span>
              </span>
            </p>
          </section>
        </section>
        {/* Price Info */}
        <section className="py-4 flex justify-between flex-wrap">
          <span className="text-text-h">
            Price<span className="text-text/80 font-light text-sm">/hour</span>
          </span>
          <span className="text-[#FC4B4E]">$350</span>
        </section>
        {/*===== Price Info =====*/}

        {/* Booking Button */}
        <Button
          variant="outline"
          className="capitalize cursor-pointer py-5 px-7! text-white bg-brand! w-full text-md font-semibold"
        >
          Book appointment
        </Button>
        {/*====== Booking Button ======*/}
      </section>
      {/*===== Doctor Info =====*/}
    </section>
  );
};

export default DoctorCard;
