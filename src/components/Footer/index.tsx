'use client';

import Link from 'next/link';
import {
  FooterContainer,
  StyledFooterInfos,
  StyledImageFooter,
  StyledNavFooter,
} from './style';
import logo from '@public/logo.png';
import { StyledDivLogo } from '../Header/style';

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <StyledNavFooter>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/servicos">Serviços</Link>
            </li>
            <li>
              <Link href="/vantagens">Vantagens</Link>
            </li>
          </ul>
        </StyledNavFooter>
      </div>

      <StyledFooterInfos>
        <StyledDivLogo>
          <StyledImageFooter
            src={logo}
            alt="Logotipo da Sinapse HealthTech"
            priority
          />
          <p>
            Sinapse <br /> HelthTech
          </p>
        </StyledDivLogo>
        <p>
          {' '}
          © 2024 <span>Sinapse HealthTech</span> - Todos os direitos reservados.
        </p>
        <p>
          Soluções sob medida para transformar tecnologia em resultado. <br />
          Vamos inovar juntos?
        </p>
        <p>CNPJ: 05.481.950/0001-07</p>
      </StyledFooterInfos>
    </FooterContainer>
  );
};
