import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import people from '../pages/api/people.json'

export default function Home() {
  const initProfile = {
    name: "DarkMode",
    image: "https://adscvcongreso2022.onsitevents.com/assets/imgs/default/default-logo.jpg"
  }

  const [profile, setProfile] = useState({})
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setProfile(initProfile)
  },[])

  useEffect(() => {
    setDark(false)
  }, [profile])


  const handleProfile = (name, image) => {
    setProfile({name, image})
  }
  return (
    <div className={styles.background + " " + (dark && styles.dark)}>

      <nav className={styles.navbar}>
        <div onClick={() => setDark(!dark)}>
          <h3>{profile.name}</h3>
          <img src={profile.image}/>
        </div>
      </nav>

      { people.map( (person, index) => 
        <Card 
          key={index}
          name={person.name} 
          description={person.description} 
          image={person.image}
          change={handleProfile}
          dark={dark}
        />)}
               
    </div>
  )
}
