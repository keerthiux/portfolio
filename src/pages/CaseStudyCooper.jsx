import hero from '/src/assets/images/cooper-poster.jpg';
import homeScreen from '/src/assets/images/cooper/home.jpg';
import decisionDetails from '/src/assets/images/cooper/decision-details.jpg';
import delegateScreen from '/src/assets/images/cooper/delegate.jpg';
import deferScreen from '/src/assets/images/cooper/defer.jpg';
import decideScreen from '/src/assets/images/cooper/decide.jpg';
import monitorScreen from '/src/assets/images/cooper/monitor.jpg';
import Button from '../components/Button/Button';
import Reveal from '../components/Reveal/Reveal';
import './CaseStudyCooper.css';

const XD_LINK = 'https://xd.adobe.com/view/18db2296-1e47-4055-865b-6b83f13b3f42-4d88/';

const meta = [
  { label: 'Project Type', value: 'AI-powered decision & team-health platform for data teams' },
  { label: 'Duration', value: 'Sep 2022 — Jul 2023' },
  { label: 'Team', value: 'Wavelabs Technologies · 50K SaaS Ventures' },
  { label: 'My Role', value: 'UX Design, Research & Prototyping' },
];

const problems = [
  'Decisions and priorities lived across disconnected tools — chat, spreadsheets and docs',
  'No shared, ongoing signal for team health, alignment or trust',
  'New hypotheses and priorities were hard to trace back to evidence',
  'No single home screen to see decisions, focus areas and people together',
];

const approach = [
  {
    title: 'Heuristic Reviews',
    desc: 'Audited the existing product against usability heuristics to surface friction before talking to users.',
  },
  {
    title: 'User Interviews',
    desc: 'Ran moderated interviews with data-team leads and members to understand daily decision-making habits.',
  },
  {
    title: 'Unmoderated Testing',
    desc: 'Used remote unmoderated testing to evaluate ease-of-use and comprehension of new design directions.',
  },
  {
    title: 'Hypothesis-Driven Iteration',
    desc: 'Formulated and tested hypotheses through design iterations, improving adoption via evidence-based decisions.',
  },
];

const pillars = [
  {
    icon: '☑️',
    title: 'Decisions & Tasks',
    desc: 'A single, trackable home for the decisions and tasks a data team is actively working through.',
  },
  {
    icon: '💓',
    title: 'Team Health Pulse',
    desc: 'A recurring pulse check — built on the Cooper Index framework — surfacing trust, purpose and growth signals over time.',
  },
  {
    icon: '🎯',
    title: 'Focus Areas',
    desc: 'A clear view of what the team is prioritizing right now, so effort stays aligned to what matters.',
  },
  {
    icon: '👥',
    title: 'Team Directory',
    desc: 'Context on who’s who and what they own, so decisions route to the right person faster.',
  },
];

const process = [
  '20+ wireframes and 10+ interactive prototypes, plus full UX documentation across navigational and task flows',
  'Every screen followed WCAG accessibility guidelines, reinforcing strong user-centered design principles',
  'Collaborated with developers in agile sprints from inception through implementation',
  'Designed, recruited, scheduled and moderated usability studies to validate design decisions',
  'Led 5+ UX knowledge-sharing sessions across teams, championing best practices org-wide',
];

const screens = [
  {
    img: homeScreen,
    title: 'Home',
    desc: 'Signed-in landing screen — the entry point into the day\'s decisions.',
  },
  {
    img: decisionDetails,
    title: 'Decision Details',
    desc: 'A single decision broken down with market growth, EBITDA contribution and pricing context, so the person deciding has everything on one screen.',
  },
  {
    img: delegateScreen,
    title: 'Delegate',
    desc: 'Route a decision to a teammate with more context, ranked by how many similar decisions they\'ve already made.',
  },
  {
    img: deferScreen,
    title: 'Defer',
    desc: 'Push a decision to a later date with a reason attached, backed by current vs. projected EBITDA impact charts.',
  },
  {
    img: decideScreen,
    title: 'Decide',
    desc: 'Scenario modeling for a decision — adjustable levers, projected impact and an overall risk rating before committing.',
  },
  {
    img: monitorScreen,
    title: 'Monitor',
    desc: 'A heartbeat view of employee engagement, environmental impact and corporate diversity — the team-health layer behind every decision.',
  },
];

const outcomes = [
  { value: '20+', label: 'Wireframes shipped' },
  { value: '10+', label: 'Interactive prototypes' },
  { value: '90%', label: 'Successful sprint delivery' },
  { value: 'WCAG', label: 'Accessibility-compliant UI' },
];

