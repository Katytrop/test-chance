import { removeFromFavorites } from '@/features/favoritesSlice';
import { useDispatch, useSelector } from 'react-redux';
import Title from '@/components/ui/title/Title';
import CartItem from '@/components/cartItem/CartItem';
import './Favorite.scss';

export default function Favorite() {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  return (
    <section className="page__favorite favorite">
      <div className="favorite__container container">
        <Title level={1} className="favorite__title title">Избранное</Title>

        <div className="favorite__items">
          {favorites.length === 0 ? (
            <p>Нет товаров в избранном</p>
          ) : (
            favorites.map(p => (
              <CartItem
                key={p.id}
                product={p}
                onRemove={() => dispatch(removeFromFavorites(p.id))}
              />
            ))
          )}
        </div>

      </div>
    </section>
  );
}

