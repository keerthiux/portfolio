import hero from '/src/assets/images/nexus/hero.jpg';
import legacy from '/src/assets/images/nexus/legacy.jpg';
import issues from '/src/assets/images/nexus/issues.jpg';
import Button from '../components/Button/Button';
import Reveal from '../components/Reveal/Reveal';
import './CaseStudyNexus.css';

const meta = [
  { label: 'Project Type', value: 'Billing Management System (BMS) integrated with HRMS capabilities' },
  { label: 'Duration', value: '6 months' },
  { label: 'Team', value: '3 UX, PM, BAs, PMO, & Dev team' },
  { label: 'My Role', value: 'UX Workshops & Design' },
];

const approach = [
  {
    title: 'Stakeholder Interviews',
    desc: 'Collaborated with PMOs, PMs, BAs, and product teams to align on goals and pain points.',
  },
  {
    title: 'Workflow Audit',
    desc: 'Observed existing workflows to understand real-world processes and inefficiencies.',
  },
  {
    title: 'Design Iterations',
    desc: 'Explored and refined solutions through continuous design iterations.',
  },
  {
    title: 'User Feedback & Progressive Enhancement',
    desc: 'Validated with users and improved the product incrementally.',
  },
];

const currentFlow = [
  {
    step: '01',
    title: 'Employee Onboarding',
    desc: (
      <>
        After joining, the employee profile is created in <b>Darwinbox</b> and mapped to a
        team based on skillset and domain.
      </>
    ),
    issues: [],
  },
  {
    step: '02',
    title: 'Adding to BMS',
    desc: (
      <>
        If unallocated to a project, the PMO manually adds the employee data from HRMS into
        a <b>free pool (bench list)</b> in the BMS.
      </>
    ),
    issues: ['Duplicate data manual entry across systems'],
  },
  {
    step: '03',
    title: 'Project Requirement',
    desc: 'Project Managers request resources by reaching out to PMOs via email for specific project needs.',
    issues: ['No structured or trackable request system', 'Lack of visibility into request status'],
  },
  {
    step: '04',
    title: 'Project Allocation',
    desc: 'PMO reviews requirements, checks employee availability and skill match manually, and assigns the resource to the project.',
    issues: ['No system support for skill matching or availability checks', 'Time-consuming manual validation process'],
  },
];

const foundIssues = [
  'Poor information hierarchy across a 20+ column data table',
  'Lack of visual grouping made scanning rows difficult',
  'Column headers were too small and hard to read',
  'Poor accessibility color contrast in the table header',
  'No column sorting, freezing, or customization',
  'Filter bar provided no feedback on active filters',
];

const insights = [
  {
    value: '2-3 hrs/week',
    label: 'Time Wastage',
    desc: 'PMOs spent navigating between systems for data consolidation.',
  },
  {
    value: '30%',
    label: 'Error Rate',
    desc: 'Repetitive manual data entry errors in billing and resource allocation.',
  },
  {
    value: '1-2 days',
    label: 'Onboarding Time',
    desc: 'Average time to complete the employee onboarding process.',
  },
];

const personaPains = [
  'Lack of real-time visibility into resource availability across projects',
  'High dependency on emails for coordination across BMS',
  'Errors in allocation and billing due to outdated data',
];

const personaGoals = [
  'Maintain billing accuracy with minimal manual effort',
  'Gain real-time visibility into employee availability and utilization',
  'Reduce dependency on multiple systems and manual coordination',
];

const iaGroups = [
  { title: 'Project Management', items: ['All Project Summary', 'All Project List', 'My Project List', 'Monthly Projects Billing', 'Manage Requests', 'Time Sheets'] },
  { title: 'Master Data Management', items: ['Role Management', 'Employee Management', 'Role Mapping'] },
  { title: 'PMO / Finance Reports', items: ['Monthly Invoice Summary', 'Monthly QA Loading by Project', 'Design Team Report', 'Monthly Billing Report'] },
  { title: 'Org & Account', items: ['Org Level Configuration', 'Account Management', 'Agreements', 'Activity Log'] },
];

const userFlows = [
  {
    title: 'Resource allocation to a project',
    steps: ['Home', 'Project Management', 'Manage Requests', 'Choose Request', 'Check availability & skill match', 'Confirm allocation'],
  },
  {
    title: 'Employee onboarding, offboarding & progressions',
    steps: ['Home', 'Employee Management', 'Add / Select Employee', 'Edit Details', 'Withdraw or Offboard', 'Confirmation'],
  },
];

const beforeAfter = [
  {
    before: 'PMs had no visibility into resource request status once submitted.',
    after: 'A linked request-to-allocation flow gives PMs clear visibility into requests alongside a bookable resource history.',
  },
  {
    before: 'No system support for matching skills or checking availability.',
    after: 'An availability tab surfaced within resource details lets PMOs see skills and availability at a glance — cutting manual cross-checking.',
  },
  {
    before: 'The data grid had 20+ fixed columns, creating severe cognitive load.',
    after: 'The redesigned grid supports column freezing, customizable visibility, sorting, and easy reordering.',
  },
];

