import { Outlet } from "react-router-dom";
import styles from '../styles/app.module.css';

export default function SystemLayout() {
  return (
    <div className={styles.cuerpo}>
      <Outlet />
    </div>
  );
}
