import axios from 'axios';

const API_KEY = '8b3f9f93b217543bb23268b1f13b0854';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getPopularFilm(page = 1) {
  try {
    const fetchAPI = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );

    return fetchAPI.data;
  } catch (error) {
    console.error('Something is wrong with the search' + error);
  }
}

export async function searchMovieByName(text, page = 1) {
  try {
    const fetchAPI = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${text}&page=${page}`
    );
    return fetchAPI.data;
  } catch (error) {
    console.error('Something is wrong with the search' + error);
  }
}

export async function searchMovieById(id) {
  try {
    const fetchAPI = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );

    if (fetchAPI.status !== 200) {
      return;
    }

    console.log(fetchAPI.data);
    return fetchAPI.data;
  } catch (error) {
    console.error('Something is wrong with the search' + error);
  }
}

export async function searchMovieCredits(id) {
  try {
    const fetchAPI = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );

    if (fetchAPI.status !== 200) {
      return;
    }

    return fetchAPI.data;
  } catch (error) {
    console.error('Something is wrong with the search' + error);
  }
}

export async function searchMovieReviews(id) {
  try {
    const fetchAPI = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
    );

    if (fetchAPI.status !== 200) {
      return;
    }

    return fetchAPI.data;
  } catch (error) {
    console.error('Something is wrong with the search' + error);
  }
}
