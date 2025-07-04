import './card.css';
import cardImg from '../../../assets/images/cardImg.svg';
import add from '../../../assets/images/AddToCart.svg';
import wish from '../../../assets/images/WishList.svg';
import frame from '../../../assets/images/Frame.svg';
const alt = 'card img';

const Card = () => {
  return (
    <article className="card">
      <div className="card__img">
        <img src={cardImg} alt={alt} />
        <img className="hover__item1" src={add} alt={alt} />
        <img className="hover__item2" src={wish} alt={alt} />
      </div>
      <div className="card__desc">
        <h3>Apple Smart I</h3>
        <img src={frame} alt={alt} />
        <div className="card__price">
          <span>
            <s>$450.00</s>
          </span>
          <span>$399.00</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
