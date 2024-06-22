import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./login.module.scss";

const Login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return <>
        <div className={styles.mainDiv}>
            <h1>Login</h1>
        </div>
    </>
}

export default Login;