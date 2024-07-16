import { useSelector } from "react-redux";
import styles from "./footer.module.scss";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter } from "react-icons/fa6";
const Footer = ()=>{
    const {user} = useSelector(state=>state.user);

    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__wrapper}>
                <div className={styles.footer__social__links}>
                    {user.phone? <a href={`tel:${user.phone}`} target="_blank" rel="noreferrer" > <FaPhone className={styles.icon} /> </a> : null}
                    {user.email?<a href={`mailto:${user.email}`} target="_blank" rel="noreferrer" ><FaEnvelope className={styles.icon} /></a>:null                    }
                    {user.githubURL?<a href={user.githubURL} target="_blank" rel="noreferrer" ><FaGithub className={styles.icon} /></a>:null}
                    {user.linkedInURL?<a href={user.linkedInURL} target="_blank" rel="noreferrer" ><FaLinkedinIn className={styles.icon} /></a>:null}
                    {user.instagramURL?<a href={user.instagramURL} target="_blank" rel="noreferrer" ><FaInstagram className={styles.icon} /></a>:null}
                    {user.twitterURL?<a href={user.twitterURL} target="_blank" rel="noreferrer" ><FaTwitter className={styles.icon} /></a>:null}
                    {user.facebookURL?<a href={user.facebookURL} target="_blank" rel="noreferrer" ><FaFacebook className={styles.icon} /></a>:null}
                </div>
                <p className={styles.footer__copyright}>Copyright &copy; {currentYear} . All rights reserved.</p>
                <p className={styles.footer__madeby}>Made with ❤️ by Anshul</p>
            </div>
        </footer>
    );
}

export default Footer;