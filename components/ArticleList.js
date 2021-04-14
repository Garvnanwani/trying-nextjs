import styles from '../styles/Articles.module.css'

const ArticleList = ({ articles }) => {
    return (
        <div className={styles.grid}>
            {articles.map(article => (
                <h3>{article.title}</h3>
            ))}
        </div>
    )
}

export default ArticleList
