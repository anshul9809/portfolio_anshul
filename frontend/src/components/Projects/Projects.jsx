import { useRef } from "react";
import styles from "./project.module.scss";
import { motion, useInView } from "framer-motion";
import {Link} from "react-router-dom";

const variants = {
  initial: {
    x: 0,
    y: 100,
    opacity: 0,
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

const Projects = () => {
  const ref = useRef();

  const isInView = useInView(ref);

  return (
    <div
      className={styles.projects}
    >
        <h1 className={styles.projects__heading}>Projects</h1>
        <motion.div className={styles.projects__wrapper} 
            ref={ref}
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            animate={isInView ? "animate" : "initial"}
            viewport={{ once: true }}
            >
            <div className={styles.projects__item}>
                <Link to="/view-projects/1">
                    <img
                        className={styles.projects__image}
                        src="./ME2.jpg"
                        alt="project1"
                    />
                    <h2 className={styles.projects__title}>Project 1</h2>
                    <p className={styles.projects__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    
                </Link>
            </div>
            
        </motion.div>
    </div>
  );
};

export default Projects;