import { ReactElement } from "react";
import styles from "./Header.module.css";
import logoSm from "/logo-sm.png";

export default function Header(): ReactElement {
  return (
    <header className={styles.main}>
      <img src={logoSm} alt="Fullstacker logo" />
      <p>Fullstacker Blog</p>
    </header>
  );
}
