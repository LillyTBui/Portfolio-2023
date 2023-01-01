/* images */
import happyTouristSmall from "../../assets/happyTourist_small.jpg";
import happyTouristMedium from "../../assets/happyTourist_medium.jpg";
import happyTouristBig from "../../assets/happyTourist_big.jpg";

/* style */
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectHappyTourist() {
  return (
    <Container>
      <span id="happyTourist" className="anchortag"></span>
      <div className="project_detail">
        <h1 className="project_detail__title">The Happy Tourist</h1>
        <div className="project_detail__img-wrapper">
          <img
            srcSet={`${happyTouristSmall} 500w, ${happyTouristMedium} 1000w, ${happyTouristBig} 1500w`}
            src={happyTouristMedium}
            alt="The happy Tourist homepage"
            className="project_detail__img"
          />
        </div>
        <div className="project_detail__header">
          <ul>
            <li>
              <span>Type: </span>Blogg
            </li>
            <li>
              <span>Laget: </span>Oktober 2021
            </li>
            <li>
              <a
                href="https://happy-tourist.netlify.app/"
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
                href="https://github.com/Noroff-FEU-Assignments/project-exam-1-LillyTBui"
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
              Oppgaven var å lage en blogg med valgfritt tema, og jeg valgte å
              lage en fiktiv reiseblogg fordi jeg interesserer meg for reising.
              Kravene for prosjektet var å lage blogg med ulike sider
              (hjemmeside, bloggside, kontaktside) og vise alle blogg innlegg og
              blogg detaljer. For å håndtere API ble WordPress brukt som
              Headless CMS.
            </p>
          </div>
          <div className="project_detail__technologies">
            <h3 className="project_detail__subtitle">Teknologi</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>WordPress CMS</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProjectHappyTourist;
