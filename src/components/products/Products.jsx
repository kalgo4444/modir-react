import Card from './card/Card';
import './products.css';

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <p>Find your favourite smart watch.</p>
        <h2>Our Latest Products</h2>
        <div className="products__wrapper">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <button className="product__btn">View More</button>
      </div>
    </section>
  );
};

export default Products;
