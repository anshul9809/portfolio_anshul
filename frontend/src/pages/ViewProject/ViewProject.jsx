import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from './project.module.scss';
import { FaDotCircle, FaTools } from 'react-icons/fa';
import { ImNewTab } from 'react-icons/im';
import { motion } from 'framer-motion';
import {useParams} from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProject } from '../../redux/slices/singleProjectSlice';
import Loader from '../../components/Loader/Loader';

Modal.setAppElement('#root');

const ViewProject = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

  const dispatch = useDispatch();
  const {id} = useParams();
  const projectLoading = useSelector(state=>state.singleProject.loading);
  useEffect(()=>{
      dispatch(getSingleProject(id));
    }, [id]);
    
    const {singleProject} = useSelector(state=>state.singleProject);
    
    
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
    const technologies_list = singleProject?.technologies?.split(",");
    const description_list = singleProject?.description?.split(".").filter(Boolean);
    
    if(projectLoading){
      return(
          <Loader />
      );
    }
    return (
    <>
      <div className={styles.project}>
        <section className="section">
          <Navbar />
          <div className={styles.project__wrapper}>
            <div className={styles.project__wrapper__hero}>
              <div className={styles.project__wrapper__hero__left}>
                <h2>Welcome to</h2>
                <h1>{singleProject.title}</h1>
                <div className={styles.project__wrapper__hero__left__technologies}>
                  <h3>Technologies Used</h3>
                  <div className={styles.project__wrapper__hero__left__technologies__wrapper}>
                    {technologies_list && technologies_list.map((element, index)=>{
                        return <span key={index}><FaTools /> {element}</span>
                    })}
                  </div>
                </div>
                <div className={styles.links}>
                  <a href={singleProject.gitRepoLink} target='_blank' rel="noopener noreferrer">Github <ImNewTab /></a>
                  {singleProject.deployed==="Yes"? <a href={singleProject.projectLink} target='_blank' rel="noopener noreferrer">Live site <ImNewTab /></a> : null}

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
                <img src={singleProject?.projectBanner?.url} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className={styles.project__wrapper__about}>
            <h2>About</h2>
            <ul>

                {description_list && description_list.map((sentence, i) => (
                    <li key={i}><FaDotCircle className={styles.list__icons} />
                        <p>{sentence.trim()}</p>
                    </li>
                ))}
            </ul>
          </div>
          <div className={styles.project__wrapper__snapshots}>
            <h2>Snapshots</h2>
            <div className={singleProject.projectSnapshots && singleProject.projectSnapshots.length>0?styles.snapshots__wrapper:null}>
              {singleProject.projectSnapshots && singleProject.projectSnapshots.length>0? singleProject.projectSnapshots.map((_, index) => (
                <div
                  key={index}
                  className={styles.snapshots__wrapper__image}
                  onClick={() => openModal(`${_.url}`)}
                >
                  <img src={_.url} alt={`snapshot${index + 1}`} />
                </div>
              ))
            : <h1>No snapshots available for this</h1>}
            </div>
          </div>
        <Footer />
        </section>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className={styles.modal}
        overlayClassName={styles.modal__overlay}
      >
        <button onClick={closeModal} className={styles.close__button}>X</button>
        <img src={selectedImage} alt="Selected" className={styles.modal__image} />
      </Modal>


    </>
  );
};

export default ViewProject;
