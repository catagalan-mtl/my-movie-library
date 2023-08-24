export async function fetchPopularMovies() {
  const apiKey = process.env.TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  const res = await fetch(url)
  const data = await res.json()
  return data.results
}
