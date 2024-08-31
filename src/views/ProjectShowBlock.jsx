import "./ProjectShowBlock.css";
import ImageBlockUsedTechnology from "./ImageBlockUsedTechnology.jsx";

import logoCSharp from "../../public/c_sharp_icon.png";
import logoXaml from "../../public/xaml_icon.png";
import logoGitHub from "../../public/github_icon.png";
import logoCSS from "../../public/css_icon.png";

function ProjectShowBlock({
  proyectTitle,
  videoSrc,
  cSharpIcon,
  xamlIcon,
  cssIcon,
  linkedinLink,
}) {
  return (
    <>
      <div className="container" id="project-block">
        <h1>{proyectTitle}</h1>
        <video className="video" controls>
          <source src={videoSrc} type="video/mp4" />
          Problemas con tu navegador.
        </video>
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
          {cssIcon === logoCSS && (
            <>
              <div>
                <ImageBlockUsedTechnology imageURL={logoCSS} />
              </div>
            </>
          )}
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
      </div>
    </>
  );
}

export default ProjectShowBlock;
