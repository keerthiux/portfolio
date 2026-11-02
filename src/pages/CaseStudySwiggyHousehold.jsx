import { MotionConfig } from 'framer-motion';
import Button from '../components/Button/Button';
import Reveal from '../components/Reveal/Reveal';
import './CaseStudyNexoraCRM.css';
import './CaseStudySwiggyHousehold.css';

const asset = (name) => `${import.meta.env.BASE_URL}case-studies/swiggy-household/${name}`;

const meta = [
  { label: 'Role', value: 'UX research + product design' },
  { label: 'Type', value: 'Concept / design challenge' },
  { label: 'Duration', value: 'About 1 week' },
  { label: 'Tools', value: 'Figma, Claude' },
];

const singles = ['One person', 'One cart', 'One payment method'];

const tensionStats = [
  { value: '5/6', label: 'order for other people' },
  { value: '5/6', label: "didn't know Group Order exists" },
  { value: '4/4', label: 'who tried it hit problems' },
];

const people = [
  {
    name: 'Prasanna, 46',
    detail: 'Pays for a family of 5',
    quote: 'I want Rohan to order himself, under a limit, and tell me if he goes over.',
  },
  {
    name: 'Kiran, 28',
    detail: 'Orders groceries for his parents in another city',
    quote: "Let my parents' household be saved, with my card and their address and diet.",
  },
  {
    name: 'Sujitha, 31',
    detail: 'PG flatmate',
    quote: 'My instructions are not taken seriously.',
  },
];

const roles = [
  {
    title: 'Admin',
    lead: 'Controls the money.',
    desc: 'Sets the household card and the limit. Approves only what goes over it.',
  },
  {
    title: 'Member',
    lead: 'Adds their own food.',
    desc: 'Orders directly, with their name on their items and their diet on file.',
  },
];

const principles = [
  {
    title: 'Visible where it matters',
    desc: 'It shows up when it changes a decision, and nowhere else.',
    icon: (
      <>
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    title: 'Progressive disclosure of shared access',
    desc: 'Solo stays the default. Limits and approvals appear only when needed.',
    icon: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 13 9 5 9-5" />
      </>
    ),
  },
  {
    title: "Extend, don't invent",
    desc: 'Built from patterns Swiggy users already know. Only 3 new components.',
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <path d="M17.5 14v7M14 17.5h7" />
      </>
    ),
  },
];

const concepts = [
  {
    title: 'Bottom-nav tab',
    desc: "Easy to find, but that nav is Food-only, so it can't cover Instamart. It also competes with promotions.",
    verdict: "Rejected: breaks \"Extend, don't invent\"",
  },
  {
    title: 'Settings only',
    desc: 'No clutter, but invisible while ordering. Same discovery problem as Group Order.',
    verdict: 'Rejected: breaks "Visible where it matters"',
  },
  {
    title: 'Address header',
    desc: 'It sits above Food and Instamart and shows your current mode.',
    verdict: 'Chosen: meets all 3 principles',
    chosen: true,
  },
];

const screens = [
  {
    img: 'home-chip.png',
    title: 'Home chip',
    desc: 'Sits under your address and shows who you are ordering for.',
    alt: 'Swiggy Home screen with an "Ordering for: Household" chip under the delivery address, and a household cart card below.',
  },
  {
    img: 'shared-cart.png',
    title: 'Shared cart',
    desc: 'Items sit under each name. Diet warnings sit next to the food.',
    alt: 'Cart with items grouped under each member, a nut allergy warning next to a dessert, and a household limit note above Pay.',
  },
  {
    img: 'approval-sheet.png',
    title: 'Approval sheet',
    desc: 'Orders over the limit go to the admin. Smaller ones go straight through.',
    alt: "Bottom sheet saying a member's order is ₹240 over the limit, with an itemised total and Approve, Decline and Edit limit buttons.",
  },
  {
    img: 'food-preferences.png',
    title: 'Food preferences',
    desc: 'Each person sets their own. Others see the labels, never the reason.',
    alt: 'Bottom sheet titled My food preferences with chips for diet, allergies and foods to avoid, and a toggle for showing only veg dishes.',
  },
  {
    img: 'order-history.png',
    title: 'Order history',
    desc: 'Mine or Household. Each order shows who ordered and who paid.',
    alt: 'Past orders with a Mine and Household filter. Each order shows who ordered it, who approved it and that the Household card paid.',
  },
];

