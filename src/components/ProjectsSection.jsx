import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectsSection.css";

import logoCSharp from "../../public/c_sharp_icon.png";
import logoXaml from "../../public/xaml_icon.png";
import logoCSS from "../../public/css_icon.png";
import logoReact from "../../public/react_icon.png";
import logoVite from "../../public/vite_icon.png";
import logoJSX from "../../public/jsx_icon.png";

import videoProyectTasks from "../../public/WPF_Proyecto_Tasks.mp4";

const ProjectsSection = () => {
  const scrollContainerRef = useRef(null);

  const handleMouseDown = (e) => {
    const container = scrollContainerRef.current;
    container.isDown = true;
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeft = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    scrollContainerRef.current.isDown = false;
  };

  const handleMouseUp = () => {
    scrollContainerRef.current.isDown = false;
  };

  const handleMouseMove = (e) => {
    const container = scrollContainerRef.current;
    if (!container.isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - container.startX) * 3;
    container.scrollLeft = container.scrollLeft - walk;
  };

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

  return (
    <div
      className="projects-section"
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <ProjectCard
        proyectTitle={title_ProyectTasks}
        description="Un pequeño proyecto de escritorio realizado con .NET WPF para gestionar tareas."
        videoSrc={videoProyectTasks}
        cSharpIcon={logoCSharp}
        xamlIcon={logoXaml}
        linkedinLink={link_ProjectTasks}
      />
      <ProjectCard
        proyectTitle={title_ProyectSportManager}
        description="Un proyecto de tablet realizado con Xamarin .NET, que nos permite controlar marcadores digitales y tener una interfaz personalizada para cada deporte."
        cSharpIcon={logoCSharp}
        xamlIcon={logoXaml}
        cssIcon={logoCSS}
        linkedinLink={link_ProjectMultiSports}
      />
      <ProjectCard
        proyectTitle={title_ProyectPokemonListComparator}
        description="Un divertido proyecto realizado REACT+VITE que obtiene datos desde la API PokeAPI y los muestra en una elegante lista."
        appUrl={link_App_ProjectPokemonListComparator}
        reactIcon={logoReact}
        viteIcon={logoVite}
        jsxIcon={logoJSX}
        cssIcon={logoCSS}
        linkedinLink={link_ProjectPokemonListComparator}
      />
    </div>
  );
};

export default ProjectsSection;
