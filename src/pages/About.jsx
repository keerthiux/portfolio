import banner from '/src/assets/images/abt_banner.jpg';
import adv_map from '/src/assets/images/ux_adventure.png';
import test1 from '/src/assets/images/abt-test1.jpg';
import test2 from '/src/assets/images/abt-test2.jpg';
import test3 from '/src/assets/images/abt-test3.jpg';
import Button from '../components/Button/Button';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <section className="abt-banner">
          <img src={banner} alt="" />
          <div className="abt-banner-content">
            <h1>Nice to meet you! I’m Keerthi</h1>
            <p>
              I’m a UX designer based in India, I graduated from Lovely
              Professional University with an M.B.A in Marketing & Human
              Resource Management, then I studied User Experience Design from{' '}
              <b>Human Factors Interaction</b>.
            </p>
            <p>
              My design process is shaped by my multicultural background and
              passion for problem-solving. Living and studying in different
              locations has made me a versatile thinker, blending creative and
              strategic perspectives. This adaptability allows me to craft
              solutions that meet the dynamic and hybrid marketing needs of the
              Indian market.
            </p>
            <p>
              Outside of work, I’m a movie lover, an avid explorer of new food
              spots, and a forever learner, always curious about new trends in
              design and technology.
            </p>
            <Button>Resume</Button>
          </div>
        </section>
        <section className="adv-map">
          <h2>— My UX Designer Adventure Map</h2>
          <img src={adv_map} alt="" />
          <p>
            I believe in{' '}
            <span>
              "The best journeys are invisible. The best designs feel natural."
            </span>{' '}
          </p>
        </section>
        <section className="fun-facts"></section>
        <section className="abt-testimonials">
          <div className="abt-testimonial">
            <img src={test1} alt="" />
            <p>
              I started my own online business when I was in school, and made my
              first 5-digit revenue in a month.
            </p>
          </div>
          <div className="abt-testimonial">
            <img src={test2} alt="" />
            <p>
              Our family owns one of the most popular catteries in DC area. This
              is where my interest in UX stemmed from.
            </p>
          </div>
          <div className="abt-testimonial">
            <img src={test3} alt="" />
            <p>
              I found my passion in aesthetics as a child. I’ve been a Vogue and
              AD subscriber since I was 11.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
