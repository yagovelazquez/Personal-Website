import styled from "styled-components";


const BodyContainer = styled.div`
display: flex;
width: 700px;
margin-bottom: 16px;
color: white;
gap: 16px;
padding-bottom: 19px;
border-bottom: 3px solid white;
overflow: hidden;
flex-direction: column;
height: 100%;
`

const BodyTitle = styled.p`

font-size:1.2rem; 
font-weight: 500;
line-height: 1.6rem;


`;

const BodyParagraph = styled.p`
font-size:1rem; 
font-weight: 300;
line-height: 1.4rem;
color: #fff;


a {
    color: white;
    font-weight: 700;
    font-size: 1rem;
   
    &:hover {
        opacity: 0.6;
    }
   }

`;
















export { BodyContainer, BodyTitle, BodyParagraph  };
