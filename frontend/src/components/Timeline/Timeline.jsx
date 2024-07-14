import styles from "./timeline.module.scss";
import { FaCalendarAlt, FaUserTie, FaCity, FaTasks, FaDotCircle} from "react-icons/fa";
import {motion, useInView} from "framer-motion";
import { useRef } from "react";
import { useSelector } from "react-redux";

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

    const {timeline} = useSelector(state=>state.timeline);
    return (
        <div className={styles.timeline}>
            <h1 className={styles.timeline__heading}>Experience</h1>

            <motion.div className={styles.timeline__wrapper} ref={ref}>
                {timeline && timeline.map((element, index)=>{
                    const descriptionItems = element.description.split(".").filter(Boolean)
                    return (
                        <motion.div className={styles.timeline__item}
                            key={index}
                            ref={ref}
                            variants={variants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            viewport={{ once: true }}
                        >
                            <h1 className={styles.role}><FaUserTie className={styles.simple__icons}  />{element.title}</h1>
                            <div className={styles.name__and__date}>
                                <h3><FaCity className={styles.simple__icons}  /> {element.link? <a target="_blank" href={element.link} rel="noopener noreferrer" >{element.companyName}</a> : element.companyName}</h3>
                                <h3><FaCalendarAlt className={styles.simple__icons}  /> {element.timeline.from} - {element.timeline.to}</h3>    
                            </div>
                            <h4><FaTasks className={styles.simple__icons} /> Description</h4>
                            <ul className={styles.description} >

                                {descriptionItems.map((sentence, i) => (
                                    <li key={i}><FaDotCircle className={styles.list__icons} />
                                        <p>{sentence.trim()}.</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default Timeline;
