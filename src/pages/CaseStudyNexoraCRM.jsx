import heroSite from '/src/assets/images/nexora/hero-site.jpg';
import scheduleCard from '/src/assets/images/nexora/schedule-card.jpg';
import Button from '../components/Button/Button';
import Reveal from '../components/Reveal/Reveal';
import './CaseStudyNexoraCRM.css';

const meta = [
  { label: 'Project Type', value: 'SaaS CRM for appointment-based businesses' },
  { label: 'Team', value: 'Solo — designed and built end-to-end' },
  { label: 'Duration', value: 'Concept to shipped product' },
  { label: 'My Role', value: 'Product design, UX, and build' },
];

const problems = [
  'Customer records scattered across notebooks, WhatsApp and spreadsheets',
  'Missed appointments and no-shows because of manual reminders',
  'No clear picture of daily revenue or outstanding payments',
  'Staff double-booking the same slot by accident',
];

const solutions = [
  'Every customer, visit and note in one searchable place',
  'Automated appointment reminders that cut no-shows',
  'A live dashboard of bookings, billing and outstanding dues',
  'One shared calendar your whole team can trust',
];

const pillars = [
  {
    title: 'Customer Records',
    icon: '🗂️',
    items: ['Full visit & purchase history', 'Notes, tags & custom fields', 'Fast search across your base'],
  },
  {
    title: 'Appointments',
    icon: '📅',
    items: ['Drag-and-drop calendar', 'Automated SMS/WhatsApp reminders', 'Staff-wise availability'],
  },
  {
    title: 'Billing & Payments',
    icon: '💳',
    items: ['Instant invoices & receipts', 'Track dues at a glance', 'Package & membership billing'],
  },
  {
    title: 'Multi-Business Ready',
    icon: '🏢',
    items: ['Works for clinics, gyms, salons', 'Role-based staff access', 'One account, every location'],
  },
];

const onboarding = [
  { step: '01', title: 'Create your account', desc: 'Sign up and tell us a little about your business type.' },
  { step: '02', title: 'Pick a plan', desc: 'Choose the plan that matches your team size and needs.' },
  { step: '03', title: 'Import your customers', desc: 'Bring in your existing customer list in a few clicks.' },
  { step: '04', title: 'Start booking', desc: 'Your calendar, billing and records are ready to use.' },
];

const pricing = [
  { tier: 'Basic', price: '₹999', period: '/month', seats: 'Up to 3 team members' },
  { tier: 'Pro', price: '₹2,999', period: '/month', seats: 'Up to 10 team members', highlight: true },
  { tier: 'Enterprise', price: '₹9,999', period: '/month', seats: 'Up to 50 team members' },
];

const outcomes = [
  { value: '4 steps', label: 'From signup to fully booked calendar' },
  { value: '3 tiers', label: 'Transparent, self-serve pricing' },
  { value: '1 dashboard', label: 'Replacing notebooks, WhatsApp & spreadsheets' },
  { value: '0-code', label: 'Setup — no IT team required' },
];

