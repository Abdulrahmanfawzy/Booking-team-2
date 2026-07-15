import "./Findcard.css";
import { Search } from "lucide-react";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

function Recenter({ position }: { position: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 15);
  }, [map, position]);

  return null;
}

const Findcard = () => {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);
  return (
    <section className="px-13">
      <div className="location-container ">
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

            <input type="text" placeholder="Search by location" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex w-145.75">
          <MapContainer
            center={position ?? [30.0444, 31.2357]} // Cairo fallback
            zoom={13}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {position && (
              <>
                <Recenter position={position} />

                <Marker position={position}>
                  <Popup>You are here</Popup>
                </Marker>
              </>
            )}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Findcard;
