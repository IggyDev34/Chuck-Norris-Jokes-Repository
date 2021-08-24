import './Header.css';
import logo from './logo.png';

function Header() {
  return (
    <div className="header">
      <div className="header__logo-container">
        <img src={logo} alt="header logo" className="header-logo" />
        <p className="header-text">Chuck Norris</p>
      </div>
    </div>
  );
}

export default Header;