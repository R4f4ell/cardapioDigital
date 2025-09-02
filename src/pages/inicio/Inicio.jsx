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

        <button type="button" className="inicio__button" aria-label="Entrar no sistema">
          <strong>ENTRAR</strong>

          {/* estrelas em loop, sempre ativas */}
          <div className="inicio__container-stars">
            <div className="inicio__stars"></div>
          </div>

          {/* glow com círculos em órbita, sempre ativos */}
          <div className="inicio__glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
      </section>
    </main>
  );
};

export default Inicio;