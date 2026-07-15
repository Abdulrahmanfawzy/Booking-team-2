import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import BookingCalender from "@/features/appointment/component/BookingCalender";
import DoctorDetailsCard from "@/features/appointment/component/DoctorDetailsCard";
import ReviewsToolBar from "@/features/appointment/component/ReviewsToolBar";
import ReviewCard from "@/features/appointment/component/ReviewCard";
import {
  mockDoctor,
  mockReviews,
} from "@/features/appointment/data/mockAppointment";

const AppointmentPage = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-8">
      {/* Back header */}
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-text-h flex cursor-pointer items-center gap-2 font-semibold"
      >
        <ArrowLeft className="size-5" />
        Make an appointment
      </button>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main column */}
        <div className="flex flex-col gap-8 lg:col-span-2">
          <BookingCalender
            onBook={({ date, time }) =>
              toast.success(
                `Booked for ${date.toLocaleDateString(undefined, {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })} at ${time}`,
              )
            }
          />

          <div className="flex flex-col gap-5">
            <ReviewsToolBar
              rating={mockDoctor.rating}
              reviewsCount={mockDoctor.reviewsCount}
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {mockReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <DoctorDetailsCard doctor={mockDoctor} />
        </div>
      </div>
    </section>
  );
};

export default AppointmentPage;
