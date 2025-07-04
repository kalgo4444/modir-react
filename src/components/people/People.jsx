import './people.css';
import Peoplecard from './peoplecard/Peoplecard';
import dots from '../../assets/images/Dots.svg';
const alt = 'Hello world';

const People = () => {
  return (
    <section className="people">
      <div className="container">
        <b>Here are our some of the best clients.</b>
        <h2>What People Say About Us</h2>
        <div className="people__wrapper">
          <Peoplecard />
          <Peoplecard />
        </div>
        <img style={{ cursor: 'pointer' }} src={dots} alt={alt} />
      </div>
    </section>
  );
};

export default People;
