/* images */
import holidazeSmall from "../../assets/holidaze_small.jpg";
import holidazeMedium from "../../assets/holidaze_medium.jpg";
import holidazeSurfer from "../../assets/holidaze_big.jpg";

/* style */
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectHolidaze() {
  return (
    <Container>
      <span id="holidaze" className="anchortag"></span>
      <div className="project_detail">
        <h1 className="project_detail__title">Holidaze</h1>
        <div className="project_detail__img-wrapper">
          <img
            srcSet={`${holidazeSmall} 500w, ${holidazeMedium} 1000w, ${holidazeSurfer} 1500w`}
            src={holidazeMedium}
            alt="Holidaze homepage"
            className="project_detail__img"
          />
        </div>
        <div className="project_detail__header">
          <ul>
            <li>
              <span>Type: </span>Booking nettside
            </li>
            <li>
              <span>Laget: </span>Oktober 2022
            </li>
            <li>
              <a
                href="https://holidaze-exam-project-2022.netlify.app/"
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
                href="https://github.com/LillyTBui/holidaze"
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
              Oppgaven var å lage en funksjonell booking nettside for et fiktivt
              firma. Kravene for oppgaven var at brukerne kan finne og søke
              hotell, og booke et opphold. Booking detaljer og meldinger skal
              vises på administrators egen side. Administrator skal også ha
              muligheten til å legge til nye hotell på nettsiden. For å håndtere
              API ble WordPress brukt som Headless CMS.
            </p>
            <p>
              <span>NB!</span> Brukernavn og passord for administrator kan bli
              gitt ved forespørsel.
            </p>
          </div>
          <div className="project_detail__technologies">
            <h3 className="project_detail__subtitle">Teknologi</h3>
            <ul>
              <li>HTML</li>
              <li>CSS modules</li>
              <li>Bootstrap</li>
              <li>WordPress CMS</li>
              <li>React JS</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProjectHolidaze;
