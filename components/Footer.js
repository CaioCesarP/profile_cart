import React from "react";

const Footer = () => {
  const spotify =
    "https://open.spotify.com/playlist/2cfUZmS1eRVQh95NgG8jow?si=d2fbe9ee2b9d42f3";
  const linkedin = "https://www.linkedin.com/in/profile-caio-c%C3%A9sar-link/";
  const github = "https://github.com/CaioCesarP";

  return (
    <footer>
      <a href={spotify} target="_blank">
        <i className="fa-brands fa-spotify"></i>
      </a>
      <a href={linkedin} target="_blank">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href={github} target="_blank">
        <i className="fa-brands fa-github"></i>
      </a>
    </footer>
  );
};

export default Footer;
