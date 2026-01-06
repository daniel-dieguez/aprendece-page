import { Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as RouterLink } from "react-router-dom";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.logo}>Aprendece</h3>
      <h5 className={styles.subLogo}>Sistema de Administración</h5>

      <Nav vertical pills>
        <NavItem>
          <NavLink tag={RouterLink} to="/dashboard">
            Dashboard
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={RouterLink} to="/pacientes">
            Pacientes
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={RouterLink} to="/configuracion">
            Configuración
          </NavLink>
        </NavItem>
      </Nav>
    </aside>
  );
}
