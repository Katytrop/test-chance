import './ProductPrice.scss';

export default function ProductPrice({ price, price_discount }) {
  return (
    <div className="prices-wrap">
      {price_discount ? (
        <>
          <div className="prices-wrap__price prices-wrap__price--old">
            {price} ₽
          </div>
          <div className="prices-wrap__price prices-wrap__price--sale">
            {price_discount} ₽
          </div>
        </>
      ) : (
        <div className="prices-wrap__price">{price} ₽</div>
      )}
    </div>
  );
}