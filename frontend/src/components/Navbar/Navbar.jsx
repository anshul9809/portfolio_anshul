import Sidebar from "../Sidebar/Sidebar";
import styles from "./navbar.module.scss";
import {motion} from "framer-motion";
const Navbar = ()=>{
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
                    Anshul Kumar
                </motion.span>
                    <div className={styles.navbar__social__links}>
                        <a href="" target="_blank" rel="noreferrer"><img src="./github.png" alt="github" /></a>
                        <a href="" target="_blank" rel="noreferrer"><img src="./linkedin.png" alt="linkedin" /></a>
                        <a href="" target="_blank" rel="noreferrer"><img src="./instagram.png" alt="instagram" /></a>
                        <a href="" target="_blank" rel="noreferrer"><img src="./twitter.png" alt="twitter" /></a>
                        <a href="" target="_blank" rel="noreferrer"><img src="./facebook.png" alt="facebook" /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;