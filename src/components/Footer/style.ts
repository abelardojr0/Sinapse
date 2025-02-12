'use client';

import { cores } from '@/utils/theme';
import Image from 'next/image';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${cores.fundo_base};
  color: ${cores.texto_base};
  text-align: center;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledImageFooter = styled(Image)`
  max-width: 100px;
  height: auto;
`;
export const StyledFooterInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  gap: 15px;
  p {
    line-height: 1.5;
  }
  span {
    color: ${cores.cor_principal};
  }
`;

export const StyledNavFooter = styled.nav`
  color: white;
  padding: 10px;
  text-align: center;

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    flex-direction: column;
    padding: 0;
    gap: 15px;
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
