const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = `${process.env.REACT_APP_TMDB_KEY}`;

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE_URL}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Netflix Originals',
        items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Suggestions for You',
        items: await basicFetch(`/trending/all/week?api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Top Rated',
        items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}`)  
      },
      {
        slug: 'action',
        title: 'Action',
        items: await basicFetch(`/discovver/movie?with_genres=28?api_key=${API_KEY}`) 
      },
      {
        slug: 'comedy',
        title: 'Comedy',
        items: await basicFetch(`/discovver/movie?with_genres=35?api_key=${API_KEY}`)  
      },
      {
        slug: 'horror',
        title: 'Horror',
        items: await basicFetch(`/discovver/movie?with_genres=27?api_key=${API_KEY}`) 
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discovver/movie?with_genres=10749?api_key=${API_KEY}`) 
      },
      {
        slug: 'documentary',
        title: 'Documentary',
        items: await basicFetch(`/discovver/movie?with_genres=99?api_key=${API_KEY}`) 
      },
    ];
  }
}