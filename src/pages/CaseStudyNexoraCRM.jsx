import heroSite from '/src/assets/images/nexora/hero-site.jpg';
import scheduleCard from '/src/assets/images/nexora/schedule-card.jpg';
import dashboardScreen from '/src/assets/images/nexora/screens/01-dashboard.jpg';
import appointmentsScreen from '/src/assets/images/nexora/screens/02-appointments.jpg';
import calendarScreen from '/src/assets/images/nexora/screens/03-calendar.jpg';
import patientsScreen from '/src/assets/images/nexora/screens/04-patients.jpg';
import paymentsScreen from '/src/assets/images/nexora/screens/05-payments.jpg';
import doctorsScreen from '/src/assets/images/nexora/screens/06-doctors.jpg';
import servicesScreen from '/src/assets/images/nexora/screens/07-services.jpg';
import settingsScreen from '/src/assets/images/nexora/screens/08-settings.jpg';
import Button from '../components/Button/Button';
import Reveal from '../components/Reveal/Reveal';
import './CaseStudyNexoraCRM.css';

const meta = [
  { label: 'Project Type', value: 'SaaS CRM for appointment-based businesses' },
  { label: 'Team', value: 'Co-founder — led product design with a small engineering team' },
  { label: 'Duration', value: 'Concept to shipped product' },
  { label: 'My Role', value: 'Co-Founder & Head of Product Design' },
];

const problems = [
  'Patient records scattered across notebooks, WhatsApp and spreadsheets',
  'Missed appointments and no-shows because of manual reminders',
  'No clear picture of daily revenue or outstanding payments',
  'Staff double-booking the same slot by accident',
];

const solutions = [
  'Every patient, visit and note in one searchable place',
  'Automated appointment reminders that cut no-shows',
  'A live dashboard of bookings, billing and outstanding dues',
  'One shared calendar your whole team can trust',
];

const pillars = [
  {
    title: 'Patient Records',
    icon: '🗂️',
    items: ['Full visit history', 'Notes, tags & custom fields', 'Fast search across your base'],
  },
  {
    title: 'Appointments',
    icon: '📅',
    items: ['Drag-and-drop calendar', 'Automated WhatsApp reminders', 'Staff-wise availability'],
  },
  {
    title: 'Billing & Payments',
    icon: '💳',
    items: ['Instant invoices & receipts', 'Track dues at a glance'],
  },
  {
    title: 'Multi-Business Ready',
    icon: '🏢',
    items: ['Works for clinics and hospitals', 'Role-based staff access', 'One account, every location'],
  },
];

const decisions = [
  {
    title: 'Clinics and hospitals, not salons and gyms',
    desc: 'NexoraCRM started as a generic appointment CRM for salons, gyms and clinics. I narrowed it to healthcare so patient records, doctors and visit history could be purpose-built instead of generic "customer" fields trying to serve three different industries at once.',
  },
  {
    title: 'WhatsApp notifications, not SMS or email',
    desc: 'Booking, rescheduling and cancellation each trigger a WhatsApp message, with no SMS or generic-email equivalent. That’s where a patient actually sees it, so that’s the one channel we chose instead of spreading thin across three.',
  },
  {
    title: '"Book Appointment" as the one primary action',
    desc: 'The dashboard, patients list, appointments list and calendar all carry the same button in the same top-right position. One action, same place, every screen — so there’s never a question of where to start a booking.',
  },
];

const onboarding = [
  { step: '01', title: 'Create your account', desc: 'Sign up and tell us a little about your business type.' },
  { step: '02', title: 'Pick a plan', desc: 'Choose the plan that matches your team size and needs.' },
  { step: '03', title: 'Import your patients', desc: 'Bring in your existing patient list in a few clicks.' },
  { step: '04', title: 'Start booking', desc: 'Your calendar, billing and records are ready to use.' },
];

