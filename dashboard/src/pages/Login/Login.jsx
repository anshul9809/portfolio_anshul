import { useEffect, useState } from "react";
import styles from "./login.module.scss";
import {Link, useNavigate} from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { clearAllUserErrors, login } from "../../store/slices/userSlice";
import { toast } from "react-toastify";
const Login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const {loading, isAuthenticated, error} = useSelector((state)=>state.user);


    const handleLogin = ()=>{
        dispatch(login(email,password));
    }

    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch(clearAllUserErrors())
        }
        if(isAuthenticated){
            navigateTo("/");
        }
    }, [dispatch, isAuthenticated, error, loading]);


    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <h1>Login</h1>
                <div className={styles.input}>
                    <div className={styles.label}>Email</div>
                    <input className={styles.inputField}
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.input}>
                    <div className={styles.label}>Password</div>
                    <input className={styles.inputField} 
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className={styles.button} onClick={() => handleLogin(email, password)}>Login</button>
                <Link to="/password/forgot" className={styles.forgot}>
                    Forgot Password?
                </Link>
            </div>
        </div>
    )
}

export default Login;