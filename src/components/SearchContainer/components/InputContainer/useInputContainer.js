import { useState, useEffect } from 'react';
import ipValidate from '../../../../utils/ipValidate';

export default function useInputContainer(ip, handleSetIp) {
  const [inputValue, setInputValue] = useState(ip);
  const [invalidInput, setInvalidInput] = useState(false);

  useEffect(() => {
    setInputValue(ip);
  }, [ip]);

  function handleChangeIpInput(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit() {
    const isValidIp = ipValidate(inputValue);

    if (isValidIp) {
      handleSetIp(inputValue);
      setInvalidInput(false);
      return;
    }

    setInvalidInput(true);
  }
  return {
    handleChangeIpInput,
    handleSubmit,
    invalidInput,
    inputValue,
  };
}