const challenges = [
  {
    tag: 'Challenge 01',
    tone: 'rose',
    title: 'Balancing complexity with simplicity',
    desc: 'Finance users needed a lot of data visible. My first dashboards were too minimal — I had to iterate to find the right density: enough data without overwhelm.',
  },
  {
    tag: 'Challenge 02',
    tone: 'amber',
    title: 'Connecting two different modules',
    desc: 'Billing and HR have different mental models. Making navigation feel unified without forcing an awkward merger took several rounds of IA revision and testing.',
  },
  {
    tag: 'Learning',
    tone: 'blue',
    title: 'Validate the IA early',
    desc: 'I should have tested the navigation structure with real users before high-fidelity work — sidebar labeling needed two rounds of revision that could have been caught earlier.',
  },
];

const outcomes = [
  { value: '↓ 60%', label: 'Steps to create an invoice', tone: 'blue' },
  { value: '↑ 3×', label: 'Faster HR record lookup', tone: 'green' },
  { value: '1 system', label: 'Unified design language', tone: 'amber' },
  { value: '↑ SUS', label: 'Improved usability score', tone: 'grey' },
];

const CaseStudyNexus = () => {
  return (
    <div className="cs-nexus">
      <section className="cs-hero">
        <div className="container">
          <Reveal type="up" className="cs-hero-intro">
            <span className="eyebrow">Case Study</span>
            <h1>
              Nexus — a billing &amp; HR system{' '}
              <span className="gradient-word">rebuilt for clarity</span>.
            </h1>
            <p>
              How I redesigned Nexus, an internal HRMS and billing management platform used
              by operations and HR teams. The original system got the job done — barely.
              Users were frustrated, errors were common, and critical workflows took far too
              long.
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
            <img src={hero} alt="Nexus dashboard shown on a laptop mockup" />
          </Reveal>
        </div>
      </section>

      <section className="section cs-section">
        <div className="container cs-narrow">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">The Background</span>
            <h2>A legacy system actively working against its users.</h2>
            <p>
              The organization relied on a legacy Billing Management System that became
              inefficient as the company scaled. Billing depended on data spread across
              multiple systems — especially the HRMS — leading to fragmented workflows and
              operational bottlenecks.
            </p>
          </Reveal>

          <Reveal type="up" delay={0.1} className="cs-media-card">
            <img src={legacy} alt="Legacy billing management system screenshot" />
          </Reveal>

          <Reveal type="fade" delay={0.15} className="cs-callout">
            <strong>Key insight —</strong> Users weren't failing due to skill gaps. The
            system was actively working against them.
          </Reveal>
        </div>
      </section>

      <section className="section cs-section cs-alt">
        <div className="container">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">Our Approach</span>
            <h2>Research first, design second.</h2>
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
        <div className="container cs-narrow">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">Current State</span>
            <h2>Current flow for resource allocation to a project.</h2>
          </Reveal>
          <div className="cs-flow-list">
            {currentFlow.map((f, i) => (
              <Reveal type="up" delay={i * 0.08} key={f.title} className="cs-flow-item">
                <span className="cs-flow-step">{f.step}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  {f.issues.length > 0 && (
                    <div className="cs-issue-tags">
                      {f.issues.map((iss) => (
                        <span key={iss} className="cs-issue-tag">
                          {iss}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cs-section cs-alt">
        <div className="container cs-narrow">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">Research Findings</span>
            <h2>Issues uncovered in the current application.</h2>
          </Reveal>
          <Reveal type="up" delay={0.1} className="cs-media-card">
            <img src={issues} alt="Annotated screenshot of usability issues in the legacy data table" />
          </Reveal>
          <Reveal type="up" delay={0.15} className="cs-issue-grid">
            {foundIssues.map((iss) => (
              <div key={iss} className="cs-issue-row">
                <span aria-hidden="true">!</span>
                {iss}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section cs-section cs-insights">
        <div className="container">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">Insights</span>
            <h2>What the research surfaced, in numbers.</h2>
          </Reveal>
          <div className="cs-insight-grid">
            {insights.map((s, i) => (
              <Reveal type="up" delay={i * 0.08} key={s.label} className="cs-insight-card">
                <h3>{s.value}</h3>
                <p className="cs-insight-label">{s.label}</p>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cs-section">
        <div className="container cs-narrow">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">User Persona</span>
            <h2>Designing around the person who feels this pain most.</h2>
          </Reveal>
          <Reveal type="up" delay={0.1} className="cs-persona-card">
            <div className="cs-persona-id">
              <span className="cs-persona-avatar" aria-hidden="true">
                👤
              </span>
              <h3>Srini CH</h3>
              <p>PMO Lead</p>
              <p>12+ yrs experience · Age 45</p>
            </div>
            <div className="cs-persona-col">
              <h4>Pain points</h4>
              <ul>
                {personaPains.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="cs-persona-col">
              <h4>Goals</h4>
              <ul>
                {personaGoals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal type="fade" delay={0.2} className="cs-role-chips">
            <span>👥 Project Managers</span>
            <span>👥 Team Leads</span>
            <span>👥 BAs / Individuals</span>
          </Reveal>

          <Reveal type="up" delay={0.25} className="cs-problem-statement">
            <span className="eyebrow">Problem Statement</span>
            <p>
              How might we simplify resource allocation by reducing manual steps, improving
              data accuracy, and enabling clear visibility for PMOs and Project Managers to
              make faster, informed decisions?
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section cs-section cs-alt">
        <div className="container cs-narrow">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">Information Architecture</span>
            <h2>Grouping billing and HR into one coherent structure.</h2>
          </Reveal>
          <div className="cs-ia-grid">
            {iaGroups.map((g, i) => (
              <Reveal type="up" delay={i * 0.08} key={g.title} className="cs-ia-card">
                <h3>{g.title}</h3>
                <ul>
                  {g.items.map((it) => (
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
            <span className="eyebrow">User Flows</span>
            <h2>Two flows that shaped the redesign.</h2>
          </Reveal>
          {userFlows.map((flow, i) => (
            <Reveal type="up" delay={i * 0.1} key={flow.title} className="cs-userflow">
              <h3>{flow.title}</h3>
              <div className="cs-userflow-steps">
                {flow.steps.map((s, idx) => (
                  <span key={s} className="cs-userflow-step">
                    {s}
                    {idx < flow.steps.length - 1 && <span className="cs-userflow-arrow">→</span>}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section cs-section cs-alt">
        <div className="container cs-narrow">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">Visual Design</span>
            <h2>A design system borrowed from the in-house library.</h2>
            <p>
              Leveraged components from the organization's in-house design system, so the
              new Nexus experience felt consistent with everything else the team already
              knew.
            </p>
          </Reveal>
          <Reveal type="up" delay={0.1} className="cs-design-system">
            <div>
              <h4>Primary</h4>
              <div className="cs-swatches">
                <span style={{ background: '#0b2a7a' }} />
                <span style={{ background: '#2f7dfa' }} />
              </div>
            </div>
            <div>
              <h4>Greyscale</h4>
              <div className="cs-swatches">
                <span style={{ background: '#0a0a0a' }} />
                <span style={{ background: '#2b2b2b' }} />
                <span style={{ background: '#6b6b6b' }} />
                <span style={{ background: '#d8d8d8' }} />
                <span style={{ background: '#eef1f6' }} />
              </div>
            </div>
            <div>
              <h4>Semantic</h4>
              <div className="cs-swatches">
                <span style={{ background: '#1e9e5a' }} />
                <span style={{ background: '#e6564d' }} />
                <span style={{ background: '#f2a512' }} />
              </div>
            </div>
            <div>
              <h4>Typography</h4>
              <p className="cs-type-sample">Aa</p>
              <p className="cs-type-name">Roboto — Bold / Medium / Regular</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section cs-section">
        <div className="container cs-narrow">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">Before → After</span>
            <h2>What changed for the people using this every day.</h2>
          </Reveal>
          <div className="cs-ba-list">
            {beforeAfter.map((b, i) => (
              <Reveal type="up" delay={i * 0.08} key={b.after} className="cs-ba-row">
                <div className="cs-ba-before">
                  <span>Before</span>
                  <p>{b.before}</p>
                </div>
                <div className="cs-ba-after">
                  <span>After</span>
                  <p>{b.after}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cs-section cs-alt">
        <div className="container cs-narrow">
          <Reveal type="up" className="section-head">
            <span className="eyebrow">Reflection</span>
            <h2>Where I got stuck — and what I learned.</h2>
            <p>Being honest about friction shows critical thinking about my own process.</p>
          </Reveal>
          <div className="cs-challenge-list">
            {challenges.map((c, i) => (
              <Reveal type="up" delay={i * 0.08} key={c.title} className={`cs-challenge-card cs-${c.tone}`}>
                <span className="cs-challenge-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cs-section cs-outcomes">
        <div className="container">
          <Reveal type="up" className="section-head cs-outcomes-head">
            <span className="eyebrow">What the redesign achieved</span>
            <h2>Measurable improvements across the workflows users struggled with most.</h2>
          </Reveal>
          <div className="cs-outcome-grid">
            {outcomes.map((o, i) => (
              <Reveal type="up" delay={i * 0.08} key={o.label} className={`cs-outcome-card cs-${o.tone}`}>
                <h3>{o.value}</h3>
                <p>{o.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal type="fade" delay={0.3} className="cs-quote">
            "The biggest win wasn't any single screen — it was that users stopped dreading
            the system. When a tool gets out of the way and just works, people trust it."
          </Reveal>
        </div>
      </section>

      <section className="section cs-cta">
        <div className="container cs-cta-card">
          <Reveal type="up">
            <h2>
              Happy to walk through any specific screen{' '}
              <span className="gradient-word">or design decision</span> in depth.
            </h2>
            <div className="cs-cta-actions">
              <Button href="/#/contact">Get in touch</Button>
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

export default CaseStudyNexus;
