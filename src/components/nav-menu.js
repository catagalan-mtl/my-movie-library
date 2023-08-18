import Link from 'next/link'
import styles from './nav-menu.module.css'

export function NavMenu() {
  return (
    <nav className={styles.navMenu}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/movies'>Movies</Link>
        </li>
        <li>
          <Link href='/people'>People</Link>
        </li>
      </ul>
    </nav>
  )
}
