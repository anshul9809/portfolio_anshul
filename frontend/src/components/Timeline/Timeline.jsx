import styles from "./timeline.module.scss";
import { FaCalendarAlt, FaUserTie, FaCity, FaTasks, FaDotCircle} from "react-icons/fa";
import {motion, useInView} from "framer-motion";
import { useRef } from "react";

const Timeline = () => {
    const variants = {
        initial:{
            x: 0,
            y:100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              staggerChildren: 0.1,
            },
        },
    };
    const ref = useRef(null);
    
    const isInView = useInView(ref, {once:true});
    return (
        <div className={styles.timeline}>
            <h1 className={styles.timeline__heading}>Timeline</h1>

            <motion.div className={styles.timeline__wrapper} ref={ref}>
                <motion.div className={styles.timeline__item}
                    ref={ref}
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    viewport={{ once: true }}
                >
                    <h1 className={styles.role}><FaUserTie className={styles.simple__icons}  /> Frontend Developer</h1>
                    <div className={styles.name__and__date}>
                        <h3><FaCity className={styles.simple__icons}  /> <a target="_blank" href="" rel="noopener noreferrer" >Tata Consultancy Services</a></h3>
                        <h3><FaCalendarAlt className={styles.simple__icons}  /> 2020 - 2022</h3>    
                    </div>
                    <h4><FaTasks className={styles.simple__icons} /> Description</h4>
                    <ul className={styles.description} >
                        <li> <FaDotCircle className={styles.list__icons}/>
                            <p>
                            Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet.
                            </p>
                        </li>
                        <li> <FaDotCircle className={styles.list__icons}/>
                            <p>
                            Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum 
                            </p>
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Timeline;
