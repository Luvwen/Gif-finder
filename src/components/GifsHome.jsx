import React, { useState } from 'react';

import { useForm } from '../hooks/useForm';
import { useGifs } from '../hooks/useGifs';
import { Gifs } from './Gifs';

import './main.css';

export const GifsHome = () => {
  const [searchWord, setSearchWord] = useState('');

  const { keyword, handleInputChange, reset } = useForm();

  const { gifs } = useGifs(searchWord);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSearchWord(keyword);
    reset();
  };

  return (
    <>
      <main className='main-wrapper'>
        <div className='gif-container'>
          <h1 className='git-container__title'>Buscador de gifs</h1>
          <form className='gif-form' onSubmit={handleSubmit}>
            <input
              placeholder='Search gifs...'
              value={keyword}
              onChange={handleInputChange}
              className='gif-form__input form-control form-control-sm'
            />
            <button className='gif-form__button btn btn-primary' type='submit'>
              Search
            </button>
          </form>
          {gifs.length !== 0 ? (
            <h2 className='gifs-name'>{`Gifs de ${searchWord}`}</h2>
          ) : (
            ''
          )}
        </div>
        <ul className='gif-list'>
          <Gifs gifs={gifs} />
        </ul>
      </main>
    </>
  );
};
