import { Outlet } from "react-router-dom";
import styles from '../styles/app.module.css';
import Navigation from './Navigation';
import { ContentProvider } from "../Globales/Time/Context";
import TimeHeader from "../Globales/Time/Header";

export default function SystemLayout() {
  return (
    <ContentProvider>
      <TimeHeader/>
      <div className={styles.cuerpo}>
      <Navigation />
      
      <main className={styles.content}>
        <Outlet />

      </main>

    </div>
    </ContentProvider>
    
  );
}
