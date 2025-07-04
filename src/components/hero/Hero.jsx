import './hero.css';
import heroImg from '../../assets/images/heroImg.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__desc">
            <h1 className="hero__title">Discover Most Suitable Watches</h1>
            <p className="hero__info">
              Find the best, reliable, and cheap smart watches here. We focus on
              product quality. Here you can find smart watches of almost all
              brands. So why you are waiting? Just order now!
            </p>
            <form className="hero__input">
              <input
                type="text"
                placeholder="Find the best brands"
                name="hero-input"
                id="heroInput"
              />
              <button type="button" className="hero__button">
                Search
              </button>
            </form>
          </div>
          <div className="hero__img">
            <img src={heroImg} loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
