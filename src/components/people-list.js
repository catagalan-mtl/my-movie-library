import {SingleName} from './person.js'
import styles from './people-list.module.css'

export function PeopleList({ people }) {
  return (
    <ul className={styles.peopleList}>
      {people.map((person) =>
        <SingleName key={person.id} person={person}/>
      )}
    </ul>
  )

}
