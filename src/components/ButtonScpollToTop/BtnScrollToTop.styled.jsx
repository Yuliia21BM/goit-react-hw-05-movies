import styled from 'styled-components';
import { FaAngleUp } from 'react-icons/fa';

export const BtnScrollTop = styled(FaAngleUp)`
  position: fixed;
  bottom: 40px;
  right: 25px;
  z-index: 20;
  background-color: #ec3023;
  border: 2px solid #fff;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  color: #fff;
  cursor: pointer;
  animation: movebtn 3s ease-in-out infinite;
  transition: all 0.5s ease-in-out;
  :hover {
    animation: none;
    background: #fff;
    color: #ec3023;
    border: 2px solid #ec3023;
  }
  @keyframes movebtn {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(0px);
    }
    75% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
