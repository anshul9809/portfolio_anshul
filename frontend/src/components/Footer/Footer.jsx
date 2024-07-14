import { useSelector } from "react-redux";
import styles from "./footer.module.scss";
const Footer = ()=>{
    const {user} = useSelector(state=>state.user);

    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__wrapper}>
                <div className={styles.footer__social__links}>
                    {user.phone? <a href={`tel:${user.phone}`} target="_blank" rel="noreferrer" className={styles.footer__social__link}><img src="./phone.png" alt="phone" /></a>: null}
                    {user.email?<a href={`mailto:${user.email}`} target="_blank" rel="noreferrer" className={styles.footer__social__link}><img src="./email.png" alt="mail" /></a>:null                    }
                    {user.githubURL?<a href={user.githubURL} target="_blank" rel="noreferrer" className={styles.footer__social__link}><img src="./github.png" alt="github" /></a>:null}
                    {user.linkedInURL?<a href={user.linkedInURL} target="_blank" rel="noreferrer" className={styles.footer__social__link}><img src="./linkedin.png" alt="linkedin" /></a>:null}
                    {user.instagramURL?<a href={user.instagramURL} target="_blank" rel="noreferrer" className={styles.footer__social__link}><img src="./instagram.png" alt="instagram" /></a>:null}
                    {user.twitterURL?<a href={user.twitterURL} target="_blank" rel="noreferrer" className={styles.footer__social__link}><img src="./twitter.png" alt="twitter" /></a>:null}
                    {user.facebookURL?<a href={user.facebookURL} target="_blank" rel="noreferrer" className={styles.footer__social__link}><img src="./facebook.png" alt="facebook" /></a>:null}
                </div>
                <p className={styles.footer__copyright}>Copyright &copy; {currentYear} . All rights reserved.</p>
                <p className={styles.footer__madeby}>Made with ❤️ by Anshul</p>
            </div>
        </footer>
    );
}

export default Footer;