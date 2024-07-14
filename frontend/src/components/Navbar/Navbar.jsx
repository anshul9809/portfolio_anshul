import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./navbar.module.scss";
import {motion} from "framer-motion";
const Navbar = ()=>{
    const {user} = useSelector(state=>state.user);
    
    return (
        <>
            <div className={styles.navbar}>
                {/* {sidebar} */}
                <Sidebar />
                <div className={styles.navbar__wrapper}>
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    >
                    <i>AK</i>
                </motion.span>
                    <div className={styles.navbar__social__links}>
                        {user.phone? <a href={`tel:${user.phone}`} target="_blank" rel="noreferrer" ><img src="./phone.png" alt="phone" loading="lazy" /></a>: null}
                        {user.email?<a href={`mailto:${user.email}`} target="_blank" rel="noreferrer" ><img src="./email.png" alt="mail" loading="lazy" /></a>:null                    }
                        {user.githubURL?<a href={user.githubURL} target="_blank" rel="noreferrer" ><img src="./github.png" alt="github" loading="lazy" /></a>:null}
                        {user.linkedInURL?<a href={user.linkedInURL} target="_blank" rel="noreferrer" ><img src="./linkedin.png" alt="linkedin" loading="lazy" /></a>:null}
                        {user.instagramURL?<a href={user.instagramURL} target="_blank" rel="noreferrer" ><img src="./instagram.png" alt="instagram" loading="lazy" /></a>:null}
                        {user.twitterURL?<a href={user.twitterURL} target="_blank" rel="noreferrer" ><img src="./twitter.png" alt="twitter" loading="lazy" /></a>:null}
                        {user.facebookURL?<a href={user.facebookURL} target="_blank" rel="noreferrer" ><img src="./facebook.png" alt="facebook" loading="lazy" /></a>:null}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;