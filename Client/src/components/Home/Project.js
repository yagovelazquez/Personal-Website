import { ProjectContainer } from "./Project.styled";
import ProjectDescription from "./ProjectDescription";
import ProjectExibihitionImageBox from './ProjectExibihitionImageBox';

function Project({images, description}) {
    return (<ProjectContainer>
        <ProjectExibihitionImageBox images={images} />
        <ProjectDescription description={description} />
    </ProjectContainer>  );
}

export default Project;