const CaseStudyNexoraCRM = () => {
  return (
    <div className="cs-nexoracrm">
      <section className="cs-hero">
        <div className="container">
          <Reveal type="up" className="cs-hero-intro">
            <span className="eyebrow">Case Study</span>
            <h1>
              Nexora — a CRM built for{' '}
              <span className="gradient-word">appointment-based businesses</span>.
            </h1>
            <p>
              NexoraCRM is a live product I designed and built end-to-end — taking it from
              a market problem to a shipped SaaS dashboard for clinics, gyms and salons,
              with a little help from AI tooling along the way.
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
            <img src={heroSite} alt="NexoraCRM marketing site hero" />
          </Reveal>
        </div>
      </section>

      <section className="section cs-section">
        <div className="container cs-narrow">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">The Problem</span>
            <h2>Appointment-based businesses run on guesswork.</h2>
            <p>
              Clinics, gyms and salons are booked solid — and still running their business
              on notebooks, WhatsApp threads and spreadsheets. Every one of those tools was
              built for something else, so the cracks show up as missed appointments and
              lost revenue.
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
        <div className="container cs-narrow">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">The Approach</span>
            <h2>Designed and shipped end-to-end, solo.</h2>
            <p>
              Rather than a traditional research-and-handoff process, I worked solo —
              scoping the problem, designing the product, and building the live app in
              tight iteration loops, with some AI-assisted tooling along the way. Every
              screen, flow and line of copy was iterated on directly, letting design
              decisions turn into shipped product quickly.
            </p>
          </Reveal>
          <Reveal type="up" delay={0.1} className="cs-media-card cs-media-narrow">
            <img src={scheduleCard} alt="NexoraCRM today's schedule dashboard card" />
          </Reveal>
          <Reveal type="fade" delay={0.15} className="cs-callout">
            <strong>Design principle —</strong> Keep the dashboard calm. Status pills,
            generous whitespace and one clear next action per card, so a busy front-desk
            staffer can scan it in seconds.
          </Reveal>
        </div>
      </section>

      <section className="section cs-section">
        <div className="container cs-narrow">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">Before → After</span>
            <h2>The old way vs. the Nexora way.</h2>
          </Reveal>
          <div className="cs-compare-grid">
            <Reveal type="up" delay={0.05} className="cs-compare-card cs-compare-bad">
              <span className="cs-compare-tag">Without NexoraCRM</span>
              <h3>Running on notebooks & guesswork</h3>
              <ul>
                {problems.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal type="up" delay={0.1} className="cs-compare-card cs-compare-good">
              <span className="cs-compare-tag">With NexoraCRM</span>
              <h3>Everything in one calm dashboard</h3>
              <ul>
                {solutions.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section cs-section cs-alt">
        <div className="container">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">The Product</span>
            <h2>Everything a front desk needs to run day-to-day.</h2>
          </Reveal>
          <div className="cs-pillar-grid">
            {pillars.map((p, i) => (
              <Reveal type="up" delay={i * 0.08} key={p.title} className="cs-pillar-card">
                <span className="cs-pillar-icon" aria-hidden="true">
                  {p.icon}
                </span>
                <h3>{p.title}</h3>
                <ul>
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cs-section">
        <div className="container cs-narrow">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">Onboarding</span>
            <h2>Up and running in minutes, not weeks.</h2>
            <p>No IT team required — most businesses are fully set up in a single afternoon.</p>
          </Reveal>
          <div className="cs-onboard-grid">
            {onboarding.map((o, i) => (
              <Reveal type="up" delay={i * 0.08} key={o.title} className="cs-onboard-card">
                <span className="cs-onboard-step">{o.step}</span>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cs-section cs-alt">
        <div className="container cs-narrow">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">Business Model</span>
            <h2>Simple, transparent pricing.</h2>
            <p>Designed self-serve pricing so a business could pick a plan and start booking without a sales call.</p>
          </Reveal>
          <div className="cs-pricing-grid">
            {pricing.map((p, i) => (
              <Reveal
                type="up"
                delay={i * 0.08}
                key={p.tier}
                className={`cs-price-card ${p.highlight ? 'cs-price-highlight' : ''}`}
              >
                {p.highlight && <span className="cs-price-badge">Most Popular</span>}
                <h3>{p.tier}</h3>
                <p className="cs-price-value">
                  {p.price}
                  <span>{p.period}</span>
                </p>
                <p className="cs-price-seats">{p.seats}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cs-section cs-outcomes">
        <div className="container">
          <Reveal type="up" className="section-head cs-outcomes-head">
            <span className="eyebrow">Where it stands today</span>
            <h2>A live, self-serve product — not a mockup.</h2>
          </Reveal>
          <div className="cs-outcome-grid">
            {outcomes.map((o, i) => (
              <Reveal type="up" delay={i * 0.08} key={o.label} className="cs-outcome-card">
                <h3>{o.value}</h3>
                <p>{o.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cs-cta">
        <div className="container cs-cta-card">
          <Reveal type="up">
            <h2>
              Curious how it was designed{' '}
              <span className="gradient-word">and built</span>?
            </h2>
            <div className="cs-cta-actions">
              <Button href="https://nexoracrm.co/" target="_blank">
                Visit NexoraCRM
              </Button>
              <Button fill={false} href="/#/contact">
                Get in touch
              </Button>
              <Button fill={false} href="/#/">
                Back to all work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyNexoraCRM;
