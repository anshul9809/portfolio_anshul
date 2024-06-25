import styles from "./forgotpassword.module.scss";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { clearAllForgotResetPassErrors, forgotPassword } from "../../store/slices/forgotPasswordResetSlice";

const ForgotPassword = ()=>{
    const [email,setEmail] = useState("");
    const {loading, error, message} = useSelector((state)=> state.forgotPassword);
    const {isAuthenticated} = useSelector((state)=> state.user);
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    
    const handleForgotPassword = ()=>{
        dispatch(forgotPassword(email))
    }

    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch(clearAllForgotResetPassErrors());
        }
        // if(isAuthenticated){
        //     navigateTo("/");
        // }
        if(message){
            toast.success(message);
        }
    },[dispatch, isAuthenticated, error, message]);

    return (
        <div className={styles.forgotPassword}>
            <div className={styles.container}>
                <h1>Forgot Password</h1>
                <div className={styles.input}>
                    <div className={styles.label}>Enter your email</div>
                    <input className={styles.inputField}
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                {/* <div className={styles.input}>
                    <div className={styles.label}>Password</div>
                    <input className={styles.inputField} 
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div> */}
                <button className={styles.button} onClick={() => handleForgotPassword(email)}>Send Mail</button>
                <Link to="/login" className={styles.forgot}>
                    Remember Your Password?
                </Link>
            </div>
        </div>
    );
}


export default ForgotPassword;