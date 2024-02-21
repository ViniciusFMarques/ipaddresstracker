import { Container } from './styles';
import Map from '../Map';
import SearchContainer from '../SearchContainer';
import useMainContainer from './useMainContainer';

export default function MainContainer() {
  const {
    locationObject,
    handleSetIp,
  } = useMainContainer();

  return (
    <Container>
      <SearchContainer
        handleSetIp={handleSetIp}
        locationObject={locationObject || {}}
      />
      <Map
        positionProp={[locationObject?.latitude, locationObject?.longitude]}
        error={locationObject?.error}
      />
    </Container>
  );
}
