import {
  TileLayer, MapContainer, Marker, Popup, useMap,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import { useEffect, useState } from 'react';
import PropTypes, { number } from 'prop-types';
import iconUrl from '../../assets/images/icon-location.svg';
import { Container } from './styles';

export default function Map({ positionProp, error }) {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    if (positionProp[0] && positionProp[1]) {
      setPosition(positionProp);
    }
  }, [positionProp]);

  const customIcon = new Icon({
    iconUrl: `${iconUrl}`,
    iconSize: [16, 24],
  });
  // eslint-disable-next-line react/prop-types
  function RecenterAutomatically({ lat, lng }) {
    const map = useMap();
    useEffect(() => {
      map.setView([lat, lng]);
    }, [lat, lng]);
    return null;
  }

  return (
    <Container error={error}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={customIcon}
        >
          <Popup>
            Selected Location
          </Popup>
          <RecenterAutomatically lat={position[0]} lng={position[1]} />
        </Marker>
      </MapContainer>
    </Container>
  );
}

Map.propTypes = {
  positionProp: PropTypes.arrayOf(number),
  error: PropTypes.bool,
};

Map.defaultProps = {
  positionProp: [0, 0],
  error: false,
};
