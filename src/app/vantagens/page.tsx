'use client';
import Link from 'next/link';
import { Container, Lista } from './style';

export default function VantagensPage() {
  return (
    <Container>
      <h1>Vantagens de nos escolher</h1>
      <Lista>
        <li>Atendimento 24h</li>
        <li>Preços acessíveis</li>
        <li>Garantia de qualidade</li>
      </Lista>
      <Link href="/">Voltar para Home</Link>
    </Container>
  );
}
