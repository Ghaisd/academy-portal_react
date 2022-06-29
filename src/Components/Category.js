import styles from './Category.module.css'

const Category = ({category__icon, headerText, paragraphText}) => {

    const cssIcon = category__icon;
  return (
    <article className={styles.category}>
      <span className={styles.category__icon}>
        <i className={cssIcon}></i>
      </span>
      <h5>{headerText}</h5>
      <p>{paragraphText}</p>
    </article>
  );
}

export default Category;