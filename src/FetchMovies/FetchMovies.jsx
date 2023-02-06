const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '18cb12699e14d8de9e9367a7c1c3c558';

export async function fetchGetTrending() {
  const res = await fetch(`${apiUrl}/trending/movie/day?api_key=${apiKey}`);
  const response = await res.json();
  return response.results;
}

export async function fetchSearchMovies(query, page = 1) {
  const res =
    await fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=${page}&include_adult=false
    `);
  const response = await res.json();
  return response.results;
}

export async function fetchGetMovieDetails(id) {
  const res =
    await fetch(`${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US
`);
  return await res.json();
}

export async function FetchGetMovieCredits(id) {
  const res =
    await fetch(`${apiUrl}/movie/${id}/credits?api_key=${apiKey}&language=en-US
  `);
  return await res.json();
}

export async function FetchGetMovieReviews(id, page = 1) {
  const res =
    await fetch(`${apiUrl}/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=${page}
  `);
  return await res.json();
}
