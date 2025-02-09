import Container from "react-bootstrap/Container";
function HomeSkills() {
  return (
    <div className="skills" id="skills">
      <Container>
        <h2 className="skills__title">Skills</h2>
        <div className="skills__div">
          <div className="skills__item">
            <h3>HTML & CSS</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Sass</li>
            </ul>
          </div>
          <div className="skills__item">
            <h3>JavaScript</h3>
            <ul>
              <li>JavaScript</li>
              <li>React JS</li>
            </ul>
          </div>
          <div className="skills__item">
            <h3>Backend</h3>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>WordPress</li>
            </ul>
          </div>
          <div className="skills__item">
            <h3>Design</h3>
            <ul>
              <li>Procreate</li>
              <li>Adobe XD</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeSkills;
