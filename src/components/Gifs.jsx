import React from 'react';

export const Gifs = ({ gifs }) => {
  return (
    <>
      {gifs?.map((gif, key) => (
        <li key={key} className='gif-list__li'>
          <img
            className='gif-list__gif'
            src={gif.images.downsized.url}
            alt={gif.title}
            loading='lazy'
          />
        </li>
      ))}
    </>
  );
};
