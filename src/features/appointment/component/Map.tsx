import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Vite bundles the marker images with hashed names, so Leaflet's default paths
// break. Point Leaflet at the imported URLs once, globally.
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface MapProps {
  lat: number;
  lng: number;
  address?: string;
  zoom?: number;
  className?: string;
}

/** Free, key-less map using OpenStreetMap tiles via react-leaflet. */
const Map = ({ lat, lng, address, zoom = 15, className }: MapProps) => {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={zoom}
      scrollWheelZoom={false}
      className={className}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        {address && <Popup>{address}</Popup>}
      </Marker>
    </MapContainer>
  );
};

export default Map;
