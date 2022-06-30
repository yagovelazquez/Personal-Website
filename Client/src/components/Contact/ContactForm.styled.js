
import styled from 'styled-components';




export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 830px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, .6);
  font-size: 0.8em;
  margin: 0.5rem 0;
  position: relative;
  @media(max-width: 830px) {
    width: 100%;
    max-width: 550px;
  }
`;

export const Input = styled.input`
  width: 400px;
  height: ${({height}) => height ? height : "35px"}; 
  border: 1px solid #ccc;
  background-color: #fff;
  padding-left: 10px;
  margin-top: 5px;
  overflow-x: hidden;
  overflow-y: scroll;
  &:focus-visible, &:focus {
      border-radius: 0;
      outline: none;
  }
  @media(max-width: 830px) {
    width: 100%;
    max-width: 550px;
  }
`;

export const TextArea = styled.textarea`
width: 400px;
max-width: 400px;
margin-top: 5px;
min-width:400px;
padding: 10px;
font-family: arial;
border: none;
&::placeholder {
  letter-spacing: 0;
}
&:focus-visible, &:focus {
    border-radius: 0;
    outline: none;
    border: none;
}
@media(max-width: 830px) {
  width: 100%;
  max-width: 100%;
  min-width: 100%;
}

`;

export const Button = styled.button`
  width: 400px;
  height: 35px;
  background-color: black;
  color: #fff;
  border: 1px solid white;
  font-family: inherit;
   margin-top: 15px;

   &:hover, &:active {
       background: white;
       border-color: white;
       color: black;
       cursor: pointer;
   }

   @media(max-width: 830px) {
    width: 100%;
    max-width: 550px;
  }
`;


export const Title = styled.h1`

  font-weight: 600;
  color: white;
  font-size: 2.2rem;
  margin-bottom: 20px;
`;

export const Title2 = styled.h2`

  font-weight: 300;
  color: rgba(255, 255, 255, .6);
  font-size: 1rem;
  text-align: center;
`;

export const ServerResponse = styled.p`
   background: ${({success}) => success ? "#d2e4c4" : "#e4c4c4"};
  font-weight: 400;
  padding:  ${({success}) => success ? "5px" : "15px"};
  width: 100%;
  color: ${({success}) => success ? "#307a07" : "#cb2b2b"};
  font-size: 1rem;
  svg {
    vertical-align: text-bottom;
  }
`;


export const Text = styled.p`

  color: ${props => props.color || '#4d4d4d'}
`;

export const LoadingText = styled.p`

  color: black;
  font-weight: 700;
`;

export const ModalBodyContainer = styled.div`

  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`;



