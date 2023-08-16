import Link from 'next/link'

export function NavMenu() {
  return (
    <main>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/movies'>Movies</Link>
      <Link href='/people'>People</Link>
    </main>
  )
}
