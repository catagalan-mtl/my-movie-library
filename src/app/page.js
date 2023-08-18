import './globals.css'
import { MovieList } from '../components/movie-list.js'
import { PeopleList } from '../components/people-list.js'

export default function HomePage() {
  const movies = [
    { id: 0, featured: true, title: 'Barbie' },
    { id: 1, title: 'Oppenheimer' },
    { id: 2, title: 'Rogue One' },
  ]
  const appTitle = 'My Movie Library';
  const domain = 'www.themoviedb.org';

  const people = [
    { id: 0, name: 'Gabriel Guevara' },
    { id: 1, name: 'Gary Coleman' },
    { id: 2, name: 'Angeli Khang' },
    { id: 3, name: 'Katherine LaNasa' },
    { id: 4, name: 'Rebecca Ferguson' },
  ]

  return (
    <>
      <h1>{appTitle}</h1>
      <p className="subtitle">Here is a list of popular movies:</p>

      <MovieList movies={movies} />
      <PeopleList people={people} />

      <div className="btn-div">
        <a href={`http://${domain}`} target="_blank" className="btn">See more</a>
      </div>
    </>
  )
}
