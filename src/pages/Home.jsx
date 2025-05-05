import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import cooper from '/src/assets/images/cooper.gif';
import zaggle from '/src/assets/images/zaggle.png';
import mselect from '/src/assets/images/mselect.png';
import serena from '/src/assets/images/serena.png';
import ashwini from '/src/assets/images/ashwini.jpeg';
import krishna from '/src/assets/images/krishna.jpeg';
import Button from '../components/Button/Button';

const Home = () => {
  return (
    <>
      <Banner />
      {/* <Carousel /> */}
      <section className="case-studies">
        <section className="one case">
          <img src={cooper} alt="" />
          <div className="text">
            <h5>Product Design - SAAS</h5>
            <h2>Product Design for AI Based Decision Making Application</h2>
            <Button>Read More</Button>
          </div>
        </section>
        <section className="two case">
          <img src={zaggle} alt="" />
          <div className="text">
            <h5>Product Design - SAAS</h5>
            <h2>Expenses Management System - Product design</h2>
            <Button>Read More</Button>
          </div>
        </section>
        <section className="three case">
          <img src={mselect} alt="" />
          <div className="text">
            <h5>Product Design - SAAS</h5>
            <h2>
              Digital ecosystem that meets the mental health needs of
              adolescents
            </h2>
            <Button>Read More</Button>
          </div>
        </section>
      </section>
      <section className="testimonials">
        <div className="container">
          <div className="testimonial-content">
            <div className="testimonial">
              <img src={serena} alt="" />
              <div className="content">
                <p>
                  “Keerthi is incredibly sharp, creative and proactive. What
                  makes Keerthi so special is that she is a natural problem
                  solver with a strong sense of empathy and understanding of
                  others. She is talented in turning complex problems into very
                  simple and user-friendly design.“
                </p>
                <span>—— Serena Puerta, Founder, Culture of fit</span>
              </div>
            </div>
            <div className="testimonial">
              <img src={ashwini} alt="" />
              <div className="content">
                <p>
                  “Keerthi has a bright personality that really shines through
                  her work. She has a great aesthetic taste and passion for
                  design, besides, she is a wonderful communicator & team
                  player.”
                </p>
                <span>—— Ashwini Shetty, Senior Designer at Veltris</span>
              </div>
            </div>
            <div className="testimonial">
              <img src={krishna} alt="" />
              <div className="content">
                <p>
                  “Keerthi is not only great at her craft but also determined to
                  learn and constantly grow. Her work ethic, performance and
                  diligence would be a great asset to any company. ”
                </p>
                <span>—— Sai Shiva Krishna, Senior UX Designer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
