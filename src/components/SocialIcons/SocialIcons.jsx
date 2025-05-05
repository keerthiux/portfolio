import React from 'react';
import insta from '/src/assets/icons/Instagram icon.svg';
import linked from '/src/assets/icons/Linkedin Icon.svg';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <img src={linked} alt="linkedin" />
      </a>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <img src={insta} alt="instagram" />
      </a>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <img src="" alt="" />
      </a>
    </div>
  );
};

export default SocialIcons;
