export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col-1-of-3">
          <h4>il Salice - osteopatia e massofisioterapia</h4>
          <h5>di Giacomo Muccioli e Marco De Canal</h5>
        </div>
        <div className="col-1-of-3">
          <h4>Contatti</h4>
          <h5>Giacomo Muccioli</h5>
          <p>
            Tel: <a href="tel:+393393182797">+39 339 318 2797</a>
          </p>
          <h5>Marco De Canal</h5>
          <p>
            Tel: <a href="tel:+393385330241">+39 338 533 0241</a>
          </p>
          <p>
            email:{" "}
            <a href="mailto:marco.decanal@gmail.com">marco.decanal@gmail.com</a>
          </p>
        </div>
        <div className="col-1-of-3">
          <p>
            San Giovanni in Marignano
            <br />
            Via Vittorio Veneto 15/A
            <br />
            47842, RN
          </p>
        </div>
      </div>
    </footer>
  );
}
