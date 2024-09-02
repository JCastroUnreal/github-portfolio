import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Carousel } from "primereact/carousel";
import "./ProjectCard.css";
import ImageBlockUsedTechnology from "../views/ImageBlockUsedTechnology";

import logoCSharp from "../../public/c_sharp_icon.png";
import logoXaml from "../../public/xaml_icon.png";
import logoGitHub from "../../public/github_icon.png";
import logoCSS from "../../public/css_icon.png";
import logoReact from "../../public/react_icon.png";
import logoVite from "../../public/vite_icon.png";
import logoJSX from "../../public/jsx_icon.png";

const ProjectCard = ({
  proyectTitle,
  description,
  videoSrc,
  appUrl,
  cSharpIcon,
  xamlIcon,
  reactIcon,
  viteIcon,
  jsxIcon,
  cssIcon,
  linkedinLink,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const headerElement = <h2 className="dialog-header">{proyectTitle}</h2>;

  return (
    <>
      <button
        className="project-card-button"
        label="Show"
        onClick={() => setVisible(true)}
      >
        <h3>{proyectTitle}</h3>
        <p>{description}</p>
        <div id="technologies-card">
          {cSharpIcon === logoCSharp && (
            <>
              <div>
                <ImageBlockUsedTechnology imageURL={logoCSharp} />
              </div>
            </>
          )}
          {xamlIcon === logoXaml && (
            <>
              <div>
                <ImageBlockUsedTechnology imageURL={logoXaml} />
              </div>
            </>
          )}
          {reactIcon === logoReact && (
            <>
              <div>
                <ImageBlockUsedTechnology imageURL={logoReact} />
              </div>
            </>
          )}
          {viteIcon === logoVite && (
            <>
              <div>
                <ImageBlockUsedTechnology imageURL={logoVite} />
              </div>
            </>
          )}
          {jsxIcon === logoJSX && (
            <>
              <div>
                <ImageBlockUsedTechnology imageURL={logoJSX} />
              </div>
            </>
          )}
          {cssIcon === logoCSS && (
            <>
              <div>
                <ImageBlockUsedTechnology imageURL={logoCSS} />
              </div>
            </>
          )}
        </div>
      </button>
      <Dialog
        modal
        header={headerElement}
        visible={visible}
        className="dialog-project"
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <div className="dialog-source-content">
          {videoSrc && (
            <video className="dialog-video" controls>
              <source src={videoSrc} type="video/mp4" />
              Problemas con tu navegador.
            </video>
          )}
          {appUrl && <iframe className="dialog-web-component" src={appUrl} />}
        </div>
        <div id="dialog-github">
          {linkedinLink ? (
            <>
              <div>
                <a className="github-link" target="_blank" href={linkedinLink}>
                  <ImageBlockUsedTechnology imageURL={logoGitHub} />
                </a>
              </div>
            </>
          ) : (
            <>
              <div></div>
            </>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default ProjectCard;