const screens = [
  {
    img: dashboardScreen,
    title: 'Dashboard',
    desc: 'Patient count, upcoming appointments, revenue and growth trends, plus top patients and a status breakdown at a glance.',
  },
  {
    img: appointmentsScreen,
    title: 'Appointments',
    desc: 'Every booking in one searchable list — booked, completed and rescheduled statuses, with doctor and quick actions per row.',
  },
  {
    img: calendarScreen,
    title: 'Calendar',
    desc: 'A week-view calendar color-coded by doctor, so front-desk staff can spot gaps and conflicts fast.',
  },
  {
    img: patientsScreen,
    title: 'Patients',
    desc: 'Searchable patient directory with mobile number, gender and age at a glance.',
  },
  {
    img: paymentsScreen,
    title: 'Payments',
    desc: 'A ledger of completed-visit payments — amount, mode and status — separate from the appointment and patient views.',
  },
  {
    img: doctorsScreen,
    title: 'Doctors',
    desc: 'Doctor roster with specialization and type, so bookings and the calendar can be assigned per provider.',
  },
  {
    img: servicesScreen,
    title: 'Services',
    desc: 'The service catalog with approximate pricing, used when booking an appointment or completing a visit.',
  },
  {
    img: settingsScreen,
    title: 'Settings',
    desc: 'Role and user management, so clinics can control who can see and edit what.',
  },
];

const outcomes = [
  { value: '4 steps', label: 'From signup to fully booked calendar' },
  { value: '3 tiers', label: 'Transparent, self-serve pricing' },
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
              <span className="gradient-word">clinics and hospitals</span>.
            </h1>
            <p>
              NexoraCRM is a live product I co-founded and led product design for — taking it
              from a market problem to a shipped SaaS dashboard for clinics and hospitals.
            </p>
            <a className="cs-live-link" href="https://nexoracrm.co" target="_blank" rel="noreferrer">
              Visit live product →
            </a>
          </Reveal>

          <Reveal type="up" delay={0.05} className="cs-tldr">
            <div>
              <span>Problem</span>
              <p>Clinics and hospitals ran on notebooks, WhatsApp threads and spreadsheets, with no shared record of patients, bookings or dues.</p>
            </div>
            <div>
              <span>My Role</span>
              <p>Co-Founder &amp; Head of Product Design</p>
            </div>
            <div>
              <span>Result</span>
              <p>A live, self-serve SaaS CRM — patients, appointments and billing in one calm dashboard.</p>
            </div>
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
            <h2>Clinics run on guesswork.</h2>
            <p>
              Clinics and hospitals are booked solid — and still running their business
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
            <h2>Designed and shipped end-to-end, as co-founder.</h2>
            <p>
              Rather than a traditional research-and-handoff process, I led product design
              directly with a small engineering team — scoping the problem, designing the
              product, and shipping the live app in tight iteration loops. Every screen, flow
              and line of copy was iterated on directly, letting design decisions turn into
              shipped product quickly.
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
        <div className="container">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">Key Design Decisions</span>
            <h2>Three calls that shaped the product.</h2>
          </Reveal>
          <div className="cs-approach-grid">
            {decisions.map((d, i) => (
              <Reveal type="up" delay={i * 0.08} key={d.title} className="cs-approach-card">
                <span className="cs-approach-index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </Reveal>
            ))}
          </div>
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
        <div className="container">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">Product Walkthrough</span>
            <h2>Eight screens from the live product.</h2>
            <p>Captured directly from the shipped app — the actual flow a front-desk staffer moves through each day.</p>
          </Reveal>
          <div className="cs-gallery-grid">
            {screens.map((s, i) => (
              <Reveal type="up" delay={i * 0.06} key={s.title} className="cs-gallery-card">
                <img src={s.img} alt={`NexoraCRM ${s.title} screen`} />
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
          </Reveal>
          <Reveal type="fade" delay={0.1} className="cs-callout">
            Designed self-serve pricing across three tiers — Basic, Pro and Enterprise —
            so a business could pick a plan by team size and start booking without a sales call.
          </Reveal>
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

export default CaseStudyNexoraCRM;
