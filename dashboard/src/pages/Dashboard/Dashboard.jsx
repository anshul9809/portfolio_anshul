import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllUserErrors, logout } from "../../store/slices/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Dashboard = ()=>{
    const [active, setActive] = useState("");
    const {isAuthenticated, user, error} = useSelector((state)=>state.user);
    const dispatch = useDispatch();

    const navigateTo = useNavigate();

    const handleLogout = ()=>{
        dispatch(logout());
        toast.success("Logged Out!");
    }

    useEffect(()=>{
        if (error) {
            toast.error(error);
            dispatch(clearAllUserErrors());
        }
        if (!isAuthenticated) {
            navigateTo("/login");
        }
    }, [isAuthenticated]);


    return (
        <>
            
        </>
    );

}

export default Dashboard;