const comparisons = [
  {
    title: 'Cart',
    desc: 'A one-time Group Order becomes a household cart that stays open.',
    before: {
      img: 'before-cart.png',
      alt: 'Current Group Order cart with Invite More, Refresh and Delete buttons, and a note that only you can edit items after you proceed.',
    },
    after: {
      img: 'after-cart.png',
      alt: 'Household cart with items under each member, a nut allergy note, a split by items, and Household card in the Pay Using footer.',
    },
  },
  {
    title: 'Order history',
    desc: 'One extra filter and one extra line: who ordered, who paid.',
    before: {
      img: 'before-history.png',
      alt: 'Current Past Orders screen with a Food and Instamart switch and one order card.',
    },
    after: {
      img: 'after-history.png',
      alt: 'Past Orders with an added Mine and Household filter, and order cards showing who ordered, who approved and who paid.',
    },
  },
];

const testStats = [
  { value: '6.6/7', label: 'feels like Swiggy' },
  { value: '7/7', label: 'see value' },
  { value: '3/7', label: 'understood the chip', low: true },
  { value: '1/7', label: 'tapped it first', low: true },
];

const reflections = [
  {
    title: "What I'd test next",
    desc: 'A clickable prototype, and a solid vs outline chip.',
  },
  {
    title: 'The future opportunity',
    desc: 'Ordering from several restaurants. 3 of 7 brought it up in the test.',
  },
  {
    title: 'How I used AI',
    desc: 'It sped up drafting. Research, testing and decisions stayed mine.',
  },
];

const Phone = ({ img, alt }) => (
  <img
    className="sh-phone"
    src={asset(img)}
    alt={alt}
    width="780"
    height="1688"
    loading="lazy"
    decoding="async"
  />
);

