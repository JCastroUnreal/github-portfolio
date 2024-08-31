import { useState } from "react";
import "./ProfileBlock.css";

function ProfileBlock() {
  const profileDefault =
    "https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png";
  const perfilImg =
    "https://media.licdn.com/dms/image/D4D03AQGJYxA0nJF1PA/profile-displayphoto-shrink_200_200/0/1711552270413?e=1726704000&v=beta&t=4LbxFTai2Iy8Gd9EW-ZOZGzQXyq_koMXlipTE9t_cG4";
  const lastNames = "CASTRO DUQUE",
    name = "JORGE";
  const descriptionTitle = "Bio";
  const description =
    "¡Hola! Soy un apasionado del desarrollo de software de 25 años con una sólida formación académica y experiencia práctica en múltiples plataformas y tecnologías.</br> Poseo un grado superior en Desarrollo de Aplicaciones Multiplataforma y un Máster en Technical Artist en Unreal Engine 5.";
  const moreAboutMe =
    "En el ámbito del desarrollo de aplicaciones de escritorio, tengo tres años de experiencia trabajando con .NET. He desarrollado aplicaciones utilizando los marcos de Forms, WPF, Xamarin y MAUI. Mi entusiasmo por el desarrollo web me ha llevado a aprender y utilizar React junto con Vite, tecnologías con las que he construido este portafolio y que espero emplear profesionalmente en el futuro. </br></br> Además, disfruto organizando y gestionando bases de datos. He trabajado con SQL Server y MySQL, y actualmente estoy ampliando mis conocimientos con MongoDB. </br></br> El desarrollo en Unreal Engine es una de mis grandes pasiones. Estoy desarrollando de forma independiente un juego de terror en primera persona y me siento cómodo creando entornos 3D, cinemáticas y renders con esta poderosa herramienta. </br></br> No me asusta enfrentarme a lo desconocido. Al contrario, lo veo como un desafío emocionante. Si hay algo que no sé, lo estudio y lo aprendo con entusiasmo. </br></br> Estoy siempre en busca de nuevas oportunidades para crecer y aprender en el mundo del desarrollo de software. ¡Gracias por visitar mi portafolio!";

  const [showAboutMeBlock, setShowAboutMeBlock] = useState(false);

  return (
    <>
      <div className="container" id="principal-data">
        <div className="top-container">
          <img src={profileDefault} alt="Imagen" />
          <div>
            <h1 className="title" id="title-low">
              {lastNames}
            </h1>
            <h1 className="title" id="title-heavy">
              {name}
            </h1>
          </div>
        </div>
        <hr className="custom-line" />
        <h1 className="title" id="title-description">
          {descriptionTitle}
        </h1>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {!showAboutMeBlock && <></>}
        {showAboutMeBlock && (
          <>
            <div>
              <p
                className="description"
                id="more-description"
                dangerouslySetInnerHTML={{ __html: moreAboutMe }}
              />
            </div>
          </>
        )}
        <div
          className="button-about-me"
          onClick={() => setShowAboutMeBlock(!showAboutMeBlock)}
        >
          <p id="text-button-about-me">{showAboutMeBlock ? "MENOS" : "MAS"}</p>
          <div className={showAboutMeBlock ? "show-about-me" : "about-me"} />
        </div>
      </div>
    </>
  );
}

export default ProfileBlock;
