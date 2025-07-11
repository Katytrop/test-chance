import ProductLabel from '@/components/productLabel/ProductLabel';
import { TrashIcon } from '@/assets/icons';
import ProductPrice from '@/components/productPrice/ProductPrice';
import FavoriteButton from '@/components/favoriteButton/FavoriteButton';
import { Link } from 'react-router-dom';
import './CartItem.scss';

export default function CartItem({ product, onRemove, onIncrement, onDecrement, showQuantityControls = false }) {
  const image = product.preview_picture || 'https://dummyimage.com/150x150/ccc/fff&text=No+Image';

  return (
    <div className="cart-item">
      <Link className="cart-item__link" to={`/product/${product.id}`}></Link>
      <div className="cart-item__body">
        <div className="cart-item__left">
          <div className="cart-item__image">
            <img src={image} alt={product.name}/>
          </div>
  
          <div className="cart-item__info">
            <p className="cart-item__name">{product.name}</p>
            <div className="cart-item__labels">
              {product.labels && Object.entries(product.labels).map(([key, text]) => (
                <ProductLabel key={key} type={key} text={text} />
              ))}
            </div>
            <div className="cart-item__quantity">В наличии: {product.quantity} шт.</div>
            <div className="cart-item__btns">
              <FavoriteButton product={product} className="cart-item__favorite" />
              <button className="cart-actions__remove" onClick={onRemove}>
                <TrashIcon title="Удалить" />
              </button>
            </div>
          </div>
        </div>

        <div className="cart-item__actions cart-actions">
          {showQuantityControls && (
            <div className="cart-actions__quantity">
              <button 
              onClick={onDecrement} 
              className="cart-actions__minus"
              disabled={product.quantityInCart <= 1}>
                −
              </button>
              <span>{product.quantityInCart}</span>
              <button 
              className="cart-actions__plus"
              disabled={product.quantityInCart >= product.quantity}
              onClick={onIncrement}>
                +
              </button>
            </div>
          )}
          <ProductPrice price={product.price} price_discount={product.price_discount} />
          
        </div>

      </div>

      
      
    </div>
  );
}