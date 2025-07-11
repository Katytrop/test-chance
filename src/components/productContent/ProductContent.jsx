import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductLabel from '@/components/productLabel/ProductLabel';
import ProductPrice from '@/components/productPrice/ProductPrice';
import FavoriteButton from '@/components/favoriteButton/FavoriteButton';
import './ProductContent.scss'; 

export default function ProductContent() {
  const { id } = useParams();
  const product = useSelector(state =>
    state.products.items.find(p => p.id === Number(id))
  );

  if (!product) {
    return <p>Товар не найден</p>;
  }

  const image = product.preview_picture || 'https://dummyimage.com/300x300/ccc/fff&text=No+Image';

  return (
    <section className="product-page">
      <div className="product-page__container container">
          <div className="product-page__body">
              <div className="product-page__image">
                <img src={image} alt={product.name} />
              </div>
              <div className="product-page__info">
                <h1>{product.name}</h1>
                <ProductPrice price={product.price} price_discount={product.price_discount} />
                <p className="product-page__quantity"> В наличии: {product.quantity} шт.</p>
                <div className="product-page__labels">
                  {product.labels && Object.entries(product.labels).map(([key, text]) => (
                    <ProductLabel key={key} type={key} text={text} />
                  ))}
                </div>
                <FavoriteButton product={product} />
              </div>
          </div>
      </div>
    </section>
  );
}