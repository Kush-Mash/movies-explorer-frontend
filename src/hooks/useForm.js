import { useState } from 'react';

//хук управления формой
export function useForm() {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const input = event.target;
    const value = input.value;
    const name = input.name;
    setValues({...values, [name]: value});
  };

  return {values, setValues, handleChange };
}
