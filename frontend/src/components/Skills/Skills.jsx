import styles from "./skills.module.scss";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";



const Skills = () => {
    const {skill} = useSelector(state=>state.skills);
    const ref = useRef();

    const isInView = useInView(ref);

    return (
        <> 
            <div className={styles.skills}>
                <h1 className={styles.skills__heading}>Skills</h1>
                <motion.div className={styles.skills__wrapper} ref={ref}>
                    {skill && skill.map((element, index)=>{
                        return (
                            <motion.div key={index}
                                className={styles.skills__item}
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
                                className={styles.skills__image}
                                src={element?.svg?.url}
                                alt={element.title}
                                loading="lazy"
                            />
                            <h2 className={styles.skills__title}>{element.title}</h2>
                        </motion.div>
                        )

                    })
                }
                    
                </motion.div>
                        
            </div>
        </>
    );
}

export default Skills