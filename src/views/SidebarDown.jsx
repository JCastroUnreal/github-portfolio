import { useState } from "react";
//import { Sidebar } from "primereact/sidebar";
import "./SidebarDown.css";
import ProjectShowBlock from "./ProjectShowBlock";

import logoCSharp from "../../public/c_sharp_icon.png";
import logoXaml from "../../public/xaml_icon.png";
import logoCSS from "../../public/css_icon.png";
import logoReact from "../../public/react_icon.png";
import logoVite from "../../public/vite_icon.png";
import logoJSX from "../../public/jsx_icon.png";

import videoProyectTasks from "../../public/WPF_Proyecto_Tasks.mp4";

function SidebarDown() {
  const [netContainerShow, setNetContainerShow] = useState(false);
  const [unrealContainerShow, setUnrealContainerShow] = useState(false);

  const title_ProyectTasks = "TASKS MANAGER",
    title_ProyectSportManager = "MULTI SPORTS",
    title_ProyectPokemonListComparator = "POKEMON LIST";

  const link_ProjectTasks =
      "https://github.com/JCastroUnreal/WPF_JCastro_TaskManager",
    link_ProjectMultiSports =
      "https://github.com/JCastroUnreal/Xamarin_Multi_Sports",
    link_ProjectPokemonListComparator =
      "https://github.com/JCastroUnreal/pokemon-list-comparator";

  const link_App_ProjectPokemonListComparator =
    "https://jcastrounreal.github.io/pokemon-list-comparator/";

  const handleNetContainerClick = () => {
    if (!netContainerShow) {
      setNetContainerShow(true);
      setUnrealContainerShow(false);
    }
  };

  const handleUnrealContainerClick = () => {
    if (!unrealContainerShow) {
      setUnrealContainerShow(true);
      setNetContainerShow(false);
    }
  };

  return (
    <>
      {/*
    DEBERES

    1- Probar a cambiar los estilos de los tabs al darle click

    2- Encontrar la manera de expandir el tamaño del tab a toda la pantalla

    3- Que cuando el tab se encuentre escondido la pantalla expandida tambien

    Tips:   Revisar Position:Fixed
            Mirar la propiedad Buttom = -500px
            El punto para tener un tap que se muestre y se oculete es que todo eso debe estar oculto desde la base, y cuando le den click en bottom 0px
            Investigar la propiedad Animation

*/}

      <div className="footer">
        <div
          className={netContainerShow ? "tab-show" : "tab"}
          id="net-container"
          onClick={handleNetContainerClick}
        >
          {!netContainerShow && <p className="footer-title">.NET & WEB</p>}
          {netContainerShow && (
            <>
              <button
                className="close-button"
                onClick={() => setNetContainerShow(false)}
              >
                X
              </button>
              <div className="proyect-row">
                <ProjectShowBlock
                  proyectTitle={title_ProyectTasks}
                  videoSrc={videoProyectTasks}
                  cSharpIcon={logoCSharp}
                  xamlIcon={logoXaml}
                  linkedinLink={link_ProjectTasks}
                />
                <ProjectShowBlock
                  proyectTitle={title_ProyectSportManager}
                  cSharpIcon={logoCSharp}
                  xamlIcon={logoXaml}
                  cssIcon={logoCSS}
                  linkedinLink={link_ProjectMultiSports}
                />
                <ProjectShowBlock
                  proyectTitle={title_ProyectPokemonListComparator}
                  appUrl={link_App_ProjectPokemonListComparator}
                  reactIcon={logoReact}
                  viteIcon={logoVite}
                  jsxIcon={logoJSX}
                  cssIcon={logoCSS}
                  linkedinLink={link_ProjectPokemonListComparator}
                />
              </div>
            </>
          )}
        </div>
        <div
          className={unrealContainerShow ? "tab-show" : "tab"}
          id="unreal-container"
          onClick={handleUnrealContainerClick}
        >
          {!unrealContainerShow && <p className="footer-title">UNREAL</p>}
          {unrealContainerShow && (
            <>
              <button
                className="close-button"
                onClick={() => setUnrealContainerShow(false)}
              >
                X
              </button>
              <div className="proyect-row">
                <h1 className="title" id="center-title">
                  PROXIMAMENTE . . .{" "}
                </h1>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default SidebarDown;
