import './globals.css'
import Link from 'next/link'

export default function HomePage() {
  const appTitle = 'My Movie Library';
  return (
    <>
      <h1>{appTitle}</h1>

      <p>
        Welcome! Have a look at the <Link href="/movies">popular movies</Link>.
      </p>
    </>
  )
}
