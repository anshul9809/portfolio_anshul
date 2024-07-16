import styles from "./about.module.scss";
import { useSelector } from "react-redux";
const About = ()=>{

    const {user} = useSelector(state=>state.user);
    const aboutMeList = user?.aboutMe?.split("\n").filter(Boolean);

    return (
        <div className={styles.about}>
            <h1 className={styles.about__heading}>About Me</h1>
            <div className={styles.about__wrapper}>
                <div className={styles.about__wrapper__left}>
                    {/* {user.aboutMe} */}
                    {Array.isArray(aboutMeList) && aboutMeList.map((item, index)=>{
                        return <p className={styles.about__text} key={index}>
                            {item}
                        </p>
                    })}
                </div>
                <div className={styles.about__wrapper__right}>
                    <img src="./me2.jpg" alt="me" />
                </div>
            </div>
        </div>
    )

}

export default About;