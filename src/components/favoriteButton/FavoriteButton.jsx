import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '@/features/favoritesSlice';
import { FavoriteIcon } from '@/assets/icons';
import './FavoriteButton.scss';

export default function FavoriteButton({ product, className = '' }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const inFav = favorites.find(p => p.id === product.id);

  const handleClick = () => {
    if (inFav) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`favorite-button ${inFav ? 'favorite-active' : ''} ${className}`}
      aria-label={inFav ? 'Убрать из избранного' : 'Добавить в избранное'}
      type="button"
      title={inFav ? 'Убрать из избранного' : 'Добавить в избранное'}
    >
      <FavoriteIcon />
    </button>
  );
}