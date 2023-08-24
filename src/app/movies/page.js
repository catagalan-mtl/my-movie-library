import '../globals.css'
import { fetchPopularMovies } from '../lib/tmdb'
import { MovieList } from 'src/components/movie-list.js'


export const metadata = {
  title: 'Porpular Movies',
}

const domain = 'www.themoviedb.org';


export default async function MoviesPage() {
  const movies = await fetchPopularMovies()
  // console.log(await fetchPopularMovies())
  return (
    <>
      <h1>Popular Movies</h1>
      <MovieList movies={movies}/>
    </>
  )
}
