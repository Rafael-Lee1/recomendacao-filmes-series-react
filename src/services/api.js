// src/services/api.js
const API_KEY = 'cb585cc2bd305d8f4092aeacaee36c05'; // Substitua pela sua chave de API do TMDb

export const getMovieDetails = async (movieId) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        );
        if (!response.ok) {
            throw new Error('Erro ao buscar detalhes do filme');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
};

export const fetchPopularMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`
        );
        if (!response.ok) {
            throw new Error('Erro ao buscar filmes populares');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
};
