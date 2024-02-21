import PropTypes from 'prop-types';
import { SubContainer, Container } from './styles';
import arrow from '../../../../assets/images/icon-arrow.svg';
import useInputContainer from './useInputContainer';

export default function InputContainer({
  handleSetIp, ip,
}) {
  const {
    inputValue,
    handleChangeIpInput,
    handleSubmit,
    invalidInput,
  } = useInputContainer(ip, handleSetIp);

  return (
    <Container>
      <SubContainer>
        <input
          type="text"
          placeholder="Search for any ip address"
          value={inputValue}
          onChange={handleChangeIpInput}
        />
        <button type="submit" onClick={handleSubmit}>
          <img src={arrow} alt="arrow" />
        </button>
      </SubContainer>
      {invalidInput && (
      <span>
        Invalid Ip format
      </span>
      )}
    </Container>

  );
}

InputContainer.propTypes = {
  ip: PropTypes.string,
  handleSetIp: PropTypes.func.isRequired,
};

InputContainer.defaultProps = {
  ip: '',
};
