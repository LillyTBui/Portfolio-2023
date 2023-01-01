import SocialMedia from "../SocialMedia/SocialMedia";

function Contact() {
  return (
    <>
      <span id="contact" className="anchortag"></span>
      <div className="contact__div">
        <h2 className="contact__div_title">Kontakt</h2>
        <p className="contact__div_text">
          Gjerne ta kontakt hvis du ønsker mer informasjon om meg eller mine
          prosjekter.
        </p>
        <div className="contact__div_links">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}

export default Contact;
