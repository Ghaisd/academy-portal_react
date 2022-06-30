import styles from './Testimonial.module.css'

const Testimonial = ({imageLink, name, role, paragraphText}) => {
    return(
        <article className={`${styles.testimonial} swiper-slide`}>
        <div className={styles.avatar}>
            <img src={imageLink} alt='writer'/>
        </div>
  
        <div className={styles.testimonial__info}>
            <h5>{name}</h5>
            <small>{role}</small>
        </div>
        <div className={styles.testimonial__body}>
            <p>
                {paragraphText}
            </p>
        </div>
    </article>
    )
}

export default Testimonial