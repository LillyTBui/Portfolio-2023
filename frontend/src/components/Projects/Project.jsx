import { useParams } from "react-router-dom";
import { urlFor } from "../../SanityClient";
import { PortableText } from "@portabletext/react";
import { useState } from "react";
import { useEffect } from "react";

/* style */
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project() {
  const { slug } = useParams(); // get project slug from url
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/projects/${slug}`
        );
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.log("Error fetching project:", error);
      }
    };
    fetchProject();
  }, [slug]); // run again when slug changes

  if (!project) return <h2>Loading project...</h2>;

  return (
    <Container>
      <span id={project.slug} className="anchortag"></span>
      <div className="project_detail">
        <h1 className="project_detail__title">{project.title}</h1>
        <div className="project_detail__img-wrapper">
          <img
            srcSet={`${urlFor(project.smallImage.asset)} 500w, ${urlFor(
              project.mediumImage.asset
            )} 1000w, ${urlFor(project.bigImage.asset)} 1500w`}
            src={urlFor(project.mediumImage.asset)}
            alt={project.altImage}
            className="project__item_img"
          />
        </div>
        <div className="project_detail__header">
          <ul>
            <li>
              <span>Type: </span>
              {project.categories[0]}
            </li>
            <li>
              <span>Laget: </span>
              {project.made}
            </li>
            <li>
              <a
                href={project.websiteLink}
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
                href={project.githubLink}
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
            <PortableText value={project.body} />
          </div>
          <div className="project_detail__technologies">
            <h3 className="project_detail__subtitle">Teknologi</h3>
            <ul>
              {project.techonology.map((tech) => (
                <li key={tech._key}>{tech.technology}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Project;
