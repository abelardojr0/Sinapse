import { cores } from '@/utils/theme';
import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

interface Props {
  fundo: StaticImageData;
}
export const StyledSectionInicio = styled.section<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* background: ${cores.principal_gradient}; */
  background-image: url(${({ fundo }) => fundo.src});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  height: 90vh;
`;

export const StyledInfosInicio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 700px;
  color: ${cores.fundo_base};
  line-height: 1.2;
  h2 {
    font-size: 50px;
    font-weight: bold;
  }
  span {
    color: ${cores.cor_secundaria};
  }
  p {
    font-size: 24px;
    max-width: 700px;
    line-height: 1.5;
  }
  a {
    text-align: center;
    text-decoration: none;
    max-width: 500px;
    border: 2px solid ${cores.fundo_base};
    color: ${cores.fundo_base};
    font-size: 32px;
    padding: 15px 30px;
    border-radius: 15px;
    transition: 0.3s ease-in-out;
  }
  a:hover {
    background-color: ${cores.cor_secundaria};
    transform: scale(1.03);
    border: 2px solid ${cores.cor_secundaria};
  }
`;

export const StyledFotoInicio = styled(Image)`
  max-width: 400px;
  height: auto;
`;
