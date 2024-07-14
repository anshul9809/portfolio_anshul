import styles from "./about.module.scss";
const About = ()=>{

    return (
        <div className={styles.about}>
            <h1 className={styles.about__heading}>About Me</h1>
            <div className={styles.about__wrapper}>
                <div className={styles.about__wrapper__left}>
                    <p className={styles.about__text}>Hi there, </p>
                    <p className={styles.about__text}>
                        I'm <b>Anshul Kumar</b>, a passionate MERN Stack Development Enthusiast who loves diving into the world of coding and creating seamless, beautiful web applications.
                    </p>
                    <p className={styles.about__text}>
                        My journey in tech has been quite an adventure. As an Executive at Tata Consultancy Services, leading a team and implementing data quality control measures. Freelanced for more than 8 clients including After School Convention and Manbot. Some of my favorite personal projects include a dynamic web application for a Placement Cell using Node.js and Express.js, and a Notes App with Google authentication.
                    </p>
                    <p className={styles.about__text}>
                        When I'm not coding, you can find me on the cricket field playing, being a right-handed batsman at the 3rd position, I'm known for being quite unyielding at the crease. I also have a bit of a foodie streak—I'm always munching on something. My favorite way to unwind is by reading fiction and horror stories. And if you ever need a laugh (or a groan), I'm your guy—I love making bad jokes and keeping things light-hearted.
                    </p>
                    <p className={styles.about__text}>Thanks for stopping by on my portfolio. </p>
                </div>
                <div className={styles.about__wrapper__right}>
                    <img src="./me2.jpg" alt="me" />
                </div>
            </div>
        </div>
    )

}

export default About;