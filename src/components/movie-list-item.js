export function MovieListItem({ movie }) {
  return (
    movie.featured
    ? <li className="featured">{movie.title}</li>
    : <li>{movie.title}</li>
  )
}
