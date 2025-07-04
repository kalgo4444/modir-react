import './poeplecard.css';
import peopleImg from '../../../assets/images/people1.svg';
import stars from '../../../assets/images/Stars.svg';
const alt = 'people img';

const Peoplecard = () => {
  return (
    <article className="people__card">
      <div className="people__card-img">
        <img src={peopleImg} alt={alt} />
      </div>
      <div className="people__card-desc">
        <h3>Hamza Faizi</h3>
        <p>
          Don’t waste time, just order! This is the best website to puschase
          smart watches.
        </p>
        <img src={stars} alt={alt} />
      </div>
    </article>
  );
};

export default Peoplecard;
