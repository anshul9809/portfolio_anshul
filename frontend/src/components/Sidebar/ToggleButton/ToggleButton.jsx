import { motion } from "framer-motion";
import styles from "../sidebar.module.scss"

const ToggleButton = ({ setOpen }) => {
  return (
    <button className={styles.toggleMenu} onClick={() => setOpen((prev) => !prev)}>
      <svg width="25" height="25" viewBox="0 0 23 23" className={styles.toggleMenu__bars}>
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;