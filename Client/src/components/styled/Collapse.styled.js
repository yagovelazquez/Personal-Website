import styled from "styled-components";


const StyledCollapse = styled.div`
width: 100%;
height: ${(props) => props.isOpen ? props.height : "0"};
padding: ${props => (props.isOpen ? props.padding : "0")};
display: flex;
transition: all 1s ease;
justify-content:  ${props => (props.justifyContent ? props.justifyContent : "center")};
overflow: hidden;
opacity: ${props => (props.isOpen ? "1" : "0")};
`;

function Collapse(props) {
   const {CollapseBody, ...otherProps} = props
    return ( <>
    <StyledCollapse {...otherProps}>
        <CollapseBody></CollapseBody>
    </StyledCollapse>
    </> );
}

export default Collapse;


