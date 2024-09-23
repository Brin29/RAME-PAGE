import classes from "./Header.module.css";
import logo from "../../assets/imagenes/logo.jpg";
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className={classes.App_header}>
      <div className={classes.container_header}>
        <div className={classes.container_icon}>
          <Link to="/">
            <img className={classes.img_tittle} src={logo} alt="logo_img" />
          </Link>
        </div>
        <nav className={classes.links}>
          <ul>
            <li>
              <Link to="/">
                <span>
                  Inicio
                </span>
              </Link>
            </li>
            <li>
              <Link to="/catalogo">
              <span>
                Catalogo
              </span>
              </Link>
            </li>
            <li>
              <Link to="/usuario">
                <span className="material-symbols-outlined">account_circle</span>
              </Link>
            </li>
            <li>
              <Link to="/carrito"><span className="material-symbols-outlined">shopping_cart</span></Link>
            </li>
            <li>
              <Link to="/favorito"><span      className="material-symbols-outlined">favorite</span></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
