import React from 'react';
import styles from './project.module.scss';
import {FaDotCircle, FaTools} from "react-icons/fa";
import { ImNewTab } from "react-icons/im";
import {motion} from "framer-motion";
import Navbar from '../../components/Navbar/Navbar';


const ViewProject = () => {
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
  // Dummy project data

  return (
    <>
    <div className={styles.project}>
        <section className="section">
            <Navbar />
            <div className={styles.project__wrapper}>
                <div className={styles.project__wrapper__hero}>
                    <div className={styles.project__wrapper__hero__left}>
                        <h2>Welcome to</h2>
                        <h1>Project Name</h1>
                        <div className={styles.project__wrapper__hero__left__technologies}>
                            <h3>Technologies Used</h3>
                            <div className={styles.project__wrapper__hero__left__technologies__wrapper} >
                                <span><FaTools />ReactJS</span>
                                <span><FaTools />ReactJS</span>
                                <span><FaTools />ReactJS</span>
                                <span><FaTools />ReactJS</span>
                                <span><FaTools />ReactJS</span>
                                <span><FaTools />ReactJS</span>
                                <span><FaTools />ReactJS</span>
                                <span><FaTools />ReactJS</span>
                            </div>
                        </div>
                        <div className={styles.links}>
                            <a href="/">Github <ImNewTab /></a>
                            <a href="/">Live site <ImNewTab /></a>
                        </div>
                        <motion.img
                            variants={textVariants}
                            animate="scrollButton"
                            src="/scroll.png"
                            className={styles.scrollDown}
                            alt=""
                        />
                    </div>
                    <div className={styles.project__wrapper__hero__right}>
                        <img src="/me2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className={styles.project__wrapper__about}>
                <h2>About</h2>
                <ul>
                    <li><FaDotCircle className={styles.list__icons} />
                        {/* <p>{sentence.trim()}.</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, totam.</p>
                    </li>
                    <li><FaDotCircle className={styles.list__icons} />
                        {/* <p>{sentence.trim()}.</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, totam.</p>
                    </li>
                    <li><FaDotCircle className={styles.list__icons} />
                        {/* <p>{sentence.trim()}.</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, totam.</p>
                    </li>
                    <li><FaDotCircle className={styles.list__icons} />
                        {/* <p>{sentence.trim()}.</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, totam.</p>
                    </li>
                    <li><FaDotCircle className={styles.list__icons} />
                        {/* <p>{sentence.trim()}.</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, totam.</p>
                    </li>
                    <li><FaDotCircle className={styles.list__icons} />
                        {/* <p>{sentence.trim()}.</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, totam.</p>
                    </li>
                    <li><FaDotCircle className={styles.list__icons} />
                        {/* <p>{sentence.trim()}.</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, totam.</p>
                    </li>
                    <li><FaDotCircle className={styles.list__icons} />
                        {/* <p>{sentence.trim()}.</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, totam.</p>
                    </li>
                    <li><FaDotCircle className={styles.list__icons} />
                        {/* <p>{sentence.trim()}.</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, totam.</p>
                    </li>
                    <li><FaDotCircle className={styles.list__icons} />
                        {/* <p>{sentence.trim()}.</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, totam.</p>
                    </li>
                </ul>
            </div>
            <div className={styles.project__wrapper__snapshots}>
                <h2>Snapshots</h2>
                <div className={styles.snapshots__wrapper}>
                    <div className={styles.snapshots__wrapper__image}>
                        <img src="/me2.jpg" alt="snapshot1" />
                    </div>
                    <div className={styles.snapshots__wrapper__image}>
                        <img src="/me2.jpg" alt="snapshot1" />
                    </div>
                    <div className={styles.snapshots__wrapper__image}>
                        <img src="/me2.jpg" alt="snapshot1" />
                    </div>
                    <div className={styles.snapshots__wrapper__image}>
                        <img src="/me2.jpg" alt="snapshot1" />
                    </div>
                    <div className={styles.snapshots__wrapper__image}>
                        <img src="/me2.jpg" alt="snapshot1" />
                    </div>
                    <div className={styles.snapshots__wrapper__image}>
                        <img src="/me2.jpg" alt="snapshot1" />
                    </div>
                    <div className={styles.snapshots__wrapper__image}>
                        <img src="/me2.jpg" alt="snapshot1" />
                    </div>
                    <div className={styles.snapshots__wrapper__image}>
                        <img src="/me2.jpg" alt="snapshot1" />
                    </div>
                    <div className={styles.snapshots__wrapper__image}>
                        <img src="/me2.jpg" alt="snapshot1" />
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  );
};

export default ViewProject;
