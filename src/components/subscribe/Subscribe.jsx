import './subscribe.css';
import img from '../../assets/images/cardImg.svg';
const alt = 'img';

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__wrapper">
          <div className="subscribe__desc">
            <h2>Subscribe To Newsletter</h2>
            <p>Get free guide about smart watches daily. </p>
            <div className="subscribe__input">
              <input
                type="email"
                placeholder="Enter Email Address"
                id="email"
                name="emailInput"
              />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="subscribe__img">
            <img src={img} alt={alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
