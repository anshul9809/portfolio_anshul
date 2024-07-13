import styles from "./softwares.module.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {FaCalendarAlt} from "react-icons/fa"

const Softwares = () => {
    const ref = useRef();

    const isInView = useInView(ref);

    return (
        <>
            <div className={styles.softwares}>
                <h1 className={styles.softwares__heading}>softwares</h1>
                <motion.div className={styles.softwares__wrapper} ref={ref}>
                    <motion.div
                        className={styles.softwares__item}
                        ref={ref}
                        animate={isInView ? "animate" : "initial"}
                        variants={{
                            initial: {
                                opacity: 0,
                                y: 100,
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1,
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                    >
                        {/* getting multiple skill with the image and name of the skill with proficicney */}
                            <img
                                className={styles.softwares__image}
                                src="./instagram.png"
                                alt="html"
                            />
                            <h2 className={styles.softwares__title}>HTML</h2>
                    </motion.div>
                </motion.div>
                        
            </div>
        </>
    );
}

export default Softwares;