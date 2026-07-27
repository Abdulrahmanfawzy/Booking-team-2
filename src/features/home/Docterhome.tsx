import "./Docterhome.css";

import { Star, ArrowRight, MapPin } from "lucide-react";
import { useGetTopRatedDoctor } from "./hooks/useGetTopRatedDoctors";
import { Link } from "react-router-dom";

const Docterhome = () => {
  const { data: doctors, isLoading, isError, refetch } = useGetTopRatedDoctor();

  return (
    <section className="topDoctors">
      <div className="topDoctors__header">
        <div>
          <span className="sectionTag">Doctors</span>
          <h2>
            Top-Rated Doctors <br /> Chosen by Patients
          </h2>
          <p>
            Browse highly reviewed specialists trusted by thousands of patients
            for exceptional care and professional expertise.
          </p>
        </div>
        <button
          style={{
            background: "#fff",
            color: "#555",
            border: "1.5px solid #2563eb",
          }}
          className="viewAllBtn"
        >
          View All <ArrowRight size={18} />
        </button>
      </div>

      {isLoading && (
        <p className="text-center text-gray-500 py-10">Loading doctors…</p>
      )}

      {isError && (
        <div className="text-center py-10">
          <p className="text-gray-500 mb-3">
            We couldn't load the top-rated doctors right now.
          </p>
          <button
            onClick={() => refetch()}
            className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600"
          >
            Try again
          </button>
        </div>
      )}

      {!isLoading && !isError && doctors?.length === 0 && (
        <p className="text-center text-gray-500 py-10">
          No doctors available at the moment.
        </p>
      )}

      <div className="doctorGrid">
        {(doctors ?? []).map((doctor) => (
          <div className="doctorCard" key={doctor.id}>
            <div className="cardTop">
              <div className="doctorImage">
                <img src={doctor.image} alt={doctor.name} />
              </div>
              <div className="doctorDetails">
                <h3>{doctor.name}</h3>
                <span className="specialty">
                  {doctor.specialty} | {doctor.hospital}
                </span>
                <div className="doctorMeta">
                  <div className="rating">
                    <Star fill="#FFC107" color="#FFC107" size={15} />
                    {doctor.rating}
                  </div>
                  <div className="time">
                    <MapPin size={14} />

                    {doctor.address}
                  </div>
                </div>
              </div>
            </div>

            <div className="priceRow">
              <span>Price/hour</span>
              <h4>${doctor.consultation_price}</h4>
            </div>
            <label
              htmlFor="bookAppointment"
              className="w-full h-11.5 rounded-xl bg-blue-600 text-white text-[15px] font-semibold flex items-center justify-center"
            >
              <Link
                id="bookAppointment"
                to={`/appointment/${doctor.id}`}
                className="w-full text-center"
              >
                Book Appointment
              </Link>
            </label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Docterhome;
