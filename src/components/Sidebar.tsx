import Avatar from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/kajiyamavk.png" bordered />

        <strong className={styles.profileName}>Victor Kajiyama</strong>
        <span className={styles.profileRole}>Developer</span>
      </div>

      <footer className={styles.sidebarFooter}>
        <a href="" className={styles.sidebarButton}>
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
