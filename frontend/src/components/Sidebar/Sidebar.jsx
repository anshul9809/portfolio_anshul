import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links/Links";
import styles from "./sidebar.module.scss";
import ToggleButton from "./ToggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className={styles.sidebar} animate={open ? "open" : "closed"}>
      <motion.div className={styles.bg} variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton className={styles.toggleMenu} setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;