import { HomeButton, HomeContainer, HomeTitle } from "./Home.styled";
import { useState } from "react";
import AboutMeCollapse from "./AboutMeCollapse";
import ProjectExihibition from "./ProjectExihibition";
import AnimatedPage from "../AnimatedPage";

function Home() {

    const [isAboutMeOpen, setIsAboutMeOpen] = useState(false)

    const openAboutMeHandler = () => {
        setIsAboutMeOpen(prev => !prev)
    }




  return (
    <AnimatedPage>
    <HomeContainer>
      <HomeTitle>YAGO VELAZQUEZ, FRONT END DEVELOPER</HomeTitle>
      <HomeButton className="aboutButton" onClick={openAboutMeHandler}>{isAboutMeOpen ? "That's plenty" : "About Me"}</HomeButton>
      <AboutMeCollapse isOpen={isAboutMeOpen}></AboutMeCollapse>
      <ProjectExihibition></ProjectExihibition>
    </HomeContainer>
    </AnimatedPage>
  );
}

export default Home;
