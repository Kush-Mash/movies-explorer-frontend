import { useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState('');
  // const [error, setError] = useState('');

  return {
    value,
    // error,
    onChange: evt => setValue(evt.target.value),
  }
}

export default useInput;
