import { useRef } from "react";
import styles from "./project.module.scss";
import { motion, useInView } from "framer-motion";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

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
  const {project} = useSelector(state=>state.project);
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

              {project && project.map((element, index)=>{
                return (
                  <div className={styles.projects__item} key={index}>
                    <Link to={`/view-project/${element._id}`} className={styles.project__item__thumbnail}>
                        <div className={styles.thumbnail}>
                          <img
                              className={styles.projects__image}
                              src={element.projectBanner.url}
                              alt={element.title}
                              loading="lazy"
                          />
                        </div>
                      </Link>
                        <div className={styles.description}>
                          <h2 className={styles.projects__title}>{element.title.substring(0,13)}</h2>
                          <p className={styles.projects__links}>
                              <a
                                  href={element.gitRepoLink}
                                  target="_blank"
                                  rel="noreferrer"
                              >
                                <img src="./github.png" alt="" loading="lazy"/>
                              </a>
                              
                              {element.deployed=== "Yes"? <a
                                  href={element.projectLink}
                                  target="_blank"
                                  rel="noreferrer"
                                  >
                                  <img src="./live.png" alt="" loading="lazy"/>
                                </a>:""
                              }
                          </p>
                        </div>
                        
                </div>
                )
              })}
            
            
        </motion.div>
    </div>
  );
};

export default Projects;