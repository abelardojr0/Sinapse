'use client';

import { cores } from '@/utils/theme';
import Image from 'next/image';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;
export const StyledImage = styled(Image)`
  max-width: 100px;
  height: auto;
`;

export const StyledNav = styled.nav`
  color: white;
  padding: 10px;
  text-align: center;

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    gap: 40px;
    padding-left: 60px;
  }

  a {
    color: ${cores.cor_principal};
    text-decoration: none;
    font-weight: bold;
    font-size: 24px;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const StyledDivLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  p {
    color: ${cores.cor_principal};
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font-space-grotesk), sans-serif;
    line-height: 1.3;
  }
`;

export const StyledOrcamento = styled.a`
  padding: 10px 20px;
  font-size: 24px;
  border-radius: 10px;
  text-decoration: none;
  color: ${cores.fundo_base};
  background-color: ${cores.cor_secundaria};
  border: 2px solid ${cores.cor_secundaria};
  transition: 0.3s ease-in-out;
  &:hover {
    color: ${cores.cor_secundaria};
    background-color: transparent;
  }
`;
