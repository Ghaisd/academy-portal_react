import styles from './Article.module.css'
import CustomLink from './CustomLink';
const Article = (props) => {


    return(
        <article className={styles.article}>
        <div className={styles.article__Image}>
        <img src={props.src} alt="author"/> 
        </div>
        <div className={styles.article__info}>
            <h3>{props.headline}</h3>
            <small>Skrevet av: {props.author}</small>
            <p>
                {props.articleContent}
            </p>
        </div>
         <CustomLink to="/Articles" className={`btn-danger ${styles.btn_article}`}>Les Mer</CustomLink> 
    </article>
    
    )
}

export default Article;