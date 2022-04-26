import { useEffect, useState } from 'react';

export const useGifs = (searchWord) => {
  const [gifs, setGifs] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const giphyApi = 'XQNUHZUpVVVfq34YnWCKCZzzrT2ID3ES';

    setLoading(true);

    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${giphyApi}&q=${searchWord}&limit=25&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then((data) => {
        setGifs(data.data);
        setLoading(false);
      });
  }, [searchWord]);

  return { gifs, loading };
};
