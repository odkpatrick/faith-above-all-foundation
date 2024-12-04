import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const Location = () => {
  const position = [0.351224, 32.594473]; // Replace with your office location coordinates

  useEffect(() => {
    const L = require('leaflet');

    // Fix marker icon issue with default icon import
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
      iconUrl: require('leaflet/dist/images/marker-icon.png').default,
      shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
    });    

    if (typeof window !== "undefined") {
      return (
        <MapContainer center={position} zoom={13} style={{ height: '360px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Our Main Office
            </Popup>
          </Marker>
        </MapContainer>
      );
    }
  }, []);

  return (
    <div>
      <h2>map</h2>
    </div>
  );
}

export default Location;
