import { HashLink as Link } from "react-router-hash-link";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

/* Images */
import duckSurferSmall from "../../assets/duck_surfer_small.jpg";
import duckSurferMedium from "../../assets/duck_surfer_medium.jpg";
import duckSurfer from "../../assets/duck_surfer_big.jpg";
import happyTouristSmall from "../../assets/happyTourist_small.jpg";
import happyTouristMedium from "../../assets/happyTourist_medium.jpg";
import happyTouristBig from "../../assets/happyTourist_big.jpg";
import museumSmall from "../../assets/museum_small.jpg";
import museumMedium from "../../assets/museum_medium.jpg";
import museum from "../../assets/museum_big.jpg";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../SanityClient";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/projects");
        const data = await response.json();
        setProjects(data);
        console.log(data);
      } catch (error) {
        console.log("error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <span id="projects" className="anchortag"></span>
      <div className="project">
        <h2 className="project__title">Prosjekter</h2>
        <div className="projects_wrapper">
          {projects.map((project) => (
            <div className="project__item" key={project.title}>
              <Link to={`/projects/${project.slug}`}>
                <img
                  srcSet={`${urlFor(project.smallImage.asset)} 500w, ${urlFor(
                    project.mediumImage.asset
                  )} 1000w, ${urlFor(project.bigImage.asset)} 1500w`}
                  src={urlFor(project.mediumImage.asset)}
                  alt={project.altImage}
                  className="project__item_img"
                />
              </Link>
              <div className="project__item_text">
                <h3 className="project__item_title">{project.title}</h3>
                <p className="project__item_year">{project.publishedAt}</p>
                <div className="project__item_text-description">
                  <PortableText value={project.description} />
                </div>
                <Link
                  to={`/projects/${project.slug}`}
                  className="project__item-btn"
                >
                  <p className="project__item-btn-text">Les mer</p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="project__item-btn-icon"
                  />
                </Link>
              </div>
            </div>
          ))}
          <div className="project__item">
            <Link to="/projects/duckSurfer/#duckSurfer">
              <img
                srcSet={`${duckSurferSmall} 500w, ${duckSurferMedium} 1000w, ${duckSurfer} 1500w`}
                src={duckSurferMedium}
                alt="Duck surfer homepage"
                className="project__item_img"
              />
            </Link>
            <div className="project__item_text">
              <h3 className="project__item_title">Duck Surfer</h3>
              <p className="project__item_year">November 2021</p>
              <p className="project__item_text-description">
                Gruppeprosjekt i INFT1003 på NTNU. Oppgaven var å lage et spill,
                og lære å samarbeide sammen med andre.
              </p>
              <Link
                to="/projects/duckSurfer/#duckSurfer"
                className="project__item-btn"
              >
                <p className="project__item-btn-text">Les mer</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="project__item-btn-icon"
                />
              </Link>
            </div>
          </div>
          <div className="project__item">
            <Link to="/projects/happyTourist/#happyTourist">
              <img
                srcSet={`${happyTouristSmall} 500w, ${happyTouristMedium} 1000w, ${happyTouristBig} 1500w`}
                src={happyTouristMedium}
                alt="The Happy Tourist homepage"
                className="project__item_img"
              />
            </Link>
            <div className="project__item_text">
              <h3 className="project__item_title">The Happy Tourist</h3>
              <p className="project__item_year">Oktober 2021</p>
              <p className="project__item_text-description">
                Eksamensprosjekt 1 på Noroff. Oppgaven var å lage en blogg med
                valgfritt tema.
              </p>
              <Link
                to="/projects/happyTourist/#happyTourist"
                className="project__item-btn"
              >
                <p className="project__item-btn-text">Les mer</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="project__item-btn-icon"
                />
              </Link>
            </div>
          </div>
          <div className="project__item">
            <Link to="/projects/CommunityScienceMuseum/#museum">
              <img
                srcSet={`${museumSmall} 500w, ${museumMedium} 1000w, ${museum} 1500w`}
                src={museum}
                alt="Community Science Museum homepage"
                className="project__item_img"
              />
            </Link>
            <div className="project__item_text">
              <h3 className="project__item_title">Community Science Museum</h3>
              <p className="project__item_year">Februar 2021</p>
              <p className="project__item_text-description">
                Semesterprosjekt 1 på Noroff. Oppgave var å lage en nettside for
                et fiktivt museum.
              </p>
              <Link
                to="/projects/CommunityScienceMuseum/#museum"
                className="project__item-btn"
              >
                <p className="project__item-btn-text">Les mer</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="project__item-btn-icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
