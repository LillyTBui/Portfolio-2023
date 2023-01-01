/* images */
import duckSurferSmall from "../../assets/duck_surfer_small.jpg";
import duckSurferMedium from "../../assets/duck_surfer_medium.jpg";
import duckSurfer from "../../assets/duck_surfer_big.jpg";

/* style */
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectDuckSurfer() {
  return (
    <Container>
      <span id="duckSurfer" className="anchortag"></span>
      <div className="project_detail">
        <h1 className="project_detail__title">Duck Surfer</h1>
        <div className="project_detail__img-wrapper">
          <img
            srcSet={`${duckSurferSmall} 500w, ${duckSurferMedium} 1000w, ${duckSurfer} 1500w`}
            src={duckSurferMedium}
            alt="Duck surfer homepage"
            className="project_detail__img"
          />
        </div>
        <div className="project_detail__header">
          <ul>
            <li>
              <span>Type: </span>Spill
            </li>
            <li>
              <span>Laget: </span>November 2021
            </li>
            <li>
              <a
                href="https://duck-surfer.netlify.app/"
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
                href="https://github.com/LillyTBui/Duck-surfer"
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
              Oppgaven var å bruke kunnskapen vi har lært om webteknologi og
              teamarbeid for å lage et spill. Vi fant på spillet “Duck Surfer”
              som handler om en surfende and. Målet med spillet er å få mest
              mulig poeng mens man unngår ulike hindringer som er i vannet. For
              å lage spillet brukte vi HTML, CSS, Sass, JavaScript og
              rammeverket Phaser JS. Alt av det visuelle er tegnet av meg på
              Procreate.
            </p>
            <p>
              <span>NB!</span> Spillet fungerer bare på PC.
            </p>
          </div>
          <div className="project_detail__technologies">
            <h3 className="project_detail__subtitle">Teknologi</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>JavaScript</li>
              <li>Phaser JS</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProjectDuckSurfer;
