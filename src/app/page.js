import { MovieList } from '../components/movie-list'

export default function HomePage() {
  const movies = [
    { id: 0, featured: true, title: 'Barbie' },
    { id: 1, title: 'Oppenheimer' },
    { id: 2, title: 'Rogue One' },
  ];
  const appTitle = 'My Movie Library';
  const domain = 'www.themoviedb.org';

  return (
    <main>
      <h1>{appTitle}</h1>
      <p className="subtitle">Here is a list of popular movies:</p>

      <MovieList movies={movies} />

      <div className="btn-div">
        <a href={`http://${domain}`} target="_blank" className="btn">See more</a>
      </div>
    </main>
  )
}
