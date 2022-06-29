import {useState} from 'react';
import styles from './Faq.module.css'


let displayMode  = "d-none";


const Faq= ({headerText, paragraphText}) => {
    const [faqIconClassNames, SetFaqIconClassNames] = useState('bi bi-plus-square');
    const SetCssClasses = () =>{
        if (faqIconClassNames === "bi bi-plus-square")
        {
            SetFaqIconClassNames("bi bi-dash-square") ;
            displayMode = "d-inline-block";
        }
        else
        {
            SetFaqIconClassNames("bi bi-plus-square");
            displayMode = "d-none";
        }
    }
    return(
        <article className={styles.faq}>
        <div onClick={SetCssClasses} className={styles.faq__icon}><i className={faqIconClassNames}></i></div>
        <div className={styles.question__answer}>
            <h4>{headerText}</h4>
            <p className={displayMode}>
                {paragraphText}
            </p>
        </div>
    </article>   
    );
}

export default Faq;