import styles from './movie-list-item.module.css'

export function MovieListItem({ movie }) {
  return (
    movie.featured
    ? <li className={`${styles.li} ${styles.featured}`}>{movie.title}</li>
    : <li className={styles.li}>{movie.title}</li>
  )
}
