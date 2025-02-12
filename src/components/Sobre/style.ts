import { cores } from '@/utils/theme';
import Image from 'next/image';
import styled from 'styled-components';

export const StyledSobre = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  padding: 50px;
  max-width: 80vw;
  margin: 0 auto;
`;

export const StyledSobreInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-direction: column;
  box-shadow: 5px 5px 10px #000000cc;
  padding: 20px;
  border-radius: 15px;
  h2 {
    text-align: center;
    line-height: 1.3;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 30px;
    color: ${cores.cor_principal};
    span {
      color: ${cores.cor_destaque};
    }
  }
  p {
    font-size: 16px;
    line-height: 1.5;
    max-width: 500px;
  }

  a {
    background-color: ${cores.cor_destaque};
    color: ${cores.fundo_base};
    padding: 20px 30px;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 15px;
    width: 300px;
    text-align: center;
    margin-top: 20px;
  }
`;

export const StyledSobreImagem = styled(Image)`
  max-width: 50vw;
`;
