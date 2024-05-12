import "./contactPage.scss";

const ContactPage = () => {
  return (
    <section className="contact-principal-container">
      <h3 className="title">CONTÁCTATE CONMIGO A TRAVÉS DE:</h3>

      <div className="contact-sections-container">
        <div className="contact-item">
          <i class="fa-brands fa-whatsapp"></i>
          <p className="name-media">WHATSAPP:</p>
          <p className="info"> +34 611 119 468 </p>
        </div>
        <div className="contact-item">
          <i class="fa-solid fa-phone"></i>
          <p className="name-media">TELÉFONO:</p>
          <p className="info"> +34 611 119 468 </p>
        </div>
        <div className="contact-item">
          <i class="fa-solid fa-envelope"></i>
          <p className="name-media">EMAIL:</p>
          <p className="info">hannagonz1997@gmail.com</p>
        </div>
      </div>
    </section>
  );
};
export default ContactPage;
