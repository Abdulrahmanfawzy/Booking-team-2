import "./Docterhome.css";

import { Star, ArrowRight, MapPin } from "lucide-react";
import { useGetTopRatedDoctor } from "./hooks/useGetTopRatedDoctors";

const Docterhome = () => {
  const { data: doctors } = useGetTopRatedDoctor();

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

      <div className="doctorGrid">
        {doctors.map((doctor) => (
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

            <button className="bookBtn">Book Appointment</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Docterhome;
