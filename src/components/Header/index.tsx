'use client';
import Link from 'next/link';
import {
  StyledNav,
  StyledHeader,
  StyledImage,
  StyledOrcamento,
  StyledDivLogo,
} from './style';
import logo from '@public/logo.png';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledDivLogo>
        <StyledImage src={logo} alt="Logotipo da Sinapse HealthTech" priority />
        <p>
          Sinapse <br /> HelthTech
        </p>
      </StyledDivLogo>

      <StyledNav>
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
      </StyledNav>

      <StyledOrcamento href="https://wa.me/85985300694">
        ORÇAMENTO
      </StyledOrcamento>
    </StyledHeader>
  );
};
