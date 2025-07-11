import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '@/features/cartSlice';
import Title from '@/components/ui/title/Title';
import CartItem from '@/components/cartItem/CartItem';
import './Basket.scss';

export default function Basket() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const delivery = 100;
  const productsPrice = cart.reduce((sum, product) => {
    const price = product.price_discount || product.price;
    return sum + price * product.quantityInCart;
  }, 0);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantityInCart, 0);
  const totalPrice = productsPrice + delivery;

  return (
    <section className="page__basket basket">
      <div className="basket__container container">
        <div className="basket__body">
          <Title level={1} className="basket__title title">Корзина</Title>
  
          <div className="basket__items">
            {cart.length === 0 ? (
                <p>Нет товаров в корзине</p>
              ) : (
                cart.map(p => (
                  <CartItem
                    key={p.id}
                    product={p}
                    onRemove={() => dispatch(removeFromCart(p.id))}
                    onIncrement={() => dispatch(incrementQuantity(p.id))}
                    onDecrement={() => dispatch(decrementQuantity(p.id))}
                    showQuantityControls
                  />
                ))
              )}
          </div>
  
          {cart.length > 0 && (
            <div className="basket__total total-products">
              <h3>Ваш заказ</h3>
              <div className="total-products__row total-products__row--quantity">
                <span>Товары, {totalQuantity} шт.</span>
                {productsPrice.toLocaleString()} ₽
              </div>
              <div className="total-products__row total-products__row--delivery">
                <span>Доставка: </span>
                {delivery} ₽
              </div>
              <div className="total-products__row total-products__row--total">
                <span>Итого:</span>
                {totalPrice.toLocaleString()} ₽
              </div>
              <button className="total-products__btn btn">Заказать</button>
            </div>
          )}

          
        </div>

      </div>
    </section>
  );
}