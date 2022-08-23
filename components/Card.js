import styles from '../styles/Card.module.css'

const Card = ({name, description, image, change, dark}) => {
    return <div className={styles.card + " " + (dark && styles.dark)}>
        <img src={image} className={styles.image}/>
        <h1>{name}</h1>
        <p className={styles.paragraph}>{description}</p>
        <button className={styles.button} onClick={() => change(name, image)}>Iniciar</button>
    </div>
}

export default Card