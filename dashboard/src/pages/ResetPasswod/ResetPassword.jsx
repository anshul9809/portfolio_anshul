import { useEffect, useState } from "react";
import styles from "./resetPassword.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../store/slices/forgotPasswordResetSlice";
import { getUser } from "../../store/slices/userSlice";

const ResetPassword = ()=>{
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {token} = useParams();
    const {loading, error, message} = useSelector((state)=>state.forgotPassword);
    const { isAuthenticated } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const handleResetPassword = (password, confirmPassword)=>{
        dispatch(resetPassword(token, password, confirmPassword))
    }

    useEffect(()=>{
        if(error){
            toast.error(error);
        }
        if(isAuthenticated){
            navigateTo("/");
        }
        if(message){
            toast.success(message);
            dispatch(getUser());
        }
    }, [dispatch, isAuthenticated, error, loading]);

    return (
        <div className={styles.resetPassword}>
            <div className={styles.container}>
                <h1>Reset Password</h1>
                <div className={styles.input}>
                    <div className={styles.label}>New Password</div>
                    <input className={styles.inputField}
                        id="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.input}>
                    <div className={styles.label}>Confirm Password</div>
                    <input className={styles.inputField} 
                        type="password"
                        value={confirmPassword}
                        placeholder="confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button className={styles.button} onClick={() => handleResetPassword(email)}>Reset Password</button>
            </div>
        </div>
    );
}


export default ResetPassword;