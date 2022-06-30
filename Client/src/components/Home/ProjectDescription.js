import {
  DescriptionContainer,
  DescriptionParagraph,
  DescriptionTitle,
  DescriptionColumnFlex,
  IconsContainer,
} from "./ProjectDescription.styled";

import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

function ProjectDescription({description}) {
  return (
    <DescriptionContainer>
      <DescriptionColumnFlex>
        <DescriptionTitle>{description.title}</DescriptionTitle>

        {description.paragraphs.map(paragraph => <DescriptionParagraph key={paragraph}> {paragraph} </DescriptionParagraph>)}
      </DescriptionColumnFlex>

      <IconsContainer>
        <SiJavascript className="javascript"></SiJavascript>
        <FaReact className="javascript"></FaReact>
        <BsGithub className="javascript"></BsGithub>
      </IconsContainer>
    </DescriptionContainer>
  );
}

export default ProjectDescription;
