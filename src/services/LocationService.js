/* eslint-disable class-methods-use-this */
import axios from 'axios';

class LocationService {
  async getLocationByIp(ip) {
    const response = await axios.get(`https://ipapi.co/${ip}/json/`);
    const data = await response.data;
    return data;
  }

  async getUserLocation() {
    const response = await axios.get('https://ipapi.co/json/');
    const data = await response.data;
    return data;
  }
}

export default new LocationService();
