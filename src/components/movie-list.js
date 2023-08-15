import { MovieListItem } from './movie-list-item'

export function MovieList({ movies }) {
  return (
    <ul className="movie-list">
      {movies.map((movie) =>
        <MovieListItem key={movie.id} movie={movie} />
        )}
    </ul>
  )
}
