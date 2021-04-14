import styles from '../styles/Header.module.css'

const Header = () => {
    const x = 2
    return (
        <div>
            <h1 className={styles.title}>
                <span>WebDev</span> News
            </h1>
            <p className={styles.description}>Keep up to date with the latest Web dev news</p>
        </div>
    )
}

export default Header
