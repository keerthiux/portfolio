import React, { useState, useRef } from 'react';
import Button from '../components/Button/Button';
import SocialIcons from '../components/SocialIcons/SocialIcons';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Create a ref for the form element
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the form element
    const form = formRef.current;

    // Check form validity using HTML5 validation
    if (!form.checkValidity()) {
      // This triggers the browser to display validation messages
      form.reportValidity();
      return; // Stop execution if form is invalid
    }

    // Proceed with submission if validation passes
    setIsSubmitting(true);

    // Template parameters
    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      to_name: 'Sai Keerthi',
      message,
      subject: 'New Enquiry',
      reply_to: email,
      from_email: 'vksaikeerthi@gmail.com',
    };

    // Send email using EmailJS
    emailjs
      .send(
        'service_1s8vlne',
        'template_0qbp4hp',
        templateParams,
        '1KgEb237XjQreWzUl',
      )
      .then((response) => {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully!',
        });
        // Reset form after successful submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSubmitStatus({
          success: false,
          message: 'Failed to send message. Please try again later.',
        });
      })
      .finally(() => {
        setIsSubmitting(false);
        // Clear status message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <div className="contact">
      <div className="contact-form">
        <form ref={formRef} onSubmit={handleSubmit} autocomplete="off">
          <div className="form-field first">
            <div className="form-field">
              <label htmlFor="firstName">
                First Name<span>(required)</span>
              </label>
              <input
                id="firstName"
                required
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                minLength="2"
                pattern="[A-Za-z]+"
                title="Please enter a valid first name (letters only)"
              />
            </div>
            <div className="form-field">
              <label htmlFor="lastName">
                Last Name<span>(required)</span>
              </label>
              <input
                id="lastName"
                required
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                minLength="2"
                pattern="[A-Za-z]+"
                title="Please enter a valid last name (letters only)"
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="email">
              Email ID<span>(required)</span>
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
              Message<span>(required)</span>
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
          <div className="form-field">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Email'}
            </Button>

            {submitStatus && (
              <div
                className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}
              >
                {submitStatus.message}
              </div>
            )}
          </div>
        </form>
      </div>
      <div className="contact-content">
        <h1>Let's Connect</h1>
        <p>
          Having business acumen makes me more than a designer — it enables me
          to see the bigger picture and help your business grow.
        </p>
        <a href="mailto:vksaikeerthi@gmail.com">vksaikeerthi@gmail.com</a>
        <SocialIcons />
        <Button>Resume</Button>
      </div>
    </div>
  );
};

export default Contact;
