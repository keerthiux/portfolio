import Button from '../Button/Button';
import banner from '/src/assets/banner.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <img src={banner} alt="banner" />
      <section className="banner-text">
        <h1>Hi there! I’m Sai Keerthi</h1>
        <p>
          — a UX designer based in Hyderabad, I have 4+ years experience & I
          enjoy creating user-centric, delightful, and human experiences.
        </p>
        <Button>Resume</Button>
      </section>
    </section>
  );
};

export default Banner;
