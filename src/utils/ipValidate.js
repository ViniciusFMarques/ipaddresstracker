/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
export default function ipValidate(ip) {
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Regex = /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i;
  if (ipv4Regex.test(ip)) {
    const parts = ip.split('.');
    for (const part of parts) {
      if (parseInt(part) > 255) {
        return false;
      }
    }
    return true;
  }
  if (ipv6Regex.test(ip)) {
    const parts = ip.split(':');
    for (const part of parts) {
      if (part.length > 4) {
        return false;
      }
    }
    return true;
  }
  return false;
}
