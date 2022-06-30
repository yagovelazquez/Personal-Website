import styled from "styled-components";


const ContactInfoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-left: 60px;
gap: 25px;

svg {
    height: 32px;
    width: 32px;
    color: white;
    margin-bottom: 15px;
    &:hover {
     color: rgb(255,255,255, 0.6);
     cursor: pointer;	

    }
}

@media(max-width: 830px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

const IconsContainer = styled.div`
display:flex;
flex-direction: column;
`

const ContactParagraph = styled.p`

color: ${({color}) => color ? color : "rgb(255,255,255, 0.6)"};
font-size: ${({fontSize}) => fontSize ? fontSize : "1rem"};
margin-bottom: 10px;
max-width: 250px;

`


const ParagraphsContainer = styled.div`
display: flex;
flex-direction: column;
color: rgb(255,255,255, 0.6);
`





export { ContactInfoContainer,ContactParagraph,IconsContainer, ParagraphsContainer  };
