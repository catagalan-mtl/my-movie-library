import '../globals.css'
import { fetchPopularMovies } from '../lib/tmdb'
import { MovieList } from 'src/components/movie-list.js'


export const metadata = {
  title: 'Porpular Movies',
}

const domain = 'www.themoviedb.org';


export default async function MoviesPage() {
  const movies = await fetchPopularMovies()
  return (
    <>
      <h1>Popular Movies</h1>
      {movies != null ? (
        <MovieList movies={movies}/>
      ) : (
        <p>An error occurred :/</p>
      )}
      <p>
        <a href="https://www.themoviedb.org/" className="btn" target="_blank">See more</a>
      </p>
    </>
  )
}
