import styles from './person.module.css'

export function SingleName({ person }) {
  return (
    <li className={styles.person} person={person}>{person.name}</li>
  )
}