const CaseStudySwiggyHousehold = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="cs-swiggy">
        <section className="cs-hero">
          <div className="container">
            <Reveal type="up" className="cs-hero-intro">
              <span className="eyebrow">Case Study</span>
              <h1>
                Swiggy <span className="gradient-word">Household</span>
              </h1>
              <p>
                Shared carts, household payment rules and everyone's food preferences, added
                to Swiggy so they feel like they were always there.
              </p>
              <p className="sh-note">
                Concept project. Not affiliated with Swiggy. Personal details on screens are
                blurred.
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

            <Reveal type="scale" delay={0.15} className="sh-hero-stage">
              <img
                className="sh-phone"
                src={asset('home-chip.png')}
                alt='Swiggy Home screen with an "Ordering for: Household" chip and member avatars under the delivery address.'
                width="780"
                height="1688"
              />
            </Reveal>
          </div>
        </section>

        <section className="section cs-section">
          <div className="container cs-narrow">
            <Reveal type="up" className="section-head">
              <span className="eyebrow">The hook</span>
              <h2>Dinner for four, one phone, and a WhatsApp thread.</h2>
              <p>
                Swiggy is built for one person, one cart, one payment method. Most people
                order for others.
              </p>
            </Reveal>
            <Reveal type="up" delay={0.1} className="sh-singles">
              {singles.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section cs-section cs-alt">
          <div className="container cs-narrow">
            <Reveal type="up" className="section-head">
              <span className="eyebrow">The tension</span>
              <h2>Everyone orders together. The app doesn't know.</h2>
              <p>
                5 of 6 people I interviewed order for flatmates, partners, teens or elderly
                parents. They pass the phone around, split bills on PhonePe and check food
                labels by hand.
              </p>
              <p>
                Group Order exists, but 5 of 6 didn't know about it. I asked 4 to try it, and
                all 4 hit problems.
              </p>
            </Reveal>
            <div className="sh-stats sh-stats-3">
              {tensionStats.map((s, i) => (
                <Reveal type="up" delay={i * 0.08} key={s.label} className="sh-stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section cs-section">
          <div className="container">
            <Reveal type="up" className="section-head">
              <span className="eyebrow">The people</span>
              <h2>Three people, three versions of the same problem.</h2>
            </Reveal>
            <div className="sh-grid-3">
              {people.map((p, i) => (
                <Reveal type="up" delay={i * 0.08} key={p.name}>
                  <figure className="sh-person">
                    <blockquote>&ldquo;{p.quote}&rdquo;</blockquote>
                    <figcaption>
                      <strong>{p.name}</strong>
                      <span>{p.detail}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section cs-section cs-alt">
          <div className="container cs-narrow">
            <Reveal type="up" className="sh-rule">
              <span className="eyebrow">The insight</span>
              <h2>
                Money has one owner; <span className="gradient-word">food has many voices.</span>
              </h2>
            </Reveal>
            <div className="sh-roles">
              {roles.map((r, i) => (
                <Reveal type="up" delay={i * 0.08} key={r.title} className="sh-card">
                  <h3>{r.title}</h3>
                  <p className="sh-role-lead">{r.lead}</p>
                  <p>{r.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section cs-section">
          <div className="container">
            <Reveal type="up" className="section-head">
              <span className="eyebrow">Principles</span>
              <h2>Three rules for every placement.</h2>
            </Reveal>
            <div className="sh-grid-3">
              {principles.map((p, i) => (
                <Reveal type="up" delay={i * 0.08} key={p.title} className="sh-principle">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {p.icon}
                  </svg>
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
              <span className="eyebrow">Where should it live?</span>
              <h2>Three rough concepts. The address header won.</h2>
              <p>Swiggy already knows you by name and address. A household fits right there.</p>
            </Reveal>
            <Reveal type="up" amount={0.1} className="sh-media">
              <img
                src={asset('concepts.png')}
                alt="Three low-fidelity sketches side by side: a bottom-nav Home tab, a Household settings row, and a chip in the address header."
                width="2560"
                height="1560"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
            <div className="sh-grid-3">
              {concepts.map((c, i) => (
                <Reveal
                  type="up"
                  delay={i * 0.08}
                  key={c.title}
                  className={`sh-card ${c.chosen ? 'sh-card-chosen' : ''}`}
                >
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <span className="sh-verdict">{c.verdict}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section cs-section">
          <div className="container">
            <Reveal type="up" className="section-head">
              <span className="eyebrow">The design</span>
              <h2>Five moments where the household shows up.</h2>
            </Reveal>
            <Reveal type="up" amount={0.1}>
              <div
                className="sh-screens"
                tabIndex={0}
                role="region"
                aria-label="Five key screens. Scroll sideways to see them all."
              >
                {screens.map((s) => (
                  <figure key={s.title}>
                    <Phone img={s.img} alt={s.alt} />
                    <figcaption>
                      <strong>{s.title}</strong>
                      <span>{s.desc}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section cs-section cs-alt">
          <div className="container">
            <Reveal type="up" className="section-head">
              <span className="eyebrow">Before / after</span>
              <h2>Small changes to screens people already know.</h2>
            </Reveal>
            <div className="sh-compare">
              {comparisons.map((c) => (
                <Reveal type="up" amount={0.1} key={c.title} className="sh-compare-item">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="sh-compare-pair">
                    <figure>
                      <figcaption>Before</figcaption>
                      <img
                        src={asset(c.before.img)}
                        alt={c.before.alt}
                        width="680"
                        height="1520"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                    <figure>
                      <figcaption className="sh-after">After</figcaption>
                      <img
                        src={asset(c.after.img)}
                        alt={c.after.alt}
                        width="680"
                        height="1520"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section cs-section">
          <div className="container">
            <Reveal type="up" className="section-head">
              <span className="eyebrow">The test</span>
              <h2>It felt right. People still missed it.</h2>
              <p>7 people saw the Home screen on WhatsApp, without explanation.</p>
            </Reveal>
            <div className="sh-stats sh-stats-4">
              {testStats.map((s, i) => (
                <Reveal
                  type="up"
                  delay={i * 0.08}
                  key={s.label}
                  className={`sh-stat ${s.low ? 'sh-stat-low' : ''}`}
                >
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </Reveal>
              ))}
            </div>
            <Reveal type="up" className="sh-pull">
              <figure>
                <blockquote>
                  &ldquo;Everyone could add their own food instead of arguing over one dish.&rdquo;
                </blockquote>
                <figcaption>Test participant</figcaption>
              </figure>
            </Reveal>
            <Reveal type="up" amount={0.1}>
              <figure className="sh-feedback">
                <div
                  className="sh-feedback-scroll"
                  tabIndex={0}
                  role="region"
                  aria-label="WhatsApp feedback from 7 participants. Scroll sideways on small screens."
                >
                  <img
                    src={asset('whatsapp-feedback.png')}
                    alt="Seven WhatsApp chats with anonymised participants answering the same four questions, and a panel linking what was heard to what changed."
                    width="2520"
                    height="2592"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption>
                  Chats recreated from the real replies, with names removed. A small sample of
                  friends and family, using a static screen, so "tapped" means where they said
                  they would tap.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        <section className="section cs-section cs-alt">
          <div className="container cs-narrow">
            <Reveal type="up" className="section-head">
              <span className="eyebrow">What I changed</span>
              <h2>People start from food, not settings.</h2>
              <p>
                So I added a household banner on the restaurant page and a prompt in the cart.
                And I renamed the chip, because "Home" and "3 members" confused people.
              </p>
            </Reveal>
            <Reveal type="up" className="sh-rename">
              <span className="sh-chip sh-chip-old">Ordering for Home · 3 members</span>
              <span className="sh-rename-arrow" aria-hidden="true">
                →
              </span>
              <span className="sh-visually-hidden">renamed to</span>
              <span className="sh-chip">Ordering for: Household</span>
            </Reveal>
            <div className="sh-prompts">
              <Reveal type="up" amount={0.1}>
                <figure>
                  <Phone
                    img="restaurant-prompt.png"
                    alt='Restaurant page with a dismissible banner reading "Ordering for your household?" and a Switch button.'
                  />
                  <figcaption>Restaurant banner</figcaption>
                </figure>
              </Reveal>
              <Reveal type="up" delay={0.08} amount={0.1}>
                <figure>
                  <Phone
                    img="cart-prompt.png"
                    alt='Cart with a prompt asking "Is this for everyone at home?" and Move to household cart and Keep as mine buttons.'
                  />
                  <figcaption>Cart prompt</figcaption>
                </figure>
              </Reveal>
            </div>
            <Reveal type="fade" className="cs-callout">
              <strong>The rule —</strong> Solo users are never shown prompts. If you are not in a
              household, Swiggy stays exactly as it is.
            </Reveal>
          </div>
        </section>

        <section className="section cs-section">
          <div className="container cs-narrow">
            <Reveal type="up" className="section-head">
              <span className="eyebrow">Reflection</span>
              <h2>What comes next.</h2>
            </Reveal>
            <ul className="sh-reflections">
              {reflections.map((r, i) => (
                <Reveal as="li" type="up" delay={i * 0.08} key={r.title} className="sh-card">
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="section cs-cta">
          <div className="container cs-cta-card">
            <Reveal type="up">
              <h2>
                Want to talk through <span className="gradient-word">the thinking</span>?
              </h2>
              <div className="cs-cta-actions">
                <Button href="#/contact">Get in touch</Button>
                <Button fill={false} href="#/">
                  Back to all work
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </MotionConfig>
  );
};

export default CaseStudySwiggyHousehold;
