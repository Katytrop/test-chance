import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '@/assets/img/logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__left">
          <div className="footer__logo">
              <img src={logo} alt="Логотип" />
          </div>
        </div>
          
      </div>
    </footer>
  );
}