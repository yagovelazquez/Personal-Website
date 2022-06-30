import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { keyframes, css } from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  NavBarContainer,
  NavBarLateral,
  NavBarTop,
  NavYvTitle,
  NavNormalItem,
  MenuItemsContainer,
  MenuContainer,
  EmailItem,
} from "./NavBar.styled";
import { AiOutlineMenu } from "react-icons/ai";
import Collapse from "../styled/Collapse.styled";
import { useMediaQuery } from './../Hooks/useMediaQuery';

const expandEmailAfter = keyframes`
0%  {
    text-align: center;
    width:116px;
}
15% {
    content: "" ; 
    text-align: center;
}

50% {
    content: "";
    text-align: center;  
    width:295px;
}

100% {
    content: "YAGOVELAZQUEZSOUZAA@GMAIL.COM";
    text-align: center;  
    width:355px;
}
`;

const expandEmailBox = keyframes`
0%  {
    text-align: center;
    border-bottom: 3px solid white;
    width:116px;

}
15% {
    text-align: center;
    border-bottom: 3px solid white;

}

50% {
    text-align: center; 
    border-bottom: 3px solid white; 
    width:295px;
    color: rgba(255, 255, 255, 0);

}

100% {
    border-bottom: 3px solid white;
    text-align: center;  
    width:355px;
    color: rgba(255, 255, 255, .6);
}
`;

const contractEmailAfter = keyframes`
0%  {
    width:355px;
    text-align: center; 
    content: "YAGOVELAZQUEZSOUZAA@GMAIL.COM";

    
}
15% {
    width:295px;
    text-align: center; 

    content: "";
}
50% {
    width:235px;
    text-align: center; 
    content: "";
}
100% {
    width:116px;
    text-align: center; 
}

`;

const contractEmailBox = keyframes`
0%  {
    color: rgba(255, 255, 255, .6);
    width:355px;
    text-align: center; 
    border-bottom: 3px solid rgba(255,255,255, 1);
}

20% {
    color: rgba(255, 255, 255, 0);
    width:307px;
    text-align: center; 
    border-bottom: 3px solid rgba(255,255,255, 0);
}

50% {
    width:235px;
    text-align: center; 
    color: rgba(255, 255, 255, 0);
    
}


100% {
    width:116px;
    text-align: center; 
    color: rgba(255, 255, 255, 1);
    
}

`;

function NavBar() {
  let navigate = useNavigate();

  const isDimensionBiggerThan830px = useMediaQuery('(min-width: 830px)');
  const [animationEmailAfter, setAnimationEmailAfter] = useState("");
  const [animationEmailBox, setAnimationEmailBox] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const animationAfterContact = (props) =>
    css`
      ${expandEmailAfter} 0.5s linear forwards;
    `;

  const animationAfterContactBefore = (props) =>
    css`
      ${contractEmailAfter} 0.5s linear forwards;
    `;

  const animationContactBox = (props) =>
    css`
      ${expandEmailBox} 0.5s linear forwards;
    `;

  const animationContactBeforeBox = (props) =>
    css`
      ${contractEmailBox} 0.5s linear forwards;
    `;

  const navigateContactHandler = () => {
    navigate("../contact");
  };

  const menuClickHandler = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  let animateNavTop
  let animateNavLeft



  if (isDimensionBiggerThan830px) {
    animateNavTop = {
      initial: { y: -100 },
      transition: { duration: 2 },
      animate: { y: 0 },

    };
    animateNavLeft = {
      initial: { x: -100, y: 0 },
      transition: { duration: 2, delay: 0.2 },
      animate: { x: 0, y: 0 },
    };
  }
  if (!isDimensionBiggerThan830px) {
    
    animateNavTop = {
      initial: { y: 0  },
      transition: { duration: 2, delay: 0.2 },
      animate: { y: 0  },
    };
    animateNavLeft = {
      initial: { y: 100, x: 0},
      transition: { duration: 2 },
      animate: {  y: 0, x: 0  },
    };
  }


 
  const MenuItems = () => {
    return (
      <MenuItemsContainer>
        <NavNormalItem
          onClick={() => {
            setIsOpen(false);
            return navigate("../");
          }}
        >
          Home
        </NavNormalItem>
        <Link
          style={{ textDecoration: "none" }}
          to="/CVYago Velazquez.pdf"
          target="_blank"
          download
        >
          <NavNormalItem padding="0 16px">
            {" "}
            <MdDownload size="1.5rem" /> CV
          </NavNormalItem>
        </Link>
        <NavNormalItem
          onClick={() => {
            setIsOpen(false);
            return navigateContactHandler();
          }}
        >
          Contact Me
        </NavNormalItem>
      </MenuItemsContainer>
    );
  };

  return (
    <NavBarContainer>
      <NavBarTop {...animateNavTop} >
        {isDimensionBiggerThan830px && (
          <>
            <NavYvTitle hover onClick={() => navigate("../")}>
              YV
            </NavYvTitle>
            <Link
              style={{ textDecoration: "none" }}
              to="/CVYago Velazquez.pdf"
              target="_blank"
              download
            >
              <NavNormalItem padding="0 16px">
                {" "}
                <MdDownload size="1.5rem" /> CV
              </NavNormalItem>
            </Link>
            <EmailItem
              onClick={navigateContactHandler}
              onMouseOver={() => {
                setAnimationEmailAfter(animationAfterContact);
                setAnimationEmailBox(animationContactBox);
              }}
              onMouseOut={() => {
                setAnimationEmailAfter(animationAfterContactBefore);
                setAnimationEmailBox(animationContactBeforeBox);
              }}
              animationAfter={animationEmailAfter}
              animation={animationEmailBox}
            ></EmailItem>{" "}
          </>
        )}

        {!isDimensionBiggerThan830px && (
          <>
            <MenuContainer>
              <AiOutlineMenu
                onClick={menuClickHandler}
                color="white"
                size="36px"
              ></AiOutlineMenu>
            </MenuContainer>
            <Collapse
              isOpen={isOpen}
              height="180px;"
              CollapseBody={MenuItems}
            ></Collapse>
          </>
        )}
      </NavBarTop>

      <NavBarLateral {...animateNavLeft}>
        <a
        rel="noopener noreferrer"
          href="https://www.linkedin.com/in/yago-velazquez-1923b715a/"
          target="_blank"
        >
          <NavNormalItem borderTop width="63px" className="linkedin">
            {" "}
            <FaLinkedinIn size={"1.5rem"}></FaLinkedinIn>
          </NavNormalItem>
        </a>
        <a href="https://github.com/yagovelazquez/" target="_blank" rel="noopener noreferrer">
          <NavNormalItem borderTop width="63px" className="fagithub">
            {" "}
            <FaGithub size={"1.5rem"} />
          </NavNormalItem>
        </a>
      </NavBarLateral>
    </NavBarContainer>
  );
}

export default NavBar;
