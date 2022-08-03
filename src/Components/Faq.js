import { useState } from "react";
import styles from "./Faq.module.css";

const Faq = ({ headerText, paragraphText }) => {
  const [faqIconClassNames, SetFaqIconClassNames] =
    useState("bi bi-plus-square");
  const [displayMode, setDisplayMode] = useState("d-none");

  const SetCssClasses = () => {
    if (faqIconClassNames === "bi bi-plus-square") {
      SetFaqIconClassNames("bi bi-dash-square");
      setDisplayMode("d-inline-block");
    } else {
      SetFaqIconClassNames("bi bi-plus-square");
      setDisplayMode("d-none");
    }
  };
  return (
    <article onClick={SetCssClasses} className={styles.faq}>
      <div className={styles.faq__icon}>
        <i className={faqIconClassNames}></i>
      </div>
      <div className={styles.question__answer}>
        <h4>{headerText}</h4>
        <p className={displayMode}>{paragraphText}</p>
      </div>
    </article>
  );
};

export default Faq;
