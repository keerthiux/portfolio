import SocialIcons from '../SocialIcons/SocialIcons';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-inner">
        <div>
          <p style={{ color: 'var(--text-dim)', fontSize: 13, marginBottom: 10 }}>
            Have a project in mind?
          </p>
          <a href="mailto:vksaikeerthi@gmail.com" className="footer-cta">
            vksaikeerthi@gmail.com
          </a>
        </div>
        <SocialIcons />
        <p>© {new Date().getFullYear()} Sai Keerthi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
