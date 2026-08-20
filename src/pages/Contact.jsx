import { useState, useRef } from 'react';
import Button from '../components/Button/Button';
import Reveal from '../components/Reveal/Reveal';
import './Contact.css';

const WHATSAPP_NUMBER = '919618670515';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);

    const whatsappText = [
      `Hi Keerthi, I'm ${firstName} ${lastName}.`,
      `Email: ${email}`,
      '',
      message,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setSubmitStatus({ success: true, message: 'Opening WhatsApp to send your message…' });
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <div className="contact section">
      <div className="container contact-grid">
        <Reveal type="up" className="contact-intro">
          <span className="eyebrow">Contact</span>
          <h1>
            Let's build something <span className="gradient-word">great</span>{' '}
            together.
          </h1>
          <p>
            Having business acumen makes me more than a designer — it lets me
            see the bigger picture and help your product and business grow.
          </p>
          <a href="mailto:vksaikeerthi@gmail.com" className="contact-email">
            vksaikeerthi@gmail.com
          </a>
          <div className="contact-meta">
            <div>
              <span>Location</span>
              <p>Hyderabad, India</p>
            </div>
            <div>
              <span>Phone</span>
              <p>+91 96186 70515</p>
            </div>
          </div>
        </Reveal>

        <Reveal type="up" delay={0.15} className="contact-form-card">
          <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="firstName">
                  First name<span>required</span>
                </label>
                <input
                  id="firstName"
                  required
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  minLength="2"
                  pattern="[A-Za-z]+(\s[A-Za-z]+)*"
                  title="Please enter a valid first name (letters and spaces only)"
                />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">
                  Last name<span>required</span>
                </label>
                <input
                  id="lastName"
                  required
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  minLength="2"
                  pattern="[A-Za-z]+(\s[A-Za-z]+)*"
                  title="Please enter a valid last name (letters and spaces only)"
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="email">
                Email<span>required</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                title="Please enter a valid email address"
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">
                Message<span>required</span>
              </label>
              <textarea
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                minLength="10"
                title="Please enter a message (minimum 10 characters)"
              />
            </div>
            <div className="form-field submit-field">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Opening…' : 'Send via WhatsApp'}
              </Button>
              {submitStatus && (
                <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
                  {submitStatus.message}
                </div>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
