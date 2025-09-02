import logo from "../../assets/images/inicio/logoCardapio-mobile.png";

import "./inicio.scss";

const Inicio = () => {
  return (
    <main className="inicio">
      <div className="inicio__background"></div>

      <header className="inicio__header">
        <img src={logo} alt="Logo do sistema" className="inicio__logo" />
      </header>

      <section className="inicio__content">
        <h1 className="inicio__title">Santana</h1>
        <button className="inicio__button">Entrar</button>
      </section>
    </main>
  );
};

export default Inicio;