const CaseStudyCooper = () => {
  return (
    <div className="cs-cooper">
      <section className="cs-hero">
        <div className="container">
          <Reveal type="up" className="cs-hero-intro">
            <span className="eyebrow">Case Study</span>
            <h1>
              Cooper — an AI-powered{' '}
              <span className="gradient-word">decision-making platform</span> for data
              teams.
            </h1>
            <p>
              An early project from my time at Wavelabs, revisited here with a fresh eye.
              Cooper brought decisions, focus areas and team health into one dashboard for
              data teams juggling too many disconnected tools.
            </p>
          </Reveal>

          <Reveal type="up" delay={0.1} className="cs-meta-grid">
            {meta.map((m) => (
              <div key={m.label} className="cs-meta-card">
                <span>{m.label}</span>
                <p>{m.value}</p>
              </div>
            ))}
          </Reveal>

          <Reveal type="scale" delay={0.15} className="cs-hero-media">
            <img src={hero} alt="Cooper app splash screen showing the product mark and sidebar navigation" />
          </Reveal>
        </div>
      </section>

      <section className="section cs-section">
        <div className="container cs-narrow">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">The Problem</span>
            <h2>Data teams had no single home for decisions.</h2>
            <p>
              Priorities and hypotheses moved fast, but the tools tracking them didn't.
              Decisions lived in chat threads, spreadsheets and docs — with no shared,
              ongoing signal for how the team itself was doing.
            </p>
          </Reveal>
          <Reveal type="up" delay={0.1} className="cs-problem-list">
            {problems.map((p) => (
              <div key={p} className="cs-problem-row">
                <span aria-hidden="true">!</span>
                {p}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section cs-section cs-alt">
        <div className="container">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">Research Approach</span>
            <h2>Evidence before iteration.</h2>
          </Reveal>
          <div className="cs-approach-grid">
            {approach.map((a, i) => (
              <Reveal type="up" delay={i * 0.08} key={a.title} className="cs-approach-card">
                <span className="cs-approach-index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cs-section">
        <div className="container">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">The Product</span>
            <h2>Four pillars, one dashboard.</h2>
            <p>Read directly from the shipped navigation: tasks, team health, focus and people, kept one click apart.</p>
          </Reveal>
          <div className="cs-pillar-grid">
            {pillars.map((p, i) => (
              <Reveal type="up" delay={i * 0.08} key={p.title} className="cs-pillar-card">
                <span className="cs-pillar-icon" aria-hidden="true">
                  {p.icon}
                </span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cs-section cs-alt">
        <div className="container">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">Product Walkthrough</span>
            <h2>Six screens from the live prototype.</h2>
            <p>Pulled directly from the shipped Adobe XD prototype — the actual flow a PMO lead moves through each day.</p>
          </Reveal>
          <div className="cs-gallery-grid">
            {screens.map((s, i) => (
              <Reveal type="up" delay={i * 0.06} key={s.title} className="cs-gallery-card">
                <img src={s.img} alt={`Cooper ${s.title} screen`} />
                <div className="cs-gallery-caption">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cs-section">
        <div className="container cs-narrow">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">Process & Delivery</span>
            <h2>From wireframe to production, in agile sprints.</h2>
          </Reveal>
          <div className="cs-process-list">
            {process.map((p, i) => (
              <Reveal type="up" delay={i * 0.06} key={p} className="cs-process-row">
                <span className="cs-process-dot" aria-hidden="true" />
                {p}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cs-section cs-outcomes">
        <div className="container">
          <Reveal type="up" className="section-head cs-outcomes-head">
            <span className="eyebrow">Where this landed</span>
            <h2>What shipped, in numbers.</h2>
          </Reveal>
          <div className="cs-outcome-grid">
            {outcomes.map((o, i) => (
              <Reveal type="up" delay={i * 0.08} key={o.label} className="cs-outcome-card">
                <h3>{o.value}</h3>
                <p>{o.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal type="fade" delay={0.25} className="cs-note">
            This was an earlier project in my career, revisited here for context — the
            screens above are pulled directly from the original Adobe XD prototype.
          </Reveal>
        </div>
      </section>

      <section className="section cs-cta">
        <div className="container cs-cta-card">
          <Reveal type="up">
            <h2>
              Explore the full{' '}
              <span className="gradient-word">interactive prototype</span>.
            </h2>
            <div className="cs-cta-actions">
              <Button href={XD_LINK} target="_blank">
                Open in Adobe XD
              </Button>
              <Button fill={false} href="#/contact">
                Get in touch
              </Button>
              <Button fill={false} href="#/">
                Back to all work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyCooper;
