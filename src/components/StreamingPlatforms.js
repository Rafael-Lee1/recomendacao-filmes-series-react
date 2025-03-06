import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StreamingPlatforms({ movieId }) {
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    async function fetchStreamingPlatforms() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=cb585cc2bd305d8f4092aeacaee36c05`
        );
        if (response.data.results.BR) {
          setPlatforms(response.data.results.BR.flatrate || []);
        }
      } catch (error) {
        console.error('Error fetching streaming platforms: ', error);
      }
    }

    fetchStreamingPlatforms();
  }, [movieId]);

  return (
    <div className="streaming-platforms">
      <h4>Disponível em:</h4>
      {platforms.map((platform) => (
        <img
          key={platform.provider_id}
          src={`https://image.tmdb.org/t/p/w200/${platform.logo_path}`}
          alt={platform.provider_name}
        />
      ))}
    </div>
  );
}

export default StreamingPlatforms;
