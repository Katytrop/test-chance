import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '@/assets/img/logo.png';
import { BasketIcon } from '@/assets/icons';
import { FavoriteIcon } from '@/assets/icons';

export default function Header() {
  const cart = useSelector(state => state.cart);
  const favorites = useSelector(state => state.favorites);

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__left">
                <div className="header__logo">
                   <img src={logo} alt="Логотип" />
                </div>
                <nav className="header__menu menu">
                    <Link className="menu__link" to="/">Каталог</Link>
                    <Link className="menu__link" to="/">Оплата</Link>
                    <Link className="menu__link" to="/">Доставка</Link>
                    <Link className="menu__link" to="/">Контакты</Link>
                </nav>
            </div>
            <div className="hrader__actions actions">
                <Link to="/favorites" className="actions__link">
                   <FavoriteIcon className="actions__icon" />
                   {favorites.length > 0 && (
                      <span className="actions__badge">{favorites.length}</span>
                    )}
                </Link>
                <Link to="/cart" className="actions__link">
                    <BasketIcon className="actions__icon" />
                    {cart.length > 0 && (
                      <span className="actions__badge">{cart.length}</span>
                    )}
                </Link>
            </div>
      </div>
    </header>
  );
}