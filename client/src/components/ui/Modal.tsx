import styled, { keyframes } from "styled-components";

const transform = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Modal  = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  min-height: 40vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
  animation: ${transform} 300ms ease-out forwards;;
  color: white;
  text-align: center;
  border-radius: 1em;
`;

export default Modal;