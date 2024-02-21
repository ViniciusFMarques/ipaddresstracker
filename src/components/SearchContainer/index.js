import PropTypes from 'prop-types';
import InfoCard from './components/InfoCard';
import InputContainer from './components/InputContainer';
import { Container } from './styles';

export default function SearchContainer({
  handleSetIp, locationObject,
}) {
  return (
    <Container>
      <h1>IP Address Tracker</h1>
      <InputContainer
        handleSetIp={handleSetIp}
        ip={locationObject?.ip}
        error={locationObject?.error}
        reason={locationObject?.reason}
      />
      <InfoCard
        ip={locationObject?.ip}
        region={locationObject?.region}
        city={locationObject?.city}
        postalCode={locationObject?.postal}
        timezone={locationObject?.utc_offset}
        isp={locationObject?.org}
        error={locationObject?.error}
        reason={locationObject?.reason}
      />
    </Container>
  );
}

SearchContainer.propTypes = {
  locationObject: PropTypes.shape(),
  handleSetIp: PropTypes.func.isRequired,
};

SearchContainer.defaultProps = {
  locationObject: {},
};
