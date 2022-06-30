import styled from "styled-components";


const ContactContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100vh;
width: 100%;
padding-left: 63px;
padding-top: 63px;
background: rgb(25, 25, 25);
@media(max-width: 830px) {
    padding-top: 0;
    padding-bottom: 63px;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    
  }

`;

const ContactFormContainer = styled.div`


display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
@media(max-width: 830px) {
    padding-top: 15px;
    padding-bottom: 63px;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    
  }
`

const ContactDetailsContainer = styled.div`
display: flex;
justify-items: center;
align-items: center;

@media(max-width: 830px) {
    flex-direction: column;
    width: 100%;
  }


`






export { ContactContainer,ContactFormContainer,ContactDetailsContainer  };
