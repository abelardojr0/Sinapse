'use client';

import Image from 'next/image';
import logo from '@public/logo.png';
import { StyledSobre, StyledSobreInfos } from './style';
export const Sobre = () => {
  return (
    <StyledSobre>
      <Image src={logo} alt="Logo" />
      <StyledSobreInfos>
        <h2>
          Sobre <br /> <span>Sinapse HealthTech</span>
        </h2>
        <p>
          Nossa software house nasceu em 2024 da parceria entre um desenvolvedor
          e um médico, unindo tecnologia e conhecimento prático da área da
          saúde. Criamos soluções eficientes, adaptáveis e certeiras, entendendo
          as reais necessidades do setor. Nosso foco é simplificar processos e
          otimizar o trabalho dos profissionais.
        </p>

        <p>
          Acreditamos que a tecnologia deve facilitar, e não complicar.
          Desenvolvemos softwares intuitivos e funcionais, que automatizam
          tarefas e melhoram a produtividade. Trabalhamos lado a lado com
          profissionais da saúde para criar ferramentas que fazem a diferença no
          dia a dia.
        </p>

        <p>
          Estamos sempre evoluindo para acompanhar as mudanças do mercado.
          Nossas soluções são seguras, inovadoras e preparadas para o futuro da
          saúde digital. Mais do que criar software, queremos transformar a
          gestão da saúde e facilitar o cuidado com os pacientes.
        </p>

        <a href="#">Fale Conosco</a>
      </StyledSobreInfos>
    </StyledSobre>
  );
};
