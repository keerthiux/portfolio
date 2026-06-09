import Button from '../Button/Button';
import ashwini from '/src/assets/images/profilepic.jpeg';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-content">
          <section className="banner-text">
            <h1>Hi there! I’m Sai Keerthi</h1>
            <p>
              — a UX designer based in Hyderabad, I have 4+ years experience & I
              enjoy creating user-centric, delightful, and human experiences.
            </p>
            <Button>Resume</Button>
          </section>
          <div className="banner-img">
            <img src={ashwini} alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
