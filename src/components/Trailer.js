import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Trailer({ movieId }) {
  const [trailerKey, setTrailerKey] = useState('');

  useEffect(() => {
    async function fetchTrailer() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=cb585cc2bd305d8f4092aeacaee36c05`
        );
        const trailer = response.data.results.find((video) => video.type === 'Trailer');
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (error) {
        console.error('Error fetching trailer: ', error);
      }
    }

    fetchTrailer();
  }, [movieId]);

  return (
    <div className="trailer">
      {trailerKey && (
        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Trailer"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default Trailer;
