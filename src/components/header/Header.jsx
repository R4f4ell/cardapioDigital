import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const toggleRef = useRef();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        toggleRef.current && !toggleRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/">Raízes & Sabores</Link>
        </div>

        <button
          ref={toggleRef}
          className={`menu-toggle${isMenuOpen ? ' open' : ''}`}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </button>

        <ul className="nav-links desktop">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/pratos">Pratos</Link></li>
          <li><Link to="/bebidas">Bebidas</Link></li>
          <li><Link to="/sobremesas">Sobremesas</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>

      <div ref={menuRef} className={`mobile-menu${isMenuOpen ? ' open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Início</Link></li>
          <li><Link to="/pratos" onClick={closeMenu}>Pratos</Link></li>
          <li><Link to="/bebidas" onClick={closeMenu}>Bebidas</Link></li>
          <li><Link to="/sobremesas" onClick={closeMenu}>Sobremesas</Link></li>
          <li><Link to="/contato" onClick={closeMenu}>Contato</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
