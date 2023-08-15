import { MovieListItem } from './movie-list-item'
import styles from './movie-list.module.css'

export function MovieList({ movies }) {
  return (
    <ul className={styles.movieList}>
      {movies.map((movie) =>
        <MovieListItem key={movie.id} movie={movie} />
        )}
    </ul>
  )
}
