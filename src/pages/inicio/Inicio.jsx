import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/inicio/logoFavicon.png";
import imgFundo from "../../assets/images/inicio/imgInicial-mobile.webp";
import "./inicio.scss";

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <main className="inicio">
      {/* Fundo escuro + onda SVG */}
      <div className="inicio__background">
        {/* Imagem de fundo */}
        <img
          src={imgFundo}
          alt=""
          className="inicio__bg-img"
          loading="eager"
        />

        {/* Onda */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#9DB610" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
          </defs>

          <path
            fill="url(#waveGrad)"
            d="M0,224L40,213.3C80,203,160,181,240,181.3C320,181,400,203,480,197.3C560,192,640,160,720,154.7C800,149,880,171,960,181.3C1040,192,1120,192,1200,176C1280,160,1360,128,1400,112L1440,96L1440,320L0,320Z"
          />
        </svg>
      </div>

      <header className="inicio__header">
        <img
          src={logo}
          alt="Logo do sistema"
          className="logo"
          loading="eager"
        />
      </header>

      <section className="inicio__content">
        <h1 className="inicio__title">Santana</h1>

        <button
          type="button"
          className="inicio__button"
          aria-label="Entrar no sistema"
          onClick={() => {
            sessionStorage.setItem("allowCategorias", "1");
            navigate("/categorias", { state: { viaButton: true } });
          }}
        >
          <strong>ENTRAR</strong>

          {/* estrelas em loop */}
          <div className="inicio__container-stars">
            <div className="inicio__stars"></div>
          </div>

          {/* glow com círculos em órbita */}
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