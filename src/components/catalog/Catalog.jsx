import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/features/productsSlice';
import ProductCard from '@/components/productCard/ProductCard';
import Title from '@/components/ui/title/Title';
import './Catalog.scss';

export default function Catalog() {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="page__products products">
      <div className="products__container container">
        <Title level={1} className="products__title title">Каталог</Title>
        {status === 'loading' ? <p>Загрузка...</p> : null}

        <div className="products__items">
          {items.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

      </div>
    </section>
  );
}