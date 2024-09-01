import "./ProjectShowBlock.css";
import ImageBlockUsedTechnology from "./ImageBlockUsedTechnology.jsx";

import logoCSharp from "../../public/c_sharp_icon.png";
import logoXaml from "../../public/xaml_icon.png";
import logoGitHub from "../../public/github_icon.png";
import logoCSS from "../../public/css_icon.png";
import logoReact from "../../public/react_icon.png";
import logoVite from "../../public/vite_icon.png";
import logoJSX from "../../public/jsx_icon.png";

function ProjectShowBlock({
  proyectTitle,
  videoSrc,
  appUrl,
  cSharpIcon,
  xamlIcon,
  reactIcon,
  viteIcon,
  jsxIcon,
  cssIcon,
  linkedinLink,
}) {
  return (
    <>
      <div className="container" id="project-block">
        <h1>{proyectTitle}</h1>
        {videoSrc && (
          <video className="video" controls>
            <source src={videoSrc} type="video/mp4" />
            Problemas con tu navegador.
          </video>
        )}
        {appUrl && <iframe className="web-component" src={appUrl} />}
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
