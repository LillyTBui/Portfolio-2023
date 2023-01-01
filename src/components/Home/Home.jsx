import profileImg from "../../assets/portrait.png";
import Container from "react-bootstrap/Container";
import SocialMediaContainer from "../SocialMedia/SocialMediaContainer";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import HomeSkills from "./HomeSkills";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Home() {
  return (
    <>
      <SocialMediaContainer />
      <Container>
        <span id="home" className="anchortag"></span>
        <div className="welcome__div">
          <div className="welcome__text_div">
            <h1 className="welcome__title">
              Hei, jeg heter Lilly <span>&#128075;</span>
            </h1>
            <p className="welcome__text">
              Ferdig utdannet webutvikler fra Noroff School of technology and
              digital media. Jeg interesserer meg for programmering og bygger
              videre på utdannelsen min ved å starte på en bachelor i
              datateknologi ved UIB.
            </p>
            <AnchorLink href="#projects" className="welcome__btn">
              Prosjekter
            </AnchorLink>
          </div>
          <img
            src={profileImg}
            alt="drawing of myself"
            className="welcome__img"
          />
        </div>
      </Container>
      <HomeSkills />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
