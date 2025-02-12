import { cores } from '@/utils/theme';
import styled from 'styled-components';

export const StyledServicos = styled.section`
  height: 80vh;
  background: ${cores.principal_gradient};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  color: ${cores.fundo_base};
  h2 {
    font-size: 50px;
    color: ${cores.cor_destaque};
    font-family: var(--font-space-grotesk), sans-serif;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
