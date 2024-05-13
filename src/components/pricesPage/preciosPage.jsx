import "./preciosPage.scss";

const PreciosPage = () => {
  return (
    <section className="tarifas-principa-container">
      <div className="name-container">
        <h3 className="name">TARIFAS</h3>
      </div>
      <div className="mid-container">
        <div className="precios-content">
          <p className="name">EVENTOS</p>
          <p className="text">A partir de:</p>
          <p className="price">€ 25</p>
        </div>
        <div className="precios-content">
          <p className="name">PEINADOS INFANTILES </p>
          <p className="text">A partir de:</p>
          <p className="price">€ 15</p>
        </div>
        <div className="precios-content">
          <p className="name">TENDENCIAS</p>
          <p className="text">A partir de:</p>
          <p className="price">€ 20</p>
        </div>
      </div>
      <p className="info-prices">
        LOS PRECIOS PUEDEN VARIAR SEGÚN TIEMPO Ó MATERIALES UTILIZADOS
        (GLITTER,DECORACIÓN,ACCESORIOS,ÉTC.)
      </p>
    </section>
  );
};

export default PreciosPage;
