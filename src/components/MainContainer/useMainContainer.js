import { useEffect, useState, useCallback } from 'react';
import LocationService from '../../services/LocationService';

export default function useMainContainer() {
  const [ip, setIp] = useState('');
  const [locationObject, setLocationObject] = useState({});

  useEffect(() => {
    (async () => {
      const response = await LocationService.getUserLocation();
      setIp(response.ip);
    })();
  }, []);

  useEffect(() => {
    if (ip) {
      (async () => {
        const response = await LocationService.getLocationByIp(ip);
        setLocationObject(response);
      })();
    }
  }, [ip]);

  const handleSetIp = useCallback((newIp) => {
    setIp(newIp);
  });

  return {
    locationObject,
    handleSetIp,
  };
}
