import styled from "styled-components";
import * as ReactDOM from 'react-dom';

const portalRoot = document.getElementById("portal-root")

const Background = styled.div`
width: 100vw;
height: 100vh;
background-color: rgba(255,255,255,0.6);
position: fixed;
display:flex;
justify-content:center;
align-itens:center;
top:0;
left: 0;
z-index: 150;
`


function Modal({isOpen, ModalContent}) {

  if (!isOpen) return null

    return ReactDOM.createPortal(<Background><ModalContent /></Background>, portalRoot  );
}

export default Modal;