import { useEffect, useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [isZoom, setIsZoom] = useState(false);

  useEffect(() => {
    setIsZoom(true);
  }, []);
  return (
    <header className="header-principal">
      <Link to={"/"} className={`logo-container ${isZoom ? "isZoom" : ""}`}>
        <h1 className="logoName">Hanna's</h1>
      </Link>
      <div className="log-deco"></div>
      <nav className="nav-container">
        <Link to={"/TARIFAS"} className="item-button">
          TARIFAS
        </Link>
        <Link to={"/CONTACTO"} className="item-button">
          CONTACTO
        </Link>
      </nav>
    </header>
  );
};
export default Header;
