import styles from './Category.module.css'

const Category = (props) => {

    const cssIcon = props.category__icon;
  return (
    <article className={styles.category}>
      <span className={styles.category__icon}>
        <i className={cssIcon}></i>
      </span>
      <h5>{props.headerText}</h5>
      <p>{props.paragraphText}</p>
    </article>
  );
}

export default Category;