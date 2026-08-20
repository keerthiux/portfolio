const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a
        href="https://www.linkedin.com/in/sai-keerthi-92820b149/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="social-icon-link"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z"
            fill="currentColor"
          />
        </svg>
        <span>LinkedIn</span>
      </a>
      <a
        href="/resume.pdf"
        download="Sai_Keerthi_Resume.pdf"
        aria-label="Download résumé"
        className="social-icon-link"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3v11m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Resume</span>
      </a>
    </div>
  );
};

export default SocialIcons;
