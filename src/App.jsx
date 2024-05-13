import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Header from "./components/header/header";
import logoWp from "../src/assets/logowhats.png";
import "./index.scss";
import CategoryPage from "./components/categoryPage/categoryPage";
import ContactPage from "./components/contactPage/contactPage";
import PreciosPage from "./components/pricesPage/preciosPage";

function App() {
  const phonenumber = "34611119468";
  const message =
    "¡Hola!, he visto HANNA'S y me gustaría tener mas información...";

  const whatsappLink = `https://wa.me/${phonenumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div className="app-principal-container">
      <BrowserRouter>
        <div className="center-container">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:categoryName" element={<CategoryPage />} />
            <Route path="/CONTACTO" element={<ContactPage />} />
            <Route path="/TARIFAS" element={<PreciosPage />} />
          </Routes>
        </div>
      </BrowserRouter>

      <a
        className="whatsapp-button-container"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text">¡Quiero mas información!</p>
        <img className="Logo" src={logoWp} alt="description" />
      </a>
    </div>
  );
}

export default App;
