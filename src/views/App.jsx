import "./App.css";
import ContactBlock from "./ContactBlock";
import ProfileBlock from "./ProfileBlock";
import SidebarDown from "./SidebarDown";
import TechnologyBanner from "./TechnologyBanner";

import logoNet from "../../public/net_icon.png";
import logoVisualStudio from "../../public/visual_studio_icon.png";
import logoCSharp from "../../public/c_sharp_icon.png";
import logoXaml from "../../public/xaml_icon.png";
import logoXamarin from "../../public/xamarin_icon.png";
import logoNuGet from "../../public/NuGet_icon.png";

function App() {
  return (
    <>
      <TechnologyBanner
        imageURL={logoNet}
        top="100px"
        left="100px"
        animationDuration="15s"
      />
      <TechnologyBanner
        imageURL={logoCSharp}
        top="300px"
        left="300px"
        animationDuration="20s"
      />
      <TechnologyBanner
        imageURL={logoVisualStudio}
        top="550px"
        left="150px"
        animationDuration="18s"
      />
      <TechnologyBanner
        imageURL={logoXaml}
        top="100px"
        right="150px"
        animationDuration="13s"
      />
      <TechnologyBanner
        imageURL={logoXamarin}
        top="340px"
        right="300px"
        animationDuration="16s"
      />
      <TechnologyBanner
        imageURL={logoNuGet}
        top="600px"
        right="150px"
        animationDuration="22s"
      />

      <div className="app-container">
        <ProfileBlock />
        <ContactBlock />
      </div>

      <SidebarDown />
    </>
  );
}

export default App;
