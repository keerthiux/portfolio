import banner from '/src/assets/images/profilepic.jpg';
import Button from '../components/Button/Button';
import Reveal from '../components/Reveal/Reveal';
import './About.css';

const experience = [
  {
    role: 'Senior Software Engineer (Product Design)',
    company: 'Infovision Labs · Digital API, Verizon',
    period: 'May 2025 — Present',
    points: [
      'Shape design and product decisions for enterprise dashboard applications, driving visual style, layout and interaction flows end-to-end.',
      'Produce conceptual diagrams, wireframes and interactive prototypes to align stakeholders ahead of build.',
      'Own design discussions and final UI handoff, embedding usability best practices at every stage of delivery.',
    ],
  },
  {
    role: 'Associate — UX/UI Designer',
    company: 'PurpleTalk India · Godrej Agrovet, Billing Management System, Culture of Fit',
    period: 'Nov 2023 — Jan 2025',
    points: [
      'Ran 30+ user interviews and moderated usability tests, actioning feedback to continuously refine deliverables.',
      'Built and maintained a design system with 100+ reusable components, including detailed specs and patterns.',
      'Delivered projects at a 95% on-time success rate, managing cross-team communication required to ship.',
    ],
  },
  {
    role: 'Software Engineer — UX Designer',
    company: 'Wavelabs Technologies (50K SAAS Ventures) · Cooper, Presence Sleep',
    period: 'Sep 2022 — Jul 2023',
    points: [
      'Designed 20+ wireframes and 10+ prototypes, plus full UX documentation across navigational and task flows.',
      'Formulated and tested hypotheses through design iterations, improving adoption via evidence-based decisions.',
      'Led 5+ UX knowledge-sharing sessions across teams, championing best practices org-wide.',
    ],
  },
  {
    role: 'UX Designer',
    company: 'Orennow · The Sustainability Hub',
    period: 'Dec 2021 — Aug 2022',
    points: [
      'Defined UX strategy and designed 5+ end-to-end task flows, reducing onboarding time by 20%.',
      'Created a reusable style guide with 50+ components and maintained detailed UX specifications.',
      'Owned design decisions independently across geographical and cross-functional boundaries.',
    ],
  },
];

const skillGroups = [
  {
    title: 'Design & Systems',
    items: ['Design Systems', 'Material UI', 'UI Design', 'Design Principles', 'UX Documentation'],
  },
  {
    title: 'Tools',
    items: ['Figma', 'Adobe XD', 'Illustrator', 'Sketch', 'InVision', 'Axure RP', 'Zeplin', 'Framer'],
  },
  {
    title: 'Research',
    items: ['User Interviews', 'Moderated & Unmoderated Testing', 'Heuristic Reviews', 'UCD'],
  },
  {
    title: 'Delivery',
    items: ['Wireframing', 'Prototyping', 'Information Architecture', 'Responsive Design', 'WCAG Accessibility'],
  },
];

const education = [
  { degree: 'Master of Business Administration', school: 'Lovely Professional University, Jalandhar', period: '2017 — 2019' },
  { degree: 'B.Com (Computer Applications)', school: 'St. Joseph Degree College, Kurnool', period: '2013 — 2016' },
  { degree: 'Certified Usability Analyst (CUA)', school: 'Human Factors International (HFI)', period: 'Certification' },
];

const About = () => {
  return (
    <section className="about">
      <div className="container abt-banner">
        <Reveal type="up" className="abt-banner-content">
          <span className="eyebrow">About</span>
          <h1>
            Nice to meet you — I'm{' '}
            <span className="gradient-word">Keerthi</span>.
          </h1>
          <p>
            I'm a Senior Product Designer based in Hyderabad with 5+ years
            designing enterprise SaaS, dashboard and billing platforms
            end-to-end — from research and UX strategy through design
            systems, prototyping and dev handoff. I'm{' '}
            <b>HFI-trained and CUA Certified</b>.
          </p>
          <p>
            My process is grounded in research: moderated and unmoderated
            testing, heuristic reviews, and translating complex business
            rules into clear, accessible (WCAG) UX systems — while building
            and scaling reusable component libraries that teams actually use.
          </p>
          <p>
            I'm comfortable operating in Agile/Scrum teams, presenting design
            rationale to stakeholders, and owning delivery independently
            across geographies.
          </p>
          <Button href={`${import.meta.env.BASE_URL}resume.pdf`} download="Sai_Keerthi_Resume.pdf">
            Download résumé
          </Button>
        </Reveal>
        <Reveal type="scale" delay={0.15} className="abt-banner-media">
          <img src={banner} alt="Sai Keerthi" />
        </Reveal>
      </div>

      <div className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Experience</span>
            <h2>Five years, four teams, one obsession with usable design.</h2>
          </div>
          <div className="timeline">
            {experience.map((job, i) => (
              <Reveal type="up" delay={i * 0.08} key={job.role} className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <span className="timeline-period">{job.period}</span>
                  <h3>{job.role}</h3>
                  <p className="timeline-company">{job.company}</p>
                  <ul>
                    {job.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="section skills-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Core skills</span>
            <h2>The toolkit behind every project.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, i) => (
              <Reveal type="up" delay={i * 0.08} key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="section education-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Education</span>
            <h2>Foundations.</h2>
          </div>
          <div className="education-grid">
            {education.map((ed, i) => (
              <Reveal type="up" delay={i * 0.08} key={ed.degree} className="education-card">
                <h3>{ed.degree}</h3>
                <p>{ed.school}</p>
                <span>{ed.period}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
