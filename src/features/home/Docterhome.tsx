import "./Docterhome.css";

import doctor1 from "../../assets/do1.jpg";
import doctor2 from "../../assets/do2.jpg";
import doctor3 from "../../assets/do3.jpg";
import doctor4 from "../../assets/do4.jpg";

import { Star, Clock3, ArrowRight } from "lucide-react";

const doctors = [
  { id: 1, image: doctor1, name: "Robert Johnson", specialty: "Orthopedic | El-Nasr Hospital", rating: "4.8", time: "9:30 AM - 8:00 PM", price: "$350" },
  { id: 2, image: doctor2, name: "Sarah Wilson", specialty: "Cardiologist | El-Nasr Hospital", rating: "4.9", time: "10:00 AM - 7:00 PM", price: "$420" },
  { id: 3, image: doctor3, name: "Emily Brown", specialty: "Neurologist | El-Nasr Hospital", rating: "4.7", time: "11:00 AM - 6:30 PM", price: "$390" },
  { id: 4, image: doctor4, name: "David Smith", specialty: "Dentist | El-Nasr Hospital", rating: "4.9", time: "8:30 AM - 5:00 PM", price: "$280" },
];

const Docterhome = () => {
  return (
    <section className="topDoctors">
      <div className="topDoctors__header">
        <div>
          <span className="sectionTag">Doctors</span>
          <h2>Top-Rated Doctors <br /> Chosen by Patients</h2>
          <p>Browse highly reviewed specialists trusted by thousands of patients for exceptional care and professional expertise.</p>
        </div>
        <button style={{background:'#fff',color:'#555',border: '1.5px solid #2563eb'}} className="viewAllBtn">View All <ArrowRight size={18} /></button>
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
                <span className="specialty">{doctor.specialty}</span>
                <div className="doctorMeta">
                  <div className="rating">
                    <Star fill="#FFC107" color="#FFC107" size={15} />
                    {doctor.rating}
                  </div>
                  <div className="time">
                    <Clock3 size={14} />
                    {doctor.time}
                  </div>
                </div>
              </div>
            </div>

            <div className="priceRow">
              <span>Price/hour</span>
              <h4>{doctor.price}</h4>
            </div>

            <button className="bookBtn">Book Appointment</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Docterhome;