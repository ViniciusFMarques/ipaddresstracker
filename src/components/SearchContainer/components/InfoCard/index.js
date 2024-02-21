import PropTypes from 'prop-types';
import { Container, InfoSpan } from './styles';

export default function InfoCard({
  ip, city, region, postalCode, timezone, isp, error, reason,
}) {
  return (
    <Container error={error}>
      {error && (
        <InfoSpan error={error}>
          <span>
            <h2>Error</h2>
            <strong>{reason}</strong>
          </span>
        </InfoSpan>
      )}
      {(ip && !error) && (
      <InfoSpan>
        <span>
          <h2>Ip Address</h2>
          <strong>{ip}</strong>
        </span>
      </InfoSpan>
      )}
      {(city && region && !error) && (
      <InfoSpan>
        <span>
          <h2>Location</h2>
          <strong>{`${city}, ${region} ${postalCode}`}</strong>
        </span>
      </InfoSpan>
      )}

      {(timezone && !error) && (
      <InfoSpan>
        <span>
          <h2>Timezone</h2>
          <strong>
            {`UTC ${timezone}`}
          </strong>
        </span>
      </InfoSpan>
      )}

      {(isp && !error) && (
      <InfoSpan>
        <span>
          <h2>ISP</h2>
          <strong>{isp}</strong>
        </span>
      </InfoSpan>
      )}

    </Container>
  );
}

InfoCard.propTypes = {
  ip: PropTypes.string,
  city: PropTypes.string,
  region: PropTypes.string,
  postalCode: PropTypes.string,
  timezone: PropTypes.string,
  isp: PropTypes.string,
  error: PropTypes.bool,
  reason: PropTypes.string,
};

InfoCard.defaultProps = {
  ip: '',
  city: '',
  region: '',
  postalCode: '',
  timezone: '',
  isp: '',
  error: false,
  reason: '',
};
