import styled from "styled-components";


const ProjectExContainer = styled.div`
display: flex;
width: 100%;
max-width: 1165px;
margin-top: 20px;
flex-flow: row wrap;
justify-content: space-between;
gap: 10px;
`
const ProjectExImage = styled.img`
height: 100%;
width: 100%;
object-fit: fill;
display: block;
border-bottom: 3px solid white;
`

const ProjectExImageHover = styled.img`
height: 100%;
width: 100%;
object-fit: fill;
display: block;
border-bottom: 3px solid white;
transition: top 0.4s ease-out;

position: absolute;
top: ${({top}) => top}px;

`

const ProjectImageContainer = styled.div`

overflow: hidden;
padding: 0;
position: relative;

&:hover {
    .imageHover {
        top: 0;
    }
}


`

const ProjectExImageBox = styled.div`
display: flex;
flex-direction: column;
border: 3px solid white;
`

const ButtonContainerFlex = styled.div`
display: flex;
width: 100%;
`



const ProjectExButton = styled.button`
background: black;
color: white;
font-weight: 400;
font-size: 1rem;
display: flex;
justify-content: center;
align-items: center;
border: none;
height: 32px;
width: 100%;

&:hover {
    background: white;
    color: black;
    cursor: pointer;
}
`


const BorderDiv = styled.div`
height: 32px;
background: white;
min-width: 3px;
`







export { ProjectExContainer, ProjectExImage, ProjectExImageBox, ProjectExButton, ButtonContainerFlex,BorderDiv, ProjectImageContainer, ProjectExImageHover  };
