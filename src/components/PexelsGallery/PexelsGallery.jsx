import React, {useState} from "react";
import styled from "styled-components";
import { usePexels } from "../../hooks/usePexels";
import { getExperiencias } from "../../services/pexels.services";

import {
    GridGallery,
    ContainerExperience,
    ImageContainer,
    Image,
    MainContainer,
    PexelTitle,
    FaCheckCircleStyles
} from './PexelsGallery.styles'

const GalleryTitle = styled.h1`
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  margin-top: 3rem;
`;

const PexelsGallery = () => {
  const [experiencias, setExperiencias] = useState([]);

  const handlerExperencias = (idExperiencia) => {
    if (experiencias.indexOf(idExperiencia) === -1) {
      const newExperiencias = [...experiencias, idExperiencia];
      setExperiencias(newExperiencias);
    } else {
      const newExperiencias = experiencias.filter(experiencia => experiencia !== idExperiencia);
      setExperiencias(newExperiencias);
    }
  }

  const getImages = () =>
    getExperiencias().map((experiencia) => {
      const selected = experiencias.includes(experiencia.id);

      return (
        <ContainerExperience key={experiencia.id}>
          <ImageContainer
            onClick={() => handlerExperencias(experiencia.id)}
            display={selected}>
            <Image src={experiencia.url} display={selected} border={selected}></Image>
            <FaCheckCircleStyles display={selected} />
          </ImageContainer>
          <PexelTitle>{experiencia.title}</PexelTitle>
        </ContainerExperience>
      )
    });

  return (
    <MainContainer>
      <GalleryTitle>WHICH EXPERIENCE DO YOU PREFER?</GalleryTitle>
      <GridGallery>{getImages()}</GridGallery>
    </MainContainer>
  );
};

export default PexelsGallery;
