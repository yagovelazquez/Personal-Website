import styled from "styled-components";


const DescriptionContainer = styled.div`
color: white;
display:flex;
margin-top: 15px;
align-items: center;



`

const IconsContainer = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
margin: 0 30px;

.javascript {
    min-height: 30px;
    min-width: 30px;
}

`



const DescriptionColumnFlex = styled.div`
height: 100%;
color: white;
display:flex;
margin-top: 15px;
flex-direction: column;
`

const DescriptionTitle = styled.h2`
font-weight: 600;
font-size: 1.4rem;
line-height: 1.96rem;
margin-bottom: 5px;


`

const DescriptionParagraph = styled.p`
font-weight: 300;
font-size: 1rem;
line-height: 1.4rem;
margin-bottom: 20px;

`


export {DescriptionContainer, DescriptionTitle, DescriptionParagraph, DescriptionColumnFlex ,IconsContainer };