import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllUserErrors, logout } from "../../store/slices/userSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import styles from "./homePage.module.scss";
import { FaHome, FaFolderPlus, FaPencilRuler, FaThLarge, FaHistory, FaComments, FaUser, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import Dashboard from "../sub-components/Dashboard/Dashboard";
import AddProject from "../sub-components/AddProject/AddProject";
import Account from "../sub-components/Account/Account";
import AddSkill from "../sub-components/AddSkill/AddSkill";
import AddSoftwareApplications from "../sub-components/AddSoftware/AddSoftware";
import AddTimeline from "../sub-components/AddTimeline/AddTimeline";
import Message from "../sub-components/Message/Message";


const HomePage = ()=>{
    const [active, setActive] = useState("");
    const {isAuthenticated, user, error} = useSelector((state)=>state.user);
    const dispatch = useDispatch();

    const navigateTo = useNavigate();

    const handleLogout = ()=>{
        dispatch(logout());
        toast.success("Logged Out!");
    }

    
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    
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
            <div className={styles.homePage}>
                <div className={styles.sidebarContainer}>
                    <div className={styles.sidebarToggle} onClick={handleSidebarToggle}>
                        {isSidebarOpen? <FaTimes /> : <FaBars />}
                    </div>
                    <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
                        <nav className={styles.sidebarNav}>
                            <div className={styles.sidebarLink} onClick={() => setActive('Dashboard')}>
                                <FaHome className={`icon ${active === 'Dashboard' ? styles.active : ''}`} />
                                <span className={styles.tooltip} >Dashboard</span>
                                <span className={styles.text}>Dashboard</span>
                            </div>
                            <div className={styles.sidebarLink} onClick={() => setActive('Add Project')}>
                                <FaFolderPlus className={`icon ${active === 'Add Project' ? styles.active : ''}`} />
                                <span className={styles.tooltip} >Project</span>
                                <span className={styles.text}>Project</span>
                            </div>
                            <div className={styles.sidebarLink} onClick={() => setActive('Add Skill')}>
                                <FaPencilRuler className={`icon ${active === 'Add Skill' ? styles.active : ''}`} />
                                <span className={styles.tooltip} >Skill</span>
                                <span className={styles.text}>Skill</span>
                            </div>
                            <div className={styles.sidebarLink} onClick={() => setActive('Add Uses')}>
                                <FaThLarge className={`icon ${active === 'Add Uses' ? styles.active : ''}`} />
                                <span className={styles.tooltip} >Application</span>
                                <span className={styles.text}>Application</span>
                            </div>
                            <div className={styles.sidebarLink} onClick={() => setActive('Add Timeline')}>
                                <FaHistory className={`icon ${active === 'Add Timeline' ? styles.active : ''}`} />
                                <span className={styles.tooltip} >Timeline</span>
                                <span className={styles.text}>Timeline</span>
                            </div>
                            <div className={styles.sidebarLink} onClick={() => setActive('Messages')}>
                                <FaComments className={`icon ${active === 'Messages' ? styles.active : ''}`} />
                                <span className={styles.tooltip} >Messages</span>
                                <span className={styles.text}>Messages</span>
                            </div>
                            <div className={styles.sidebarLink} onClick={() => setActive('Account')}>
                                <FaUser className={`${styles.icon} ${active === 'Account' ? styles.active : ''}`} />
                                <span className={styles.tooltip} >Account</span>
                                <span className={styles.text}>Account</span>
                            </div>
                        </nav>
                        <nav className={styles.sidebarNavBottom}>
                            <div className={styles.sidebarLink} onClick={handleLogout}>
                                <FaSignOutAlt className={styles.icon} />
                                <span className={styles.tooltip} >Logout</span>
                                <span className={styles.text}>Logout</span>
                            </div>
                        </nav>
                    </aside>
                </div>
                <main className={styles.homePageMain}>
                    <header className={styles.homePageHeader}>
                        <img src={user && user.avatar && user.avatar.url}
                            alt="avatar"
                            className={styles.userAvatar}
                        />
                        <h1>Welcome back, {user.fullName}</h1>
                    </header>
                    {(() => {
                        switch (active) {
                        case "Dashboard":
                            return <Dashboard />;
                            break;
                        case "Add Project":
                            return < AddProject />;
                            break;
                        case "Add Skill":
                            return <AddSkill />;
                            break;
                        case "Add Uses":
                            return <AddSoftwareApplications />;
                            break;
                        case "Add Timeline":
                            return < AddTimeline />;
                            break;
                        case "Messages":
                            return <Message />;
                            break;
                        case "Account":
                            return <Account />;
                            break;
                        default:
                            return <Dashboard />;
                            break;
                        }
                    })()}
                </main>
            </div>
        </>
    );

}

export default HomePage;