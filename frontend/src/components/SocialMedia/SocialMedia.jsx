import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function SocialMedia() {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/lilly-thi-bui-479920233/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="social_media__icon" />
      </a>
      <a
        href="https://github.com/LillyTBui"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="social_media__icon" />
      </a>
      <a
        href="mailto:lillytbui@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} className="social_media__icon" />
      </a>
    </>
  );
}

export default SocialMedia;
