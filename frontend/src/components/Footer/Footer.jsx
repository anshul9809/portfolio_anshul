import styles from "./footer.module.scss";
const Footer = ()=>{
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__wrapper}>
                <div className={styles.footer__social__links}>
                    <a href="" target="_blank" rel="noreferrer" className={styles.footer__social__link}><img src="./phone.png" alt="phone" /></a>
                    <a href="" target="_blank" rel="noreferrer" className={styles.footer__social__link}><img src="./email.png" alt="mail" /></a>
                    <a href="" target="_blank" rel="noreferrer" className={styles.footer__social__link}><img src="./github.png" alt="github" /></a>
                    <a href="" target="_blank" rel="noreferrer" className={styles.footer__social__link}><img src="./linkedin.png" alt="linkedin" /></a>
                    <a href="" target="_blank" rel="noreferrer" className={styles.footer__social__link}><img src="./instagram.png" alt="instagram" /></a>
                    <a href="" target="_blank" rel="noreferrer" className={styles.footer__social__link}><img src="./twitter.png" alt="twitter" /></a>
                    <a href="" target="_blank" rel="noreferrer" className={styles.footer__social__link}><img src="./facebook.png" alt="facebook" /></a>
                </div>
                <p className={styles.footer__copyright}>Copyright &copy; 2022. All rights reserved.</p>
                <p className={styles.footer__madeby}>Made with ❤️ by Anshul</p>
            </div>
        </footer>
    );
}

export default Footer;