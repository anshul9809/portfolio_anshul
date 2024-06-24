import styles from "./login.module.scss";
import {Link} from "react-router-dom"; 
const Login = ()=>{

    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <h1>Login</h1>
                <div className={styles.input}>
                    <div className={styles.label}>Email</div>
                    <input className={styles.inputField} type="text" placeholder="Email"/>
                </div>
                <div className={styles.input}>
                    <div className={styles.label}>Password</div>
                    <input className={styles.inputField} type="password" placeholder="Password"/>
                </div>
                <button className={styles.button}>Login</button>
                <Link to="/password/forgot" className={styles.forgot}>
                    Forgot Password?
                </Link>
            </div>
        </div>
    )
}

export default Login;