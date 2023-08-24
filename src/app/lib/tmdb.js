export async function fetchPopularMovies() {
  const apiKey = process.env.TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  try {
    const res = await fetch(url)
    if (res.status !== 200) return null
    const data = await res.json()
    return data.results
  } catch(err) {
    console.error(err)
    return null
  }
}
