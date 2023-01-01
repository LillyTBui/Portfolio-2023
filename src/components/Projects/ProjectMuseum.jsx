/* images */
import museumSmall from "../../assets/museum_small.jpg";
import museumMedium from "../../assets/museum_medium.jpg";
import museum from "../../assets/museum_big.jpg";

/* style */
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectMuseum() {
  return (
    <Container>
      <span id="museum" className="anchortag"></span>
      <div className="project_detail">
        <h1 className="project_detail__title">Community Science Museum</h1>
        <div className="project_detail__img-wrapper">
          <img
            srcSet={`${museumSmall} 500w, ${museumMedium} 1000w, ${museum} 1500w`}
            src={museum}
            alt="Community Science Museum homepage"
            className="project_detail__img"
          />
        </div>
        <div className="project_detail__header">
          <ul>
            <li>
              <span>Type: </span>Nettside
            </li>
            <li>
              <span>Laget: </span>Februar 2021
            </li>
            <li>
              <a
                href="https://museumscience.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project_detail__link"
              >
                <span>Nettside: </span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/LillyTBui/Semesterproject1"
                target="_blank"
                rel="noopener noreferrer"
                className="project_detail__link"
              >
                <span>Github: </span>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
        <div className="project_detail__info-container">
          <div className="project_detail__info">
            <h2 className="project_detail__subtitle">Om prosjektet</h2>
            <p>
              Oppgaven var å lage en nettside for et fiktivt barnemuseum.
              Kravene for prosjektet var at nettsiden skulle være oversiktlig,
              informativ og interaktiv for barn. Jeg har i ettertid lagt til mer
              informasjon på nettsiden.
            </p>
          </div>
          <div className="project_detail__technologies">
            <h3 className="project_detail__subtitle">Teknologi</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Phaser JS</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProjectMuseum;
