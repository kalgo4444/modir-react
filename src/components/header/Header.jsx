import './header.css';
import logo from '../../assets/images/logo.svg';
import card from '../../assets/images/Card.svg';
import person from '../../assets/images/Person.svg';
import search from '../../assets/images/Search.svg';

const link = '#';
const alt = 'Alt';

const Header = () => {
  return (
    <header className="header">
      <nav className="container navbar">
        <a href={link} className="navbar__logo">
          <img src={logo} alt="" />
          <p>Mohid</p>
        </a>
        <ul id="navbar__collection" className="navbar__collection">
          <li className="navbar__item">
            <a href={link}>Home</a>
          </li>
          <li className="navbar__item">
            <a href={link}>Brands</a>
          </li>
          <li className="navbar__item">
            <a href={link}>Recent Products</a>
          </li>
          <li className="navbar__item">
            <a href={link}>Contact</a>
          </li>
          <li className="navbar__item">
            <a href={link}>About</a>
          </li>
        </ul>
        <div className="navbar__active">
          <a href={link}>
            <img src={search} alt={alt} />
          </a>
          <a href={link}>
            <img src={person} alt={alt} />
          </a>
          <a href={link}>
            <img src={card} alt={alt} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
