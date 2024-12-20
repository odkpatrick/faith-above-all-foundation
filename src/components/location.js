import React, { useEffect, useState } from 'react';

const Location = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure the code runs only on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing during SSR
  }

  // Dynamically import Leaflet components after confirming client-side rendering
  const { MapContainer, TileLayer, Marker, Popup } = require('react-leaflet');
  const L = require('leaflet');

  // Fix marker icon issue with default icon import
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
  });

  const position = [0.351224, 32.594473]; // Replace with your office location coordinates

  return (
    <MapContainer center={position} zoom={13} style={{ height: '360px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Our Main Office</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Location;
