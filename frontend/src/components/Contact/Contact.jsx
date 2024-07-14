import styles from "./contact.module.scss";
import axios from "axios";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useSelector} from "react-redux"


const Contact = () => {
    const [senderName, setSenderName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const {user} = useSelector(state=>state.user);
    const phone = user.phone;
    const userEmail = user.email;


    

    const handleMessage = async (e)=>{
        e.preventDefault();
        setLoading(true);
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}message`, 
            { senderName, email, subject, message },
            {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
            }
        ).then((res) => {
            setSenderName("");
            setSubject("");
            setMessage("");
            setEmail("");
            toast.success(res.data.message);
            setLoading(false);
        })
        .catch((error) => {
            toast.error(error.response.data.message);
            setLoading(false);
        });
    }



    return (
        <>
        <div className={styles.contact}>
            <h1 className={styles.contact__heading}>Contact Me</h1>
            <div className={styles.contact__wrapper}>
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
                                <a href={`mailto=${userEmail}` }>{userEmail}</a>
                            </div>
                        </div>
                        <div className={styles.contact__info__item}>
                            <div className={styles.contact__info__item__heading}>
                                Phone
                            </div>
                            <div className={styles.contact__info__item__data}>
                                <a href={`tel:${phone}`}>{phone}</a>
                            </div>
                        </div>
                        <div className={styles.contact__info__item}>
                            <img src="./logo.png" alt="" className={styles.contact__info__item__image} />
                        </div>
                    </div>
                </div>
                <div className={styles.contact__form}>
                    <form onSubmit={handleMessage}>
                        <h4>Send me a Message</h4>
                        <div className={styles.contact__form__group}>
                            <label htmlFor="name">Name</label>
                            <input className={styles.contact__input} 
                                type="text"
                                value={senderName}
                                onChange={(e) => setSenderName(e.target.value)}
                                placeholder="Your Name"
                            />
                        </div>
                        <div className={styles.contact__form__group}>
                            <label htmlFor="email">Email</label>
                            <input className={styles.contact__input} type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email"
                            />
                        </div>
                        <div className={styles.contact__form__group}>
                            <label htmlFor="subject">Subject</label>
                            <input className={styles.contact__input}
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="Subject"
                            />
                        </div>
                        <div className={styles.contact__form__group}>
                            <label htmlFor="message">Message</label>
                            <textarea className={styles.contact__textarea}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your Message"
                            />
                        </div>
                        <button className={styles.contact__form__btn} type="submit" disabled={loading ? true : false} >Send Message</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;