import { HashLink as Link } from "react-router-hash-link";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
        </div>
      </div>
    </Container>
  );
}

export default Projects;
