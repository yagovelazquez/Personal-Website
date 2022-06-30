import styled from "styled-components";
import { css } from "styled-components";
import { motion } from "framer-motion";

const NavBarContainer = styled.div`

.topAnimation {
  z-index: 99;
}


.lefAnimation {
  z-index: 98;
}

@media(max-width: 830px) { 
  padding: 10px;
  padding-bottom: 0;
  background: rgb(25, 25, 25);
  width: 100%
}

`;

const NavBarTop = styled(motion.div)`
  background: rgb(25, 25, 25);
  border-bottom: 1px solid rgb(67, 67, 67);
  height: 63px;
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 99;

 
  @media(max-width: 830px) { 
    flex-direction: column;

    min-height: 63px;
    height: initial;
    position: static;
    margin-right: 10px;
    border-bottom: none;
  }
`;

const NavBarLateral = styled(motion.div)`
  background: rgb(25, 25, 25);
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  border-right: 1px solid rgb(67, 67, 67);
  height: 100%;
  width: 63px;
  z-index: 98;
  justify-content: end;


  @media(max-width: 830px) {
    bottom: 0;
    top: initial;
    left: initial;
    flex-direction: row;
    width: 100%;
    height: 63px;
    border-top: 1px solid rgb(67, 67, 67);
    justify-content: center;

    .linkedin {
      padding-right: 3px;
    }

    .linkedin, .fagithub {
      border-bottom: none;
      &:hover {
        color: rgb(255, 255, 255, 0.6);
        border-bottom: none;
        padding-top: 0;
 
      }
    }

 
       .linkedin::after { width: 1px;
        height 40px;
        background: rgb(67, 67, 67);
        content: '';
        position: relative;
        right: -18px;
  }
 
  }


`;

const NavYvTitle = styled.div`
  width: 63px;
  height: 63px;
  border-bottom: 1px solid rgb(67, 67, 67);
  color: white;
  font-weight: 900;
  display: flex;
  justify-content: center;
  font-size: 1.8rem;
  align-items: center;
  border-right: 1px solid rgb(67, 67, 67);

  &:hover {
    ${({ hover }) =>
      hover
        ? `
    color: rgba(255, 255, 255, .6);
    padding-top: 3px;
    border-bottom: 3px solid white;
    cursor: pointer;
    `
        : `cursor: default;`}
  }
`;

const MenuItemsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
a {
  width: 100%;
}
`

const NavNormalItem = styled.div`

height: 63px;
border-top: ${({borderTop}) => borderTop ? "1px solid rgb(67, 67, 67);" : "none" }; 
color: white;
font-weight: 300;
display: flex;
justify-content: center;
padding: ${({padding}) => padding};
font-size: 1rem;
align-items: center;
&:hover {

    color: rgba(255, 255, 255, .6);
    padding-top: 3px;
    border-bottom: 3px solid white;
    cursor: pointer;
}

@media(max-width: 830px) {
  width: ${({width}) => width  ? width : "100%"};
  padding: 0;
  height: 53px;
  border-top: none;

  border-bottom: 2px solid white;
  svg {
    height: 30px;
    width: 30px;
  }

  &:hover {

    color: rgba(255, 255, 255, .6);
    padding-top: 3px;
    border-bottom: 2px solid white;
    cursor: pointer;
}


}

}

`

const MenuContainer = styled.div`
display: flex;
align-items: flex-end;

svg {
  cursor: pointer;
}
flex-direction: column; 
`

const EmailItem = styled.div`

height: 63px;
width:116px;
border: 1px solid rgb(67, 67, 67);
border-top: none;
color: white;
font-weight: 300;
display: flex;
justify-content: center;
padding: ${({padding}) => padding};
font-size: 1rem;
line-height: 1.4;
align-items: center;
cursor: pointer;
animation: ${({animation}) => (animation ? animation : '')};

&:after {
    content: "CONTACT";
    animation:  ${({ animationAfter}) => animationAfter ?  css`${animationAfter}` : ''}
}

`





export { NavBarContainer, NavBarTop, NavBarLateral, NavYvTitle, NavNormalItem, EmailItem, MenuContainer,MenuItemsContainer  };
