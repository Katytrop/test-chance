import './ProductLabel.scss';

export default function ProductLabel({ type, text }) {
  const className = `product-label product-label--${type}`;

  return <div className={className}>{text}</div>;
}
