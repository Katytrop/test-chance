import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../../features/cartSlice';
import ProductLabel from '@/components/productLabel/ProductLabel';
import ProductPrice from '@/components/productPrice/ProductPrice';
import FavoriteButton from '@/components/favoriteButton/FavoriteButton';
import './ProductCard.scss';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const inCart = useMemo(() => cart.find(p => p.id === product.id), [cart, product.id]);
  const btnClass = product.quantity === 0
    ? 'product-card__btn--not'
    : inCart
      ? 'product-card__btn--inCart'
      : 'product-card__btn--basket';

  const btnText = product.quantity === 0
    ? 'Нет в наличии'
    : inCart
      ? 'В корзине'
      : 'В корзину';

  const image = product.preview_picture || 'https://dummyimage.com/150x150/ccc/fff&text=No+Image';

  return (
    <div className="products__item product-card">
      <Link className="product-card__link" to={`/product/${product.id}`}></Link>
      <div className="product-card__top">
        <div className="product-card__image">
          <img src={image} alt={product.name}/>
        </div>
        <div className="product-card__labels">
          {product.labels && Object.entries(product.labels).map(([key, text]) => (
            <ProductLabel key={key} type={key} text={text} />
          ))}
        </div>
        {product.available && (
          <FavoriteButton product={product} className="product-card__favorite" />
        )}
      </div>
      <div className="product-card__bottom">
        <ProductPrice price={product.price} price_discount={product.price_discount} />
        
        <h3 className="product-card__name">{product.name}</h3>

        <div className="product-card__quantity">В наличии: {product.quantity} шт.</div>
        
        {product.available && (
          inCart ? (
            <Link
              to="/cart"
              className={`product-card__btn ${btnClass} btn`}
            >
              В корзине
            </Link>
          ) : (
            <button
              disabled={product.quantity === 0}
              className={`product-card__btn ${btnClass} btn`}
              onClick={() => dispatch(addToCart(product))}
            >
              {product.quantity === 0 ? 'Отсутствует' : 'В корзину'}
            </button>
          )
        )}
        
      </div>

    </div>
  );
}