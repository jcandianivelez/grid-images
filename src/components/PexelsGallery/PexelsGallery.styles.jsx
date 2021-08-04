import styled from "styled-components";
import {FaCheckCircle} from 'react-icons/fa';

export const GridGallery = styled.div`
  * {
    box-sizing: border-box;
  }

  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
`;

export const ContainerExperience = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  padding: 20px;

  @media only screen and (max-width: 600px) {
    flex-basis: 100%;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:before {
    content:'';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 250px;
    cursor: pointer;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.5);
    display: ${props => (props.display ? "block" : "none")};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
  border: ${props => (props.border ? "2px #ff3a64" : "none")};
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const PexelTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem;
  text-align: center;
`;

export const FaCheckCircleStyles = styled(FaCheckCircle)`
  color: #fff;
  font-size: 4rem;
  position: absolute;
  margin-top: -3rem;
  display: ${props => props.display ? 'block' : 'none'};
`;