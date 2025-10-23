import styles from "./Sidebar.module.css";
import LogoEquipo17 from "../Logo/LogoEquipo17";
import Navigation from "../Navigation/Navigation";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <LogoEquipo17 />
      </div>
      <Navigation />
    </aside>
  );
}
