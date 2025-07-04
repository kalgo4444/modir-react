import './brans.css';
import apple from '../../assets/images/apple.svg';
import xiaomi from '../../assets/images/xiaomi.svg';
import fitbit from '../../assets/images/fitbit.svg';
const alt = 'brand_img';

const Brand = () => {
  return (
    <section className="brand">
      <div className="container">
        <div className="brand__wrapper">
          <article className="brand__card">
            <div className="brand__img">
              <img src={apple} loading="lazy" alt={alt} />
            </div>
            <div className="brand__desc">
              <h2>Apple</h2>
              <p>
                Apple is one of the most famous smart watches providing company.
              </p>
            </div>
          </article>
          <article className="brand__card">
            <div className="brand__img">
              <img src={xiaomi} loading="lazy" alt={alt} />
            </div>
            <div className="brand__desc">
              <h2>Xiaomi</h2>
              <p>Xiaomi smart watches are produced by MI company.</p>
            </div>
          </article>
          <article className="brand__card">
            <div className="brand__img">
              <img src={fitbit} loading="lazy" alt={alt} />
            </div>
            <div className="brand__desc">
              <h2>FitBit</h2>
              <p>
                FitBit smart watches are best for there health and fitness
                features.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Brand;
