import { useState } from 'react';

export const useForm = () => {
  const [keyword, setKeyword] = useState('');

  const handleInputChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const reset = () => {
    setKeyword('');
  };

  return { keyword, reset, handleInputChange };
};
