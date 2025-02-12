'use client';

import {
  StyledFotoInicio,
  StyledInfosInicio,
  StyledSectionInicio,
} from './style';

import foto from '@public/foto.png';
import fundo from '@public/fundo.png';

export const Inicio = () => {
  return (
    <StyledSectionInicio fundo={fundo}>
      <StyledInfosInicio>
        <h2>
          <span>Transformamos</span> suas <span>ideias</span> em software
          <span> eficiente!</span>
        </h2>
        <p>
          Criamos soluções tecnológicas sob medida para impulsionar seu negócio,
          automatizar processos e facilitar sua rotina. Fale conosco e descubra
          como a tecnologia pode trabalhar a seu favor.
        </p>
        <a href="">Orçamento</a>
      </StyledInfosInicio>
      <StyledFotoInicio src={foto} alt="Foto ilustrativa" priority />
    </StyledSectionInicio>
  );
};
