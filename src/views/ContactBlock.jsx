import "./ContactBlock.css";
import ImageBlockUsedTechnology from "./ImageBlockUsedTechnology";
import logoLinkedIn from "../../public/linkedin_icon.png";
import logoGitHub from "../../public/github_icon.png";
import logoEMail from "../../public/e-mail_icon.png";

function ContactBlock() {
  const contactsTitle = "CONTACTOS";
  const linkedin = "LinkedIn",
    github = "Git Hub",
    mail = "E-mail";
  const linkLinkedin = "https://www.linkedin.com/in/jorge-castro-duque/",
    linkGithub = "https://github.com/JCastroUnreal",
    linkMail = "mailto:jcastrounreal@gmail.com";

  return (
    <>
      <div className="container">
        <h1 className="title" id="title-contacts">
          {contactsTitle}
        </h1>
        <hr className="custom-line" />
        <div className="custom-column-div">
          <a
            className="title"
            id="subtitle-contacts"
            href={linkLinkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageBlockUsedTechnology imageURL={logoLinkedIn} />
            {linkedin}
          </a>
          <a
            className="title"
            id="subtitle-contacts"
            href={linkGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageBlockUsedTechnology imageURL={logoGitHub} />
            {github}
          </a>
          <a
            className="title"
            id="subtitle-contacts"
            href={linkMail}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageBlockUsedTechnology imageURL={logoEMail} />
            {mail}
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactBlock;
