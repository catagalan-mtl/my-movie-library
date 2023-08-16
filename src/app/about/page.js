import Link from 'next/link'
import '../globals.css'
import { NavMenu } from 'src/components/nav-menu.js'

export default function About() {
  return (
    <main>
      <h1>About Page</h1>
      <div className='btn-div'>
        <NavMenu />
      </div>
    </main>
  )

}
