import { useState } from "react";
import { mockAppointments } from "@/features/booking/data/mockAppointments";
import AppointmentCard from "@/features/booking/components/AppointmentCard";
import AppointmentFilters from "@/features/booking/components/AppointmentFilters";
import BookingDatePicker from "@/features/booking/components/BookingDatePicker";

export default function BookingContent() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 6, 21)); // July 21, 2025

  const filteredAppointments =
    activeFilter === "all"
      ? mockAppointments
      : mockAppointments.filter((a) => a.status === activeFilter);

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-8">
      {/* Header row */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-booking-text-primary">
            Your appointments
          </h1>
          <AppointmentFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
        <BookingDatePicker />
      </div>

      {/* Appointment cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {filteredAppointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </section>
  );
}
