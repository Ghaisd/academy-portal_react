import styles from './Testimonial.module.css'

const Testimonial = (props) => {
    return(
        <article className={`${styles.testimonial} swiper-slide`}>
        <div className={styles.avatar}>
            <img src={props.imageLink} alt='writer'/>
        </div>
  
        <div className={styles.testimonial__info}>
            <h5>{props.name}</h5>
            <small>{props.role}</small>
        </div>
        <div className={styles.testimonial__body}>
            <p>
                {props.paragraphText}
            </p>
        </div>
    </article>
    )
}

export default Testimonial