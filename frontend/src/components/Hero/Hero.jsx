import {motion} from "framer-motion";
import styles from "./hero.module.scss";
const Hero = ()=>{

    const textVariants = {
        initial: {
          x: -500,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            staggerChildren: 0.1,
          },
        },
        scrollButton: {
          opacity: 0,
          y: 10,
          transition: {
            duration: 2,
            repeat: Infinity,
          },
        },
    };
    const sliderVariants = {
        initial: {
          x: 0,
        },
        animate: {
          x: "-220%",
          transition: {
            repeat: Infinity,
            repeatType:"mirror",
            duration: 20,
          },
        },
      };
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.hero__wrapper}>
                    <motion.div className={styles.text__container}>
                        <motion.h2 variants={textVariants}>Anshul Kumar</motion.h2>
                        <motion.h1 variants={textVariants}>
                            Web Developer
                        </motion.h1>
                        <motion.div variants={textVariants} className={styles.buttons}>
                            <motion.button variants={textVariants}>Contact Me</motion.button>
                        </motion.div>
                        <motion.img
                            variants={textVariants}
                            animate="scrollButton"
                            src="/scroll.png"
                            alt=""
                        />
                    </motion.div>

                    <div className={styles.image__container}>
                        <img src="./ME2.jpg" alt="" />
                    </div>

                </div>
            </div>
        </>
    );
}

export default Hero;