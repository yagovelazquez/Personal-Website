import {
  BorderDiv,
  ButtonContainerFlex,
  ProjectExButton,
  ProjectExImage,
  ProjectExImageBox,
  ProjectImageContainer,
  ProjectExImageHover,
} from "./ProjectExihibition.styled";

import { useState, useRef, useEffect } from "react";


function ProjectExibihitionImageBox({images}) {
  const [topPosition, setTopPosition] = useState();






  const imageHoverRef = useRef("");

  
  useEffect(()=> {

    const top = () => {
      if (imageHoverRef.current.height === 0) return 350
      if (imageHoverRef.current.height >= 0) return imageHoverRef.current.height + 50
      return 350
    }


    if (!topPosition) {

        setTopPosition(top)
    }  
    const  handleResize = () => {setTopPosition(top)}
    window.addEventListener('resize', handleResize)
  }, [imageHoverRef.current.height, topPosition])



const viewCodeHandler = () => {
  return window.open(images.link, '_blank');
}

const seeLiveHandler = () => {
  return window.open(images.linkLive, '_blank');
}


  return (
    <ProjectExImageBox>
      <ProjectImageContainer>
        <ProjectExImage
           ref={imageHoverRef}
          src={images?.main}
          alt={images?.mainAlt}
        ></ProjectExImage>

        <ProjectExImageHover

          top={topPosition}
          className="imageHover"
          src={images?.hover}
          alt={images?.hoverAlt}
        ></ProjectExImageHover>
      </ProjectImageContainer>
      <ButtonContainerFlex>

        <ProjectExButton onClick={seeLiveHandler}>See Live</ProjectExButton>
        <BorderDiv></BorderDiv>

        <ProjectExButton onClick={viewCodeHandler}>View Code</ProjectExButton>

      </ButtonContainerFlex>
    </ProjectExImageBox>
  );
}

export default ProjectExibihitionImageBox;
