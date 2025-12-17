import { Link } from "react-router-dom";
import Style from "../style/inicio.module.css";
import Perfil from "./Perfil";

export default function Home() {
  return (
    <>
      <div className={Style.perfilInicio}>
        <Perfil />
      </div>

      <div className={Style.botones}>
        <Link to="/whatsapp">
          <button>Contactame</button>
        </Link>

        <a href="https://maps.app.goo.gl/UiFujn2LEypDocZD7">
          <button>Ubicación</button>
        </a>

        <Link to="/sobremi">
          <button>Saber más de mí</button>
        </Link>
      </div>
    </>
  );
}
