import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section className={styles.contact}>
        <div className={`${styles.container} ${styles.contact__container}`}>
            <aside className={styles.contact__aside}>
                <div className={styles.aside__image}>
                    <img src="/images/contact.svg" alt="Contact" />
                </div>
                <h2>Kontakt oss</h2>
                <p>
                    Kontakt oss for mer informasjon.
                </p>
    
                <ul className={styles.contact__socials}>
                    <li>
                        <a href="https://www.facebook.com/ikommas/" target="_blank" rel='noreferrer' ><i className={`bi bi-facebook`}></i></a>
                    </li>
                    <li>
                        <a href="https://no.linkedin.com/company/ikomm?original_referer=https%3A%2F%2Fwww.ikomm.no%2F" target="_blank" rel='noreferrer'><i className="bi bi-linkedin"></i></a>
                    </li>
                </ul>
            </aside>
    
            <form className="contact__form" action="https://formspree.io/f/xeqnvgjb" method="POST" >
                <div className={styles.form__name}>
                    <input type="text" name="First Name" placeholder="Fornavn" required/>
                    <input type="text" name="Last Name" placeholder="Etternavn" required/>
                </div>
                <input type="email" name="Email Address" placeholder="Din epostadresse" required/>
                <textarea name="Message" rows="7" placeholder="Beskjed" required></textarea>
                <button type="submit" className={`btn btn-success mt-3`}>Sende melding</button>
            </form>
        </div>
    </section>
        );
};

export default Contact