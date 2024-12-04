import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Location = () => {
  const position = [0.351224, 32.594473]; // Replace with your office location coordinates

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

export default Location;
