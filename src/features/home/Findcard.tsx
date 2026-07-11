import "./Findcard.css";
import { Search } from "lucide-react";

import mapImage from "../../assets/go.png";
import doctorImage from "../../assets/d.png";

const   Findcard = () => {
  return (
    <section className="location-section">
      <div className="location-container">

        {/* Left Side */}
        <div className="location-left">
          <h2>
            Find Care Near You <br />
            in Seconds
          </h2>

          <p>
            Allow location access or choose your city to instantly discover
            trusted doctors and clinics around you—quick, easy, and local.
          </p>

          <div className="location-search">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search by location"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="location-right">
          <img
            src={mapImage}
            alt="Map"
            className="map-image"
          />

          {/* Doctor Pin 1 */}
          <div className="doctor-pin pin-one">
            <img src={doctorImage} alt="Doctor" />
          </div>

          {/* Doctor Pin 2 */}
          <div className="doctor-pin pin-two">
            <img src={doctorImage} alt="Doctor" />
          </div>

          {/* Doctor Pin 3 */}
          <div className="doctor-pin pin-three">
            <img src={doctorImage} alt="Doctor" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Findcard;