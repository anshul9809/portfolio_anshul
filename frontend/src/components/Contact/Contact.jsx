import styles from "./contact.module.scss";

const Contact = () => {
    return (
        <>
        <div className={styles.contact}>
            <h1 className={styles.contact__heading}>Contact Me</h1>
            <div className={styles.contact__wrapper}>
                {/* make contact information on left and form on right */}
                <div className={styles.contact__info}>
                    <div className={styles.contact__info__wrapper}>
                        <div className={styles.contact__info__item}>
                            <div className={styles.contact__info__item__heading}>
                                <h1>AK</h1>
                            </div>
                        </div>
                        <div className={styles.contact__info__item}>
                            <div className={styles.contact__info__item__heading}>
                                Email
                            </div>
                            <div className={styles.contact__info__item__data}>
                                <a href="mailto=`demo`" >this is demo</a>
                            </div>
                        </div>
                        <div className={styles.contact__info__item}>
                            <div className={styles.contact__info__item__heading}>
                                Phone
                            </div>
                            <div className={styles.contact__info__item__data}>
                                <a href="tel:`+89798797">6468987979</a>
                            </div>
                        </div>
                        <div className={styles.contact__info__item}>
                            <img src="./logo.png" alt="" className={styles.contact__info__item__image} />
                        </div>
                    </div>
                </div>
                <div className={styles.contact__form}>
                    <form>
                        <h4>Send me a Message</h4>
                        <div className={styles.contact__form__group}>
                            <label htmlFor="name">Name</label>
                            <input className={styles.contact__input} type="text" id="name" />
                        </div>
                        <div className={styles.contact__form__group}>
                            <label htmlFor="email">Email</label>
                            <input className={styles.contact__input} type="email" id="email" />
                        </div>
                        <div className={styles.contact__form__group}>
                            <label htmlFor="message">Message</label>
                            <textarea className={styles.contact__textarea} id="message" />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;