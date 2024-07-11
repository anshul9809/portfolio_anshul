import styles from "./hero.module.scss";
import React, {useEffect, useState} from "react";
import axios from "axios";
const Hero = ()=>{
    const [user, setUser] = useState({});
    useEffect(()=>{
        const getMyProfile = async ()=>{
            
            const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URL}user/portfolio`,
                { withCredentials: true }
            );
            setUser(data.user);
        }
        getMyProfile();
    }, []);
    return (
        <>
            <div className="container">
                <div className={styles.hero}>
                    <div className={styles.hero__left}>
                        <div className={styles.hero__text}>
                            <h1 className={styles.hero__text__greetings}>
                                Hi, I'm
                            </h1>
                            <h1 className={styles.hero__text__heading}>
                                {user.fullName}
                            </h1>
                            <h1 className={styles.hero__text__subheading}>
                                {/* create a type writer effect here for values backned developer and full stack develoepr*/}
                                Full Stack Developer
                            </h1>
                        </div>
                        <div className={styles.hero__button}>
                            <button className={styles.hero__button__contact}>
                                Contact Me
                            </button>
                        </div>

                    </div>
                    <div className={styles.hero__right}>
                        <img src={user?.avatar?.url} alt="profile" />
                    </div>
                    
                </div>

            </div>
        </>
    );
}

export default Hero;