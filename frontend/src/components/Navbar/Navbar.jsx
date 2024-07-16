import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./navbar.module.scss";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaPhone, FaSquareArrowUpRight, FaEnvelope, FaTwitter } from "react-icons/fa6";

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
                    <Link to="/"><i>AK</i></Link>
                </motion.span>
                    <div className={styles.navbar__social__links}>
                        {user.phone? <a href={`tel:${user.phone}`} target="_blank" rel="noreferrer" > <FaPhone className={styles.icon} /> </a> : null}
                        {user.email?<a href={`mailto:${user.email}`} target="_blank" rel="noreferrer" ><FaEnvelope className={styles.icon} /></a>:null                    }
                        {user.githubURL?<a href={user.githubURL} target="_blank" rel="noreferrer" ><FaGithub className={styles.icon} /></a>:null}
                        {user.linkedInURL?<a href={user.linkedInURL} target="_blank" rel="noreferrer" ><FaLinkedinIn className={styles.icon} /></a>:null}
                        {user.instagramURL?<a href={user.instagramURL} target="_blank" rel="noreferrer" ><FaInstagram className={styles.icon} /></a>:null}
                        {user.twitterURL?<a href={user.twitterURL} target="_blank" rel="noreferrer" ><FaTwitter className={styles.icon} /></a>:null}
                        {user.facebookURL?<a href={user.facebookURL} target="_blank" rel="noreferrer" ><FaFacebook className={styles.icon} /></a>:null}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;