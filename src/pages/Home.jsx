import { motion } from 'framer-motion';
import profile from '/src/assets/images/profilepic.jpg';
import cooper from '/src/assets/images/cooper-poster.jpg';
import nexus from '/src/assets/images/nexus/hero.jpg';
import nexoraHero from '/src/assets/images/nexora/hero-site.jpg';
import serena from '/src/assets/images/serena.jpg';
import ashwini from '/src/assets/images/ashwini.jpg';
import krishna from '/src/assets/images/krishna.jpg';
import Button from '../components/Button/Button';
import Reveal from '../components/Reveal/Reveal';
import FloatingDoodles from '../components/FloatingDoodles/FloatingDoodles';
import './Home.css';

const caseStudies = [
  {
    img: cooper,
    tag: 'Product Design · SaaS',
    title: 'Cooper — an AI-powered decision-making platform for data teams',
    desc: 'Conceptual diagrams, wireframes and interactive prototypes for an enterprise dashboard, taken from concept through dev handoff.',
    link: '/#/case-study/cooper',
  },
  {
    img: nexus,
    tag: 'Product Design · HRMS & Billing',
    title: 'Nexus — a billing & HR system rebuilt for clarity',
    desc: 'Redesigned a legacy HRMS and billing platform for PMOs, PMs and HR teams — cutting resource-allocation time by 2-3 hrs/week and admin errors by 30%.',
    link: '/#/case-study/nexus',
  },
  {
    img: nexoraHero,
    tag: 'Product Design · SaaS CRM',
    title: 'Nexora — a CRM built for appointment-based businesses',
    desc: 'Designed and shipped a live CRM for clinics, gyms and salons end-to-end, from concept to a self-serve product.',
    link: '/#/case-study/nexora',
  },
];

const testimonials = [
  {
    img: serena,
    quote:
      'Keerthi is incredibly sharp, creative and proactive — a natural problem solver with a strong sense of empathy who turns complex problems into simple, user-friendly design.',
    name: 'Serena Puerta',
    role: 'Founder, Culture of Fit',
  },
  {
    img: ashwini,
    quote:
      'Keerthi has a bright personality that really shines through her work — great aesthetic taste, a passion for design, and a wonderful communicator and team player.',
    name: 'Ashwini Shetty',
    role: 'Senior Designer, Veltris',
  },
  {
    img: krishna,
    quote:
      'Keerthi is not only great at her craft but determined to learn and constantly grow. Her work ethic and diligence would be a great asset to any company.',
    name: 'Sai Shiva Krishna',
    role: 'Senior UX Designer',
  },
];

const stats = [
  { value: '5+', label: 'Years in product design' },
  { value: '150+', label: 'Reusable components shipped' },
  { value: '30+', label: 'User interviews led' },
  { value: '95%', label: 'On-time delivery rate' },
];

const marquee = [
  'Design Systems',
  'Enterprise SaaS',
  'UX Research',
  'Prototyping',
  'WCAG Accessibility',
  'Interaction Design',
  'Dashboard UX',
  'Design Systems',
  'Enterprise SaaS',
  'UX Research',
  'Prototyping',
  'WCAG Accessibility',
  'Interaction Design',
  'Dashboard UX',
];

const career = [
  {
    year: '2025 — Now',
    role: 'Senior Software Engineer (Product Design)',
    detail: 'Infovision Labs · Digital API, Verizon',
  },
  {
    year: '2023 — 2025',
    role: 'Associate — UX/UI Designer',
    detail: 'PurpleTalk India · Billing Management System, Culture of Fit',
  },
  {
    year: '2022 — 2023',
    role: 'Software Engineer — UX Designer',
    detail: 'Wavelabs Technologies · Cooper, Presence Sleep',
  },
  {
    year: '2021 — 2022',
    role: 'UX Designer',
    detail: 'Orennow · The Sustainability Hub',
  },
];

const Home = () => {
  return (
    <>
      <section className="hero">
        <FloatingDoodles variant="hero" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <Reveal type="fade" delay={0.05}>
              <span className="eyebrow">Available for select engagements</span>
            </Reveal>
            <Reveal type="up" delay={0.15} as="h1" className="hero-title">
              Senior Product Designer building{' '}
              <span className="gradient-word">premium</span> enterprise
              experiences.
            </Reveal>
            <Reveal type="up" delay={0.28}>
              <p className="hero-sub">
                Hi, I'm Sai Keerthi — I design SaaS, dashboard and billing
                platforms end-to-end, from research and UX strategy through
                design systems, prototyping and dev handoff. 5+ years turning
                complex business rules into clear, accessible interfaces.
              </p>
            </Reveal>
            <Reveal type="up" delay={0.4} className="hero-actions">
              <Button href="/resume.pdf" download="Sai_Keerthi_Resume.pdf">
                Download résumé
              </Button>
              <Button fill={false} href="/#/contact">
                Start a project
              </Button>
            </Reveal>
          </div>
          <Reveal type="scale" delay={0.2} className="hero-portrait">
            <div className="portrait-frame">
              <img src={profile} alt="Sai Keerthi" />
              <motion.span
                className="portrait-badge"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                HFI · CUA Certified
              </motion.span>
            </div>
          </Reveal>
        </div>

        <div className="marquee-wrap">
          <div className="marquee-track">
            {marquee.map((item, i) => (
              <span className="pill" key={i}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <Reveal type="up" className="section-head stats-head">
            <span className="eyebrow">By the numbers</span>
            <h2>A track record built on shipping.</h2>
          </Reveal>
          <div className="stats-grid">
            {stats.map((s, i) => (
              <Reveal type="up" delay={i * 0.08} key={s.label} className="stat-card">
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section career-section">
        <FloatingDoodles variant="career" />
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Career journey</span>
            <h2>
              Five years of turning <span className="gradient-word">complexity</span>{' '}
              into clarity.
            </h2>
            <p>
              From my first UX role to leading design on enterprise dashboards —
              a quick look at the path so far.
            </p>
          </div>
          <div className="career-track">
            {career.map((c, i) => (
              <Reveal type="up" delay={i * 0.08} key={c.role} className="career-card">
                <span className="career-year">{c.year}</span>
                <h3>{c.role}</h3>
                <p>{c.detail}</p>
              </Reveal>
            ))}
          </div>
          <Reveal type="fade" delay={0.3} className="career-more">
            <Button fill={false} href="/#/about">
              See full career story
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="section" id="work">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Selected work</span>
            <h2>
              Case studies from enterprise{' '}
              <span className="gradient-word">SaaS</span> and dashboard
              products.
            </h2>
          </div>
          <div className="case-studies">
            {caseStudies.map((c, i) => (
              <Reveal type="up" delay={i * 0.1} key={c.title} className="case">
                <div className="case-media">
                  <img src={c.img} alt={c.title} />
                </div>
                <div className="text">
                  <span className="eyebrow">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <Button fill={false} href={c.link}>
                    View case study
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Kind words</span>
            <h2>What teams say about working together.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <Reveal type="up" delay={i * 0.1} key={t.name} className="testimonial-card">
                <p>&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-person">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-card">
          <FloatingDoodles variant="cta" />
          <Reveal type="up">
            <h2>
              Let's build something{' '}
              <span className="gradient-word">people remember</span>.
            </h2>
            <p>
              Currently based in Hyderabad, open to remote and hybrid product
              design roles and select freelance collaborations.
            </p>
            <Button href="/#/contact">Get in touch</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Home;
